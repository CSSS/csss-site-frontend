/* eslint-disable @typescript-eslint/no-extraneous-class */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from 'components/nav-bar/nav-bar.component';
import { TabsComponent } from 'components/tab-bar/tabs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
