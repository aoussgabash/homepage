(() => {
  'use strict';

  const isMainSite = location.hostname === 'aoussgabash.com' || location.hostname === 'www.aoussgabash.com';

  const shortenAgaiButtonLabel = () => {
    const button = document.querySelector('.hero-actions .button.primary[href*="ai.aoussgabash.com"]');
    if (!button) return;
    button.textContent = 'Open AGAI | افتح منصة AGAI';
    button.setAttribute('aria-label', 'Open AGAI | افتح منصة AGAI');
  };

  const ensureHomeButtonStyle = () => {
    if (document.querySelector('#ag-home-button-style')) return;

    const style = document.createElement('style');
    style.id = 'ag-home-button-style';
    style.textContent = `
      header .ag-header-left{display:flex!important;align-items:center!important;gap:12px!important;min-width:0!important}
      header .navlinks a,header .site-nav a{color:#fff!important}
      header .navlinks a:hover,header .navlinks a:focus-visible,header .site-nav a:hover,header .site-nav a:focus-visible{color:#fff!important;background:rgba(56,189,248,.12)!important;outline:none!important}
      header .ag-home-button{width:44px!important;height:44px!important;min-width:44px!important;flex:0 0 44px!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;padding:0!important;margin:0!important;overflow:hidden!important;white-space:nowrap!important;color:#fff!important;background:rgba(255,255,255,.06)!important;border:1px solid rgba(255,255,255,.20)!important;border-radius:14px!important;text-decoration:none!important;font-size:28px!important;line-height:1!important;box-sizing:border-box!important}
      header .ag-home-button:hover,header .ag-home-button:focus-visible{color:#fff!important;background:rgba(56,189,248,.16)!important;border-color:rgba(125,211,252,.55)!important}
      header .ag-home-button>span{display:block!important;width:auto!important;height:auto!important;margin:0!important;padding:0!important;color:inherit!important;font-size:inherit!important;line-height:1!important}
      .hero-actions .button.primary[href*="ai.aoussgabash.com"]{position:relative!important;isolation:isolate!important;overflow:hidden!important;color:#f8fbff!important;border:1px solid rgba(209,171,82,.54)!important;background:linear-gradient(90deg,#9b742d 0%,#b88a32 22%,#376f9c 64%,#245888 100%)!important;box-shadow:0 12px 28px rgba(3,20,38,.30),0 6px 18px rgba(155,116,45,.14),inset 0 1px 0 rgba(255,255,255,.12)!important;text-shadow:0 1px 2px rgba(2,10,20,.42)!important;transition:transform .22s ease,box-shadow .22s ease,filter .22s ease!important}
      .hero-actions .button.primary[href*="ai.aoussgabash.com"]::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(115deg,rgba(255,255,255,.08),transparent 36%,transparent 70%,rgba(255,255,255,.04));pointer-events:none}
      .hero-actions .button.primary[href*="ai.aoussgabash.com"]:hover,.hero-actions .button.primary[href*="ai.aoussgabash.com"]:focus-visible{transform:translateY(-2px)!important;filter:saturate(1.03) brightness(1.03)!important;border-color:rgba(226,194,112,.72)!important;box-shadow:0 16px 34px rgba(3,20,38,.34),0 8px 22px rgba(155,116,45,.18),0 0 0 2px rgba(184,138,50,.08)!important;outline:none!important}
      @media(max-width:680px){header .ag-header-left{gap:9px!important}header .ag-home-button{width:42px!important;height:42px!important;min-width:42px!important;flex-basis:42px!important;border-radius:13px!important;font-size:27px!important}}
    `;
    document.head.appendChild(style);
  };

  const normalizeHomeLink = (link, config) => {
    link.href = config.links.home;
    link.className = 'ag-home-button ag-shared-home-link';
    link.setAttribute('aria-label', 'AG Home | الموقع الأم');
    link.title = 'AG Home | الموقع الأم';
    link.innerHTML = '<span aria-hidden="true">⌂</span>';
  };

  const createHomeControl = (config) => {
    if (isMainSite) return;
    const nav = document.querySelector('header nav');
    const brand = nav?.querySelector('.brand, .logo, .brand-identity');
    if (!nav || !brand) return;
    const candidates = [...nav.querySelectorAll('a[href="https://aoussgabash.com"], a[href="https://aoussgabash.com/"], .ag-shared-home-link, .ag-home-button')].filter((link) => !link.classList.contains('brand') && !link.classList.contains('logo') && !link.classList.contains('brand-identity'));
    const home = candidates.shift() || document.createElement('a');
    candidates.forEach((duplicate) => duplicate.remove());
    normalizeHomeLink(home, config);
    let wrapper = brand.parentElement?.classList.contains('ag-header-left') ? brand.parentElement : null;
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.className = 'ag-header-left';
      brand.before(wrapper);
      wrapper.appendChild(brand);
    }
    wrapper.insertBefore(home, brand);
  };

  const setupMobileMenuDismiss = () => {
    const menuButton = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.site-nav, .navlinks');
    if (!menuButton || !navigation || navigation.dataset.outsideDismissReady === 'true') return;
    navigation.dataset.outsideDismissReady = 'true';
    const closeMenu = () => {
      if (!navigation.classList.contains('open')) return;
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation | فتح قائمة التنقل');
      if (menuButton.textContent.trim() === '×') menuButton.textContent = '☰';
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
    shortenAgaiButtonLabel();
    ensureHomeButtonStyle();
    const config = window.AG_CONFIG;
    if (!config) return;
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

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enhance, { once: true });
  else enhance();
})();
