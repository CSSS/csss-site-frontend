export type ImagesFolder = 'root' | 'affiliates';

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
  result += fileName;

  return result;
}

export function pathToCssUrl(path: string | undefined): string {
  if (path && path.startsWith('url(')) {
    return path;
  }
  return path ? `url(${path})` : '';
}
