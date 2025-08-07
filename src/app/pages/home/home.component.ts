import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@csss-code/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile, faSquare } from '@fortawesome/free-solid-svg-icons';
import { csssLogo } from 'assets/icons/csss-logo';
import { RainbowDirective } from './directives/rainbow.directive';

@Component({
  selector: 'cs-home',
  imports: [FontAwesomeModule, RainbowDirective, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  csssIcon = csssLogo;
  squareIcon = faSquare;
  fileIcon = faFile;

  private router = inject(Router);

  readmeAction(): void {
    this.router.navigate(['/readme']);
  }

  aFunction(): void {
    return;
  }
}
