import { SiteRoute } from 'app/app.routes';

/**
 * Interface representing an Application that is registered to run.
 * Each application will be run in an activity.
 * Applications that share a activity will share a tabs, meaning the previous activity will be lost.
 */
export interface AppInfo {
  /**
   * The unique ID of the application. Should be unique to every application.
   */
  id: number;

  /**
   * The name on the tabs for this application.
   */
  label: string;

  /**
   * The key activity this applications will use.
   * Applications that have the same key can't run alongside each other.
   */
  activityKey: string;

  /**
   * The key of the application.
   * This should be unique to each activity.
   */
  key: string;

  /**
   * Route to access the application.
   * Routes should be in the form `/<activity>/<application>` or `/<application>` to successfully launch apps.
   */
  route: SiteRoute;
}

/**
 * All registered applications should go here.
 */
export const routeApplicationMap: Map<number, AppInfo> = new Map([
  [
    0,
    {
      id: 0,
      label: 'README',
      activityKey: '',
      key: 'readme',
      route: SiteRoute.ReadMe
    }
  ],
  [
    1,
    {
      id: 1,
      label: 'Officers',
      activityKey: '',
      key: 'officers',
      route: SiteRoute.Officers
    }
  ],
  [
    2,
    {
      id: 2,
      label: 'Committees',
      activityKey: '',
      key: 'committees',
      route: SiteRoute.Committees
    }
  ],
  [
    3,
    {
      id: 3,
      label: 'Affiliates',
      activityKey: '',
      key: 'affiliates',
      route: SiteRoute.Affiliates
    }
  ],
  [
    4,
    {
      id: 4,
      label: 'Common Room',
      activityKey: '',
      key: 'common-room',
      route: SiteRoute.CommonRoom
    }
  ],
  [
    5,
    {
      id: 5,
      label: 'Events',
      activityKey: '',
      key: 'events',
      route: SiteRoute.Events
    }
  ],
  [
    6,
    {
      id: 6,
      label: 'Events Archives',
      activityKey: '',
      key: 'event-archives',
      route: SiteRoute.EventsArchives
    }
  ],
  [
    7,
    {
      id: 7,
      label: 'Elections',
      activityKey: '',
      key: 'elections',
      route: SiteRoute.Elections
    }
  ],
  [
    8,
    {
      id: 8,
      label: 'Upcoming',
      activityKey: '',
      key: 'elections-upcoming',
      route: SiteRoute.ElectionsUpcoming
    }
  ],
  [
    9,
    {
      id: 9,
      label: 'Speeches',
      activityKey: '',
      key: 'elections-speeches',
      route: SiteRoute.ElectionsSpeeches
    }
  ]
]);

export const getApplicationById = (id: number): AppInfo | undefined => {
  for (const app of routeApplicationMap.values()) {
    if (app.id === id) {
      return app;
    }
  }
  return;
};

export const getApplicationByRoute = (route: string): AppInfo | undefined => {
  for (const app of routeApplicationMap.values()) {
    if (app.route === route) {
      return app;
    }
  }
  return;
};
