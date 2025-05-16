import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'csss-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {}
