/* eslint-disable @typescript-eslint/no-extraneous-class */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from 'components/nav-bar/nav-bar.component';
import { TabBarComponent } from 'components/tab-bar/tab-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, TabBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
