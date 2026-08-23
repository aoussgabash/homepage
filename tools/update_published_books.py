from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

extra_css = '''
  .book-meta{display:grid;grid-template-columns:1fr;gap:8px;margin:16px 0 20px;padding:16px;border:1px solid rgba(15,76,117,.16);border-radius:14px;background:rgba(255,255,255,.72)}
  .book-meta p{margin:0!important}
  .book-abstract{margin-top:8px;padding-top:4px}
  .book-abstract h4{margin:0 0 10px;color:#0f4c75;font-size:1.08rem}
  .book-abstract p{line-height:1.8}
'''
if '.book-meta{' not in text:
    text = text.replace('</style>', extra_css + '</style>', 1)

arabic_card = '''<article class="published-book-card published-book-unified">
            <div class="published-book-gallery" data-book-gallery>
              <div class="published-book-frame">
                <img src="assets/books/illumination-front.jpg" data-front="assets/books/illumination-front.jpg" data-back="assets/books/illumination-back.jpg" data-side="front" alt="Front cover of Electrical Illumination Engineering | الغلاف الأمامي لكتاب هندسة الإنارة الكهربائية" loading="lazy" decoding="async">
              </div>
              <button class="published-book-toggle" type="button" data-book-toggle>View Back Cover | عرض الغلاف الخلفي</button>
            </div>
            <span>Published · Arabic · Second Edition · 2006 | <span lang="ar" dir="rtl">منشور · بالعربية · الطبعة الثانية · 2006</span></span>
            <h3>Electrical Illumination Engineering<span class="card-ar" lang="ar" dir="rtl">هندسة الإنارة الكهربائية</span></h3>
            <div class="book-meta">
              <p><strong>Author | المؤلف:</strong> Aouss Gabash | أوس غباش</p>
              <p><strong>Publisher | الناشر:</strong> Al-Radwan Publishing House | دار الرضوان للنشر</p>
              <p><strong>Publication Year | سنة النشر:</strong> 2006</p>
              <p><strong>Edition | الطبعة:</strong> Second Edition | الطبعة الثانية</p>
              <p><strong>ISBN-10:</strong> Not available | غير متوفر</p>
              <p><strong>ISBN-13:</strong> Not available | غير متوفر</p>
            </div>
            <div class="book-abstract">
              <h4>Abstract | <span lang="ar" dir="rtl">الملخص</span></h4>
              <p>This book delves into both theoretical and practical aspects of electrical lighting engineering. It encompasses key definitions in the science of lighting, complemented by illustrative pictures. On the practical front, it offers insights into connections and explanations for various types of electric lamps. In addition, it provides methods for calculating internal and external lighting, with particular emphasis on street lighting.</p>
              <p class="ar-copy" lang="ar" dir="rtl">يبحث هذا الكتاب في الجوانب النظرية والعملية لهندسة الإنارة الكهربائية، ويتضمن أهم التعاريف في علم الإنارة مدعّمة بالصور التوضيحية. كما يشرح التوصيلات والأنواع المختلفة للمصابيح الكهربائية، ويعرض طرائق حساب الإنارة الداخلية والخارجية، مع تركيز خاص على إنارة الشوارع.</p>
            </div>
            <div class="published-book-action">
              <a class="button primary" href="https://archive.org/details/@aouss_gabash" target="_blank" rel="noopener noreferrer">Read on Internet Archive | القراءة في الأرشيف</a>
            </div>
          </article>'''

english_card = '''<article class="published-book-card published-book-unified">
            <div class="published-book-gallery" data-book-gallery>
              <div class="published-book-frame">
                <img src="assets/books/flexible-optimal-operations-front.jpg" data-front="assets/books/flexible-optimal-operations-front.jpg" data-back="assets/books/flexible-optimal-operations-back.jpg" data-side="front" alt="Front cover of Flexible Optimal Operations of Energy Supply Networks | الغلاف الأمامي للكتاب الإنجليزي" loading="lazy" decoding="async">
              </div>
              <button class="published-book-toggle" type="button" data-book-toggle>View Back Cover | عرض الغلاف الخلفي</button>
            </div>
            <span>Published · English · First Edition · 2014 | <span lang="ar" dir="rtl">منشور · بالإنجليزية · الطبعة الأولى · 2014</span></span>
            <h3>Flexible Optimal Operations of Energy Supply Networks<span class="card-ar" lang="ar" dir="rtl">التشغيل الأمثل المرن لشبكات إمداد الطاقة</span></h3>
            <div class="book-meta">
              <p><strong>Author | المؤلف:</strong> Aouss Gabash | أوس غباش</p>
              <p><strong>Publisher | الناشر:</strong> LAP LAMBERT Academic Publishing | دار LAP LAMBERT للنشر الأكاديمي</p>
              <p><strong>Publication Year | سنة النشر:</strong> 2014</p>
              <p><strong>Edition | الطبعة:</strong> First Edition | الطبعة الأولى</p>
              <p><strong>ISBN-10:</strong> 3838138384</p>
              <p><strong>ISBN-13:</strong> 978-3838138381</p>
            </div>
            <div class="book-abstract">
              <h4>Abstract | <span lang="ar" dir="rtl">الملخص</span></h4>
              <p>This book presents a systematic study consisting of modeling, simulation, and optimization of dynamic operations of energy supply networks with distributed generation (DG) and battery storage systems (BSSs). Based on complex power flow models, different optimization problems are mathematically formulated and solved. In addition, novel mathematical models and a new combined problem formulation for active-reactive optimal power flow (A-R-OPF) in passive distribution networks (PDNs) without DG units and BSSs, and active distribution networks (ADNs) with DG units and BSSs, are studied. Typically, distribution networks consist of low-voltage and medium-voltage networks; therefore, investigations are carried out separately on both networks. Modeling procedures for PDNs, ADNs, and energy prices are also presented as the basis for this work.</p>
              <p class="ar-copy" lang="ar" dir="rtl">يقدم هذا الكتاب دراسة منهجية تشمل نمذجة ومحاكاة وتحسين التشغيل الديناميكي لشبكات إمداد الطاقة المزوّدة بالتوليد الموزع وأنظمة تخزين الطاقة بالبطاريات. وانطلاقاً من نماذج تدفق القدرة المركبة، تُصاغ مسائل تحسين متعددة رياضياً وتُحل. كما يعرض الكتاب نماذج رياضية جديدة وصياغة موحّدة لمسألة التدفق الأمثل للقدرة الفعالة وغير الفعالة في شبكات التوزيع السلبية، وكذلك في شبكات التوزيع النشطة المزوّدة بوحدات التوليد الموزع وأنظمة التخزين. وتُدرس شبكات الجهد المنخفض والمتوسط بصورة منفصلة، مع تقديم إجراءات نمذجة لشبكات التوزيع وأسعار الطاقة تشكل الأساس العلمي لهذا العمل.</p>
            </div>
            <div class="published-book-action">
              <a class="button primary" href="https://www.amazon.de/dp/3838138384" target="_blank" rel="noopener noreferrer">View on Amazon | العرض على أمازون</a>
            </div>
          </article>'''

pattern = re.compile(r'<article class="published-book-card published-book-unified">[\s\S]*?</article>')
matches = list(pattern.finditer(text))
if len(matches) < 2:
    raise SystemExit(f'Expected at least 2 published book cards, found {len(matches)}')

for match, replacement in reversed(list(zip(matches[:2], [arabic_card, english_card]))):
    text = text[:match.start()] + replacement + text[match.end():]

assert text.count('class="book-meta"') == 2
assert text.count('Abstract |') >= 2
assert '978-3838138381' in text
assert 'This book delves into both theoretical and practical aspects' in text
assert 'This book presents a systematic study consisting of modeling' in text

path.write_text(text, encoding='utf-8')
