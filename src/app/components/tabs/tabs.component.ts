import { ChangeDetectionStrategy, Component, computed, inject, Signal } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { ApplicationService } from 'services/application.service';

export interface TabBarItem {
  label: string;
}

@Component({
  selector: 'csss-tabs',
  imports: [CsssCodeModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  private applicationService = inject(ApplicationService);
  tabs: Signal<TabBarItem[]> = computed(() => {
    const result: TabBarItem[] = [];
    for (const app of this.applicationService.runningApplications().values()) {
      result.push({ label: app.label });
    }
    return result;
  });
}
