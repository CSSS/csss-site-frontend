import React from 'react';

import { classList } from '../../js';

import './Icon.css';

/**
 * Option (rightwards arrow) icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Option(props) {
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
      <polyline points="20,8 28,16 20,24 " />
      <path d="M4,4c0,0,0,6,0,8s2,4,4,4s20,0,20,0" />
    </svg>
  );
}
