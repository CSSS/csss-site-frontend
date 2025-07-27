import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faUpRightFromSquare';

@Component({
  selector: 'cs-events',
  imports: [ArticleComponent, FontAwesomeModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsComponent {
  externalLinkIcon = faUpRightFromSquare;
  roomFinderLink = 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=TASC1%209204';
}
