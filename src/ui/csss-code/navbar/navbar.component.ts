import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { NavEntry } from 'pages/navbar-entries';
import { csssLogo } from '../../../assets/icons/csss-logo';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

export interface NavbarItem extends NavEntry {
  children: NavbarItem[];
}

@Component({
  selector: 'code-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  /**
   * Navbar entries
   */
  entries = input.required<NavEntry[]>();

  /**
   * Flag representing if the navbar is closed or open.
   */
  isOpen = signal<boolean>(true);

  /**
   * Signal that converts the nav entries, in case they need to be dynamically instantiated.
   */
  navItems = computed(() => this.navEntryToItem(this.entries()));

  csssIcon = csssLogo;
  folderIcon = faFolder;

  /**
   * Recursively converts all the navbar entries into object this navbar can use
   */
  private navEntryToItem(entries: NavEntry[]): NavbarItem[] {
    return entries.map(entry => {
      const children = entry.children?.length ? this.navEntryToItem(entry.children) : [];
      return {
        ...entry,
        children,
        isOpen: true
      };
    });
  }

  toggleNavbar() {
    this.isOpen.update(value => !value);
  }

  openNavbar() {
    this.isOpen.set(true);
  }
}
