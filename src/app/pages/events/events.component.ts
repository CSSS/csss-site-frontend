import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeArticleComponent } from '@csss-code/article/article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { ExternalLinkComponent } from 'components/url/external-link/external-link.component';
import { EXTERNAL_LINKS } from 'components/url/links.data';

@Component({
  selector: 'cs-events',
  imports: [CodeArticleComponent, FontAwesomeModule, ExternalLinkComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent {
  externalLinkIcon = faUpRightFromSquare;
  roomFinderLink = EXTERNAL_LINKS['boardgameRoomMap'];
}
