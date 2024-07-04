import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { File } from '../Icon';

export const NavItem = ({ text, to, isInFolder }) => {
  const fileStyle = {
    '--csss-icon-color': '#94a3b8', // slate-400
    '--csss-icon-stroke-width': '3px'
  };

  const location = useLocation();

  return (
    <a
      className={
        'mx-1 py-1 px-2 text-md flex items-center gap-2 rounded-sm ' +
        (isInFolder ? 'pl-8 text-white ' : 'text-white ') +
        (location.pathname === to
          ? 'bg-slate-800 hover:bg-slate-700'
          : 'bg-slate-900 hover:bg-slate-700')
      }
      href={'/#' + to.substr(1)}
    >
      <File style={fileStyle} />
      {text}
    </a>
  );
};
