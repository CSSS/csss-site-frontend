import { Injectable, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Application, getApplicationById, routeApplicationMap } from './applications';
import { updateSignalMap } from 'utils/signalUtils';

/**
 * Interface representing an Application that is potentially running concurrently with other Applications.
 */
export interface RunningApplication extends Application {
  /**
   * True if the application is focused, false otherwise.
   */
  isFocus: boolean;
}

/**
 * Service that handles updating what applications are currently running.
 */
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  focusedApplication: WritableSignal<RunningApplication | null> = signal<RunningApplication | null>(
    null
  );
  runningApplications: WritableSignal<Map<number, RunningApplication>> = signal<
    Map<number, RunningApplication>
  >(new Map());

  constructor(private router: Router) {
    // Observable that emits when navigating to a new URL has completed.
    // Used to check if the route should launch an application or change the content of an application.
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        let route = event.urlAfterRedirects;
        // Discard other params. This assumes that the URLs will have the form:
        // `/<application>?=<query params>` or `/<runtime>/<application>?=<query params>`
        // or maybe they don't have any query params at all.
        route = route.split('?')[0];
        console.log(route);
        const app = routeApplicationMap.get(route);
        if (app) {
          this.openApplication(app);
        }
      });
  }

  focusOnApplication(app: RunningApplication): void {
    const currFocus = this.focusedApplication();

    if (currFocus && currFocus !== app) {
      currFocus.isFocus = false;
    }
    app.isFocus = true;
    this.focusedApplication.set(app);
  }

  openApplication(application: Application): void {
    // Check if the application is already running first.
    const app = this.runningApplications().get(application.id);
    if (app) {
      this.focusOnApplication(app);
    } else {
      // Otherwise, launch it.
      const newApp = getApplicationById(application.id);
      if (!newApp) {
        throw new Error(`No registered application identified by ${application.id}`);
      }
      const appToLaunch: RunningApplication = { ...newApp, isFocus: true };
      this.focusedApplication.set(appToLaunch);
      updateSignalMap<number, RunningApplication>(
        this.runningApplications,
        appToLaunch.id,
        appToLaunch
      );
    }
  }

  closeApplication(idOrLabel: number) {
    this.runningApplications().delete(idOrLabel);
  }
}
