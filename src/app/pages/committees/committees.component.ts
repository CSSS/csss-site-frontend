import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';

@Component({
  selector: 'cs-committees',
  imports: [ArticleComponent],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CommitteesComponent {}
