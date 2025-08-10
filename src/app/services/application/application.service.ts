import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UiService } from 'services/ui/ui.service';
import { addToSignalMap, removeFromSignalMap } from 'utils/signal-utils';
import { AppInfo, getApplicationByRoute } from './applications';

/**
 * Service that handles updating what applications are currently running.
 */
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  /**
   * Application currently on the router
   */
  focusedApplication: WritableSignal<AppInfo | null> = signal<AppInfo | null>(null);

  /**
   * Map of applications that are running.
   * Key is the application ID, value is the application info.
   */
  runningApplications: WritableSignal<Map<number, AppInfo>> = signal<Map<number, AppInfo>>(
    new Map()
  );

  router = inject(Router);
  uiService = inject(UiService);

  constructor() {
    // Observable that emits when navigating to a new URL has completed.
    // Used to check if the route should launch an application or change the content of an application.
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        let route = event.urlAfterRedirects;
        // Discard other params. This assumes that the URLs will have the form:
        // `/<application>?=<query params>` or `/<runtime>/<application>?=<query params>`
        // or maybe they don't have any query params at all.
        route = route.split('?')[0]; // Just the route params
        console.log(route);
        if (route === '/') {
          this.focusedApplication.set(null);
          return;
        }
        const app = getApplicationByRoute(route);
        if (app) {
          this.openApplication(app);
        }
      });
  }

  /**
   * Try to open the application.
   *
   * @param application - Application to try and launch.
   */
  private openApplication(application: AppInfo): void {
    const focusedApp = this.focusedApplication();

    if (focusedApp?.id === application.id) {
      return;
    }

    addToSignalMap(this.runningApplications, application.id, application);
    this.focusedApplication.set(application);

    // The activity for this app might be open, but not focused. Try and remove it.
    for (const app of this.runningApplications().values()) {
      if (app.activityKey === application.activityKey && app.id !== application.id) {
        this.closeApplication(app.id);
        break;
      }
    }
  }

  /**
   * Closes the application based on the unique ID.
   *
   * @param id - The ID of the application to close.
   */
  closeApplication(id: number): void {
    removeFromSignalMap(this.runningApplications, id);
    if (this.runningApplications().size) {
      const nextApp = this.runningApplications().entries().next().value;
      if (nextApp) {
        this.openApplication(nextApp[1]);
      }
    } else {
      this.router.navigate(['/']);
    }
  }
}
