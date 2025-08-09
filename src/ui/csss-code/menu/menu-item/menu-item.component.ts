import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';

export interface MenuItem {
  key: string;
  label: string;
  icon: IconDefinition | ((state: boolean) => IconDefinition);
  children?: MenuItem[];
  link?: string;
  isDisabled?: boolean;
}

@Component({
  selector: 'code-menu-item',
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  /**
   * The menu entry to render.
   */
  entry = input.required<MenuItem>();

  /**
   * How deep deeply nested the menu item is.
   * Base level is 0, each nesting level increases depth by 1.
   */
  depth = input<number>(0);

  /**
   * Is the entry open or not.
   * Only relevant if there are children for this component.
   */
  isOpen = signal<boolean>(true);

  /**
   * Icon to display.
   * Signal derived from the entry type and the `isOpen` flag.
   */
  icon = computed(() => {
    const icon = this.entry().icon;
    return typeof icon === 'function' ? icon(this.isOpen()) : icon;
  });

  /**
   *  Handler for when the item is clicked.
   */
  itemClick(): void {
    if (this.entry().link) {
      return;
    }

    this.isOpen.update(b => !b);
  }
}
