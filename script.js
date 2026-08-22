const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const yearElement = document.querySelector('#year');

if (yearElement) yearElement.textContent = String(new Date().getFullYear());

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelector('.hero .eyebrow')?.remove();

const brandIdentity = document.querySelector('.brand-identity');
if (brandIdentity) {
  brandIdentity.querySelector('.brand-code')?.remove();
  brandIdentity.querySelector('.brand-name')?.remove();
  const brandLogo = brandIdentity.querySelector('.brand-logo');
  if (brandLogo) {
    brandLogo.src = 'assets/brand/AG.svg';
    brandLogo.alt = 'AG Academic Ecosystem logo | شعار منظومة AG الأكاديمية';
  }
  brandIdentity.setAttribute('aria-label', 'AG Academic Ecosystem homepage | الصفحة الرئيسية لمنظومة AG الأكاديمية');
}

const heroName = document.querySelector('.hero h1');
if (heroName) {
  if (!heroName.querySelector('.hero-name-ar')) {
    const arabicHeroName = document.createElement('span');
    arabicHeroName.className = 'hero-name-ar';
    arabicHeroName.lang = 'ar';
    arabicHeroName.dir = 'rtl';
    arabicHeroName.textContent = 'الدكتور المهندس أوس غباش';
    heroName.appendChild(arabicHeroName);
  }

  if (!document.querySelector('.hero-name-row')) {
    const heroNameRow = document.createElement('div');
    heroNameRow.className = 'hero-name-row';
    const heroPhoto = document.createElement('img');
    heroPhoto.className = 'hero-profile-photo';
    heroPhoto.src = 'https://avatars.githubusercontent.com/u/312260129?v=4&s=400';
    heroPhoto.alt = 'Portrait of Dr.-Ing. Aouss Gabash | صورة الدكتور المهندس أوس غباش';
    heroPhoto.width = 174;
    heroPhoto.height = 174;
    heroPhoto.loading = 'eager';
    heroPhoto.fetchPriority = 'high';
    const heroNameCopy = document.createElement('div');
    heroNameCopy.className = 'hero-name-copy';
    heroName.before(heroNameRow);
    heroNameCopy.appendChild(heroName);
    heroNameRow.append(heroPhoto, heroNameCopy);
  }
}

if (!document.querySelector('#hero-portrait-layout')) {
  const heroPortraitStyles = document.createElement('style');
  heroPortraitStyles.id = 'hero-portrait-layout';
  heroPortraitStyles.textContent = `
    .brand-identity{min-width:52px;gap:0}.brand-identity .brand-logo{width:52px;height:52px;margin:0;padding:0;object-fit:contain;border:0;border-radius:12px;background:transparent;box-shadow:0 8px 24px rgba(37,99,235,.24)}
    .hero-name-row{display:flex;flex-direction:column;align-items:flex-start;gap:22px;width:100%;margin:0}.hero-profile-photo{width:clamp(138px,13vw,174px);height:clamp(138px,13vw,174px);flex:0 0 auto;display:block;object-fit:cover;object-position:center;border-radius:50%;border:5px solid rgba(125,211,252,.82);background:#dbeafe;box-shadow:0 22px 50px rgba(2,8,23,.4),0 0 0 10px rgba(56,189,248,.08)}
    .hero-name-copy{min-width:0;width:100%}.hero-name-row h1{margin:0;max-width:620px;font-size:clamp(2.55rem,4.1vw,3.65rem);line-height:1.02;letter-spacing:-.035em}.hero-name-row .hero-name-ar{margin-top:.38em;max-width:100%;font-size:clamp(1.25rem,2vw,1.75rem);line-height:1.5}.hero-title{margin:26px 0 10px;padding-left:0;border-left:0}.hero-ar{padding-left:0}
    .project-card[data-project-link]{cursor:pointer}.project-card[data-project-link]:focus-visible{outline:3px solid #38bdf8;outline-offset:4px}
    .project-card.press-card-unified{background:linear-gradient(180deg,#0f3454,#0b2d4a)!important;border-color:rgba(56,189,248,.42)!important;box-shadow:0 18px 48px rgba(2,18,38,.22)!important}.project-card.press-card-unified:hover{border-color:rgba(56,189,248,.72)!important;box-shadow:0 22px 58px rgba(2,18,38,.3)!important}.project-card.press-card-unified .project-code{background:rgba(14,116,144,.34)!important}
    @media(max-width:900px){.hero-profile-photo{width:148px;height:148px}.hero-name-row h1{font-size:clamp(2.45rem,6.5vw,3.25rem)}}
    @media(max-width:680px){.brand-identity{min-width:46px}.brand-identity .brand-logo{width:46px;height:46px;border-radius:10px}.hero-name-row{gap:18px}.hero-profile-photo{width:118px;height:118px;border-width:4px;box-shadow:0 16px 38px rgba(2,8,23,.38),0 0 0 8px rgba(56,189,248,.08)}.hero-name-row h1{font-size:clamp(2.15rem,9vw,2.8rem);line-height:1.04}.hero-name-row .hero-name-ar{margin-top:.45em;font-size:clamp(1.08rem,5.2vw,1.45rem)}}
    @media(max-width:480px){.hero-profile-photo{width:102px;height:102px}.hero-name-row h1{font-size:clamp(1.85rem,9.5vw,2.35rem)}.hero-name-row .hero-name-ar{font-size:clamp(1rem,5vw,1.25rem)}}`;
  document.head.appendChild(heroPortraitStyles);
}

const footerIdentity = document.querySelector('.site-footer .footer-wrap > span:first-child');
if (footerIdentity && !footerIdentity.querySelector('.footer-name-ar')) {
  const separator = document.createTextNode(' | ');
  const arabicFooterName = document.createElement('span');
  arabicFooterName.className = 'footer-name-ar';
  arabicFooterName.lang = 'ar';
  arabicFooterName.dir = 'rtl';
  arabicFooterName.textContent = 'الدكتور المهندس أوس غباش';
  footerIdentity.append(separator, arabicFooterName);
}

const aboutContent = document.querySelector('#about .split > div:last-child');
if (aboutContent && !aboutContent.querySelector('.about-profile-links')) {
  const profileLinks = document.createElement('div');
  profileLinks.className = 'about-profile-links';
  profileLinks.setAttribute('aria-label', 'Academic profiles | الملفات الأكاديمية');
  profileLinks.innerHTML = `
    <a class="about-profile-link orcid" href="https://orcid.org/0000-0002-3720-7203" target="_blank" rel="me noopener noreferrer"><span class="profile-mark" aria-hidden="true">iD</span><span class="profile-copy"><strong>ORCID</strong><small>0000-0002-3720-7203</small></span></a>
    <a class="about-profile-link researchgate" href="https://www.researchgate.net/profile/Aouss-Gabash" target="_blank" rel="noopener noreferrer"><span class="profile-mark" aria-hidden="true">RG</span><span class="profile-copy"><strong>ResearchGate</strong><small>Aouss Gabash</small></span></a>
    <a class="about-profile-link archive" href="https://archive.org/details/@aouss_gabash" target="_blank" rel="noopener noreferrer"><span class="profile-mark" aria-hidden="true">▰</span><span class="profile-copy"><strong>Archive</strong><small>Digital Library | المكتبة الرقمية</small></span></a>`;
  aboutContent.appendChild(profileLinks);
}

document.querySelectorAll('#books h3').forEach((heading) => {
  heading.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('Electrical Lighting Engineering')) {
      node.textContent = node.textContent.replace('Electrical Lighting Engineering', 'Electrical Illumination Engineering');
    }
  });
});

const projectCards = [...document.querySelectorAll('#projects .project-card')];

const researchProjectCard = projectCards.find((card) => card.querySelector('.project-code .suffix')?.textContent.trim() === 'RS');
if (researchProjectCard) {
  const heading = researchProjectCard.querySelector('h3');
  if (heading) {
    heading.childNodes.forEach((node) => { if (node.nodeType === Node.TEXT_NODE) node.textContent = 'Research'; });
    const arabicHeading = heading.querySelector('.card-ar');
    if (arabicHeading) arabicHeading.textContent = 'البحث';
  }
  const descriptions = researchProjectCard.querySelectorAll('p');
  if (descriptions[0]) descriptions[0].textContent = 'Research areas, scientific projects, methods, results, and academic collaboration.';
  if (descriptions[1]) descriptions[1].textContent = 'مجالات البحث والمشاريع العلمية والمنهجيات والنتائج والتعاون الأكاديمي.';
}

function makeProjectCardLink(card, url, label) {
  if (!card) return;
  card.dataset.projectLink = url;
  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', label);

  const status = card.querySelector('.status');
  if (status) {
    status.className = 'card-link';
    status.innerHTML = 'Visit platform → | <span lang="ar" dir="rtl">زيارة المنصة ←</span>';
  }

  const open = () => { window.location.href = url; };
  card.addEventListener('click', open);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      open();
    }
  });
}

const pressProjectCard = projectCards.find((card) => card.querySelector('.project-code .suffix')?.textContent.trim() === 'PR');
if (pressProjectCard) pressProjectCard.classList.add('press-card-unified');
makeProjectCardLink(
  pressProjectCard,
  'https://press.aoussgabash.com',
  'Open Gabash Academic Press | فتح دار غباش للنشر الأكاديمي'
);
