import React from 'react';

import { classList } from '../../js';

import './Icon.css';

/**
 * Folder icon.
 * @param {object} props
 * @param {string} props.className - Additional class(es) for SVG icon
 * @param {string} props.style - Additional styles
 */
export function Folder(props) {
  const { className, style } = props;

  return (
    <svg
      className={classList(['csss-icon fill', className || ''])}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      style={style}
    >
      <path d="M4,8v16c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V12c0-1.1-0.9-2-2-2H16l-4-4H6C4.9,6,4,6.9,4,8z" />
    </svg>
  );
}
