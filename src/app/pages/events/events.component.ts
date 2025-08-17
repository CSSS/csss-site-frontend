import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { LinkComponent } from 'components/external-link/link.component';
import { EXTERNAL_LINKS } from 'components/external-link/links';

@Component({
  selector: 'cs-events',
  imports: [ArticleComponent, FontAwesomeModule, LinkComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent {
  externalLinkIcon = faUpRightFromSquare;
  roomFinderLink = EXTERNAL_LINKS['boardgameRoomMap'];
}
