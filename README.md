# Owlglass

Free, browser-based security tools that show you what your organization looks like from the outside. Built on public data sources (Certificate Transparency, public DNS, CISA KEV, FIRST EPSS). No accounts, no API keys, no backend.

## Tools

- **CertLens** — Certificate & subdomain discovery via CT logs
- **DopplerLens** — Lookalike domain detection (coming soon)
- **PostureLens** — External posture assessment (coming soon)
- **MailLens** — Email authentication check (coming soon)

## Stack

- Plain HTML, CSS, vanilla JavaScript
- No build step, no frameworks, no Node.js
- Hosted on Cloudflare Pages, deployed from GitHub
- All data fetched directly from public APIs in the user's browser

## Local preview

Just open `index.html` in a browser. Or for a tiny local server:

