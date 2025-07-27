import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from '@csss-code/menu/menu-item/menu-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { csssLogo } from 'assets/icons/csss-logo';
import { NAVBAR_ENTRIES, NavbarItem } from 'components/nav-bar/navbar-entries';
import { BREAKPOINT_STRING_MAP } from 'styles/breakpoints';

@Component({
  selector: 'cs-nav-bar',
  imports: [FontAwesomeModule, MenuItemComponent, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
  /**
   * Navbar entries
   */
  entries = signal<NavbarItem[]>(NAVBAR_ENTRIES);

  /**
   * Flag representing if the menu is closed or open.
   */
  isFileSystemOpen = signal<boolean>(false);

  /**
   * Signal that converts the nav entries, in case they need to be dynamically instantiated.
   */
  navItems = computed(() => this.navEntryToItem(this.entries()));

  /**
   * Icon for the CSSS Logo.
   */
  protected csssIcon = csssLogo;

  /**
   * Icon for the file explorer in the activity bar.
   */
  protected copyIcon = faCopy;

  /**
   * Observer to view our breakpoint widths.
   */
  private breakpointObs = inject(BreakpointObserver);

  ngOnInit(): void {
    // On smaller screens, do not automatically open the navigation
    this.isFileSystemOpen.set(this.breakpointObs.isMatched(BREAKPOINT_STRING_MAP['small']));
  }

  /**
   * Recursively converts all the menu entries into object this menu can use
   */
  private navEntryToItem(entries: NavbarItem[]): NavbarItem[] {
    return entries.map(entry => {
      const children = entry.children?.length ? this.navEntryToItem(entry.children) : [];
      return {
        ...entry,
        children,
        isOpen: true
      };
    });
  }

  /**
   * Changes the menu state between open and closed
   */
  toggleFileSystem(): void {
    this.isFileSystemOpen.update(value => !value);
  }
}
