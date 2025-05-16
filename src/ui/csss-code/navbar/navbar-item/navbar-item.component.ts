import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'csss-navbar-item',
  standalone: false,
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarItemComponent {
  descriptor = input.required<string>();
  icon = input<IconDefinition>();
}
