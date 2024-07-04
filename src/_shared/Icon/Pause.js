import React from 'react';

import { classList } from '../helpers';

import './Icon.css';

/**
 * Pause icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Pause(props) {
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
      <rect x="8" y="8" width="4" height="16" />
      <rect x="20" y="8" width="4" height="16" />
    </svg>
  );
}
