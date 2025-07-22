import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { pathToCssUrl } from 'utils/stringUtils';

@Component({
  selector: 'code-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  /**
   * URL of the image to use.
   * This image will cover the entire card.
   * Input should include the full path.
   */
  public backgroundImage = input('');

  /**
   * Flag for the hover effect.
   * If true hovering over the card makes it scale bigger,
   * false makes the card have no hover effects.
   */
  protected isHoverOn = input(true);

  /**
   * Background image of the card.
   * Will take up the entire card size.
   */
  protected bgImage = signal<string>('');

  ngOnInit(): void {
    this.setBackground(this.backgroundImage());
  }

  setBackground(imageURL: string): void {
    this.bgImage.set(pathToCssUrl(imageURL));
  }
}
