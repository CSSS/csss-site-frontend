import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface TabBarItem {
  id: number;
  label: string;
}

@Component({
  selector: 'code-tabbar',
  standalone: false,
  templateUrl: './tabbar.component.html',
  styleUrl: './tabbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBarComponent {
  tabs = input.required<TabBarItem[]>();
}
