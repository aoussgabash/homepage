(() => {
  'use strict';

  const booksSection = document.querySelector('#books');
  if (!booksSection || booksSection.querySelector('.featured-editorial-work')) return;

  const bookList = booksSection.querySelector('.book-list');
  if (!bookList) return;

  const card = document.createElement('article');
  card.className = 'featured-editorial-work';
  card.innerHTML = `
    <div class="featured-editorial-visual">
      <button class="featured-cover-button" type="button" aria-label="View front and back covers | عرض الغلافين الأمامي والخلفي">
        <img src="assets/books/selection-c3-front.jpg" alt="Front cover of Energy Optimization for Sustainable Resilience and Climate Stability – C+++ Framework" loading="lazy">
        <span>View covers | عرض الغلافين</span>
      </button>
    </div>
    <div class="featured-editorial-copy">
      <p class="featured-kicker">Featured Editorial Work | <span lang="ar" dir="rtl">عمل تحريري مميز</span></p>
      <div class="featured-badges"><span>MDPI Selections</span><span>2023</span></div>
      <h3>Energy Optimization for Sustainable Resilience and Climate Stability – C+++ Framework</h3>
      <p class="featured-role"><strong>Edited and compiled by Dr.-Ing. Aouss Gabash</strong></p>
      <p class="featured-role-ar" lang="ar" dir="rtl"><strong>تحرير وإعداد الدكتور المهندس أوس غباش</strong></p>

      <div class="featured-preface-summary">
        <h4>Preface Summary</h4>
        <p>This editorial preface presents the scientific vision of the collection by tracing the evolution of sustainable energy systems and highlighting renewable-energy integration, battery storage, real-time optimal power flow, and the proposed C+++ Framework. It also emphasizes the shared scientific thread connecting the selected publications and the importance of coordinated TSO–DSO operation for resilient, intelligent, and sustainable power systems.</p>

        <h4 class="featured-preface-title-ar" lang="ar" dir="rtl">ملخص المقدمة</h4>
        <p class="featured-ar" lang="ar" dir="rtl">تقدم هذه المقدمة الرؤية العلمية للمجموعة من خلال تتبع تطور أنظمة الطاقة المستدامة، وإبراز دمج مصادر الطاقة المتجددة، وتخزين الطاقة، وتدفق الاستطاعة الأمثل الآني، وإطار C+++ المقترح. كما توضح الخيط العلمي المشترك الذي يربط المنشورات المختارة، وأهمية التنسيق بين مشغلي شبكات النقل والتوزيع لبناء أنظمة طاقة مرنة وذكية ومستدامة.</p>
      </div>

      <p class="featured-credit">Editorial preface written and the volume compiled by Dr.-Ing. Aouss Gabash.</p>
      <p class="featured-credit-ar" lang="ar" dir="rtl">كتب المقدمة التحريرية وأعد هذه المجموعة: الدكتور المهندس أوس غباش.</p>

      <div class="featured-actions">
        <button class="button secondary featured-preview" type="button">View covers | عرض الغلافين</button>
        <a class="button primary featured-archive" href="https://archive.org/details/@aouss_gabash" target="_blank" rel="noopener noreferrer">Explore Digital Library | استكشف المكتبة الرقمية</a>
      </div>
      <p class="featured-note">Selected previews of books, research papers, chapters, reports, and academic publications.<br><span lang="ar" dir="rtl">عينات مختارة من الكتب والأبحاث والفصول والتقارير والمنشورات الأكاديمية.</span></p>
    </div>`;

  bookList.prepend(card);

  const styles = document.createElement('style');
  styles.id = 'featured-editorial-styles';
  styles.textContent = `
    .featured-editorial-work{grid-column:1/-1;display:grid;grid-template-columns:minmax(250px,360px) 1fr;gap:36px;margin:0 0 34px;padding:30px;border:1px solid rgba(56,189,248,.42);border-radius:24px;background:linear-gradient(145deg,#071a2c,#0d2942);color:#e8f1fa;box-shadow:0 24px 60px rgba(2,18,38,.22)}
    .featured-editorial-visual{display:flex;align-items:flex-start;justify-content:center}.featured-cover-button{width:100%;padding:0;border:0;border-radius:18px;background:#fff;overflow:hidden;cursor:pointer;box-shadow:0 18px 42px rgba(0,0,0,.28)}.featured-cover-button img{display:block;width:100%;aspect-ratio:3/4;object-fit:contain;background:#fff}.featured-cover-button span{display:block;padding:12px 14px;background:#0f4c75;color:#fff;font-weight:700;text-align:center}
    .featured-kicker{margin:0 0 10px!important;color:#38bdf8!important;font-weight:800;text-transform:uppercase;letter-spacing:.08em}.featured-badges{display:flex;gap:9px;flex-wrap:wrap;margin-bottom:14px}.featured-badges span{padding:6px 10px;border:1px solid rgba(251,191,36,.48);border-radius:999px;background:rgba(251,191,36,.1);color:#fde68a;font-size:.78rem;font-weight:800}.featured-editorial-copy h3{margin:0 0 14px!important;color:#fff!important;font-size:clamp(1.55rem,3vw,2.35rem)!important;line-height:1.2!important}.featured-editorial-copy p{color:#cbd8e6!important;line-height:1.78}.featured-role{margin:0!important;color:#fff!important}.featured-role-ar{margin:3px 0 18px!important;color:#fff!important;font-weight:400}
    .featured-preface-summary{margin-top:18px;padding:20px;border:1px solid rgba(125,211,252,.2);border-radius:16px;background:rgba(255,255,255,.035)}.featured-preface-summary h4{margin:0 0 8px;color:#7dd3fc;font-size:1.08rem}.featured-preface-summary p{margin:0}.featured-preface-title-ar{margin-top:18px!important;text-align:right}.featured-ar{color:#fff!important;font-weight:400}.featured-credit{margin:18px 0 0!important;color:#fff!important;font-weight:700}.featured-credit-ar{margin:4px 0 0!important;color:#fff!important;font-weight:400}.featured-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}.featured-actions .button{min-height:52px;display:inline-flex;align-items:center;justify-content:center;text-align:center}.featured-note{margin:15px 0 0!important;font-size:.88rem;color:#9fb2c6!important}.featured-note span{color:#fff;font-weight:400}
    .editorial-modal{position:fixed;inset:0;z-index:9999;display:none;align-items:center;justify-content:center;padding:20px;background:rgba(2,8,23,.92)}.editorial-modal.open{display:flex}.editorial-modal-dialog{position:relative;width:min(920px,100%);max-height:92vh;padding:20px;border:1px solid rgba(125,211,252,.35);border-radius:22px;background:#07111f;overflow:auto}.editorial-modal-close{position:sticky;top:0;float:right;z-index:2;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:#10243a;color:#fff;font-size:1.6rem;cursor:pointer}.editorial-cover-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;clear:both;padding-top:10px}.editorial-cover-grid figure{margin:0}.editorial-cover-grid img{display:block;width:100%;height:auto;border-radius:14px;background:#fff}.editorial-cover-grid figcaption{padding:10px;color:#fff;text-align:center}
    @media(max-width:820px){.featured-editorial-work{grid-template-columns:1fr;padding:22px}.featured-editorial-visual{max-width:360px;margin:auto}.editorial-cover-grid{grid-template-columns:1fr}}
    @media(max-width:520px){.featured-editorial-work{padding:18px;border-radius:20px}.featured-preface-summary{padding:16px}.featured-actions{flex-direction:column}.featured-actions .button{width:100%}}
  `;
  document.head.appendChild(styles);

  const modal = document.createElement('div');
  modal.className = 'editorial-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Book covers | أغلفة الكتاب');
  modal.innerHTML = `
    <div class="editorial-modal-dialog">
      <button class="editorial-modal-close" type="button" aria-label="Close | إغلاق">×</button>
      <div class="editorial-cover-grid">
        <figure><img src="assets/books/selection-c3-front.jpg" alt="Front cover"><figcaption>Front cover | الغلاف الأمامي</figcaption></figure>
        <figure><img src="assets/books/selection-c3-back.jpg" alt="Back cover"><figcaption>Back cover | الغلاف الخلفي</figcaption></figure>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const openModal = () => { modal.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { modal.classList.remove('open'); document.body.style.overflow = ''; };
  card.querySelector('.featured-cover-button').addEventListener('click', openModal);
  card.querySelector('.featured-preview').addEventListener('click', openModal);
  modal.querySelector('.editorial-modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
})();
