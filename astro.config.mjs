import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sfucsss.org',
  output: 'static',
  integrations: [mdx()]
});
