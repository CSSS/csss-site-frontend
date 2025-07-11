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
import { BREAKPOINT_STRING_MAP } from 'styles/breakpoints';
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

  /**
   * Changes the navbar state between open and closed
   */
  toggleFileSystem(): void {
    this.isFileSystemOpen.update(value => !value);
  }
}
