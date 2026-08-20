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
