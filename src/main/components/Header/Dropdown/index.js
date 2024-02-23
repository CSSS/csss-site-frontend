import React, { useState } from 'react';
import { Icon } from 'csss-raspberry';

import './Dropdown.css';

export function Dropdown(props) {
  const { children, text } = props;
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const icon = (
    <Icon.Arrow
      style={{ transform: isDroppedDown ? 'rotate(180deg)' : undefined }}
    />
  );

  return (
    <>
      <p
        className='csss-header-dropdown'
        onClick={() => setIsDroppedDown(!isDroppedDown)}
      >
        {icon} {text}
      </p>
      {isDroppedDown ? children : []}
    </>
  );
}
