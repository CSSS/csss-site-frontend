import { VIEW_BREAKPOINTS } from '../../src/styles/breakpoints';
import { writeFileSync } from 'fs';

const output =
  Object.entries(VIEW_BREAKPOINTS)
    .map(([k, v]) => `$breakpoint-${k}: ${v}px;`)
    .join('\n') + '\n';

writeFileSync('src/styles/_breakpoints.scss', output);

console.log('Generated SCSS file for breakpoints.');
