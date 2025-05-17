import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { NavbarItem } from '../navbar.component';
import { faChevronDown, faChevronRight, faFile } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

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
   * How deep deeply nested the navbar item is. Defaults to 0.
   */
  depth = input<number>(0);

  /**
   * Is the entry open or not.
   */
  isOpen = signal<boolean>(true);

  /**
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

  label = computed(() => {
    const entry = this.entry();
    return entry.type === 'file' ? `${entry.label}.md` : entry.label;
  });

  constructor(private router: Router) {}

  /**
   *  Handler for when the item is clicked.
   */
  onItemClick() {
    const entry = this.entry();
    switch (entry.type) {
      case 'file': {
        if (entry.link) {
          this.router.navigate([entry.link]);
        }
        break;
      }
      case 'folder': {
        this.isOpen.update(value => !value);
      }
    }
    return;
  }
}
