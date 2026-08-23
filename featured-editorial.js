(() => {
  'use strict';

  const booksSection = document.querySelector('#books');
  if (!booksSection || booksSection.querySelector('[data-editorial-volume="2023"]')) return;

  const bookList = booksSection.querySelector('.book-list');
  if (!bookList) return;

  const unifiedStyles = document.createElement('style');
  unifiedStyles.id = 'ag-published-books-final-unification';
  unifiedStyles.textContent = `
    #books .book-list{align-items:stretch}
    #books .published-book-unified{position:relative;overflow:hidden;padding:28px;border:1px solid rgba(14,116,144,.34)!important;border-top:4px solid #0f4c75!important;border-radius:20px!important;background:linear-gradient(155deg,#ffffff 0%,#f1f8fc 58%,#e7f3fa 100%)!important;box-shadow:0 20px 48px rgba(15,76,117,.15)!important}
    #books .published-book-unified::before{content:"";position:absolute;inset:0 0 auto;height:110px;pointer-events:none;background:linear-gradient(180deg,rgba(56,189,248,.08),transparent)}
    #books .published-book-unified>*{position:relative;z-index:1}
    #books .published-book-frame{border:1px solid rgba(15,76,117,.18);background:#fff;box-shadow:0 16px 36px rgba(15,76,117,.18)}
    #books .published-book-frame img{background:#fff}
    #books .published-book-toggle{border-color:#0f4c75;background:#0f4c75;color:#fff;box-shadow:0 8px 20px rgba(15,76,117,.18);transition:transform .18s ease,background .18s ease,box-shadow .18s ease}
    #books .published-book-toggle:hover,#books .published-book-toggle:focus-visible{transform:translateY(-1px);background:#0b3d5d;color:#fff;box-shadow:0 12px 25px rgba(15,76,117,.25)}
    #books .published-book-unified>span{color:#075985;font-size:.76rem;line-height:1.7}
    #books .published-book-unified h3{color:#0f2940;font-size:1.3rem;line-height:1.42}
    #books .published-book-unified .card-ar{margin-top:8px;color:#0369a1;font-weight:600;line-height:1.65}
    #books .book-meta{border-color:rgba(15,76,117,.2);background:rgba(255,255,255,.82);box-shadow:inset 0 1px 0 rgba(255,255,255,.85)}
    #books .book-meta p,#books .book-abstract p{color:#46596b}
    #books .book-abstract h4{padding-bottom:8px;border-bottom:1px solid rgba(15,76,117,.16);color:#0f4c75}
    #books .published-book-action .button{border-radius:13px;box-shadow:0 12px 28px rgba(37,99,235,.2)}
    #books [lang="ar"]{font-weight:400}
    #books .upcoming-books-divider{grid-column:1/-1;display:flex;align-items:center;gap:16px;margin:18px 0 0;color:#0f4c75}
    #books .upcoming-books-divider::before,#books .upcoming-books-divider::after{content:"";height:1px;flex:1;background:linear-gradient(90deg,transparent,rgba(15,76,117,.3))}
    #books .upcoming-books-divider::after{background:linear-gradient(90deg,rgba(15,76,117,.3),transparent)}
    #books .upcoming-books-divider strong{display:block;text-align:center;font-size:.84rem;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap}
    #books .upcoming-books-divider span{display:block;margin-top:3px;color:#475569;font-size:.86rem;font-weight:400;letter-spacing:0;text-transform:none}
    #books .upcoming-book-card{background:linear-gradient(180deg,#fff,#f8fafc)!important;border-style:dashed!important;box-shadow:0 12px 30px rgba(15,23,42,.07)!important}
    @media(max-width:680px){#books .published-book-unified{padding:20px}#books .published-book-unified h3{font-size:1.2rem}#books .upcoming-books-divider{gap:9px}#books .upcoming-books-divider strong{font-size:.72rem;white-space:normal}}
  `;
  document.head.appendChild(unifiedStyles);

  const card = document.createElement('article');
  card.className = 'published-book-card published-book-unified';
  card.dataset.editorialVolume = '2023';
  card.innerHTML = `
    <div class="published-book-gallery" data-book-gallery>
      <div class="published-book-frame">
        <img src="assets/books/selection-c3-front.jpg" data-front="assets/books/selection-c3-front.jpg" data-back="assets/books/selection-c3-back.jpg" data-side="front" alt="Front cover of Energy Optimization for Sustainable Resilience and Climate Stability – C+++ Framework | الغلاف الأمامي للمجموعة التحريرية" loading="lazy" decoding="async">
      </div>
      <button class="published-book-toggle" type="button" data-book-toggle>View Back Cover | عرض الغلاف الخلفي</button>
    </div>
    <span>Published · English · Editorial Collection · 2023 | <span lang="ar" dir="rtl">منشور · بالإنجليزية · مجموعة تحريرية · 2023</span></span>
    <h3>Energy Optimization for Sustainable Resilience and Climate Stability – C+++ Framework<span class="card-ar" lang="ar" dir="rtl">تحسين الطاقة من أجل المرونة المستدامة والاستقرار المناخي – إطار C+++</span></h3>
    <div class="book-meta">
      <p><strong>Editor and Compiler | المحرر والمُعِدّ:</strong> Dr.-Ing. Aouss Gabash | الدكتور المهندس أوس غباش</p>
      <p><strong>Publisher | الناشر:</strong> MDPI</p>
      <p><strong>Publication Year | سنة النشر:</strong> 2023</p>
      <p><strong>Type | النوع:</strong> MDPI Selections · Editorial Collection | مختارات MDPI · مجموعة تحريرية</p>
      <p><strong>Language | اللغة:</strong> English | الإنجليزية</p>
    </div>
    <div class="book-abstract">
      <h4>Abstract | <span lang="ar" dir="rtl">الملخص</span></h4>
      <p>This editorial preface presents the scientific vision of the collection by tracing the evolution of sustainable energy systems and highlighting renewable-energy integration, battery storage, real-time optimal power flow, and the proposed C+++ Framework. It also emphasizes the shared scientific thread connecting the selected publications and the importance of coordinated TSO–DSO operation for resilient, intelligent, and sustainable power systems.</p>
      <p class="ar-copy" lang="ar" dir="rtl">تقدم هذه المقدمة التحريرية الرؤية العلمية للمجموعة من خلال تتبع تطور أنظمة الطاقة المستدامة، وإبراز دمج مصادر الطاقة المتجددة، وتخزين الطاقة، وتدفق الاستطاعة الأمثل الآني، وإطار C+++ المقترح. كما توضح الخيط العلمي المشترك الذي يربط المنشورات المختارة، وأهمية التنسيق بين مشغلي شبكات النقل والتوزيع لبناء أنظمة طاقة مرنة وذكية ومستدامة.</p>
    </div>
    <div class="published-book-action"><a class="button primary" href="https://archive.org/details/@aouss_gabash" target="_blank" rel="noopener noreferrer">Explore Digital Library | استكشف المكتبة الرقمية</a></div>`;

  const publishedCards = bookList.querySelectorAll('.published-book-card');
  const lastPublishedCard = publishedCards[publishedCards.length - 1];
  if (lastPublishedCard) lastPublishedCard.insertAdjacentElement('afterend', card);
  else bookList.prepend(card);

  const firstUpcoming = card.nextElementSibling;
  if (firstUpcoming) {
    const divider = document.createElement('div');
    divider.className = 'upcoming-books-divider';
    divider.innerHTML = '<strong>Upcoming Titles<span lang="ar" dir="rtl">الكتب القادمة</span></strong>';
    firstUpcoming.insertAdjacentElement('beforebegin', divider);
    let current = divider.nextElementSibling;
    while (current) {
      if (current.tagName === 'ARTICLE') current.classList.add('upcoming-book-card');
      current = current.nextElementSibling;
    }
  }

  const image = card.querySelector('img[data-front][data-back]');
  const button = card.querySelector('[data-book-toggle]');
  if (!image || !button) return;
  button.addEventListener('click', () => {
    const showingBack = image.dataset.side === 'back';
    image.src = showingBack ? image.dataset.front : image.dataset.back;
    image.dataset.side = showingBack ? 'front' : 'back';
    button.textContent = showingBack ? 'View Back Cover | عرض الغلاف الخلفي' : 'View Front Cover | عرض الغلاف الأمامي';
  });
})();
