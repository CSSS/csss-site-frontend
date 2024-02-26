import React, { useState } from 'react';
import { Button, Flex, Icon } from 'csss-raspberry';

import './Container.css';

export function Container(props) {
  const { children } = props;
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  return (
    <Flex.Container
      flow='column nowrap'
      alignItems='center'
      className='csss-header-container'
    >
      <Flex.Container
        flow='row nowrap'
        alignItems='center'
        justifyContent='flex-start'
        gap='8px'
        style={{
          width: 'var(--csss-page-width)',
          height: '64px'
        }}
      >
        <img
          src='/logos/csss_black.svg'
          alt='CSSS'
          className='csss-logo'
        />
        <h1 className='csss-title'>
          Computing Science<br />Student Society
        </h1>
        <Button
          onClick={() => {
            setIsDroppedDown(!isDroppedDown);
          }}
          className='large transparent icon'
          style={{ marginLeft: 'auto' }}
        >
          {isDroppedDown ? <Icon.Cross /> : <Icon.Hamburger />}
        </Button>
      </Flex.Container>
      {/* NOTE: this has height 20px */}
      <p className='csss-old-website-hint'>
        Looking for the old website?
        Click <a href="https://sfucsss.org">here</a>!
      </p>
      {isDroppedDown ? (
        <div className='csss-header-container-dropdown'>
          {children}
        </div>
      ) : []}
    </Flex.Container>
  );
}
