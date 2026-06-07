import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { addToSignalMap, removeFromSignalMap } from 'utils/signal-utils';
import {
  AppInfo,
  buildRunningApplicationsFromIds,
  getApplicationByRoute,
  shareSameActivityGroup
} from './applications';
import { readTabSession, serializeTabSession, writeTabSession } from './tab-session-state';

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

  private platformId = inject(PLATFORM_ID);

  private lastPersisted: string | null = null;

  constructor() {
    this.restoreSession();

    // Observable that emits when navigating to a new URL has completed.
    // Used to check if the route should launch an application or change the content of an application.
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        let route = event.urlAfterRedirects;
        // Discard other params. This assumes that the URLs will have the form:
        // `/<application>?=<query params>#<hash>` or `/<runtime>/<application>?=<query params>#<hash>`
        // or maybe they don't have any query params at all.
        route = route.split('?')[0].split('#')[0]; // Just the route params
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
   * Closes the application based on the unique ID.
   *
   * @param id - The ID of the application to close.
   */
  closeApplication(id: number): void {
    if (!this.isApplicationRunning(id)) {
      return;
    }

    this.removeRunningApplication(id);

    if (this.runningApplications().size) {
      const nextApp = this.runningApplications().entries().next().value;
      if (nextApp) {
        this.focusApplication(nextApp[1]);
      }
    } else {
      this.focusedApplication.set(null);
      this.router.navigate(['/']);
    }
  }

  /**
   * Rebuilds open tabs from the tab session saved in local storage.
   * Invalid or removed application IDs are skipped.
   */
  private restoreSession(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const session = readTabSession(this.platformId);
    if (!session) {
      return;
    }

    const restoredApplications = buildRunningApplicationsFromIds(session.applicationIds);

    if (restoredApplications.size) {
      this.runningApplications.set(restoredApplications);
      this.lastPersisted = serializeTabSession([...restoredApplications.keys()]);
    }
  }

  /**
   * Saves the current open applications to local storage.
   */
  private persistRunningApplications(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const applicationIds = [...this.runningApplications().keys()];
    const serialized = serializeTabSession(applicationIds);

    if (serialized === this.lastPersisted) {
      return;
    }

    writeTabSession(applicationIds, this.platformId);
    this.lastPersisted = serialized;
  }

  /**
   * Try to open the application.
   *
   * @param application - Application to try and launch.
   */
  private openApplication(application: AppInfo): void {
    if (this.isAlreadyFocused(application)) {
      return;
    }

    if (this.isApplicationRunning(application.id)) {
      this.focusApplication(application);
      return;
    }

    this.addRunningApplication(application);
  }

  /**
   * Updates focus without changing which applications are open.
   */
  private focusApplication(application: AppInfo): void {
    if (this.isAlreadyFocused(application)) {
      return;
    }

    this.focusedApplication.set(application);
  }

  /**
   * Adds an application to the running set and persists the update.
   */
  private addRunningApplication(application: AppInfo): void {
    addToSignalMap(this.runningApplications, application.id, application);
    this.focusApplication(application);
    this.removeConflictingApplications(application);
    this.persistRunningApplications();
  }

  /**
   * Removes an application from the running set and persists the update.
   */
  private removeRunningApplication(id: number): void {
    removeFromSignalMap(this.runningApplications, id);
    this.persistRunningApplications();
  }

  /**
   * Removes applications that cannot run alongside the given application.
   */
  private removeConflictingApplications(application: AppInfo): void {
    for (const app of this.runningApplications().values()) {
      if (shareSameActivityGroup(app, application) && app.id !== application.id) {
        removeFromSignalMap(this.runningApplications, app.id);
        break;
      }
    }
  }

  private isAlreadyFocused(application: AppInfo): boolean {
    return this.focusedApplication()?.id === application.id;
  }

  private isApplicationRunning(id: number): boolean {
    return this.runningApplications().has(id);
  }
}
