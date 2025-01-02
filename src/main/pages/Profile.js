import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from '@fortawesome/free-solid-svg-icons';

import { Page } from '../components';

export const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const userInfoStr = sessionStorage.getItem('profile');
      if (userInfoStr) {
        setUserInfo(JSON.parse(userInfoStr));
      }
    }, 100); // 100ms to let Page load login info
  }, []);

  const setProfilePicture = async () => {
    const userInput = document.querySelector('input[type="text"]');
    console.log(userInput.value);
    try {
      const res = await axios.patch(
        '/api/auth/user?profile_picture_url=' +
          encodeURIComponent(userInput.value)
      );
      console.log(res.data);
      //window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  if (userInfo === null) {
    return (
      <Page>
        <div className="flex flex-col justify-center items-center w-full h-full gap-2">
          <p className="text-lg text-gray-400">
            Please log in to view this page.
          </p>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col justify-center items-stretch w-96">
          <FontAwesomeIcon className="text-3xl" icon={faPerson} />
          <p className="text-sm mt-4">
            &emsp;&emsp;Welcome, to your super fancy, super cool, CSSS user
            account. There's nothing here right now, but in the future, it will
            grant you access to a multitude of very cool and very useful
            projects.
          </p>
          <p className="mt-1 text-sm">
            &emsp;&emsp;But for right now, you can set a cool profile picture.
          </p>
          <input
            type="text"
            className="mt-2 rounded bg-black text-white text-xs px-2 py-1 hover:ring-1 focus:ring focus:outline-none mt-2"
            placeholder="https://example.com/my_image.png"
          />
          <button
            className="mt-1 rounded bg-blue-400 text-white text-sm py-1 px-2 mt-2"
            onClick={setProfilePicture}
          >
            Set Profile Picture
          </button>
        </div>
      </div>
    </Page>
  );
};
