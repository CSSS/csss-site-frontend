import { Component } from '@angular/core';
import { CsssCodeModule } from '../../../ui/csss-code/csss-code.module';
import { navEntries } from 'pages/navbar-entries';

@Component({
  selector: 'csss-navbar',
  imports: [CsssCodeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarEntries = navEntries;
}
