import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fallHacksBg, fallHacksCode } from './fall-hacks.svg';

@Component({
  selector: 'cs-fall-hacks-icon',
  imports: [FontAwesomeModule],
  templateUrl: './fall-hacks-icon.component.html',
  styleUrl: './fall-hacks-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FallHacksIconComponent {
  fallHacksBg = fallHacksBg;
  fallHacksCode = fallHacksCode;
}
