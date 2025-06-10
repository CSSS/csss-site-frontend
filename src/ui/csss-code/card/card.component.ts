import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'code-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  /**
   * URL of the image to use.
   * This image will cover the entire card.
   */
  backgroundImage = input<string>();
}
