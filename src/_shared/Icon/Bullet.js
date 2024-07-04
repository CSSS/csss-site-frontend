import React from 'react';

import { classList } from '../helpers';

import './Icon.css';

/**
 * Bullet icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Bullet(props) {
  const { className, style } = props;

  return (
    <svg
      className={classList(['csss-icon', 'fill', className || ''])}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      style={style}
    >
      <circle cx="16" cy="16" r="4" />
    </svg>
  );
}
