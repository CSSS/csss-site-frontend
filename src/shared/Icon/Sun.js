import React from 'react';

import { classList } from '../helpers';

import './Icon.css';

/**
 * Sun icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Sun(props) {
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
      <circle cx="16" cy="16" r="8" />
      <line x1="16" y1="4" x2="16" y2="0" />
      <line x1="24.5" y1="7.5" x2="27.3" y2="4.7" />
      <line x1="28" y1="16" x2="32" y2="16" />
      <line x1="24.5" y1="24.5" x2="27.3" y2="27.3" />
      <line x1="16" y1="28" x2="16" y2="32" />
      <line x1="7.5" y1="24.5" x2="4.7" y2="27.3" />
      <line x1="4" y1="16" x2="0" y2="16" />
      <line x1="7.5" y1="7.5" x2="4.7" y2="4.7" />
    </svg>
  );
}
