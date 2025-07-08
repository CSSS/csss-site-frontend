import { writeFileSync } from 'fs';
import { VIEW_BREAKPOINTS } from 'styles/breakpoints';
import { STRUCTURE_MAP } from 'styles/structure';

let output =
  Object.entries(VIEW_BREAKPOINTS)
    .map(([k, v]) => `$breakpoint-${k}: ${v}px;`)
    .join('\n') + '\n';

writeFileSync('src/styles/_breakpoints.scss', output);

console.log('Generated SCSS file for breakpoints.');

output =
  Object.entries(STRUCTURE_MAP)
    .map(([k, v]) => `$${k}: ${v};`)
    .join('\n') + '\n';

writeFileSync('src/styles/_structure.scss', output);
console.log('Generated SCSS file for structure.');
