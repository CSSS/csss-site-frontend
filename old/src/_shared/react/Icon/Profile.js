import React from 'react';

import { classList } from '../../js';

import './Icon.css';

/**
 * Profile icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Profile(props) {
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
      <path
        d="M28,16c0,3.7-1.6,7-4.2,9.1c-0.9-5.2-4-9.1-7.8-9.1s-6.9,3.9-7.8,9.1C5.6,23,4,19.7,4,16C4,9.4,9.4,4,16,4
        S28,9.4,28,16z"
      />
      <circle cx="16" cy="12" r="4" />
      <path d="M23.8,25.1C21.7,26.9,19,28,16,28s-5.7-1.1-7.8-2.9c0.9-5.2,4-9.1,7.8-9.1S22.9,19.9,23.8,25.1z" />
    </svg>
  );
}
