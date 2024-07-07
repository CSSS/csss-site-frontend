import React, { useEffect, useState } from 'react';

import { helpers } from '../../_shared';
import { Page } from '../components';

export const Profile = () => {
  const [user, setUser] = useState(null);

  const loginUser = () => {
    helpers.casLogin(window.location.href);
  };

  useEffect(() => {
    const getUser = async () => {
      setUser(await helpers.casGetUser());
    };

    getUser(); // async
  }, []);

  return (
    <Page>
      <div className="p-4">
        {user === null ? (
          <button className="bg-slate-600 rounded px-1" onClick={loginUser}>
            Log in
          </button>
        ) : (
          <p>Logged in as: {JSON.stringify(user)}</p>
        )}
      </div>
    </Page>
  );
};
