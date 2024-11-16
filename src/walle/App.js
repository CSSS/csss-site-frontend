import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex } from '../_shared/react';
import * as helpers from '../_shared/js';

const apiUrl = 'https://api.walle.sfucsss.org';
const pageSize = 20;
const isMobileDeviceQuery = '(max-width: 768px)';

export function Row(props) {
  const { id, user, isMobileDevice } = props;
  const {
    position,
    name,
    avatar,
    points,
    levelNumber,
    messageCount,
    levelUpSpecificPoints,
    pointsNeededToLevelUp
  } = user;

  const filledBarWidth = Math.round(
    100 * levelUpSpecificPoints / pointsNeededToLevelUp
  );

  return (
    <Flex.Container
      id={id}
      flow='row nowrap'
      justifyContent='space-between'
      alignItems='center'
      className={helpers.classList(['row', position % 2 === 0 ? 'alt' : ''])}
    >
      <Flex.Container flow='row nowrap' gap='8px' alignItems='center'>
        <h1 className='position'>#{position}</h1>
        {/*<img src={avatar} alt={name} />*/}
        <h1 className='name'>{name}</h1>
        <h1 className='level'>Level {levelNumber}</h1>
      </Flex.Container>
      {isMobileDevice ? [] : (
        <Flex.Item className='csss-row-stats'>
          <div className='filled-bar' style={{ width: `${filledBarWidth}%` }} />
          <h1 className='above-text'>
            {levelUpSpecificPoints} / {pointsNeededToLevelUp}&nbsp;
            points to next level.
          </h1>
          <h1 className='inside-text'>
            {messageCount} message{messageCount === 1 ? '' : 's'},&nbsp;
            {points} point{points === 1 ? '' : 's'}
          </h1>
        </Flex.Item>
      )}
    </Flex.Container>
  );
}

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
    <div className="walle-page">
      {isMobileDevice ? (
        <div className="w-full h-12 flex flex-row justify-center items-center gap-2 py-1 mt-2">
          <img src='/walle/walle.png' height='32px' alt='Wall-E' />
          <h1 className="text-lg">Wall-E Leaderboard</h1>
        </div>
      ) : (
        <div className="w-full h-12 flex flex-row justify-between items-center py-1 mt-2">
          <div className="flex flex-row justify-center items-center gap-2">
            <img src='/walle/walle.png' height='32px' alt='Wall-E' />
            <h1 className="text-lg">Wall-E Leaderboard</h1>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <a
              className="flex flex-row justify-start items-center px-2 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded gap-1 text-sm font-light"
              href="https://discord.gg/sfucsss"
            >
              <img className="w-4 h-4" src='/walle/discord.gif' alt='Discord' /> Discord Server
            </a>
            <a
              className="flex flex-row justify-start items-center px-2 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded gap-1 text-sm font-light"
              href="https://new.sfucsss.org"
            >
              CSSS Website
            </a>
          </div>
        </div>
      )}
      <div className="flex flex-col w-full mt-2">
        <section>
          <img className="w-full h-64 rounded-xl object-cover mb-3" src='/walle/mural.png' alt='Mural' />
          <p>This leaderboard ranks members of the SFU CSSS's Discord server by number of messages sent.</p>
        </section>
        <div className="mt-3 flex flex-row gap-1 justify-start items-center text-sm">
          <p>Jump to rank:</p>
          <input
            className="px-2 py-1 bg-black rounded border border-zinc-700 font-mono"
            type='text'
            placeholder="1"
            onChange={e => setJumpTo(e.target.value)}
            style={{
              width: `calc(${jumpTo.toString().length}ch + 18px)`,
              color: isNaN(jumpTo) || parseInt(jumpTo) < 1 ?
                'var(--midground-color)'
                : 'var(--foreground-color)'
            }}
          />
          <button
            className="flex flex-row justify-start items-center px-2 py-1 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded gap-1"
            onClick={onJump}
          >
            Jump
          </button>
        </div>
        {users.map(user => <Row user={user} isMobileDevice={isMobileDevice} />)}
        <p
          style={{
            textAlign: 'center',
            color: 'var(--midground-color-alt2)'
          }}
        >
          ...
        </p>
      </div>
    </div>
  );
}
