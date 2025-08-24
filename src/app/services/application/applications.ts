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
   * Routes should be in the form `/<activity>/<application>` or `/<application>` to successfully launch apps.
   */
  key: string;

  /**
   * Route to access the application.
   */
  route: string;
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
      route: '/readme'
    }
  ],
  [
    1,
    {
      id: 1,
      label: 'Officers',
      activityKey: '',
      key: 'officers',
      route: '/officers'
    }
  ],
  [
    2,
    {
      id: 2,
      label: 'Committees',
      activityKey: '',
      key: 'committees',
      route: '/committees'
    }
  ],
  [
    3,
    {
      id: 3,
      label: 'Affiliates',
      activityKey: '',
      key: 'affiliates',
      route: '/affiliates'
    }
  ],
  [
    4,
    {
      id: 4,
      label: 'Common Room',
      activityKey: '',
      key: 'common-room',
      route: '/common-room'
    }
  ],
  [
    5,
    {
      id: 5,
      label: 'Events',
      activityKey: '',
      key: 'events',
      route: '/events'
    }
  ],
  [
    6,
    {
      id: 6,
      label: 'Event Archives',
      activityKey: '',
      key: 'event-archives',
      route: '/event-archives'
    }
  ],
  [
    7,
    {
      id: 7,
      label: 'Elections',
      activityKey: '',
      key: 'elections',
      route: '/elections'
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
