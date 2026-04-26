import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

export interface CodeListItem<T extends CodeListItem<T>> {
  key: string;
  label: string;
  children?: T[];
  isDisabled?: boolean;
}

@Component({
  selector: '[code-list-item]',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-disabled]': 'entry().isDisabled',
    '[style.paddingLeft.em]': '0.5 + depth() * 1.5'
  }
})
export class CodeListItemComponent<T extends CodeListItem<T>> {
  /**
   * The menu entry to render.
   */
  entry = input.required<T>();

  /**
   * How deeply nested the menu item is.
   * Base level is 0, each nesting level increases depth by 1.
   */
  depth = input<number>(0);

  icon = input<IconDefinition>();
}
