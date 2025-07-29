import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  signal
} from '@angular/core';

@Component({
  selector: 'code-tab',
  host: {
    '[attr.aria-selected]': 'isActive()',
    '[attr.aria-disabled]': 'isDisabled()',
    '[attr.aria-label]': 'label()'
  },
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeTabComponent {
  /**
   * The index of the tab, based on the current order from left to right.
   */
  tabIndex = signal<number>(-1);

  /**
   * Text on the tab button.
   */
  label = input.required<string>();

  /**
   * True if it's the active tab, false otherwise.
   */
  isActive = signal<boolean>(false);

  /**
   * True if the tab is disabled, false otherwise.
   */
  isDisabled = signal<boolean>(false);

  /**
   * The element reference of the tab.
   */
  elementRef = inject(ElementRef);
}
