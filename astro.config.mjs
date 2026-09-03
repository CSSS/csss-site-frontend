import mdx from '@astrojs/mdx';
import { defineConfig, fontProviders } from 'astro/config';

import compress from 'astro-compress';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://new.sfucsss.org',
  output: 'static',
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Cal Sans',
      cssVariable: '--font-heading',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/cal-sans-v2-latin-regular.woff2'],
            weight: 'normal',
            style: 'normal'
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-body',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/geist-mono-v6-latin-regular.woff2'],
            weight: 'normal',
            style: 'normal'
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/geist-mono-v6-latin-700.woff2'],
            weight: 700,
            style: 'bold'
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: 'Geist Mono',
      cssVariable: '--font-geist-mono',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/geist-mono-v6-latin-italic.woff2'],
            weight: 'normal',
            style: 'italic'
          }
        ]
      }
    }
  ],
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
