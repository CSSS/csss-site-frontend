import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface CodeMenuItem<T extends CodeMenuItem<T>> {
  key: string;
  label: string;
  children?: T[];
  isDisabled?: boolean;
  isHighlighted?: boolean;
}

@Component({
  selector: 'code-list-item',
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.paddingLeft.em]': '0.5 + depth() * 1.5'
  }
})
export class CodeListItemComponent<T extends CodeMenuItem<T>> {
  /**
   * The menu entry to render.
   */
  entry = input.required<T>();

  /**
   * How deep deeply nested the menu item is.
   * Base level is 0, each nesting level increases depth by 1.
   */
  depth = input<number>(0);
}
