import { Routes } from '@angular/router';
import { HomeComponent } from 'pages/home/home.component';

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
  { path: '', component: HomeComponent, title: 'Computing Science Student Society' },
  { path: '**', component: HomeComponent }
];
