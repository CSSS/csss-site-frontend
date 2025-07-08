import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { ApplicationService } from 'services/application.service';

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
export class TabsComponent {
  /**
   * Gives the tabs the applications to display.
   */
  private applicationService = inject(ApplicationService);

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

  /**
   *
   */
  isHidden: Signal<boolean> = computed(
    () => this.applicationService.runningApplications().size === 0
  );

  closeTab(index: number): void {
    this.applicationService.closeApplication(index);
  }
}
