import React from 'react';
import { Link } from 'react-router-dom';

import * as Icon from '../Icon';

export const NavLink = ({ text, href, isInFolder, isSelected }) => {
  // TODO: isSelected should highlight an item

  const linkStyle = {
    '--csss-icon-color': '#60a5fa', // blue-400
    '--csss-icon-stroke-width': '3px'
  };

  return (
    <a
      className={
        'bg-slate-900 hover:bg-slate-700 mx-1 py-1 px-2 text-md flex items-center gap-2 rounded-sm text-white ' +
        (isInFolder ? 'pl-8 ' : '') +
        (isSelected ? 'bg-slate-800' : '')
      }
      href={href}
    >
      <Icon.Link style={linkStyle} />
      {text}
    </a>
  );
};
