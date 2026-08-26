(() => {
  'use strict';

  const BASE = 'https://aoussgabash.com/assets/shared/';
  const VERSION = '20260824-3';

  const loadStyle = (href, marker) => new Promise((resolve, reject) => {
    const existing = document.querySelector(`link[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded === 'true' || existing.sheet) resolve();
      else existing.addEventListener('load', resolve, { once: true });
      return;
    }

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute(marker, 'true');
    link.addEventListener('load', () => {
      link.dataset.loaded = 'true';
      resolve();
    }, { once: true });
    link.addEventListener('error', reject, { once: true });
    document.head.appendChild(link);
  });

  const loadScript = (src, marker) => new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[${marker}]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') resolve();
      else existing.addEventListener('load', resolve, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.defer = true;
    script.setAttribute(marker, 'true');
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true';
      resolve();
    }, { once: true });
    script.addEventListener('error', reject, { once: true });
    document.head.appendChild(script);
  });

  const applyPageSpecificFixes = () => {
    const page = location.pathname.split('/').pop()?.toLowerCase() || 'index.html';
    if (page !== 'ai-solutions.html') return;

    const style = document.createElement('style');
    style.id = 'ag-ai-solutions-navigation-fix';
    style.textContent = `
      @media(max-width:680px){
        body header .back{
          min-width:42px!important;
          width:42px!important;
          max-width:42px!important;
          min-height:42px!important;
          height:42px!important;
          max-height:42px!important;
          flex:0 0 42px!important;
          padding:0!important;
          margin:0!important;
          border-radius:13px!important;
          box-sizing:border-box!important;
        }
        body header .back svg{
          width:22px!important;
          height:22px!important;
        }
      }
    `;
    document.getElementById(style.id)?.remove();
    document.head.appendChild(style);
  };

  const start = async () => {
    try {
      await loadStyle(`${BASE}ag-theme.css?v=${VERSION}`, 'data-ag-theme');

      if (!window.AG_CONFIG) {
        await loadScript(`${BASE}ag-config.js?v=${VERSION}`, 'data-ag-config');
      }

      await Promise.all([
        loadScript(`${BASE}ag-header.js?v=${VERSION}`, 'data-ag-central-header'),
        loadScript(`${BASE}ag-footer.js?v=${VERSION}`, 'data-ag-central-footer')
      ]);

      applyPageSpecificFixes();
    } catch (error) {
      console.error('AG shared components could not be loaded:', error);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
