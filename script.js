const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navigation.querySelectorAll('a').forEach(link => {
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

// Keep the top navigation visually clean: portrait only, without AG or repeated names.
const brandIdentity = document.querySelector('.brand-identity');
if (brandIdentity) {
  brandIdentity.querySelector('.brand-code')?.remove();
  brandIdentity.querySelector('.brand-name')?.remove();
  brandIdentity.setAttribute('aria-label', 'Aouss Gabash academic homepage | الصفحة الأكاديمية لأوس غباش');
}

// Present the main identity with a circular personal portrait before the English name.
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
    heroPhoto.width = 160;
    heroPhoto.height = 160;
    heroPhoto.loading = 'eager';
    heroPhoto.fetchPriority = 'high';

    const heroNameCopy = document.createElement('div');
    heroNameCopy.className = 'hero-name-copy';

    heroName.before(heroNameRow);
    heroNameCopy.appendChild(heroName);
    heroNameRow.append(heroPhoto, heroNameCopy);
  }
}

// Styles for the portrait-and-name composition. Added here to avoid duplicating layout rules.
if (!document.querySelector('#hero-portrait-layout')) {
  const heroPortraitStyles = document.createElement('style');
  heroPortraitStyles.id = 'hero-portrait-layout';
  heroPortraitStyles.textContent = `
    .brand-identity {
      min-width: 48px;
      gap: 0;
    }

    .brand-identity .brand-logo {
      width: 48px;
      height: 48px;
      margin: 0;
    }

    .hero-name-row {
      display: flex;
      align-items: center;
      gap: clamp(20px, 2.6vw, 34px);
      width: 100%;
      margin: 0;
    }

    .hero-profile-photo {
      width: clamp(118px, 11vw, 158px);
      height: clamp(118px, 11vw, 158px);
      flex: 0 0 auto;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      border: 4px solid rgba(125, 211, 252, .72);
      background: #dbeafe;
      box-shadow:
        0 22px 50px rgba(2, 8, 23, .42),
        0 0 0 9px rgba(56, 189, 248, .08);
    }

    .hero-name-copy {
      min-width: 0;
      flex: 1 1 auto;
    }

    .hero-name-row h1 {
      margin: 0;
    }

    @media (max-width: 900px) {
      .hero-profile-photo {
        width: 124px;
        height: 124px;
      }
    }

    @media (max-width: 680px) {
      .brand-identity .brand-logo {
        width: 44px;
        height: 44px;
      }

      .hero-name-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }

      .hero-profile-photo {
        width: 112px;
        height: 112px;
        border-width: 3px;
        box-shadow:
          0 16px 38px rgba(2, 8, 23, .38),
          0 0 0 7px rgba(56, 189, 248, .08);
      }
    }
  `;
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
    <a class="about-profile-link orcid" href="https://orcid.org/0000-0002-3720-7203" target="_blank" rel="me noopener noreferrer" aria-label="Open ORCID profile">
      <span class="profile-mark" aria-hidden="true">iD</span>
      <span class="profile-copy">
        <strong>ORCID</strong>
        <small>0000-0002-3720-7203</small>
      </span>
    </a>
    <a class="about-profile-link researchgate" href="https://www.researchgate.net/profile/Aouss-Gabash" target="_blank" rel="noopener noreferrer" aria-label="Open ResearchGate profile">
      <span class="profile-mark" aria-hidden="true">RG</span>
      <span class="profile-copy">
        <strong>ResearchGate</strong>
        <small>Aouss Gabash</small>
      </span>
    </a>
    <a class="about-profile-link archive" href="https://archive.org/details/@aouss_gabash" target="_blank" rel="noopener noreferrer" aria-label="Open Internet Archive digital library">
      <span class="profile-mark" aria-hidden="true">▰</span>
      <span class="profile-copy">
        <strong>Archive</strong>
        <small>Digital Library | المكتبة الرقمية</small>
      </span>
    </a>`;
  aboutContent.appendChild(profileLinks);
}

// Keep the displayed book title consistent with the original 2006 publication.
document.querySelectorAll('#books h3').forEach((heading) => {
  heading.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('Electrical Lighting Engineering')) {
      node.textContent = node.textContent.replace(
        'Electrical Lighting Engineering',
        'Electrical Illumination Engineering'
      );
    }
  });
});
