import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CsssCodeModule } from '../ui/csss-code/csss-code.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CsssCodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'csss-ng-frontend';
}
