import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from '@csss-code/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { ExternalLinkComponent } from 'components/url/external-link/external-link.component';
import { RouteLinkComponent } from 'components/url/route-link/route-link.component';

@Component({
  selector: 'cs-readme',
  imports: [
    CardComponent,
    RouterModule,
    FontAwesomeModule,
    ExternalLinkComponent,
    RouteLinkComponent,
    NgxTypewriterComponent
  ],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMeComponent {
  protected arrowIcon = faArrowDown;
  protected externalLinkIcon = faArrowUpRightFromSquare;

  scrollTo(id: string): void {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
