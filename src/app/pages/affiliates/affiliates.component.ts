import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { prependHttps, toLocalImageUrl } from 'utils/stringUtils';
import { AFFILIATES } from './affiliates';

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
      url: prependHttps(aff.url),
      imgName: toLocalImageUrl(`${aff.imgName}.png`, 'affiliates')
    };
  });
}
