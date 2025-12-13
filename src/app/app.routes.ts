import { Routes } from '@angular/router';
import { HomeComponent } from 'pages/home/home.component';

export enum SiteRoute {
  ReadMe = '/readme',
  Officers = '/officers',
  Committees = '/committees',
  Affiliates = '/affiliates',
  CommonRoom = '/common-room',
  Events = '/events',
  EventsArchives = '/events/archives',
  Elections = '/elections',
  ElectionsSchedule = '/elections/schedule',
  ElectionsSpeeches = '/elections/speeches'
}

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
    title: makeTitle('README'),
    data: {
      description: 'Welcome to the Computing Science Student Society!'
    }
  },
  {
    path: 'officers',
    loadComponent: () =>
      import('./pages/officers/officers.component').then(m => m.OfficersComponent),
    title: makeTitle('Officers'),
    data: {
      description: 'Meet the officers that keep the CSSS running.'
    }
  },
  {
    path: 'committees',
    loadComponent: () =>
      import('./pages/committees/committees.component').then(m => m.CommitteesComponent),
    title: makeTitle('Committees'),
    data: {
      description: 'Learn about the committees that make up the CSSS.'
    }
  },
  {
    path: 'common-room',
    loadComponent: () =>
      import('./pages/common-room/common-room.component').then(m => m.CommonRoomComponent),
    title: makeTitle('Common Room'),
    data: {
      description: 'Come hang out with us in the Common Room.'
    }
  },
  {
    path: 'affiliates',
    loadComponent: () =>
      import('./pages/affiliates/affiliates.component').then(m => m.AffiliatesComponent),
    title: makeTitle('Affiliates'),
    data: {
      description: 'Find out about other societies and clubs that our members interact with'
    }
  },
  // Events
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
    title: makeTitle('Events'),
    data: {
      description: 'Discover the events the CSSS hosts.'
    }
  },
  {
    path: 'events/archives',
    loadComponent: () =>
      import('pages/event-archives/event-archives.component').then(m => m.EventArchivesComponent),
    title: makeTitle('Event Archives'),
    data: {
      description: 'Explore the old event pages past executive teams created.'
    }
  },
  // Elections
  {
    path: 'elections',
    loadComponent: () =>
      import('./pages/elections/elections.component').then(m => m.ElectionsComponent),
    title: makeTitle('Elections'),
    data: {
      description: 'Learn about the responsibilities of our executives and how you can become one.'
    }
  },
  {
    path: 'elections/schedule',
    loadComponent: () =>
      import('pages/elections/upcoming/elections-schedule.component').then(
        m => m.ElectionsScheduleComponent
      ),
    title: makeTitle('Elections'),
    data: {
      description: 'View upcoming, current, and past elections.'
    }
  },
  {
    path: 'elections/speeches',
    loadComponent: () =>
      import('./pages/elections/election-speeches/election-speeches.component').then(
        m => m.ElectionSpeechesComponent
      ),
    title: makeTitle('Elections'),
    data: {
      description: 'Learn more about the candidates who want to make our society a better place.'
    }
  },
  { path: '', component: HomeComponent, title: 'Computing Science Student Society' },
  // 404 will go down there
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: makeTitle('Not Found'),
    data: {
      meta: 'noindex'
    }
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
