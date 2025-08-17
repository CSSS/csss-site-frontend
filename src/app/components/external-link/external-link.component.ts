import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { EXTERNAL_LINKS, ExternalLink } from './links';

@Component({
  selector: 'cs-external-link',
  imports: [FontAwesomeModule],
  templateUrl: './external-link.component.html',
  styleUrl: './external-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExternalLinkComponent {
  link = input.required<ExternalLink>();
  protected href = computed(() => EXTERNAL_LINKS[this.link()]);

  protected externalLink = faUpRightFromSquare;
}
