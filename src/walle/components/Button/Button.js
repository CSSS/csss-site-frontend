import React, { Children } from 'react';

import { classList } from '../../helpers.js';
import './Button.css';

/**
 * Button.
 * @param {object} props
 * @param {string} props.className
 * - Type of button; e.g., 'icon', 'primary', 'secondary', 'primary icon',
 *   'secondary icon', ..., and/or size of button; e.g., 'small'
 * @param {string} props.style - Additional styles
 * @param {integer} props.depth - Depth of menu
 * @param {function} props.onClick - Function to run when clicked
 * @param {string} props.href - URL to go to when clicked
 * @param {array} props.children - Child elements of Button
 */
export function Button(props) {
  const { className, style, depth, onClick, href, children } = props;

  // any 'string' children should become <span> elements
  const mappedChildren = Children.map(children, (child) => {
    return typeof child === 'string' ? <span>{child}</span> : child;
  });

  if (href !== undefined) {
    return (
      <a
        className={classList(['csss-button', className])}
        style={{
          marginLeft: depth
            ? `calc(${depth} * var(--csss-button-depth-margin))`
            : undefined,
          ...style
        }}
        href={href}
      >
        {mappedChildren}
      </a>
    );
  }

  return (
    <button
      className={classList(['csss-button', className])}
      style={{
        marginLeft: depth
          ? `calc(${depth} * var(--csss-button-depth-margin))`
          : undefined,
        ...style
      }}
      onClick={onClick}
    >
      {mappedChildren}
    </button>
  );
}
