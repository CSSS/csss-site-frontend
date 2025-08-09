import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  Signal
} from '@angular/core';
import { ApplicationService } from 'services/application/application.service';
import { UiService } from 'services/ui/ui.service';
import { STRUCTURE_MAP } from 'styles/structure';

export interface TabBarItem {
  label: string;
  id: number;
  route: string;
  focused: boolean;
}

@Component({
  selector: 'cs-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBarComponent {
  @HostBinding('attr.aria-role') get ariaRole(): string {
    return 'tablist';
  }

  @HostBinding('style.height')
  get height(): string {
    return this.isHidden() ? '0px' : STRUCTURE_MAP['tab-bar-h'];
  }

  /**
   * Gives the tabs-bar the applications to display.
   */
  private applicationService = inject(ApplicationService);

  /**
   * Gives the tab bar notice of when breakpoints are hit.
   */
  private uiService = inject(UiService);

  /**
   * The tabs-bar that should be displayed.
   */
  tabs: Signal<TabBarItem[]> = computed(() => {
    const result: TabBarItem[] = [];
    const focusedApp = this.applicationService.focusedApplication()?.id;
    for (const app of this.applicationService.runningApplications().values()) {
      result.push({
        label: app.label,
        id: app.id,
        route: app.route,
        focused: focusedApp === app.id
      });
    }
    return result;
  });

  /**
   * Hide the tabs bar if the screen size is small and there are no applications running.
   */
  isHidden: Signal<boolean> = computed(
    () =>
      !this.uiService.isLargeViewport() && this.applicationService.runningApplications().size === 0
  );

  focusTab(tab: TabBarItem): void {
    this.applicationService.router.navigateByUrl(tab.route);
  }

  /**
   * Informs the application service to close a tabs.
   *
   * @param index - The index of the tabs to close.
   */
  closeTab(index: number): void {
    this.applicationService.closeApplication(index);
  }
}
