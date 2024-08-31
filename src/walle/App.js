import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex } from '../_shared/react';
import * as helpers from '../_shared/js';
import { Button, Navbar, Row } from './components';

const apiUrl = 'https://api.walle.sfucsss.org';
const pageSize = 20;
const isMobileDeviceQuery = '(max-width: 768px)';

export default function App() {
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(null);
  const [users, setUsers] = useState([]);
  const [jumpTo, setJumpTo] = useState(0);

  async function loadUsers() {
    setIsLoading(true);

    if (page <= 0 ||
      (totalNumberOfPages !== null && page >= totalNumberOfPages)) {
      setIsLoading(false);

      return;
    }

    try {
      // eslint-disable-next-line max-len
      const { data } = await axios.get(`${apiUrl}/user_points/?format=json&page_size=${pageSize}&page=${page}`);
      setTotalNumberOfPages(data.total_number_of_pages);

      // get the starting position for this group of users
      const startingPosition = (page - 1) * pageSize + 1;

      // aggregate data for input into Row elements
      const newUsers = data.results.map((user, position) => {
        return {
          position: startingPosition + position,
          name: user.name,
          avatar: user.avatar,
          points: user.points,
          levelNumber: user.level_number,
          messageCount: user.message_count,
          levelUpSpecificPoints: user.level_up_specific_points,
          pointsNeededToLevelUp: user.points_needed_to_level_up
        };
      });

      // combine the previous set of users with this new set
      setUsers(prevUsers => [...prevUsers, ...newUsers]);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }

    setIsLoading(false);
  }

  function handleScroll() {
    const scroll = window.innerHeight + document.documentElement.scrollTop;
    const scrollTarget = document.documentElement.offsetHeight;

    if (scroll < scrollTarget || isLoading) {
      return;
    }

    // the scroll target was reached and we aren't loading the next page...
    setPage(prevPage => prevPage + 1); // ...so load the next page!
  }

  function onJump() {
    if (!isNaN(jumpTo) && parseInt(jumpTo) > 0) {
      const newPage = Math.floor((jumpTo - 1) / pageSize) + 1;
      window.location.href = `?page=${newPage}`;
    }
  }

  useEffect(() => {
    // load users on page change
    loadUsers();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);

    const params = new URL(window.location.href).searchParams;
    const pageParam = params.get('page');

    // a starting page can be configured with the page parameter
    if (pageParam !== null) {
      try {
        console.log(pageParam);
        setPage(parseInt(pageParam));
      } catch (error) {
        setPage(1); // pageParam wasn't an int (?)
      }
    } else {
      setPage(1); // start at page 1
    }
  }, []);

  return (
    <>
      <Navbar>
        <Flex.Container flow='row nowrap' gap='8px' alignItems='center'>
          <img src='walle.png' height='32px' alt='Wall-E' />
          <h1 style={{ fontSize: '14pt', fontWeight: 800 }}>Wall-E</h1>
          <h1 style={{ fontSize: '14pt', fontWeight: 600 }}>Leaderboard</h1>
        </Flex.Container>
        <Flex.Container flow='row nowrap' gap='8px' alignItems='center'>
          <Button className='transparent' href='https://discord.gg/sfucsss'>
            <img src='discord.gif' height='24px' alt='Discord' /> Discord
          </Button>
          <Button className='transparent' href='https://sfucsss.org'>
            CSSS
          </Button>
        </Flex.Container>
      </Navbar>
      <Flex.Container
        flow='column nowrap'
        style={{
          margin: 'auto',
          marginTop: '8px',
          width: 'var(--csss-page-width)'
        }}
      >
        <section>
          <img src='mural.png' alt='Mural' className='mural' />
          <h1>Wall-E Leaderboard</h1>
          <p>
            This leaderboard ranks members of the Simon Fraser University&nbsp;
            <a href="https://sfucsss.org">
              Computing Science Student Society
            </a>&apos;s&nbsp;
            <a href="https://github.gg/sfucsss">Discord server</a>,&nbsp;
            by number of messages sent.
          </p>
        </section>
        <Flex.Container flow='row nowrap' alignItems='center' gap='8px'>
          <p>Jump To</p>
          <input
            type='text'
            onChange={e => setJumpTo(e.target.value)}
            style={{
              width: `max(1ch, ${jumpTo.toString().length}ch)`,
              color: isNaN(jumpTo) || parseInt(jumpTo) < 1 ?
                'var(--midground-color)'
                : 'var(--foreground-color)'
            }}
          />
          <Button className='small transparent' onClick={onJump}>Jump</Button>
        </Flex.Container>
        {users.map(user => <Row user={user} isMobileDevice={isMobileDevice} />)}
        <p
          style={{
            textAlign: 'center',
            color: 'var(--midground-color-alt2)'
          }}
        >
          ...
        </p>
      </Flex.Container>
    </>
  );
}
