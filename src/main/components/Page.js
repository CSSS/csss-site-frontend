import React, { useEffect, useState } from 'react';

import { Icon, Flex, Grid, VSCode, helpers } from '../../_shared';

// example usage of the VSCode.NavBar component, passing in children
export const Page = ({ children, hideMinimap }) => {
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
      <VSCode.NavItem text="login.txt" to="/profile" />
      <VSCode.NavFolder text="Events">
        <VSCode.NavLink
          isInFolder={true}
          text="mountain_madness.html"
          href="/mountain_madness"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="fall_hacks.html"
          href="/fall_hacks"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="tech_fair.html"
          href="/tech_fair"
        />
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
    </>
  );

  return (
    <VSCode.Page
      apps={apps}
      files={files}
      hideMinimap={hideMinimap}
      title="SFU-CSSS"
    >
      {children}
    </VSCode.Page>
  );
};
