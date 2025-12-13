import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';

@Component({
  selector: 'cs-upcoming',
  imports: [ArticleComponent],
  templateUrl: './elections-schedule.component.html',
  styleUrl: './elections-schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// FIXME: Make this dynamic
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ElectionsScheduleComponent {}
