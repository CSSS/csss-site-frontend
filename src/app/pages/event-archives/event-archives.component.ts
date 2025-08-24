import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import {
  FALL_HACKS_YEARS,
  FROSH_YEARS,
  MOUNTAIN_MADNESS_YEARS,
  TECH_FAIR_YEARS
} from './events-archive.data';

@Component({
  selector: 'cs-event-archives',
  imports: [ArticleComponent],
  templateUrl: './event-archives.component.html',
  styleUrl: './event-archives.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventArchivesComponent {
  protected froshYears = FROSH_YEARS;
  protected fallHacksYears = FALL_HACKS_YEARS;
  protected techFairYears = TECH_FAIR_YEARS;
  protected mountainMadnessYears = MOUNTAIN_MADNESS_YEARS;

  makeHref(event: string, year: number): string {
    return `https://${event}.sfucsss.org/${year}`;
  }
}
