import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  OnDestroy,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApplicationService } from 'services/application/application.service';
import { BREAKPOINT_STRING_MAP } from 'styles/breakpoints';
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
export class TabBarComponent implements AfterViewInit, OnDestroy {
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
   * Observer to watch when a breakpoint is hit.
   */
  private breakpointObs = inject(BreakpointObserver);

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
   * True if the screen width is considered small, false otherwise.
   */
  private isSmall: WritableSignal<boolean> = signal(false);

  /**
   * Hide the tabs bar if the screen size is small and there are no applications running.
   */
  isHidden: Signal<boolean> = computed(
    () => this.isSmall() && this.applicationService.runningApplications().size === 0
  );

  private breakpointSub?: Subscription;

  ngAfterViewInit(): void {
    this.breakpointSub = this.breakpointObs
      .observe(BREAKPOINT_STRING_MAP['small'])
      .subscribe(res => {
        if (res.breakpoints[BREAKPOINT_STRING_MAP['small']]) {
          this.isSmall.set(false);
        } else {
          this.isSmall.set(true);
        }
      });
  }

  ngOnDestroy(): void {
    this.breakpointSub?.unsubscribe();
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
