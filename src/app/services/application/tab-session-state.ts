export const TAB_SESSION_STORAGE_KEY = 'csss-tab-session';
const TAB_SESSION_VERSION = 1;

/**
 * Persisted tab session stored in local storage.
 */
export interface TabSessionState {
  version: typeof TAB_SESSION_VERSION;
  applicationIds: number[];
}

const buildTabSessionState = (applicationIds: number[]): TabSessionState => ({
  version: TAB_SESSION_VERSION,
  applicationIds
});

const isValidApplicationIds = (value: unknown): value is number[] =>
  Array.isArray(value) && value.every(id => typeof id === 'number' && Number.isInteger(id));

/**
 * Checks whether a parsed JSON value has the expected tab session shape and values.
 */
const isTabSessionState = (value: unknown): value is TabSessionState => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  if (!('version' in value) || !('applicationIds' in value)) {
    return false;
  }

  const { version, applicationIds } = value as {
    version: unknown;
    applicationIds: unknown;
  };

  return version === TAB_SESSION_VERSION && isValidApplicationIds(applicationIds);
};

/**
 * Serializes open application IDs to a JSON string for local storage.
 *
 * @param applicationIds - Open application IDs in tab order.
 */
export const serializeTabSession = (applicationIds: number[]): string => {
  return JSON.stringify(buildTabSessionState(applicationIds));
};

/**
 * Parses a stored tab session JSON string.
 *
 * @param raw - Raw JSON string from local storage.
 * @returns Parsed state, or null if the value is invalid.
 */
export const parseTabSession = (raw: string): TabSessionState | null => {
  try {
    const parsed: unknown = JSON.parse(raw);

    if (!isTabSessionState(parsed)) {
      return null;
    }

    return buildTabSessionState(parsed.applicationIds);
  } catch {
    return null;
  }
};

export const readTabSession = (): TabSessionState | null => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }

  try {
    const raw = localStorage.getItem(TAB_SESSION_STORAGE_KEY);
    if (raw === null) {
      return null;
    }

    return parseTabSession(raw);
  } catch {
    return null;
  }
};

/**
 * Writes open application IDs to local storage.
 *
 * @param applicationIds - Open application IDs in tab order.
 */
export const writeTabSession = (applicationIds: number[]): void => {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(TAB_SESSION_STORAGE_KEY, serializeTabSession(applicationIds));
  } catch {
    // Ignore errors.
  }
};
