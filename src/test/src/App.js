import React from 'react';
import { Flex } from 'csss-raspberry';

export default function App(props) {
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
      <h1>This is a test webpage.</h1>
      <p>If you&apos;re reading this, then it works!</p>
    </Flex.Container>
  );
}
