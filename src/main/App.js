import React from 'react';
import { Dropdown, Flex, Grid, Icon } from 'csss-raspberry';

import { Header } from './components';
import './index.css';

export function App(props) {
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
          columns='1fr 1fr 1fr 1fr'
          rows='1fr 1fr'
          areas={[
            'about     events elections more   ',
            'documents events elections actions'
          ]}
          gap='32px'
          style={{ paddingTop: '16px', width: '100%', height: '100%' }}
        >
          <Flex.Container flow='column nowrap' gap='8px' area='about'>
            <h1 className='csss-header-section'>About</h1>
            <p>Who We Are</p>
            <p>List of Current Officers</p>
            <p>List of Past Officers</p>
          </Flex.Container>
          <Flex.Container flow='column nowrap' gap='8px' area='documents'>
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
              <p><Icon.Bullet /> WiCS <Icon.Link /></p>
              <p><Icon.Bullet /> SSSS <Icon.Link /></p>
              <p><Icon.Bullet /> MSU <Icon.Link /></p>
              <p><Icon.Bullet /> ESSS <Icon.Link /></p>
              <p><Icon.Bullet /> WiE <Icon.Link /></p>
              <p><Icon.Bullet /> MSESS <Icon.Link /></p>
            </Header.Dropdown>
          </Flex.Container>
          <Flex.Container flow='column nowrap' gap='8px' area='actions'>
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
