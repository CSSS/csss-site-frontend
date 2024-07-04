import React from 'react';

import { classList } from '../helpers';

import './Icon.css';

/**
 * Link (arrow) icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Link(props) {
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
      <line x1="28" y1="4" x2="4" y2="28" />
      <polyline points="12,4 28,4 28,20 " />
    </svg>
  );
}
