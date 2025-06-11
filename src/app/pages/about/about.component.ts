import { Component } from '@angular/core';
import { CsssCodeModule } from '../../../ui/csss-code/csss-code.module';
import { csssLogo } from '../../../assets/icons/csss-logo';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from 'components/footer/footer.component';

@Component({
  selector: 'csss-about',
  imports: [CsssCodeModule, FontAwesomeModule, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  csssIcon = csssLogo;
}
