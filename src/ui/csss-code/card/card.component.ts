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

  protected bgImage = signal<string>('');

  ngOnInit(): void {
    this.setBackground(this.backgroundImage());
  }

  setBackground(imageURL: string): void {
    this.bgImage.set(pathToCssUrl(imageURL));
  }
}
