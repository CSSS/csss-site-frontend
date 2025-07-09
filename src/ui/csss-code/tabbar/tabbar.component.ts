import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'code-tabbar',
  standalone: false,
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TabBarComponent {}
