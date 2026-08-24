(() => {
  'use strict';

  const BASE = 'https://aoussgabash.com/assets/shared/';
  const VERSION = '20260824-2';

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

  const start = async () => {
    try {
      if (!window.AG_CONFIG) {
        await loadScript(`${BASE}ag-config.js?v=${VERSION}`, 'data-ag-config');
      }

      await Promise.all([
        loadScript(`${BASE}ag-header.js?v=${VERSION}`, 'data-ag-central-header'),
        loadScript(`${BASE}ag-footer.js?v=${VERSION}`, 'data-ag-central-footer')
      ]);
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
