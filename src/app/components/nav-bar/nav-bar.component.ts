import { BreakpointObserver } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  signal,
  viewChild
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
  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent): void {
    if (this.breakpointObs.isMatched(BREAKPOINT_STRING_MAP['small'])) {
      return;
    }
    if (
      !this.navBarEl()?.nativeElement.contains(event.target) &&
      !this.toggleButtonEl()?.nativeElement.contains(event.target) &&
      !this.activityListEl()?.nativeElement.contains(event.target)
    ) {
      this.isFileSystemOpen.set(false);
    }
  }

  /**
   * Navbar/file system element
   */
  navBarEl = viewChild<ElementRef>('navBar');

  /**
   * Button that toggles the visibility of the navbar
   */
  toggleButtonEl = viewChild<ElementRef>('toggleButton');

  /**
   * The activity list bar
   */
  activityListEl = viewChild<ElementRef>('activityList');

  /**
   * Navbar entries
   */
  protected entries = signal<NavbarItem[]>(NAVBAR_ENTRIES);

  /**
   * Flag representing if the menu is closed or open.
   */
  protected isFileSystemOpen = signal<boolean>(false);

  /**
   * Signal that converts the nav entries, in case they need to be dynamically instantiated.
   */
  protected navItems = computed(() => this.navEntryToItem(this.entries()));

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
