import React, { useState, useEffect } from 'react';
import { Flex, Grid, Icon, helpers } from 'csss-raspberry';

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
    <Flex.Container
      flow='column nowrap'
      alignItems='center'
      gap='8px'
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <Header.Container>
        <Grid.Container
          columns={isMobileDevice ? '1fr 1fr' : '1fr 1fr 1fr 1fr'}
          rows={isMobileDevice ? '1fr 1fr' : '1fr'}
          areas={
            isMobileDevice ?
              ['about events', 'elections more']
              : ['about events elections more']
          }
          gap='8px'
          style={{
            paddingTop: '16px',
            paddingBottom: '32px',
            width: '100%',
            height: 'calc(100% - 48px)'
          }}
        >
          <Flex.Container flow='column nowrap' gap='8px' area='about'>
            <h1 className='csss-header-section'>About</h1>
            <p>Who We Are</p>
            <p>List of Current Officers</p>
            <p>List of Past Officers</p>
            <br />
            <h1 className='csss-header-section'>Documents</h1>
            <p>CSSS Constitution</p>
            <p>CSSS Policies</p>
            <p>CSSS Photo Galleries</p>
            <p>SFSS Council Minutes</p>
          </Flex.Container>
          <Flex.Container flow='column nowrap' gap='8px' area='events'>
            <h1 className='csss-header-section'>Events</h1>
            <p>Regular Events</p>
            <p>Tech Fair</p>
            <p>Frosh Week</p>
            <p>Mountain Madness Hackathon</p>
            <p>Fall Hacks Hackathon</p>
            <p>Workshops</p>
          </Flex.Container>
          <Flex.Container flow='column nowrap' gap='8px' area='elections'>
            <h1 className='csss-header-section'>Elections</h1>
            <p>(Scrollable list of elections.)</p>
          </Flex.Container>
          <Flex.Container flow='column nowrap' gap='8px' area='more'>
            <h1 className='csss-header-section'>More</h1>
            <p>Software Guide</p>
            <p>Bursaries and Awards</p>
            <Header.Dropdown text='Associated Clubs and DSUs'>
              <ul>
                <li>Women in Computing Science <Icon.Link /></li>
                <li>Software Systems Student Society <Icon.Link /></li>
                <li>Mathematics Student Union <Icon.Link /></li>
                <li>Engineering Science Student Society <Icon.Link /></li>
                <li>Women in Engineering <Icon.Link /></li>
                <li>
                  Mechatronics Systems Engineering Student Society&nbsp;
                  <Icon.Link />
                </li>
              </ul>
            </Header.Dropdown>
            <br />
            <h1 className='csss-header-section'>Actions</h1>
            <p>Log in</p>
          </Flex.Container>
        </Grid.Container>
      </Header.Container>
      <div className='csss-leading'>
        <img src='/logos/csss_colourful.svg' alt='CSSS' />
        <h1>Computing Science<br />Student Society</h1>
      </div>
    </Flex.Container>
  );
}
