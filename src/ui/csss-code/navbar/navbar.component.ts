import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal
} from '@angular/core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { csssLogo } from 'assets/icons/csss-logo';
import { VIEW_BREAKPOINTS } from 'styles/breakpoints';
import { NavbarItem } from './navbar-item/navbar-item.component';

@Component({
  selector: 'code-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  /**
   * The title at the top of the header
   */
  title = input.required<string>();

  /**
   * Navbar entries
   */
  entries = input.required<NavbarItem[]>();

  /**
   * Flag representing if the navbar is closed or open.
   */
  isNavOpen = signal<boolean>(false);

  /**
   * Signal that converts the nav entries, in case they need to be dynamically instantiated.
   */
  navItems = computed(() => this.navEntryToItem(this.entries()));

  csssIcon = csssLogo;

  /**
   * Icon for the file explorer in the activity bar.
   */
  copyIcon = faCopy;

  /**
   * Observer to view our breakpoint widths.
   */
  private breakpointObs = inject(BreakpointObserver);

  ngOnInit(): void {
    // On smaller screens, do not automatically open the navigation
    this.isNavOpen.set(this.breakpointObs.isMatched(`(min-width: ${VIEW_BREAKPOINTS.small}px)`));
  }

  /**
   * Recursively converts all the navbar entries into object this navbar can use
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

  toggleNavbar() {
    this.isNavOpen.update(value => !value);
  }
}
