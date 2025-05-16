import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CsssCodeModule } from '../ui/csss-code/csss-code.module';
import { navbarEntries } from 'pages/navbar-entries';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CsssCodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'csss-ng-frontend';
  navbarEntries = navbarEntries;
}
