import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://aitoolpick.org',
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  integrations: [
    mdx(),
    sitemap(),
  ],
  adapter: vercel(),
  output: 'static',
});
