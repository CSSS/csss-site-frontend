import { Routes } from '@angular/router';
import { AboutComponent } from 'pages/about/about.component';
import { AffiliatesComponent } from 'pages/affiliates/affiliates.component';
import { HomeComponent } from 'pages/home/home.component';
import { ReadMeComponent } from 'pages/readme/readme.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'affiliates', component: AffiliatesComponent },
  { path: 'readme', component: ReadMeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
