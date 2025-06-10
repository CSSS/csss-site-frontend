import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { csssLogo } from 'assets/icons/csss-logo';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'csss-home',
  imports: [FontAwesomeModule, CsssCodeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  csssIcon = csssLogo;
  fileIcon = faFile;

  private router = inject(Router);

  aboutAction() {
    this.router.navigate(['/about']);
  }

  readmeAction() {
    this.router.navigate(['/readme']);
  }
}
