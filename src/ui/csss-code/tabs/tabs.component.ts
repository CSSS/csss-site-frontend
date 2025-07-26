import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'code-tab-bar',
  standalone: false,
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class TabsComponent {}
