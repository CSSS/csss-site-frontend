import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ArticleComponent } from '@csss-code/article/article.component';
import { ElectionsService } from 'libs/backend-api';

@Component({
  selector: 'cs-elections-archive',
  imports: [ArticleComponent],
  templateUrl: './elections-archives.component.html',
  styleUrl: './elections-archives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectionsArchivesComponent {
  private electionsService = inject(ElectionsService);
  protected elections = toSignal(this.electionsService.getElectionsList(), { initialValue: [] });
  protected years = computed<Set<number>>(() => {
    return this.elections().reduce(
      (set, e) => set.add(new Date(e.datetime_start_nominations).getFullYear()),
      new Set<number>()
    );
  });
}
