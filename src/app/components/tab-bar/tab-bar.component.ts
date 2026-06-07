import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  HostBinding,
  inject,
  signal,
  Signal,
  untracked
} from '@angular/core';
import { ApplicationService } from 'services/application/application.service';
import { UiService } from 'services/ui/ui.service';
import { STRUCTURE_MAP } from 'styles/structure';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
  imports: [FontAwesomeModule],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabBarComponent {
  protected closeIcon = faXmark;

  @HostBinding('style.height')
  get height(): string {
    return this.isHidden() ? '0px' : STRUCTURE_MAP['tab-bar-h'];
  }

  constructor() {
    effect(() => {
      this.tabs();
      untracked(() => this.hideTooltip());
    });
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
    const label = el.querySelector<HTMLElement>('.label');

    // Only show the tooltip when the label text is actually being clipped.
    if (!label || label.scrollWidth <= label.clientWidth) {
      return;
    }

    const rect = el.getBoundingClientRect();
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
    this.hideTooltip();
    this.applicationService.closeApplication(index);
  }
}
