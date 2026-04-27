import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'code-card',
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.hoverable]': 'isHoverOn()'
  }
})
export class CardComponent {
  elementRef = inject(ElementRef);

  /**
   * URL of the image to use.
   * This image will cover the entire card.
   * Input should include the full path.
   */
  public bgImg = input('');

  /**
   * Flag for the hover effect.
   * If true hovering over the card makes it scale bigger,
   * false makes the card have no hover effects.
   */
  public isHoverOn = input(true);
}
