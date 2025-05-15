import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import * as helpers from '../../js';
import * as Grid from '../Grid';
import { NavBar } from './NavBar.js';

const isMobileDeviceQuery = '(max-width: 768px)';
const contentWidth = 768;

export const Page = (props) => {
  const { apps, children, files, statusBar, title } = props;

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
      rows={isMobileDevice ? '64px 1fr 32px' : '1fr 32px'}
      areas={
        isMobileDevice
          ? ['.', '.', 'bottom-bar'] // three rows
          : ['. .', 'bottom-bar bottom-bar'] // two rows
      }
      className="bg-zinc-900"
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
          className="overflow-y-auto text-white"
          style={{
            maxWidth: '768px',
            width: '100%',
            height: '100%',
            margin: 'auto'
          }}
        >
          {children}
        </Grid.Item>
      ) : (
        <Grid.Item
          className="overflow-y-auto text-white"
          style={{ height: '100%' }}
        >
          {children}
        </Grid.Item>
      )}
      <div
        className="bg-zinc-950 border-t border-zinc-800 flex flex-row"
        style={{
          gridArea: 'bottom-bar'
        }}
      >
        <div className="h-full w-full text-white leading-8 flex flex-row justify-start items-center gap-3">
          <p className="h-full leading-8 bg-blue-500 px-4">
            <FontAwesomeIcon className="text-base" icon={faGlobe} />
          </p>
          <p className="text-sm">
            <FontAwesomeIcon className="text-base mr-1" icon={faCodeBranch} />
            <a href="https://github.com/CSSS" className="hover:underline">main</a>
          </p>
          {statusBar}
        </div>
      </div>
    </Grid.Container>
  );
};
