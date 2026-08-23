(() => {
  'use strict';

  const booksSection = document.querySelector('#books');
  if (!booksSection || booksSection.querySelector('[data-editorial-volume="2023"]')) return;

  const bookList = booksSection.querySelector('.book-list');
  if (!bookList) return;

  const card = document.createElement('article');
  card.className = 'published-book-card published-book-unified';
  card.dataset.editorialVolume = '2023';
  card.innerHTML = `
    <div class="published-book-gallery" data-book-gallery>
      <div class="published-book-frame">
        <img
          src="assets/books/selection-c3-front.jpg"
          data-front="assets/books/selection-c3-front.jpg"
          data-back="assets/books/selection-c3-back.jpg"
          data-side="front"
          alt="Front cover of Energy Optimization for Sustainable Resilience and Climate Stability – C+++ Framework | الغلاف الأمامي للمجموعة التحريرية"
          loading="lazy"
          decoding="async">
      </div>
      <button class="published-book-toggle" type="button" data-book-toggle>View Back Cover | عرض الغلاف الخلفي</button>
    </div>

    <span>Published · English · Editorial Collection · 2023 | <span lang="ar" dir="rtl">منشور · بالإنجليزية · مجموعة تحريرية · 2023</span></span>

    <h3>
      Energy Optimization for Sustainable Resilience and Climate Stability – C+++ Framework
      <span class="card-ar" lang="ar" dir="rtl">تحسين الطاقة من أجل المرونة المستدامة والاستقرار المناخي – إطار C+++</span>
    </h3>

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

    <div class="published-book-action">
      <a class="button primary" href="https://archive.org/details/@aouss_gabash" target="_blank" rel="noopener noreferrer">Explore Digital Library | استكشف المكتبة الرقمية</a>
    </div>`;

  const publishedCards = bookList.querySelectorAll('.published-book-card');
  const lastPublishedCard = publishedCards[publishedCards.length - 1];
  if (lastPublishedCard) {
    lastPublishedCard.insertAdjacentElement('afterend', card);
  } else {
    bookList.prepend(card);
  }

  const image = card.querySelector('img[data-front][data-back]');
  const button = card.querySelector('[data-book-toggle]');
  if (!image || !button) return;

  button.addEventListener('click', () => {
    const showingBack = image.dataset.side === 'back';
    image.src = showingBack ? image.dataset.front : image.dataset.back;
    image.dataset.side = showingBack ? 'front' : 'back';
    button.textContent = showingBack
      ? 'View Back Cover | عرض الغلاف الخلفي'
      : 'View Front Cover | عرض الغلاف الأمامي';
  });
})();
