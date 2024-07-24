import React from 'react';
import { Page } from '../components';

export const Home = () => {
  return (
    <Page>
      <div className="relative h-screen w-full overflow-hidden">
        <img
          src="/homepage.jpg"
          alt="SFU CSSS"
          className="w-full h-full object-cover"
        />
      </div>
    </Page>
  );
};
