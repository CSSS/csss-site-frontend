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
