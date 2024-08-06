import React, { useCallback, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';

import * as helpers from '../helpers.js';
import * as Flex from '../Flex';
import * as Grid from '../Grid';
import { NavBar } from './NavBar.js';

const isMobileDeviceQuery = '(max-width: 768px)';
const isNotWideEnoughQuery = '(min-width: 768px) and (max-width: 1328px)';

const _contentWidth = 768;
const _minimapWidth = 240;
const _minimapScale = _minimapWidth / _contentWidth;

export const Page = (props) => {
  const { apps, children, files, hideMinimap, title } = props;

  console.log(hideMinimap);

  // CSS queries for mobile device, + minimap showing
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );
  const [isNotWideEnough, setIsNotWideEnough] = useState(
    helpers.checkMediaQuery(isNotWideEnoughQuery)
  );

  // minimap states (will be stuck at initial states if !hideMinimap)
  const [minimap, setMinimap] = useState(null);
  const [minimapTop, setMinimapTop] = useState(0); // scroll top
  const [minimapHeight, setMinimapHeight] = useState(240); // height of scroll

  // on scroll of content container
  const onscroll = (event) => {
    if (!hideMinimap) {
      setMinimapTop(Math.round(event.target.scrollTop * _minimapScale));
      setMinimapHeight(Math.round(event.target.offsetHeight * _minimapScale));
    }
  };

  const contentRef = useCallback((node) => {
    if (!hideMinimap && node !== null) {
      const renderMinimap = async () => {
        const canvas = await html2canvas(node, {
          scale: _minimapScale
        });
        const _minimap = canvas.toDataURL('image/png');
        setMinimap(_minimap);
      };

      renderMinimap();
    }
  });

  useEffect(() => {
    // watch minimap media queries
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);

    if (!hideMinimap) {
      helpers.watchMediaQuery(isNotWideEnoughQuery, setIsNotWideEnough);
    }
  }, []);

  return (
    <Grid.Container
      columns={
        isMobileDevice
          ? '1fr' // one column
          : isNotWideEnough || hideMinimap
            ? '320px 1fr' // two columns
            : '320px 1fr 240px' // three columns
      }
      rows={isMobileDevice ? '64px 1fr' : '1fr'}
      areas={
        isMobileDevice
          ? ['navbar', 'content'] // two rows
          : isNotWideEnough || hideMinimap
            ? ['navbar content'] // one row
            : ['navbar content minimap'] // one row
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
      {isMobileDevice || isNotWideEnough ? (
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
      ) : !hideMinimap ? (
        <>
          <Grid.Item
            onScroll={onscroll}
            area="content"
            className="overflow-y-scroll"
            style={{ height: '100vh' }}
          >
            <div
              ref={contentRef}
              className="bg-slate-800 text-white"
              style={{
                width: '768px',
                margin: 'auto',
                paddingBottom: '8px'
              }}
            >
              {children}
            </div>
          </Grid.Item>
          <Grid.Item
            area="minimap"
            style={{
              width: '240px',
              height: '100vh',
              position: 'relative'
            }}
          >
            <img
              src={minimap}
              className="bg-slate-800"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: '0 0',
                filter: 'brightness(0.5)'
              }}
            />
            <div
              className="bg-slate-200"
              style={{
                top: `${minimapTop}px`,
                left: 0,
                width: '240px',
                height: `${minimapHeight}px`,
                position: 'absolute',
                opacity: '0.25'
              }}
            ></div>
          </Grid.Item>
        </>
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
