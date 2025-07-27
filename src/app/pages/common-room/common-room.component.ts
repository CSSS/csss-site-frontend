import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { CardComponent } from '@csss-code/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'csss-common-room',
  imports: [ArticleComponent, CardComponent, FontAwesomeModule],
  templateUrl: './common-room.component.html',
  styleUrl: './common-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonRoomComponent {
  protected roomFinder = 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971';
  protected externalIcon = faArrowUpRightFromSquare;
}
