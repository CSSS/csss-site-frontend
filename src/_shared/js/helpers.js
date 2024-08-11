const CSSS_API = 'https://api.sfucsss.org';

/**
 * Checks if a media query matches.
 * @param {string} queryString - The media query to check.
 * @returns {boolean} - The result of checking the media query.
 */
export function checkMediaQuery(queryString) {
  try {
    return window.matchMedia(queryString).matches;
  } catch (err) {
    console.log(`Error in checkMediaQuery for query ${query}: ${err}`);
    return false; // doesn't match
  }
}

/**
 * Watches a given media query, calling the provided function on change.
 * @param {string} queryString - The media query to watch.
 * @param {function} onChange - The function to call on change.
 */
export function watchMediaQuery(queryString, onChange) {
  try {
    if (!window.csssMediaQueries) {
      // create this window object to store media queries
      window.csssMediaQueries = {};
    }

    const mediaQuery = window.matchMedia(queryString);
    const oldListener = window.csssMediaQueries[queryString];

    // remove old event listener if it exists
    if (oldListener) {
      mediaQuery.removeEventListener('change', oldListener);
    }

    const newListener = (e) => {
      onChange(e.matches); // e.matches: whether media query matches
    };

    // use new event listener on change of media query
    window.csssMediaQueries[queryString] = newListener;
    mediaQuery.addEventListener('change', newListener);
  } catch (err) {
    console.log(`Error in watchMediaQuery for query ${queryString}: ${err}`);
  }
}

/**
 * Constructs a list of classes
 * @param {array} classNames
 * - Array of class names, where only truthy values are included in the list
 * @returns {string}
 * - List of classes, where each class name is separated with a space
 */
export function classList(classNames) {
  let list = '';

  classNames.forEach((className, index) => {
    if (className) {
      list += `${index > 0 ? ' ' : ''}${className}`;
    }
  });

  return list;
}

/**
 * Sets the current theme
 * @param {string} oldTheme - Previous theme in use
 * @param {string} newTheme - New theme to use
 */
export function setTheme(oldTheme, newTheme) {
  if (oldTheme && document.body.classList.contains(oldTheme)) {
    document.body.classList.remove(oldTheme);
  }

  if (newTheme && !document.body.classList.contains(newTheme)) {
    document.body.classList.add(newTheme);
  }
}

/** log into the CSSS API */
export function casLogin(next) {
  const nextEncoded = encodeURI(next);
  window.location = `https://cas.sfu.ca/cas/login?service=${CSSS_API}/auth/login%3Fnext%3D${nextEncoded}`;
}

/** get information about the currently logged in user */
export async function casGetUser() {
  try {
    const response = await fetch(`${CSSS_API}/auth/check`, {
      method: 'GET',
      credentials: 'include' // cookies
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.is_valid ? data : null;
  } catch (err) {
    console.log(err);
    return null;
  }
}
