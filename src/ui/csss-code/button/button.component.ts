import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'code-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  /**
   * The text on the button.
   */
  label = input.required<string>();

  /**
   * The icon of the button.
   */
  icon = input<IconDefinition>();
}
