import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BaseLinkComponent } from '../base-link.component';
import { EXTERNAL_LINKS, ExternalLink } from '../links.data';

@Component({
  selector: 'cs-external-link',
  imports: [FontAwesomeModule],
  templateUrl: './external-link.component.html',
  styleUrl: './external-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalLinkComponent extends BaseLinkComponent<ExternalLink> {
  override link = input.required<ExternalLink>();
  protected override _href = computed<string>(() => EXTERNAL_LINKS[this.link()]);
}
