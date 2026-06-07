import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  signal,
  Signal
} from '@angular/core';
import { ApplicationService } from 'services/application/application.service';
import { UiService } from 'services/ui/ui.service';
import { STRUCTURE_MAP } from 'styles/structure';

interface TooltipData {
  text: string;
  x: number;
  y: number;
  visible: boolean;
}

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

  tooltipData = signal<TooltipData>({
    text: '',
    x: 0,
    y: 0,
    visible: false
  });

  /**
   * Hide the tabs bar if the screen size is small and there are no applications running.
   */
  isHidden: Signal<boolean> = computed(
    () =>
      !this.uiService.isLargeViewport() && this.applicationService.runningApplications().size === 0
  );

  /**
   * Shows a popup of label when tab is hovered and smaller tabs.
   */
  showTooltip(tab: TabBarItem, event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const tabWidth = rect.width;

    // Only show when the tab label is actually clipped (~7rem = 112px)
    if (tabWidth >= 112) return;

    this.tooltipData.set({
      text: tab.label,
      x: rect.left + rect.width / 2,
      y: rect.bottom + 6,
      visible: true
    });
  }

  hideTooltip(): void {
    this.tooltipData.update(state => ({
      ...state,
      visible: false
    }));
  }

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
