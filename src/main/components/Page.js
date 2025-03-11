import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Icon, VSCode } from '../../_shared/react';

const CAS_LOGIN_URL = 'https://cas.sfu.ca/cas/login';

// example usage of the VSCode.NavBar component, passing in children
export const Page = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get('/api/auth/user');
        sessionStorage.setItem('profile', JSON.stringify(res.data));
        setUserInfo({
          computing_id: res.data.computing_id,
          profile_picture_url: res.data.profile_picture_url
        });
      } catch (err) {
        // pass
      }
    };

    checkLogin();
  }, []);

  const apps = (
    <>
      <Icon.Folder
        style={{
          '--csss-icon-color': '#a1a1aa' // zinc-400
        }}
      />
      <a style={{ marginTop: 'auto' }} href="#profile">
        {userInfo !== null && userInfo.profile_picture_url !== null ? (
          <img
            style={{
              width: '32px',
              height: '32px',
              objectFit: 'cover'
            }}
            src="https://random.dog/oq9izk0057hy.jpg"
          />
        ) : (
          <Icon.Profile
            style={{
              width: '100%',
              '--csss-icon-color': '#a1a1aa', // zinc-400
              '--csss-icon-stroke-width': '1px'
            }}
          />
        )}
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
        <VSCode.NavItem isInFolder={true} text="Frosh Week" href="/frosh" />
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
      <VSCode.NavFolder text="Elections">
        <VSCode.NavItem
          isInFolder={true}
          text="About Elections.md"
          to="/about_elections"
        />
        <VSCode.NavItem
          isInFolder={true}
          text="Past Elections.md"
          to="/past_elections"
        />
      </VSCode.NavFolder>
    </>
  );

  console.log(window.location.hash);

  const loginUrl =
    CAS_LOGIN_URL +
    '?service=' +
    encodeURIComponent(
      window.location.origin +
        '/api/auth/login' +
        '?redirect_path=' +
        window.location.pathname +
        '&redirect_fragment=' +
        window.location.hash.substring(1)
    );

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setUserInfo(null);
      sessionStorage.removeItem('profile');
      window.location.reload();
    } catch (err) {
      // pass
    }
  };

  const statusBar =
    userInfo === null ? (
      <p className="text-sm text-gray-400">
        Not logged in;{' '}
        <a className="text-blue-400 hover:underline" href={loginUrl}>
          log in with SFU CAS
        </a>
      </p>
    ) : (
      <p className="text-sm">
        Logged in as {userInfo.computing_id};{' '}
        <a
          className="text-blue-400 hover:underline hover:cursor-pointer"
          onClick={logout}
        >
          log out
        </a>
      </p>
    );

  return (
    <VSCode.Page
      apps={apps}
      files={files}
      statusBar={statusBar}
      title="SFU-CSSS"
    >
      {children}
    </VSCode.Page>
  );
};
