import React from 'react';

import { classList } from '../../../js';
import './Container.css';

/**
 * A flexbox container.
 * @param {object} props
 * @param {string} props.id - ID of the container
 * @param {string} props.direction - Direction of flex items (row, or column)
 * @param {string} props.wrap
 * - Whether to wrap items if width is exceeded. (E.g., wrap, nowrap,
 *   wrap-reverse.)
 * @param {string} props.flow - Shorthand for direction and wrap; 'row nowrap'
 * @param {string} props.rowGap - Vertical gap between items
 * @param {string} props.columnGap - Horizontal gap between items
 * @param {string} props.gap - Shorthand for row and column; '2px 4px'
 * @param {string} props.justifyContent
 * @param {string} props.alignItems
 * @param {string} props.alignContent
 * - See https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 * @param {string} props.flex - Flex item grow, shrink, and basis shorthand
 * @param {string} props.area - Grid area name
 * @param {object} props.style - Additional styles
 * @param {string} props.className - Additional classes
 * @param {array} props.children - Child elements of Container
 */
export default function Container(props) {
  const {
    id,
    direction,
    wrap,
    flow,
    rowGap,
    columnGap,
    gap,
    justifyContent,
    alignItems,
    alignContent,
    flex,
    area,
    style,
    className,
    children
  } = props;

  const flexStyle = {
    flexDirection: direction,
    flexWrap: wrap,
    flexFlow: flow,
    rowGap,
    columnGap,
    gap,
    justifyContent,
    alignItems,
    alignContent,
    flex,
    gridArea: area,
    ...style
  };

  return (
    <div
      id={id}
      style={flexStyle}
      className={classList(['csss-flex-container', className])}
    >
      {children}
    </div>
  );
}
