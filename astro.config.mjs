import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import compress from 'astro-compress';

export default defineConfig({
  site: 'https://new.sfucsss.org',
  output: 'static',
  integrations: [mdx(), compress()]
});

