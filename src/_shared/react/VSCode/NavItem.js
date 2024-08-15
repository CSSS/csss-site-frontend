import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import * as Icon from '../Icon';

export const NavItem = ({ text, to, href, isInFolder, icon }) => {
  const iconStyle = {
    '--csss-icon-color': '#a1a1aa', // zinc-400
    '--csss-icon-stroke-width': '3px'
  };

  const location = useLocation();
  let _icon = icon;

  if (_icon === undefined) {
    _icon =
      to !== undefined ? (
        <Icon.File style={iconStyle} />
      ) : (
        <Icon.Link style={iconStyle} />
      );
  }

  const _href = href !== undefined ? href : `/#${to.substr(1)}`;

  return (
    <a
      className={
        'mx-1 py-1 px-2 text-md flex items-center gap-2 rounded-sm text-white ' +
        (isInFolder ? 'pl-8 ' : '') +
        (location.pathname === to
          ? 'bg-zinc-800 hover:bg-zinc-800'
          : 'bg-zinc-950 hover:bg-zinc-800')
      }
      href={_href}
    >
      {_icon}
      {text}
    </a>
  );
};
