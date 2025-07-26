import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import {
  faChevronDown,
  faChevronRight,
  faFile,
  faRoadBarrier
} from '@fortawesome/free-solid-svg-icons';
import { NavbarItem } from 'components/nav-bar/navbar-entries';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

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
  entry = input.required<NavbarItem>();

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
   * TODO: Make it so you can give it any icons you want.
   * Icon to display.
   * Signal derived from the entry type and the `isOpen` flag.
   */
  icon = computed(() => {
    const entry = this.entry();
    switch (entry.type) {
      case 'file': {
        return faFile;
      }
      case 'folder': {
        return this.isOpen() ? faChevronDown : faChevronRight;
      }
      case 'wip': {
        return faRoadBarrier;
      }
    }
  });

  /**
   *  Handler for when the item is clicked.
   */
  itemClick(): void {
    const entry = this.entry();
    switch (entry.type) {
      case 'folder': {
        this.isOpen.update(value => !value);
        break;
      }
      default: {
        return;
      }
    }
  }
}
