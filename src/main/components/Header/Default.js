import React from 'react';
import { Flex, Grid, Icon } from 'csss-raspberry';

import { Container } from './Container';
import { Dropdown } from './Dropdown';

export function Default(props) {
  const { isMobileDevice } = props;

  return (
    <Container>
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
        <Grid.Item area='about' className='csss-header-item'>
          <Flex.Container flow='column nowrap' gap='8px'>
            <h1 className='csss-header-section'>About</h1>
            <p>
              <a href="/">
                The Computing Science Student Society
              </a>
            </p>
            <p>List of Current Officers</p>
            <p>List of Past Officers</p>
            <br />
            <h1 className='csss-header-section'>Documents</h1>
            <p>CSSS Constitution</p>
            <p>CSSS Policies Document</p>
            <p>CSSS Photo Galleries</p>
            <p>SFSS Council Minutes</p>
            <br />
          </Flex.Container>
        </Grid.Item>
        <Grid.Item area='events' className='csss-header-item'>
          <Flex.Container flow='column nowrap' gap='8px'>
            <h1 className='csss-header-section'>Events</h1>
            <p>Regular Events</p>
            <p>Board Game Nights</p>
            <p>Tech Fair</p>
            <p>Frosh Week</p>
            <p>Mountain Madness Hackathon</p>
            <p>Fall Hacks Hackathon</p>
            <p>Workshops</p>
            <br />
          </Flex.Container>
        </Grid.Item>
        <Grid.Item area='elections' className='csss-header-item'>
          <Flex.Container flow='column nowrap' gap='8px'>
            <h1 className='csss-header-section'>Elections</h1>
            <p>(Scrollable list of elections.)</p>
            <br />
          </Flex.Container>
        </Grid.Item>
        <Grid.Item area='more' className='csss-header-item'>
          <Flex.Container flow='column nowrap' gap='8px'>
            <h1 className='csss-header-section'>More</h1>
            <p>
              <a href="https://sfu.ca">
                Simon Fraser University
              </a>
            </p>
            <p>
              <a href="https://www.sfu.ca/computing.html">
                School of Computing Science
              </a>
            </p>
            <p>Bursaries and Awards</p>
            <Dropdown text='Associated Clubs and DSUs'>
              <ul>
                <li>
                  <a href="https://www.sfu.ca/computing/wics/">
                    Women in Computing Science
                  </a>
                </li>
                <li>
                  <a href="https://sfussss.org">
                    Software Systems Student Society
                  </a>
                </li>
                <li>
                  <a href="https://sfumsu.github.io/">
                    Mathematics Student Union
                  </a>
                </li>
                <li>
                  <a href="https://esss.ca">
                    Engineering Science Student Society
                  </a>
                </li>
                <li>
                  <a href="https://www.sfu.ca/clubs/wie.html">
                    Women in Engineering
                  </a>
                </li>
                <li>
                  <a href="https://www.msess.ca/">
                    Mechatronics Systems Engineering Student Society
                  </a>
                </li>
              </ul>
            </Dropdown>
            <br />
            <h1 className='csss-header-section'>Actions</h1>
            <p>Log in</p>
            <br />
          </Flex.Container>
        </Grid.Item>
      </Grid.Container>
    </Container>
  );
}
