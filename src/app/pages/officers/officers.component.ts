import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  signal,
  viewChildren
} from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { CardComponent } from '@csss-code/card/card.component';
import { gsap } from 'gsap';
import { ExecutiveAdministration, executives, getRandomExecImage } from './officers.data';

@Component({
  selector: 'cs-officers',
  imports: [CardComponent, ArticleComponent],
  templateUrl: './officers.component.html',
  styleUrl: './officers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficersComponent {
  /**
   * The year currently selected.
   */
  protected currentYear = signal(new Date().getFullYear());

  protected currentAdministration = computed<ExecutiveAdministration | null>(() => {
    const year = this.currentYear();
    let newAdmin = this.cachedAdmins.get(year);
    if (!newAdmin) {
      // TODO: Fetch this from the back end.
      newAdmin = executives.find(e => e.startYear === year);
      if (!newAdmin) {
        throw new Error(`Administration for year ${year} not found.`);
      }
      // FIXME: Remove this once admins are properly fetched.
      newAdmin.members = newAdmin.members.map(exec => {
        return {
          ...exec,
          photoName: this.toLocalUrl('')
        };
      });
      // end of FIXME:
      this.cachedAdmins.set(year, newAdmin);
    }

    return newAdmin;
  });

  private execCards = viewChildren<CardComponent>('execCard');

  /**
   * Cache the admins so we don't need to fetch them each time.
   * Will probably need some way to remove older cached entries if memory becomes an issue.
   */
  private cachedAdmins = new Map<number, ExecutiveAdministration>();

  constructor() {
    effect(() => {
      if (!this.currentAdministration() || !this.execCards().length) {
        return;
      }

      this.animateCards();
    });
  }

  private animateCards(): void {
    const cards = this.execCards();
    if (!cards || !cards.length) {
      return;
    }

    const targets = cards.map(el => el.elementRef.nativeElement);
    gsap.from(targets, {
      bottom: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.out'
    });
  }

  /**
   * Changes the files name to one that can be used to set the background image.
   *
   * @param fileName - The file name to change. Must be in the `public/images/` folder
   * @returns File name in the CSS URL form.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private toLocalUrl(fileName: string): string {
    return `images/placeholders/${getRandomExecImage()}`;
  }
}
