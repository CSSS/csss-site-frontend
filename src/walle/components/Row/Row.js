import React from 'react';
import { Flex } from '../../../_shared/react';
import { classList } from '../../helpers.js';
import './Row.css';

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
        <h1 className='position'>#<b>{position}</b></h1>
        <img src={avatar} alt={name} />
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
