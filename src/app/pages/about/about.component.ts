import { Component } from '@angular/core';
import { CsssCodeModule } from '../../../ui/csss-code/csss-code.module';
import { csssLogo } from '../../../assets/icons/csss-logo';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'csss-about',
  imports: [CsssCodeModule, FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  csssIcon = csssLogo;
}
