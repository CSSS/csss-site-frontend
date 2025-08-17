import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { capitalize } from 'utils/string-utils';
import { EXTERNAL_LINKS, ExternalLink } from './links';

@Component({
  selector: 'cs-external-link',
  imports: [FontAwesomeModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkComponent {
  /**
   * The link that should be used from `links.ts`
   */
  link = input.required<ExternalLink>();

  /**
   * Overrides the label that is displayed.
   */
  label = input<string>();

  /**
   * Label that is displayed in the element.
   */
  protected _label = computed(() => this.label() ?? capitalize(this.link()));

  /**
   * The href used to move the user to the external link/route.
   */
  protected _href = computed(() => EXTERNAL_LINKS[this.link()]);

  protected externalLinkIcon = faUpRightFromSquare;
}
