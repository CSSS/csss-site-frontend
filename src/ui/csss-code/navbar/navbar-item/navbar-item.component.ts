import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { faChevronDown, faChevronRight, faFile } from '@fortawesome/free-solid-svg-icons';

export interface NavbarItem {
  key: string;
  label: string;
  type: 'file' | 'folder';
  children?: NavbarItem[];
  link?: string;
}

// TODO: Abstract this part out so that it's just the navigation section and
// the rebuild the csss-navbar so that it has the activity bar and the navbar.
@Component({
  selector: 'code-navbar-item',
  standalone: false,
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarItemComponent {
  /**
   * The navbar entry to render.
   */
  entry = input.required<NavbarItem>();

  /**
   * How deep deeply nested the navbar item is.
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
