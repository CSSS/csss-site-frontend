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
