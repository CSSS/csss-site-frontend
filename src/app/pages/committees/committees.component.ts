import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { EmailLinkComponent } from 'components/url/email-link/email-link.component';
import { ExternalLinkComponent } from 'components/url/external-link/external-link.component';

@Component({
  selector: 'cs-committees',
  imports: [ArticleComponent, EmailLinkComponent, ExternalLinkComponent],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CommitteesComponent {}
