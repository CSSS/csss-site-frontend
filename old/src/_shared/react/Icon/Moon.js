import React from 'react';

import { classList } from '../../js';

import './Icon.css';

/**
 * Moon icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Moon(props) {
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
      {/* eslint-disable-next-line max-len */}
      <path d="M27.5,19.5C26,24.4,21.4,28,16,28C9.4,28,4,22.6,4,16c0-5.4,3.6-10,8.5-11.5C12.2,5.6,12,6.8,12,8c0,6.6,5.4,12,12,12C25.2,20,26.4,19.8,27.5,19.5z" />
    </svg>
  );
}
