import { RenderMode, ServerRoute } from '@angular/ssr';
import { SiteRoute } from './app.routes';

const PRERENDERED_ROUTES: ServerRoute[] = Object.values(SiteRoute).map(path => ({
  path: path.replace(/^\//, ''),
  renderMode: RenderMode.Prerender
}));

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client
  },
  ...PRERENDERED_ROUTES,
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
