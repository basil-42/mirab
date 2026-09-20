# Mirab — Marketing Website / موقع مِرآب التسويقي

Bilingual (Arabic default `/`, English under `/en/`) multi-page marketing site for the Mirab garage management system, built with **Astro + Tailwind CSS v4**.

## Stack

- **Astro** (static site generation — zero JS shipped by default per page)
- **Tailwind CSS v4** (utility-first styling, brand tokens in `src/styles/global.css`)
- **@fontsource** self-hosted IBM Plex Sans / IBM Plex Sans Arabic
- **@astrojs/sitemap** (auto-generated `sitemap-index.xml`)

## Structure

```
src/
  layouts/BaseLayout.astro     # <html>, SEO meta, hreflang, Header/Footer
  components/                  # Logo, Header (nav+dropdown+lang switch), Footer,
                                # PageHero, FeatureRow, CheckGrid, CTABanner, WhyList, HomeHero
  i18n/nav.ts, paths.ts        # shared nav/footer strings + locale path helper
  pages/*.astro                # 9 Arabic pages (unprefixed)
  pages/en/*.astro             # 9 English pages (/en/ prefix)
```

9 pages per language: Home, Core Features, Billing & Reports, Inspection & Maintenance,
Automation & Communication, Security & Access, Data Import/Export, Why This System, Contact.

## Before deploying — required changes

1. **`astro.config.mjs`** — replace `site: 'https://example.com'` with your real domain
   (used for canonical URLs, hreflang tags, and the sitemap).
2. **`src/pages/contact.astro`** and **`src/pages/en/contact.astro`** — replace the
   `[البريد الإلكتروني]` / `[Email address]` and `[رقم واتساب]` / `[WhatsApp number]`
   placeholders with real contact details.
3. **Contact form** — the form is static HTML only. Wire its `action`/`onsubmit` to an
   email service or webhook (e.g. Formspree, a serverless function, or your backend) before
   going live — noted with a `*` under the form.
4. **Logo / colors** — this uses the "Mirab" identity (navy `#0B1F3A` / amber `#E0932E`,
   mark in `src/components/Logo.astro`). If the final brand name/logo changes, only
   `Logo.astro`, `src/i18n/nav.ts` (`siteName`), and the theme tokens in
   `src/styles/global.css` need updating — every page consumes those, nothing is hardcoded
   per-page.

## Commands

```bash
npm install
npm run dev       # local dev server, http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the built dist/ locally to sanity-check before deploying
```

## Deploying

`npm run build` produces a fully static `dist/` folder — drag-and-drop or connect the repo to
any static host: Cloudflare Pages, Netlify, Vercel, or your own Nginx/Apache server. No Node.js
server is required at runtime.
