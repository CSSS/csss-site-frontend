import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

import { Icon, Flex, Grid, VSCode } from '../../_shared/react';
import * as helpers from '../../_shared/js';

// example usage of the VSCode.NavBar component, passing in children
export const Page = ({ children }) => {
  const apps = (
    <>
      <Icon.Folder
        style={{
          '--csss-icon-color': '#a1a1aa' // zinc-400
        }}
      />
      <a style={{ marginTop: 'auto' }} href="#profile">
        <Icon.Profile
          style={{
            width: '100%',
            '--csss-icon-color': '#a1a1aa', // zinc-400
            '--csss-icon-stroke-width': '1px'
          }}
        />
      </a>
    </>
  );

  const files = (
    <>
      <VSCode.NavItem text="README.md" to="/" />
      <VSCode.NavFolder text="The CSSS">
        <VSCode.NavItem isInFolder={true} text="About.md" to="/about" />
        <VSCode.NavItem
          isInFolder={true}
          text="Affiliates.md"
          to="/affiliates"
        />
        <VSCode.NavItem
          isInFolder={true}
          text="Common Rooms.md"
          to="/common_rooms"
        />
        <VSCode.NavItem isInFolder={true} text="Officers.md" to="/officers" />
        <VSCode.NavItem isInFolder={true} text="Documents.md" to="/documents" />
      </VSCode.NavFolder>
      <VSCode.NavFolder text="Events">
        <VSCode.NavItem isInFolder={true} text="About Events.md" to="/events" />
        <VSCode.NavItem
          isInFolder={true}
          text="Frosh Week"
          href="/frosh"
        />
        <VSCode.NavItem
          isInFolder={true}
          text="Mountain Madness"
          href="/mountain_madness"
        />
        <VSCode.NavItem
          isInFolder={true}
          text="Fall Hacks"
          href="/fall_hacks"
        />
        <VSCode.NavItem isInFolder={true} text="Tech Fair" href="/tech_fair" />
      </VSCode.NavFolder>
      <VSCode.NavFolder text="Committees">
        <VSCode.NavItem
          isInFolder={true}
          text="Our Committees.md"
          to="/committees"
        />
        <VSCode.NavItem
          isInFolder={true}
          text="Discord"
          href="https://discord.gg/sfucsss"
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
