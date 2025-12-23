import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeArticleComponent } from '@csss-code/article/article.component';
import { CardComponent } from '@csss-code/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { prependHttps } from 'utils/string-utils';
import { Affiliate, AFFILIATES } from './affiliates';

@Component({
  selector: 'cs-affiliates',
  imports: [CodeArticleComponent, CardComponent, FontAwesomeModule],
  templateUrl: './affiliates.component.html',
  styleUrl: './affiliates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AffiliatesComponent {
  protected discordIcon = faDiscord;
  protected websiteIcon = faArrowUpRightFromSquare;

  protected societies: Affiliate[] = [];
  protected clubs: Affiliate[] = [];

  constructor() {
    for (const aff of AFFILIATES) {
      const newAff: Affiliate = {
        ...aff,
        websiteUrl: aff.websiteUrl ? prependHttps(aff.websiteUrl) : undefined,
        discordUrl: aff.discordUrl ? prependHttps(aff.discordUrl) : undefined,
        imgName: `images/affiliates/${aff.imgName}.png`
      };
      if (aff.type === 'union') {
        this.societies.push(newAff);
      } else {
        this.clubs.push(newAff);
      }
    }
  }
}
