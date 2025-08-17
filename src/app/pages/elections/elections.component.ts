import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { CodeTabGroupComponent } from '@csss-code/tabs/tab-group/tab-group.component';
import { CodeTabComponent } from '@csss-code/tabs/tab.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { ExternalLinkComponent } from 'components/url/external-link/external-link.component';
import { ELECTED_DESCRIPTIONS, EXEC_DESCRIPTIONS } from 'pages/officers/officers.data';

@Component({
  selector: 'cs-elections',
  imports: [
    NgTemplateOutlet,
    ArticleComponent,
    FontAwesomeModule,
    ExternalLinkComponent,
    CodeTabGroupComponent,
    CodeTabComponent
  ],
  templateUrl: './elections.component.html',
  styleUrl: './elections.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectionsComponent {
  checkIcon = faSquareCheck;

  executives = EXEC_DESCRIPTIONS;
  representatives = ELECTED_DESCRIPTIONS;
}
