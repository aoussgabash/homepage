(() => {
  'use strict';

  const STYLE_ID = 'ag-central-header-style';

  const ensureStyles = () => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .ag-shared-home-link{display:inline-flex;align-items:center;justify-content:center;gap:6px;text-decoration:none}
      .ag-shared-contact-link{display:inline-flex;align-items:center;gap:6px}
      .ag-shared-home-link:focus-visible,.ag-shared-contact-link:focus-visible{outline:3px solid #38bdf8;outline-offset:3px}
    `;
    document.head.appendChild(style);
  };

  const enhance = () => {
    const config = window.AG_CONFIG;
    if (!config) return;
    ensureStyles();

    document.querySelectorAll('header a[href="https://aoussgabash.com"], header a[href="https://aoussgabash.com/"]').forEach((link) => {
      link.href = config.links.home;
      link.classList.add('ag-shared-home-link');
      link.setAttribute('aria-label', 'AG Home | الموقع الأم');
      if (!link.textContent.trim() || /AG Home|الموقع الأم|Home/.test(link.textContent)) {
        link.innerHTML = '<span aria-hidden="true">⌂</span><span>AG Home <span aria-hidden="true">|</span> <span lang="ar" dir="rtl">الموقع الأم</span></span>';
      }
    });

    document.querySelectorAll('header a[href="#contact"]').forEach((link) => {
      link.classList.add('ag-shared-contact-link');
      link.innerHTML = '<span aria-hidden="true">✉</span><span>Contact <span aria-hidden="true">|</span> <span lang="ar" dir="rtl">التواصل</span></span>';
    });

    document.querySelectorAll('header a[href^="mailto:"]').forEach((link) => {
      if (!link.href.includes(config.contact.email)) link.href = `mailto:${config.contact.email}`;
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance, { once: true });
  } else {
    enhance();
  }
})();
