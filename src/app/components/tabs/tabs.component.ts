import { ChangeDetectionStrategy, Component, computed, Signal } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { TabBarItem } from '@csss-code/tabbar/tabbar.component';
import { ApplicationService } from 'services/application.service';

@Component({
  selector: 'csss-tabs',
  imports: [CsssCodeModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent {
  tabs: Signal<TabBarItem[]> = computed(() => {
    const result: TabBarItem[] = [];
    for (const app of this.applicationService.runningApplications().values()) {
      result.push({ id: app.id, label: app.label });
    }
    console.log(result);
    return result;
  });

  constructor(private applicationService: ApplicationService) {
    console.log('Created');
  }
}
