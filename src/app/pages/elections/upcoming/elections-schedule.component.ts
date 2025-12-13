import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { ButtonComponent } from '@csss-code/button/button.component';

@Component({
  selector: 'cs-upcoming',
  imports: [ArticleComponent, ButtonComponent],
  templateUrl: './elections-schedule.component.html',
  styleUrl: './elections-schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// FIXME: Make this dynamic
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ElectionsScheduleComponent {}
