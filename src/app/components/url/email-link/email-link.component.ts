import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BaseLinkComponent } from '../base-link.component';
import { EmailLink, EMAILS } from '../links.data';

@Component({
  selector: 'cs-email-link',
  imports: [],
  templateUrl: './email-link.component.html',
  styleUrl: './email-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailLinkComponent extends BaseLinkComponent<EmailLink> {
  override link = input.required<EmailLink>();
  protected override _href = computed(() => EMAILS[this.link()]);
}
