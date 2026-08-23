(() => {
  'use strict';

  const bookList = document.querySelector('#books .book-list');
  if (!bookList) return;

  const libraryLabel = 'Explore Digital Library | استكشف المكتبة الرقمية';
  const libraryUrl = 'https://archive.org/details/@aouss_gabash';

  if (!document.querySelector('#ag-published-books-final-unification')) {
    const styles = document.createElement('style');
    styles.id = 'ag-published-books-final-unification';
    styles.textContent = `
      #books .book-list{align-items:stretch}
      #books .published-book-unified{position:relative;overflow:hidden;display:flex;flex-direction:column;min-height:100%;padding:28px;border:1px solid rgba(14,116,144,.34)!important;border-top:4px solid #0f4c75!important;border-radius:20px!important;background:linear-gradient(155deg,#fff 0%,#f1f8fc 58%,#e7f3fa 100%)!important;box-shadow:0 20px 48px rgba(15,76,117,.15)!important}
      #books .published-book-gallery{display:flex;flex-direction:column;margin-bottom:20px}
      #books .published-book-frame{width:100%;aspect-ratio:3/4;border:1px solid rgba(15,76,117,.18);border-radius:18px;background:#fff;box-shadow:0 16px 36px rgba(15,76,117,.18);overflow:hidden}
      #books .published-book-frame img{width:100%;height:100%;padding:12px;object-fit:contain;background:#fff}
      #books .published-book-toggle{width:100%;min-height:50px;margin-top:12px;border:1px solid #0f4c75;border-radius:12px;background:#0f4c75;color:#fff;font-weight:800;cursor:pointer;box-shadow:0 8px 20px rgba(15,76,117,.18)}
      #books .published-book-unified>span{display:flex;align-items:flex-start;flex-wrap:wrap;min-height:68px;color:#075985;font-size:.76rem;line-height:1.7}
      #books .published-book-unified h3{min-height:150px;color:#0f2940;font-size:1.3rem;line-height:1.42}
      #books .published-book-unified .card-ar{margin-top:8px;color:#0369a1;font-weight:600;line-height:1.65}
      #books .book-meta{min-height:220px;border-color:rgba(15,76,117,.2);background:rgba(255,255,255,.82)}
      #books .book-abstract{display:flex;flex:1;flex-direction:column}
      #books .published-book-action{display:flex;margin-top:auto;padding-top:20px}
      #books .published-book-action .button{display:flex!important;align-items:center!important;justify-content:center!important;width:100%!important;min-height:58px!important;padding:10px 18px!important;border:0!important;border-radius:13px!important;background:linear-gradient(135deg,#38bdf8,#2563eb)!important;color:#fff!important;font-size:.9rem!important;font-weight:700!important;line-height:1.35!important;text-align:center!important;text-decoration:none!important;box-shadow:0 12px 28px rgba(37,99,235,.2)!important}
      #books [lang="ar"]{font-weight:400}
      #books .upcoming-books-divider{grid-column:1/-1;display:flex;align-items:center;gap:16px;margin:18px 0 0;color:#0f4c75}
      #books .upcoming-books-divider::before,#books .upcoming-books-divider::after{content:"";height:1px;flex:1;background:rgba(15,76,117,.25)}
      #books .upcoming-books-divider strong{text-align:center;font-size:.84rem;letter-spacing:.09em;text-transform:uppercase}
      #books .upcoming-books-divider span{display:block;margin-top:3px;color:#475569;font-size:.86rem;font-weight:400;letter-spacing:0;text-transform:none}
      #books .upcoming-book-card{background:linear-gradient(180deg,#fff,#f8fafc)!important;border-style:dashed!important;box-shadow:0 12px 30px rgba(15,23,42,.07)!important}
      @media(max-width:680px){#books .published-book-unified{padding:20px}#books .published-book-unified>span,#books .published-book-unified h3,#books .book-meta{min-height:0}#books .published-book-unified h3{font-size:1.2rem}}
    `;
    document.head.appendChild(styles);
  }

  let card = bookList.querySelector('[data-editorial-volume="2023"]');
  if (!card) {
    card = document.createElement('article');
    card.className = 'published-book-card published-book-unified';
    card.dataset.editorialVolume = '2023';
    card.innerHTML = `
      <div class="published-book-gallery" data-book-gallery>
        <div class="published-book-frame"><img src="assets/books/selection-c3-front.jpg" data-front="assets/books/selection-c3-front.jpg" data-back="assets/books/selection-c3-back.jpg" data-side="front" alt="Front cover of Energy Optimization for Sustainable Resilience and Climate Stability – C+++ Framework" loading="lazy" decoding="async" fetchpriority="low"></div>
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
        <p>This editorial preface presents the scientific vision of the collection by tracing the evolution of sustainable energy systems and highlighting renewable-energy integration, battery storage, real-time optimal power flow, and the proposed C+++ Framework.</p>
        <p class="ar-copy" lang="ar" dir="rtl">تقدم هذه المقدمة التحريرية الرؤية العلمية للمجموعة من خلال تتبع تطور أنظمة الطاقة المستدامة، وإبراز دمج مصادر الطاقة المتجددة، وتخزين الطاقة، وتدفق الاستطاعة الأمثل الآني، وإطار C+++ المقترح.</p>
      </div>
      <div class="published-book-action"><a class="button primary" href="${libraryUrl}" target="_blank" rel="noopener noreferrer">${libraryLabel}</a></div>`;

    const publishedCards = bookList.querySelectorAll('.published-book-card');
    const lastPublishedCard = publishedCards[publishedCards.length - 1];
    if (lastPublishedCard) lastPublishedCard.insertAdjacentElement('afterend', card);
    else bookList.prepend(card);
  }

  bookList.querySelectorAll('.published-book-card .published-book-action .button').forEach((link) => {
    link.textContent = libraryLabel;
    link.href = libraryUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'button primary';
    link.setAttribute('aria-label', libraryLabel);
  });

  if (!bookList.querySelector('.upcoming-books-divider')) {
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
  }

  const image = card.querySelector('img[data-front][data-back]');
  const toggle = card.querySelector('[data-book-toggle]');
  if (image && toggle && !toggle.dataset.bound) {
    toggle.dataset.bound = 'true';
    toggle.addEventListener('click', () => {
      const showingBack = image.dataset.side === 'back';
      image.src = showingBack ? image.dataset.front : image.dataset.back;
      image.dataset.side = showingBack ? 'front' : 'back';
      toggle.textContent = showingBack
        ? 'View Back Cover | عرض الغلاف الخلفي'
        : 'View Front Cover | عرض الغلاف الأمامي';
    });
  }
})();
