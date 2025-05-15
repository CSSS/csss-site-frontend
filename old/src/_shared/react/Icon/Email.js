import React from 'react';

import { classList } from '../../js';

import './Icon.css';

/**
 * Email icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Email(props) {
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
      <rect x="4" y="8" width="24" height="16" />
      <polyline points="4,8 16,20 28,8 " />
      <line x1="12" y1="16" x2="4" y2="24" />
      <line x1="20" y1="16" x2="28" y2="24" />
    </svg>
  );
}
