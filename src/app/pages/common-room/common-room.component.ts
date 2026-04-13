import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeArticleComponent } from '@csss-code/article/article.component';
import { CardComponent } from '@csss-code/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { EXTERNAL_LINKS } from 'components/url/links.data';

@Component({
  selector: 'cs-common-room',
  imports: [CodeArticleComponent, CardComponent, FontAwesomeModule],
  templateUrl: './common-room.component.html',
  styleUrl: './common-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonRoomComponent {
  protected roomFinder = EXTERNAL_LINKS['commonRoomMap'];
  protected externalIcon = faArrowUpRightFromSquare;
}
