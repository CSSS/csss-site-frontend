import React, { useState, useEffect } from 'react';
import { Page, Footer } from '../../components';
import { useParams } from 'react-router-dom';
import elections from './elections.json';
const CAS_LOGIN_URL = 'https://cas.sfu.ca/cas/login';

// TODO: Implement a save feature

export const Register = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const { slug } = useParams();
  const election = elections.elections[slug];
  const positions = election.positions;

  const handleChange = (position) => {
    setSelectedPositions(
      (prev) =>
        prev.includes(position)
          ? prev.filter((item) => item !== position) // Remove if already selected
          : [...prev, position] // Add if not selected
      // should SelectedPositions be sorted in order of importance?
    );
  };

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
  const checkLogin = () => {
    if (userInfo === null) {
      window.location.replace(loginUrl);
    } else {
      window.location.replace('/');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const userInfoStr = sessionStorage.getItem('profile');
      if (userInfoStr) {
        setUserInfo(JSON.parse(userInfoStr));
      }
      // TODO: Test later to see if timeout is required
      // checkLogin();
    }, 100); // 100ms to let Page load login info
  }, []);

  return (
    <Page>
      <div
        className="p-16 max-w-4xl mx-auto"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 pb-8">
          Register for {election.name}
        </h1>
        <ul>
          <h2>Select the positions you would like to run for:</h2>
          {positions.map((position) => (
            <li key={position} className="flex items-center space-x-2 py-4">
              <input
                type="checkbox"
                checked={selectedPositions.includes(position)}
                onChange={() => handleChange(position)}
                id={position}
              />
              <label id={position}>{position}</label>
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-400">
          Not logged in;{' '}
          <a className="text-blue-400 hover:underline" href={loginUrl}>
            log in with SFU CAS
          </a>
        </p>
      </div>
      <p className="mt-3 text-sm text-gray-600">
        Selected:{' '}
        {selectedPositions.length > 0 ? selectedPositions.join(', ') : 'None'}
      </p>
      <Footer />
    </Page>
  );
};
