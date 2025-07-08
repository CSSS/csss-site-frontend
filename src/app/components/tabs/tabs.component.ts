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
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { Subscription } from 'rxjs';
import { ApplicationService } from 'services/application.service';
import { BREAKPOINT_STRING_MAP } from 'styles/breakpoints';

export interface TabBarItem {
  label: string;
  id: number;
}

@Component({
  selector: 'csss-tabs',
  imports: [CsssCodeModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterViewInit, OnDestroy {
  @HostBinding('style.height')
  get height() {
    return this.isHidden() ? '0px' : '2rem';
  }

  /**
   * Gives the tabs the applications to display.
   */
  private applicationService = inject(ApplicationService);

  private breakpointObs = inject(BreakpointObserver);

  /**
   * The tabs that should be displayed.
   */
  tabs: Signal<TabBarItem[]> = computed(() => {
    const result: TabBarItem[] = [];
    for (const app of this.applicationService.runningApplications().values()) {
      result.push({ label: app.label, id: app.id });
    }
    return result;
  });

  private isSmall: WritableSignal<boolean> = signal(false);

  isHidden: Signal<boolean> = computed(
    () => this.isSmall() && this.applicationService.runningApplications().size === 0
  );

  private breakpointSub?: Subscription;

  /**
   * Hide the tab bar if the screen size is small and there are no applications running.
   */

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

  /**
   * Informs the application service to close a tab.
   *
   * @param index - The index of the tab to close.
   */
  closeTab(index: number): void {
    this.applicationService.closeApplication(index);
  }
}
