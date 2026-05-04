/* Owlglass — shared header/footer injection
   Each page calls Owlglass.mount({ active: 'tool-slug' }) once.
   No frameworks, no build step. */

(function() {
  'use strict';

  const NAV = [
    { slug: 'home',         label: 'Home',         href: '/' },
    { slug: 'certlens',     label: 'CertLens',     href: '/certlens/' },
    { slug: 'dopplerlens',  label: 'DopplerLens',  href: '/dopplerlens/' },
    { slug: 'posturelens',  label: 'PostureLens',  href: '/posturelens/' },
    { slug: 'maillens',     label: 'MailLens',     href: '/maillens/' },
    { slug: 'about',        label: 'About',        href: '/about.html' }
  ];

  function buildHeader(activeSlug) {
    const navItems = NAV.map(item => {
      const cls = item.slug === activeSlug ? 'active' : '';
      return `<a href="${item.href}" class="${cls}">${item.label}</a>`;
    }).join('');

    return `
      <header class="site-header">
        <div class="container">
          <a href="/" class="wordmark">Owl<span class="accent">·</span>glass</a>
          <nav class="nav">${navItems}</nav>
        </div>
      </header>
    `;
  }

  function buildFooter() {
    const year = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <div class="container">
          <div>Owlglass · Public-data security tools · No accounts, no tracking, no API keys.</div>
          <div>
            <a href="/about.html">About</a> ·
            <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </footer>
    `;
  }

  window.Owlglass = {
    mount: function(opts) {
      opts = opts || {};
      const active = opts.active || 'home';
      const headerSlot = document.getElementById('site-header');
      const footerSlot = document.getElementById('site-footer');
      if (headerSlot) headerSlot.outerHTML = buildHeader(active);
      if (footerSlot) footerSlot.outerHTML = buildFooter();
    }
  };
})();
