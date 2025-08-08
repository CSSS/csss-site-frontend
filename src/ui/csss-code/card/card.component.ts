import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  inject,
  input
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { pathToCssUrl } from 'utils/string-utils';

@Component({
  selector: 'code-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  /**
   * The CSS background image URL.
   */
  @HostBinding('style.background-image') protected get backgroundImage(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(pathToCssUrl(this.bgImg()));
  }

  /**
   * The CSS class that enables this to be hoverable.
   */
  @HostBinding('class.hoverable') get hoverable(): boolean {
    return this.isHoverOn();
  }

  public elementRef = inject(ElementRef);

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

  /**
   * Sanitizes inputs for Angular.
   */
  private sanitizer = inject(DomSanitizer);
}
