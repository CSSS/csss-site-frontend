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
    '[attr.aria-disabled]': 'isDisabled()'
  },
  imports: [],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeTabComponent {
  tabIndex = signal<number>(-1);
  label = input.required<string>();
  isActive = signal<boolean>(false);
  isDisabled = signal<boolean>(false);
  elementRef = inject(ElementRef);
}
