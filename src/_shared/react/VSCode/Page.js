import React, { useCallback, useEffect, useState } from 'react';

import * as helpers from '../../js';
import * as Flex from '../Flex';
import * as Grid from '../Grid';
import { NavBar } from './NavBar.js';

const isMobileDeviceQuery = '(max-width: 768px)';
const contentWidth = 768;

export const Page = (props) => {
  const { apps, children, files, title } = props;

  // media query for mobile device
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );

  useEffect(() => {
    // watch media query to check if is mobile device
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);

    return () => {
      // no need to cleanup; helpers.watchMediaQuery will remove old listeners
    };
  }, [isMobileDevice]); // resets media query on rerender of Page

  return (
    <Grid.Container
      columns={
        isMobileDevice
          ? '1fr' // one column
          : '320px 1fr' // two columns
      }
      rows={isMobileDevice ? '64px 1fr' : '1fr'}
      areas={
        isMobileDevice
          ? ['navbar', 'content'] // two rows
          : ['navbar content'] // one row
      }
      className="bg-slate-800"
      style={{
        margin: 'auto',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <NavBar apps={apps} isMobileDevice={isMobileDevice} title={title}>
        {files}
      </NavBar>
      {isMobileDevice ? (
        <Grid.Item
          area="content"
          className="overflow-y-scroll text-white"
          style={{
            maxWidth: '768px',
            width: '100%',
            height: '100vh',
            margin: 'auto'
          }}
        >
          {children}
        </Grid.Item>
      ) : (
        <Grid.Item
          area="content"
          className="overflow-y-scroll text-white"
          style={{ height: '100vh' }}
        >
          {children}
        </Grid.Item>
      )}
    </Grid.Container>
  );
};
