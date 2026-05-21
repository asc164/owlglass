/* Owlglass — shared sidebar injection.
   Each page calls Owlglass.mount({ active: 'tool-slug' }) once. */

(function() {
  'use strict';

  // SVG icons — small, simple, monochrome. Currentcolor inherits from parent.
const ICONS = {
    home:        '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 7L8 2L14 7V13C14 13.5 13.5 14 13 14H10V10H6V14H3C2.5 14 2 13.5 2 13V7Z"/></svg>',
    certlens:    '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg>',
    dopplerlens: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5" cy="8" r="3"/><circle cx="11" cy="8" r="3"/></svg>',
    posturelens: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L13 4V8C13 11 10.5 13 8 14C5.5 13 3 11 3 8V4L8 2Z"/></svg>',
    surfacelens: '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="3"/><circle cx="8" cy="8" r="0.5" fill="currentColor"/><path d="M8 8L12.5 3.5"/></svg>',
    reportlens:  '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="12" height="12" rx="1"/><path d="M5 11V8M8 11V5M11 11V9"/></svg>',
    maillens:    '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="12" height="10" rx="1"/><path d="M2 5L8 9L14 5"/></svg>',
    about:       '<svg class="ico" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 7V11M8 5V5.01"/></svg>',
    github:      '<svg class="ico" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6v2.3c0 .2.1.5.5.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z"/></svg>'
};

  const NAV_TOOLS = [
  { slug: 'certlens',     label: 'CertLens',     href: '/certlens/',     ready: true },
  { slug: 'dopplerlens',  label: 'DopplerLens',  href: '/dopplerlens/',  ready: true },
  { slug: 'posturelens',  label: 'PostureLens',  href: '/posturelens/',  ready: true },
  { slug: 'surfacelens',  label: 'SurfaceLens',  href: '/surfacelens/',  ready: true },
  { slug: 'reportlens',   label: 'ReportLens',   href: '/reportlens/',   ready: true },
  { slug: 'maillens',     label: 'MailLens',     href: '/maillens/',     ready: false },
];


  function buildSidebar(activeSlug) {
    const homeActive = activeSlug === 'home' ? 'active' : '';
    const aboutActive = activeSlug === 'about' ? 'active' : '';

    const toolLinks = NAV_TOOLS.map(t => {
      const cls = (t.slug === activeSlug ? 'active ' : '') + (t.ready ? '' : 'coming-soon');
      const href = t.ready ? t.href : '#';
      return '<a href="' + href + '" class="nav-link ' + cls + '">' + ICONS[t.slug] + '<span>' + t.label + '</span></a>';
    }).join('');

    return '' +
      '<aside class="sidebar" id="sidebar">' +
        '<a href="/" class="brand"><span class="mark">O</span><span>Owlglass</span></a>' +

        '<a href="/" class="nav-link ' + homeActive + '">' + ICONS.home + '<span>Home</span></a>' +

        '<div class="nav-section">Lenses</div>' +
        toolLinks +

        '<div class="nav-section">More</div>' +
        '<a href="/about.html" class="nav-link ' + aboutActive + '">' + ICONS.about + '<span>About</span></a>' +
        '<a href="https://github.com/" target="_blank" rel="noopener" class="nav-link">' + ICONS.github + '<span>GitHub</span></a>' +

        '<div class="footer-link">Public-data tools.<br>No accounts. No tracking.</div>' +
      '</aside>';
  }

  window.Owlglass = {
    mount: function(opts) {
      opts = opts || {};
      const active = opts.active || 'home';
      const slot = document.getElementById('sidebar-slot');
      if (slot) slot.outerHTML = buildSidebar(active);

      // Mobile toggle, if present
      const toggle = document.querySelector('.mobile-toggle');
      if (toggle) {
        toggle.addEventListener('click', () => {
          const sb = document.getElementById('sidebar');
          if (sb) sb.classList.toggle('open');
        });
      }
    }
  };
})();
