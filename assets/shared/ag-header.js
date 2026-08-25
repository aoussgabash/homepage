(() => {
  'use strict';

  const isMainSite = location.hostname === 'aoussgabash.com' || location.hostname === 'www.aoussgabash.com';

  const createHomeControl = (config) => {
    if (isMainSite) return;

    const nav = document.querySelector('header nav');
    const brand = nav?.querySelector('.brand, .logo, .brand-identity');
    if (!nav || !brand || nav.querySelector('.ag-home-button')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'ag-header-left';

    const home = document.createElement('a');
    home.className = 'ag-home-button ag-shared-home-link';
    home.href = config.links.home;
    home.setAttribute('aria-label', 'AG Home | الموقع الأم');
    home.title = 'AG Home | الموقع الأم';
    home.innerHTML = '<span aria-hidden="true">⌂</span>';

    brand.before(wrapper);
    wrapper.append(home, brand);
  };

  const setupMobileMenuDismiss = () => {
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.site-nav');
    if (!menuButton || !navigation || navigation.dataset.outsideDismissReady === 'true') return;

    navigation.dataset.outsideDismissReady = 'true';

    const closeMenu = () => {
      if (!navigation.classList.contains('open')) return;
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation | فتح قائمة التنقل');
    };

    document.addEventListener('pointerdown', (event) => {
      if (!navigation.classList.contains('open')) return;
      if (navigation.contains(event.target) || menuButton.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
      }
    });
  };

  const removeUnavailableIsbnRows = () => {
    document.querySelectorAll('#books article').forEach((book) => {
      const title = book.querySelector('h3')?.textContent || '';
      if (!title.includes('Electrical Illumination Engineering')) return;

      book.querySelectorAll('.book-meta p').forEach((row) => {
        const text = row.textContent.replace(/\s+/g, ' ').trim();
        if (/^ISBN-(10|13):/i.test(text)) row.remove();
      });
    });
  };

  const enhance = () => {
    const config = window.AG_CONFIG;
    if (!config) return;

    createHomeControl(config);

    document.querySelectorAll('header a[href="https://aoussgabash.com"], header a[href="https://aoussgabash.com/"]').forEach((link) => {
      link.href = config.links.home;
      link.classList.add('ag-shared-home-link');
      link.setAttribute('aria-label', 'AG Home | الموقع الأم');

      if (!link.classList.contains('brand') && !link.classList.contains('logo') && !link.classList.contains('brand-identity')) {
        link.innerHTML = '<span aria-hidden="true">⌂</span><span>AG Home <span aria-hidden="true">|</span> <span lang="ar" dir="rtl">الموقع الأم</span></span>';
      }
    });

    document.querySelectorAll('header a[href="#contact"]').forEach((link) => {
      link.classList.add('ag-shared-contact-link');
      link.innerHTML = '<span>Contact <span aria-hidden="true">|</span> <span lang="ar" dir="rtl">التواصل</span></span>';
    });

    document.querySelectorAll('header a[href^="mailto:"]').forEach((link) => {
      link.href = `mailto:${config.contact.email}`;
    });

    setupMobileMenuDismiss();
    removeUnavailableIsbnRows();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance, { once: true });
  } else {
    enhance();
  }
})();
