(() => {
  'use strict';

  const isMainSite = location.hostname === 'aoussgabash.com' || location.hostname === 'www.aoussgabash.com';

  const ensureHomeButtonStyle = () => {
    if (document.querySelector('#ag-home-button-style')) return;

    const style = document.createElement('style');
    style.id = 'ag-home-button-style';
    style.textContent = `
      header .ag-home-button{
        width:44px!important;
        height:44px!important;
        min-width:44px!important;
        flex:0 0 44px!important;
        display:inline-flex!important;
        align-items:center!important;
        justify-content:center!important;
        padding:0!important;
        margin:0!important;
        overflow:hidden!important;
        white-space:nowrap!important;
        color:#fff!important;
        background:rgba(255,255,255,.06)!important;
        border:1px solid rgba(255,255,255,.20)!important;
        border-radius:14px!important;
        text-decoration:none!important;
        font-size:28px!important;
        line-height:1!important;
        box-sizing:border-box!important;
      }
      header .ag-home-button:hover,
      header .ag-home-button:focus-visible{
        color:#fff!important;
        background:rgba(56,189,248,.16)!important;
        border-color:rgba(125,211,252,.55)!important;
      }
      header .ag-home-button > span{
        display:block!important;
        width:auto!important;
        height:auto!important;
        margin:0!important;
        padding:0!important;
        color:inherit!important;
        font-size:inherit!important;
        line-height:1!important;
      }
      @media(max-width:680px){
        header .ag-home-button{
          width:42px!important;
          height:42px!important;
          min-width:42px!important;
          flex-basis:42px!important;
          border-radius:13px!important;
          font-size:27px!important;
        }
      }
    `;
    document.head.appendChild(style);
  };

  const normalizeHomeLink = (link, config) => {
    link.href = config.links.home;
    link.classList.add('ag-home-button', 'ag-shared-home-link');
    link.setAttribute('aria-label', 'AG Home | الموقع الأم');
    link.title = 'AG Home | الموقع الأم';
    link.innerHTML = '<span aria-hidden="true">⌂</span>';
  };

  const createHomeControl = (config) => {
    if (isMainSite) return;

    const nav = document.querySelector('header nav');
    const brand = nav?.querySelector('.brand, .logo, .brand-identity');
    if (!nav || !brand) return;

    const existingHome = nav.querySelector('.ag-home-button');
    if (existingHome) {
      normalizeHomeLink(existingHome, config);
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'ag-header-left';

    const home = document.createElement('a');
    normalizeHomeLink(home, config);

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

    ensureHomeButtonStyle();

    if (!isMainSite) {
      document.querySelectorAll(
        'header a[href="https://aoussgabash.com"], header a[href="https://aoussgabash.com/"], header .ag-shared-home-link'
      ).forEach((link) => {
        if (link.classList.contains('brand') || link.classList.contains('logo') || link.classList.contains('brand-identity')) return;
        normalizeHomeLink(link, config);
      });
    }

    createHomeControl(config);

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
