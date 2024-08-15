import React from 'react';

/**
 * A grid item.
 * @param {object} props
 * @param {string} props.columnStart - Starting column for item or area
 * @param {string} props.columnEnd - Ending column for item or area
 * @param {string} props.rowStart - Starting row for item or area
 * @param {string} props.rowEnd - Ending row for item or area
 * @param {string} props.area
 * - Area name; should be used with areas for a grid container
 * @param {string} props.justifySelf
 * @param {string} props.alignSelf
 * - See https://css-tricks.com/snippets/css/complete-guide-grid/
 * @param {string} props.flex - Flex item grow, shrink, and basis shorthand
 * @param {object} props.style - Additional styles
 * @param {string} props.className - Additional classes
 * @param {function} props.onClick - Function to run on click of item
 * @param {array} props.children - Child elements of Item
 */
export default function Item(props) {
  const {
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    justifySelf,
    alignSelf,
    flex,
    style,
    className,
    onClick,
    onScroll,
    children
  } = props;

  const gridStyle = {
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area,
    justifySelf,
    alignSelf,
    flex,
    ...style
  };

  return (
    <div
      style={gridStyle}
      className={className}
      onClick={onClick}
      onScroll={onScroll}
    >
      {children}
    </div>
  );
}
