import React, { useState } from 'react';

import { Arrow } from '../Icon';
//import { Folder } from '../Icon';

export const NavFolder = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const arrowStyle = {
    '--csss-icon-color': '#a1a1aa', // zinc-400
    '--csss-icon-stroke-width': '3px'
  };

  return (
    <>
      <button
        onClick={toggleOpen}
        className="block bg-zinc-950 hover:bg-zinc-800 mx-1 py-1 px-2 text-md text-zinc-500 flex items-center gap-2 rounded-sm"
        style={{
          // width is set using a calc as buttons don't stretch in a flex-box
          width: 'calc(100% - 8px)' // 24px = 2 * mx-1
        }}
      >
        {isOpen ? (
          <Arrow style={arrowStyle} />
        ) : (
          <Arrow style={{ transform: 'rotate(-90deg)', ...arrowStyle }} />
        )}
        {text}
      </button>
      {isOpen ? children : []}
    </>
  );
};
