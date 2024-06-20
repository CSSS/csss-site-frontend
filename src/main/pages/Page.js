import React, { useEffect, useState } from 'react';
import { Icon, Flex, Grid, VSCode, helpers } from 'csss-raspberry';

const isMobileDeviceQuery = '(max-width: 768px)';

// example usage of the VSCode.NavBar component, passing in children
export const Page = ({ children }) => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    helpers.checkMediaQuery(isMobileDeviceQuery)
  );

  // on page load
  useEffect(() => {
    // NOTE: this will only add an event listener ONCE, regardless of how
    // many times it is called (see implementation of helpers.watchMediaQuery
    // in lib/helpers.js).
    helpers.watchMediaQuery(isMobileDeviceQuery, setIsMobileDevice);
    // isMobileDevice will update when the media query changes
  }, []);

  const apps = (
    <>
      <Icon.CSSS style={{ '--csss-icon-color': 'white' }} />
      <Icon.Folder
        style={{
          '--csss-icon-color': '#64748b' // slate-500
        }}
      />
      <a style={{ marginTop: 'auto' }} href="#profile">
        <Icon.Profile
          style={{
            width: '100%',
            '--csss-icon-color': '#64748b', // slate-500
            '--csss-icon-stroke-width': '1px'
          }}
        />
      </a>
    </>
  );

  const files = (
    <>
      <VSCode.NavItem text="README.md" to="/" />
      <VSCode.NavFolder text="Events">
        <VSCode.NavLink isInFolder={true} text="mountain_madness.html" href="/events/2024/mm" />
      </VSCode.NavFolder>
      <VSCode.NavFolder text="Links">
        <VSCode.NavLink
          isInFolder={true}
          text="Discord"
          href="https://discord.gg/sfucsss"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="GitHub"
          href="https://github.com/CSSS"
        />
      </VSCode.NavFolder>
      <VSCode.NavItem text="profile.txt" to="/profile" />
    </>
  );

  return (
    <VSCode.Page
      apps={apps}
      files={files}
      isMobileDevice={isMobileDevice}
      title="SFU-CSSS"
    >
      {children}
    </VSCode.Page>
  );
};
