import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { CardComponent } from '@csss-code/card/card.component';
import { NgxFadeComponent } from '@omnedia/ngx-fade';
import { ExecutiveAdministration, executives, getRandomExecImage } from './officers.data';

@Component({
  selector: 'cs-officers',
  imports: [CardComponent, ArticleComponent, NgxFadeComponent],
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

  /**
   * Cache the admins so we don't need to fetch them each time.
   * Will probably need some way to remove older cached entries if memory becomes an issue.
   */
  private cachedAdmins = new Map<number, ExecutiveAdministration>();

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
