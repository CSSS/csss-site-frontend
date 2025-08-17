export type ImagesFolder = 'root' | 'affiliates' | 'placeholders';

/**
 * Capitalize the first letter of the word.
 */
export function capitalize(str: string): string {
  return str.at(0)?.toUpperCase() + str.slice(1);
}

/**
 * Adds `https://` to a string.
 */
export function prependHttps(url: string): string {
  return `https://${url}`;
}

/**
 * Changes the string to a CSS local image url.
 */
export function toLocalImageUrl(fileName: string, folder?: ImagesFolder): string {
  let result = "url('images/";
  if (folder) {
    result += `${folder}/`;
  }
  result += `${fileName}')`;

  return result;
}

/**
 * Takes the whole path and formats it to be used as a CSS image.
 * @param path Path to transform
 */
export function pathToCssUrl(path: string | undefined): string {
  if (path && path.startsWith('url(')) {
    return path;
  }
  return path ? `url(${path})` : '';
}
