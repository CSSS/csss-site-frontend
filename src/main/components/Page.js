import React, { useEffect, useState } from 'react';

import { Icon, Flex, Grid, VSCode, helpers } from '../../_shared';

// example usage of the VSCode.NavBar component, passing in children
export const Page = ({ children }) => {
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
      <VSCode.NavFolder text="CSSS">
        <VSCode.NavItem isInFolder={true} text="about.md" to="/about" />
        <VSCode.NavItem
          isInFolder={true}
          text="common_rooms.md"
          to="/common_rooms"
        />
        <VSCode.NavItem isInFolder={true} text="officers.md" to="/officers" />
        <VSCode.NavItem isInFolder={true} text="elections.md" to="/elections" />
      </VSCode.NavFolder>
      <VSCode.NavFolder text="Committees">
        <VSCode.NavItem
          isInFolder={true}
          text="events_committee.md"
          to="/events_committee"
        />
        <VSCode.NavItem
          isInFolder={true}
          text="merch_committee.md"
          to="/merch_committee"
        />
        <VSCode.NavItem
          isInFolder={true}
          text="w3_committee.md"
          to="/w3_committee"
        />
      </VSCode.NavFolder>
      <VSCode.NavItem text="login.txt" to="/profile" />
      <VSCode.NavFolder text="Hackathons">
        <VSCode.NavLink
          isInFolder={true}
          text="mtn_madness.html"
          href="/events/2024/mm"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="tech_fair.html"
          href="/tech_fair"
        />
      </VSCode.NavFolder>
      <VSCode.NavFolder text="Events">
        <VSCode.NavLink
          isInFolder={true}
          text="fall_hacks.html"
          href="/fall_hacks"
        />
        <VSCode.NavLink
          isInFolder={true}
          text="frosh.html"
          href="/frosh"
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
    <VSCode.Page apps={apps} files={files} title="SFU-CSSS">
      {children}
    </VSCode.Page>
  );
};
