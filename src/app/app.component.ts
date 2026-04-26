import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Data, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from 'components/nav-bar/nav-bar.component';
import { TabBarComponent } from 'components/tab-bar/tab-bar.component';
import { of } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SITE_URL } from 'site';

const DEFAULT_DESCRIPTION =
  "Site dedicated to and maintained by SFU's Computing Science Student Society";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, TabBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private metaService = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    // Updates the meta description tag and robots tag based on the route's data
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.route.firstChild;
          while (route?.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route?.outlet === 'primary'),
        mergeMap(route => route?.data ?? of({} as Data))
      )
      .subscribe(data => {
        if (data['meta']) {
          this.metaService.updateTag({
            name: 'robots',
            content: 'noindex'
          });
        } else {
          this.metaService.removeTag("name='robots'");
        }
        const desc = data['description'] ?? DEFAULT_DESCRIPTION;
        this.metaService.updateTag({
          name: 'description',
          content: desc
        });

        // Canonical URL
        if (isPlatformBrowser(this.platformId)) {
          const canonicalLink = `${SITE_URL}${this.router.url}`;
          let link = document.querySelector("link[rel='canonical']");
          if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
          }
          link.setAttribute('href', canonicalLink);
        }
      });
  }
}
