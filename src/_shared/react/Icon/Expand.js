import React from 'react';

import { classList } from '../../js';

import './Icon.css';

/**
 * Expand (resize) icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Expand(props) {
  const { className, style } = props;

  return (
    <svg
      className={classList(['csss-icon', className || ''])}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      style={style}
    >
      <polyline points="12,4 4,4 4,12 " />
      <polyline points="20,4 28,4 28,12 " />
      <polyline points="4,20 4,28 12,28 " />
      <polyline points="20,28 28,28 28,20 " />
    </svg>
  );
}
