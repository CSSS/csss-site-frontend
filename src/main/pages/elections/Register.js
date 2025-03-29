import React, { useState, useEffect } from 'react';
import { Page, Footer } from '../../components';
import { useParams } from 'react-router-dom';
import elections from './data.json';

const CAS_LOGIN_URL = 'https://cas.sfu.ca/cas/login';

export const Register = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { slug } = useParams();
  const election = elections.elections[slug];

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
        <p className="text-sm text-gray-400">
          Not logged in;{' '}
          <a className="text-blue-400 hover:underline" href={loginUrl}>
            log in with SFU CAS
          </a>
        </p>
      </div>
      <Footer />
    </Page>
  );
};
