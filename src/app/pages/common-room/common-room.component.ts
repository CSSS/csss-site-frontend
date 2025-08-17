import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { CardComponent } from '@csss-code/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { EXTERNAL_LINKS } from 'components/external-link/links';

@Component({
  selector: 'cs-common-room',
  imports: [ArticleComponent, CardComponent, FontAwesomeModule],
  templateUrl: './common-room.component.html',
  styleUrl: './common-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonRoomComponent {
  protected roomFinder = EXTERNAL_LINKS['commonRoomMap'];
  protected externalIcon = faArrowUpRightFromSquare;
}
