import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleComponent } from '@csss-code/article/article.component';
import { ButtonComponent } from '@csss-code/button/button.component';
import { SiteRoute } from 'app/app.routes';

@Component({
  selector: 'cs-upcoming',
  imports: [ArticleComponent, ButtonComponent],
  templateUrl: './elections-schedule.component.html',
  styleUrl: './elections-schedule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
// FIXME: Make this dynamic
export class ElectionsScheduleComponent {
  private router = inject(Router);

  navigate(): void {
    console.log(SiteRoute.ElectionsSpeeches);
    this.router.navigate([SiteRoute.ElectionsSpeeches]);
  }
}
