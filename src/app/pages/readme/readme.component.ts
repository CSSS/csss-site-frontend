import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'csss-readme',
  imports: [CsssCodeModule, RouterModule, FontAwesomeModule],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMeComponent {
  arrowIcon = faArrowDown;
}
