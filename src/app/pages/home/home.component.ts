import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { csssLogo } from 'assets/icons/csss-logo';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { faFile, faSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { RainbowDirective } from './directives/rainbow.directive';

@Component({
  selector: 'csss-home',
  imports: [FontAwesomeModule, CsssCodeModule, RainbowDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  csssIcon = csssLogo;
  squareIcon = faSquare;
  fileIcon = faFile;

  private router = inject(Router);

  aboutAction() {
    this.router.navigate(['/about']);
  }

  readmeAction() {
    this.router.navigate(['/readme']);
  }
}
