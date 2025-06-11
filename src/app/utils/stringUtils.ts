export type ImagesFolder = 'root' | 'affiliates';

/**
 * Adds `https://` to a string.
 */
export function prependHttps(url: string): string {
  return `https://${url}`;
}

/**
 * Changes the string to a CSS image url.
 */
export function toCssUrl(folder: ImagesFolder, fileName: string): string {
  return `url(images/${folder}/${fileName})`;
}

export function pathToCssUrl(path: string | undefined): string {
  if (path && path.startsWith('url(')) {
    return path;
  }
  return path ? `url(${path})` : '';
}
