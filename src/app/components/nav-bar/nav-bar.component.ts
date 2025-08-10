import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  signal,
  viewChild
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CodeListItemComponent } from '@csss-code/list/list-item/list-item.component';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import { csssLogo } from 'assets/icons/csss-logo';
import { NAVBAR_ENTRIES, NavItem } from 'components/nav-bar/nav-bar.data';
import { UiService } from 'services/ui/ui.service';
import { BREAKPOINT_STRING_MAP } from 'styles/breakpoints';

@Component({
  selector: 'cs-nav-bar',
  imports: [CommonModule, FontAwesomeModule, CodeListItemComponent, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  /**
   * Handles mouse clicks that occur outside of the UI components.
   * @param event - Mouse click
   */
  handleOutsideClick(event: MouseEvent): void {
    if (this.breakpointObs.isMatched(BREAKPOINT_STRING_MAP['large'])) {
      return;
    }
    if (
      !this.navBarEl()?.nativeElement.contains(event.target) &&
      !this.toggleButtonEl()?.nativeElement.contains(event.target) &&
      !this.activityListEl()?.nativeElement.contains(event.target)
    ) {
      this.uiService.isFileSystemOpen.set(false);
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
   * Icon for the CSSS Logo.
   */
  protected csssIcon = csssLogo;

  /**
   * Icon for the file explorer in the activity bar.
   */
  protected copyIcon = faCopy;

  /**
   * Service to control the UI
   */
  protected uiService = inject(UiService);

  /**
   * Navbar entries
   */
  protected navEntries = signal<NavItem[]>(NAVBAR_ENTRIES);
  /**
   * Observer to view our breakpoint widths.
   */
  private breakpointObs = inject(BreakpointObserver);

  private router = inject(Router);

  ngOnInit(): void {
    // On smaller screens, do not automatically open the navigation
    this.uiService.isFileSystemOpen.set(this.uiService.isLargeViewport());
  }

  /**
   * Changes the menu state between open and closed
   */
  toggleFileSystem(): void {
    this.uiService.isFileSystemOpen.update(value => !value);
  }

  /**
   * Changes the icon based on the open state.
   *
   * @param isOpen - True if the directory is open, false otherwise.
   * @returns Open icon if true, closed icon if false.
   */
  getDirectoryIcon(isOpen?: boolean): IconDefinition {
    return isOpen ? faChevronDown : faChevronRight;
  }

  /**
   * Opens or closes the nav entry.
   *
   * @param key - Key of the nav entry
   */
  toggleDirectory(key: string): void {
    this.navEntries.update(entries => {
      return entries.map(e => {
        if (e.key === key) {
          e.isOpen = !e.isOpen;
        }
        return e;
      });
    });
  }

  /**
   * Opens the route.
   *
   * @param url - URL to navigate to
   */
  async navigate(url?: string): Promise<void> {
    if (!url) {
      return;
    }
    await this.router.navigate([url]);
    if (!this.uiService.isLargeViewport()) {
      this.uiService.isFileSystemOpen.set(false);
    }
  }
}
