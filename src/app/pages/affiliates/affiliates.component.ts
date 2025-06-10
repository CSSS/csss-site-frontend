import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';

interface Affiliate {
  label: string;
  imgName: string; // assumes the image is in the `public/affiliates` folder and is a `.png`
  url: string; // URL to their resources
}

/**
 * Alphabetical order of our affiliates
 */
const AFFILIATES: Affiliate[] = [
  {
    label: 'DSSS',
    imgName: 'dsss',
    url: 'discord.com/invite/kdj7F82mgn'
  },
  {
    label: 'ESSS',
    imgName: 'esss',
    url: 'www.sfu.ca/esss/?page=home'
  },
  {
    label: 'MSESS',
    imgName: 'msess',
    url: 'msess.ca'
  },
  {
    label: 'MSU',
    imgName: 'msu',
    url: 'sfumsu.github.io'
  },
  {
    label: 'SEESS',
    imgName: 'seess',
    url: 'seess.ca'
  },
  {
    label: 'SSSS',
    imgName: 'ssss',
    url: 'sfussss.org'
  },
  {
    label: 'WiCS',
    imgName: 'wics',
    url: 'www.sfu.ca/computing/wics'
  },
  {
    label: 'WiE',
    imgName: 'wie',
    url: 'www.sfu.ca/clubs/wie.html'
  }
];

@Component({
  selector: 'csss-affiliates',
  imports: [CsssCodeModule],
  templateUrl: './affiliates.component.html',
  styleUrl: './affiliates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AffiliatesComponent {
  affiliates = AFFILIATES.map(aff => {
    return {
      ...aff,
      url: `https://${aff.url}`,
      imgName: `url(affiliates/${aff.imgName}.png)`
    };
  });
}
