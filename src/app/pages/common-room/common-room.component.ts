import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'csss-common-room',
  imports: [CsssCodeModule, FontAwesomeModule],
  templateUrl: './common-room.component.html',
  styleUrl: './common-room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonRoomComponent {
  protected roomFinder = 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971';
  protected externalIcon = faArrowUpRightFromSquare;
}
