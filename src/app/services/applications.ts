/**
 * Interface representing an Application that is registered to run.
 * Each application will be run in a runtime.
 * Runtimes will be identified by their string name.
 * Applications that share a run time will share the same tab with each other.
 */
export interface Application {
  /**
   * The unique ID of the application. Should be unique to every other application.
   */
  id: number;

  /**
   * The name on the tab for this application.
   */
  label: string;

  /**
   * The activity these applications will share.
   * Only pages the main pages should omit this value.
   */
  activity?: string;

  /**
   * The key of the application.
   * This should be unique to each activity.
   * Routes should be in the form `/<activity>/<application>` or `/<application>` to successfully launch apps.
   */
  key: string;
}

/**
 * All registered applications should go here.
 */
export const routeApplicationMap: Map<string, Application> = new Map([
  [
    '/readme',
    {
      id: 0,
      label: 'README.md',
      key: 'readme'
    }
  ],
  [
    '/about',
    {
      id: 1,
      label: 'About.md',
      key: 'about'
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
