import React from 'react';
import { Flex } from 'csss-raspberry';
import './index.css';

export function Main(props) {
  return (
    <Flex.Container
      flow='column nowrap'
      justifyContent='center'
      alignItems='center'
      gap='8px'
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <h1>Hello, CSSS!</h1>
      <p>W3 FTW!</p>
    </Flex.Container>
  );
}
