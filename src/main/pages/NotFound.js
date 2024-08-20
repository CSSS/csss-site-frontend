import React from 'react';
import { Page } from '../components';

export const NotFound = () => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <img
          src="/static/files/404frog.png"
          alt="404 Frog"
          style={{
            width: '50%',
            height: '50%',
            objectFit: 'contain',
            filter: 'drop-shadow(8px 8px 64px rgb(82 82 91))' // zinc-700
          }}
        />
        <h1 className="text-lg font-bold">ERROR 404</h1>
        <p className="text-sm text-zinc-400">Page not found :(</p>
        <a className="text-sm text-blue-400 underline" href="/">
          Go home
        </a>
      </div>
    </Page>
  );
};
