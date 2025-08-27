import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  linkedSignal,
  signal
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from '@csss-code/article/article.component';
import { ElectionsService } from 'libs/backend-api';
import { Select } from 'primeng/select';
import { combineLatest, filter, map, tap } from 'rxjs';
import { dateToSemester, ElectionViewModel } from './election.data';

@Component({
  selector: 'cs-elections-archive',
  imports: [ArticleComponent, Select, ReactiveFormsModule, FormsModule],
  templateUrl: './elections-archives.component.html',
  styleUrl: './elections-archives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectionsArchivesComponent {
  private electionsService = inject(ElectionsService);
  protected allElections = toSignal(
    this.electionsService.getElectionsList().pipe(
      map(elecs =>
        elecs.map((elec): ElectionViewModel => {
          const elecDate = new Date(elec.datetime_start_voting);
          return {
            ...elec,
            year: elecDate.getFullYear(),
            semester: dateToSemester(elecDate)
          };
        })
      )
    ),
    { initialValue: [] }
  );

  /**
   * The years used in the year selector.
   */
  protected selectorYears = computed(() => {
    return Array.from(
      this.allElections().reduce((set, e) => set.add(e.year), new Set<number>())
    ).sort((a, b) => b - a);
  });

  protected selectedYear = signal<number>(this.selectorYears()[0]);

  protected selectorElections = computed(() =>
    this.allElections().filter(e => e.year === this.selectedYear())
  );

  protected selectedElection = linkedSignal<ElectionViewModel[], ElectionViewModel | null>({
    source: this.selectorElections,
    computation: () => null
  });

  protected electionData = toSignal(
    combineLatest([toObservable(this.selectedYear), toObservable(this.selectedElection)]).pipe(
      filter(([year, election]) => year != null && election != null),
      tap(console.log)
      // TODO: Fetch data for the election here.
    )
  );
}
