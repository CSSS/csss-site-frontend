import React, { useState } from 'react';
import { Button, Flex, Icon } from 'csss-raspberry';

import './index.css';

const socials = [
  {
    alt: 'Discord',
    src: '/static/discord.png',
    href: 'https://discord.gg/sfucsss'
  },
  {
    alt: 'Instagram',
    src: '/static/instagram.png',
    href: 'https://instagram.com/sfu_csss'
  },
  {
    alt: 'GitHub',
    src: '/static/github.png',
    href: 'https://github.com/CSSS'
  }
];

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
        gap='16px'
        style={{
          width: 'var(--csss-page-width)',
          height: '80px'
        }}
      >
        <img
          src='/static/csss_white.svg'
          alt='CSSS'
          className='csss-logo'
        />
        <h1 className='csss-title'>
          Computing Science<br />Student Society
        </h1>
        <div style={{ marginLeft: 'auto' }} />
        {socials.map((social, i) => (
          <a href={social.href}>
            <img
              src={social.src}
              alt={social.alt}
              className='csss-social-icon'
            />
          </a>
        ))}
        <Button
          onClick={() => {
            setIsDroppedDown(!isDroppedDown);
          }}
          className='large transparent icon'
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
