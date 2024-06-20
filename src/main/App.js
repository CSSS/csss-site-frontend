import React, { useState, useEffect } from 'react';
import { helpers } from 'csss-raspberry';

export function App() {
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

  if (user === null) {
    return <button onClick={loginUser}>Log in</button>;
  }

  return <p>Logged in as: {JSON.stringify(user)}</p>;
}
