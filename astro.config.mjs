import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import compress from 'astro-compress';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://new.sfucsss.org',
  output: 'static',
  integrations: [
    mdx(),
    sitemap(),
    compress({
      CSS: false,
      HTML: {
        'html-minifier-terser': {
          minifyCSS: false
        }
      }
    })
  ]
});
