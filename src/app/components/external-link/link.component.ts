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
  link = input.required<ExternalLink>();
  protected _label = computed(() => capitalize(this.link()));
  protected _href = computed(() => EXTERNAL_LINKS[this.link()]);

  protected externalLink = faUpRightFromSquare;
}
