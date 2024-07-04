import React from 'react';

import { classList } from '../helpers';

import './Icon.css';

/**
 * Play icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Play(props) {
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
      {/* eslint-disable-next-line max-len */}
      <path d="M26.5,15.1c0.7,0.4,0.7,1.3,0,1.7L19,21.2l-7.5,4.3c-0.7,0.4-1.5-0.1-1.5-0.9V16V7.3c0-0.8,0.8-1.2,1.5-0.9l7.5,4.3 L26.5,15.1z" />
    </svg>
  );
}
