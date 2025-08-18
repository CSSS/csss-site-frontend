import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { capitalize } from 'utils/string-utils';
import { CsssLink } from './links.data';

@Component({
  selector: 'cs-external-link',
  imports: [FontAwesomeModule],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export abstract class BaseLinkComponent<T extends CsssLink> {
  /**
   * The link that should be used from `links.ts`
   */
  key = input.required<T>();

  /**
   * Overrides the label that is displayed.
   */
  label = input<string>();

  /**
   * Label that is displayed in the element.
   */
  protected _label = computed(() => this.label() ?? capitalize(this.key()));

  /**
   * The href used to move the user to the external link/route.
   */
  protected abstract _href: Signal<string>;

  protected externalLinkIcon = faUpRightFromSquare;
}
