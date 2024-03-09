import React, { useState, useEffect } from 'react';
import { Flex, helpers } from 'csss-raspberry';

import { Header } from './components';
import './index.css';

const isMobileDeviceQuery = '(max-width: 768px)';

export function App(props) {
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );

  useEffect(() => {
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);
  }, []);

  return (
    <div>
      <Header.Default isMobileDevice={isMobileDevice} />
      <div className='csss-leading'>
        <img src='/static/csss_black.svg' alt='CSSS' />
        <h1>Computing Science<br />Student Society</h1>
      </div>
      <Flex.Container
        flow='column nowrap'
        alignItems='stretch'
        style={{
          margin: 'auto',
          width: 'var(--csss-page-width)'
        }}
      >
        <section>
          <h1>The Computing Science Student Society</h1>
          <p>What is the CSSS?</p>
        </section>
        <section>
          <h1>What We&apos;re Known For</h1>
          <p>What events does the CSSS run?</p>
        </section>
        <section>
          <h1>Who We Are</h1>
          <p>Who are the Executives?</p>
        </section>
        <section>
          <h1>Contact Us</h1>
          <p>Who are the Executives?</p>
        </section>
        <section>
          <h1>Resources</h1>
          <p>What information can I find here?</p>
        </section>
      </Flex.Container>
    </div>
  );
}
