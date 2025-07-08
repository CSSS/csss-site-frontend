import { Routes } from '@angular/router';
import { HomeComponent } from 'pages/home/home.component';

export const routes: Routes = [
  {
    path: 'affiliates',
    loadComponent: () =>
      import('./pages/affiliates/affiliates.component').then(m => m.AffiliatesComponent)
  },
  {
    path: 'readme',
    loadComponent: () => import('./pages/readme/readme.component').then(m => m.ReadMeComponent)
  },
  {
    path: 'common-room',
    loadComponent: () =>
      import('./pages/common-room/common-room.component').then(m => m.CommonRoomComponent)
  },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
