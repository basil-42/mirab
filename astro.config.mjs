import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with your real production domain before deploying —
  // this powers canonical URLs, hreflang tags, and the sitemap.
  site: 'https://example.com',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
