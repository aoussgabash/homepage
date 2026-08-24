(() => {
  'use strict';

  const FOOTER_ID = 'ag-central-footer';
  const CONFIG_URL = 'https://aoussgabash.com/assets/shared/ag-config.js?v=20260824-3';

  const render = () => {
    const config = window.AG_CONFIG;
    if (!config) return;

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
