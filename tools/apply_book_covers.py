from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

style = '''<style id="published-books-unified-style">
  .book-list .published-book-unified{display:flex;flex-direction:column;min-height:100%;border-color:rgba(56,189,248,.48)!important;background:linear-gradient(180deg,#fff,#f4faff)!important}
  .published-book-gallery{margin-bottom:20px}
  .published-book-frame{width:100%;aspect-ratio:4/5;border-radius:18px;background:#eef7ff;display:flex;align-items:center;justify-content:center;overflow:hidden;box-shadow:0 14px 34px rgba(15,76,117,.14)}
  .published-book-frame img{width:100%;height:100%;object-fit:contain;display:block;background:#fff}
  .published-book-toggle{width:100%;margin-top:12px;min-height:48px;border:1px solid rgba(15,76,117,.28);border-radius:12px;background:#fff;color:#0f4c75;font-weight:800;cursor:pointer}
  .published-book-toggle:hover,.published-book-toggle:focus-visible{background:#eaf6ff;outline:none}
  .published-book-unified>span{min-height:56px;display:flex;align-items:flex-start;flex-wrap:wrap}
  .published-book-unified h3{min-height:112px}
  .published-book-unified p{margin-top:12px}
  .published-book-unified .published-book-action{display:flex;margin-top:auto;padding-top:20px}
  .published-book-unified .published-book-action .button{width:100%;min-height:58px;display:flex;align-items:center;justify-content:center;text-align:center}
  @media(max-width:680px){.published-book-unified h3,.published-book-unified>span{min-height:0}.published-book-unified .published-book-action .button{min-height:54px}.published-book-frame{aspect-ratio:3/4}}
</style>'''

text = re.sub(r'<style id="published-books-unified-style">[\s\S]*?</style>', style, text, count=1)

cards = [
    (
        'illumination-front.jpg',
        'illumination-back.jpg',
        'Front cover of Electrical Illumination Engineering | الغلاف الأمامي لكتاب هندسة الإنارة الكهربائية'
    ),
    (
        'flexible-optimal-operations-front.jpg',
        'flexible-optimal-operations-back.jpg',
        'Front cover of Flexible Optimal Operations of Energy Supply Networks | الغلاف الأمامي للكتاب الإنجليزي'
    ),
]

pattern = re.compile(r'<div class="published-book-cover"[\s\S]*?</div>')
matches = list(pattern.finditer(text))
if len(matches) != 2:
    raise SystemExit(f'Expected 2 cover placeholders, found {len(matches)}')

for match, (front, back, alt) in reversed(list(zip(matches, cards))):
    gallery = f'''<div class="published-book-gallery" data-book-gallery>
              <div class="published-book-frame">
                <img src="assets/books/{front}" data-front="assets/books/{front}" data-back="assets/books/{back}" data-side="front" alt="{alt}" loading="lazy" decoding="async">
              </div>
              <button class="published-book-toggle" type="button" data-book-toggle>View Back Cover | عرض الغلاف الخلفي</button>
            </div>'''
    text = text[:match.start()] + gallery + text[match.end():]

script = '''
<script id="published-book-gallery-script">
  document.querySelectorAll('[data-book-gallery]').forEach((gallery) => {
    const image = gallery.querySelector('img[data-front][data-back]');
    const button = gallery.querySelector('[data-book-toggle]');
    if (!image || !button) return;
    button.addEventListener('click', () => {
      const showingBack = image.dataset.side === 'back';
      image.src = showingBack ? image.dataset.front : image.dataset.back;
      image.dataset.side = showingBack ? 'front' : 'back';
      button.textContent = showingBack
        ? 'View Back Cover | عرض الغلاف الخلفي'
        : 'View Front Cover | عرض الغلاف الأمامي';
    });
  });
</script>
'''

text = re.sub(r'\n?<script id="published-book-gallery-script">[\s\S]*?</script>\n?', '\n', text)
text = text.replace('</body>', script + '</body>', 1)

assert text.count('data-book-gallery') == 2
assert 'assets/books/illumination-front.jpg' in text
assert 'assets/books/illumination-back.jpg' in text
assert 'assets/books/flexible-optimal-operations-front.jpg' in text
assert 'assets/books/flexible-optimal-operations-back.jpg' in text

path.write_text(text, encoding='utf-8')
