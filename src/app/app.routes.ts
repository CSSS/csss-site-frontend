import { Routes } from '@angular/router';
import { HomeComponent } from 'pages/home/home.component';

/**
 * Formats the title on the web browser's tab/window.
 * @param pageTitle - Title of the page
 * @returns Formatted page title.
 */
function makeTitle(pageTitle: string): string {
  return `${pageTitle} | CSSS`;
}

export const routes: Routes = [
  // The CSSS
  {
    path: 'readme',
    loadComponent: () => import('./pages/readme/readme.component').then(m => m.ReadMeComponent),
    title: makeTitle('README')
  },
  {
    path: 'officers',
    loadComponent: () =>
      import('./pages/officers/officers.component').then(m => m.OfficersComponent),
    title: makeTitle('Officers')
  },
  {
    path: 'committees',
    loadComponent: () =>
      import('./pages/committees/committees.component').then(m => m.CommitteesComponent),
    title: makeTitle('Committees')
  },
  {
    path: 'common-room',
    loadComponent: () =>
      import('./pages/common-room/common-room.component').then(m => m.CommonRoomComponent),
    title: makeTitle('Common Room')
  },
  {
    path: 'affiliates',
    loadComponent: () =>
      import('./pages/affiliates/affiliates.component').then(m => m.AffiliatesComponent),
    title: makeTitle('Affiliates')
  },
  // Events
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
    title: makeTitle('Events')
  },
  // Elections
  {
    path: 'elections',
    loadComponent: () =>
      import('./pages/elections/elections.component').then(m => m.ElectionsComponent),
    title: makeTitle('Elections')
  },
  { path: '', component: HomeComponent, title: 'Computing Science Student Society' },
  // 404 will go down there
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: makeTitle('Not Found')
  }
] as const;

const BASE_ROUTES = routes.reduce((acc, route) => {
  if (!route.path || route.path === '**') {
    return acc;
  }
  acc.push(route.path);
  return acc;
}, [] as string[]);

/**
 * Gets the base route as a string.
 *
 * @param route - Route to get
 * @returns The route if it exists or 404
 */
export function getBaseRoute(route: string): string {
  return BASE_ROUTES.find(r => r === route) ?? '404';
}
