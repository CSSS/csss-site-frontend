/**
 * Interface representing an Application that is registered to run.
 * Each application will be run in an activity.
 * Applications that share a activity will share a tab, meaning the previous activity will be lost.
 */
export interface Application {
  /**
   * The unique ID of the application. Should be unique to every application.
   */
  id: number;

  /**
   * The name on the tab for this application.
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
}

/**
 * All registered applications should go here.
 * TODO:Need a way to dynamically generate this or the routes.
 */
export const routeApplicationMap: Map<string, Application> = new Map([
  [
    '/readme',
    {
      id: 0,
      label: 'README.md',
      activityKey: '',
      key: 'readme'
    }
  ],
  [
    '/affiliates',
    {
      id: 1,
      label: 'Affiliates.md',
      activityKey: '',
      key: 'affiliates'
    }
  ],
  [
    '/common-room',
    {
      id: 2,
      label: 'CommonRoom.md',
      activityKey: '',
      key: 'common-room'
    }
  ]
]);

export const getApplicationById = (id: number): Application | undefined => {
  for (const app of routeApplicationMap.values()) {
    if (app.id === id) {
      return app;
    }
  }
  return;
};
