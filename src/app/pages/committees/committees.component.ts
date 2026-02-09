import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeArticleComponent } from '@csss-code/article/article.component';
import { EmailLinkComponent } from 'components/url/email-link/email-link.component';
import { ExternalLinkComponent } from 'components/url/external-link/external-link.component';

@Component({
  selector: 'cs-committees',
  imports: [CodeArticleComponent, EmailLinkComponent, ExternalLinkComponent],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CommitteesComponent {}
