(() => {
  'use strict';

  const FOOTER_ID = 'ag-central-footer';
  const STYLE_ID = 'ag-central-footer-style';
  const CONFIG_URL = 'https://aoussgabash.com/assets/shared/ag-config.js?v=20260824-1';

  const ensureStyles = () => {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #${FOOTER_ID}{padding:34px 0;border-top:1px solid rgba(255,255,255,.12);background:#06101c;color:#aebfd0;font-family:Arial,Tahoma,sans-serif}
      #${FOOTER_ID} .ag-central-footer-inner{width:min(1120px,calc(100% - 32px));margin-inline:auto;text-align:center}
      #${FOOTER_ID} .ag-central-footer-line{margin:0;line-height:1.8}
      #${FOOTER_ID} .ag-central-footer-line+ .ag-central-footer-line{margin-top:8px}
      #${FOOTER_ID} .ag-central-footer-ar{color:#fff;direction:rtl;unicode-bidi:isolate}
      #${FOOTER_ID} .ag-central-footer-sep{margin-inline:6px;color:#7dd3fc}
      #${FOOTER_ID} .ag-central-footer-link{color:#7dd3fc;text-decoration:none;font-weight:700}
      #${FOOTER_ID} .ag-central-footer-link:hover{color:#fff;text-decoration:underline}
    `;
    document.head.appendChild(style);
  };

  const render = () => {
    const config = window.AG_CONFIG;
    if (!config) return;

    ensureStyles();
    document.querySelectorAll('footer').forEach((footer) => footer.remove());

    const footer = document.createElement('footer');
    footer.id = FOOTER_ID;
    footer.className = 'site-footer ag-central-footer';
    footer.innerHTML = `
      <div class="ag-central-footer-inner">
        <p class="ag-central-footer-line">© ${config.footer.year} ${config.owner.en} <span class="ag-central-footer-sep" aria-hidden="true">|</span> <span class="ag-central-footer-ar" lang="ar" dir="rtl">${config.owner.ar}</span></p>
        <p class="ag-central-footer-line">${config.ecosystem.en} <span class="ag-central-footer-sep" aria-hidden="true">|</span> <span class="ag-central-footer-ar" lang="ar" dir="rtl">${config.ecosystem.ar}</span></p>
        <p class="ag-central-footer-line">${config.country.en} <span class="ag-central-footer-sep" aria-hidden="true">|</span> <span class="ag-central-footer-ar" lang="ar" dir="rtl">${config.country.ar}</span></p>
        <p class="ag-central-footer-line"><a class="ag-central-footer-link" href="${config.links.siteInformation}">${config.footer.siteInformationLabel.en} <span class="ag-central-footer-sep" aria-hidden="true">|</span> <span class="ag-central-footer-ar" lang="ar" dir="rtl">${config.footer.siteInformationLabel.ar}</span></a></p>
      </div>`;
    document.body.appendChild(footer);
  };

  const start = () => {
    if (window.AG_CONFIG) {
      render();
      return;
    }

    const existingConfig = document.querySelector('script[data-ag-config]');
    if (existingConfig) {
      existingConfig.addEventListener('load', render, { once: true });
      return;
    }

    const configScript = document.createElement('script');
    configScript.src = CONFIG_URL;
    configScript.defer = true;
    configScript.dataset.agConfig = 'true';
    configScript.addEventListener('load', render, { once: true });
    document.head.appendChild(configScript);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
