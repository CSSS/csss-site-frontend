import React from 'react';
import { Page } from '../components';

export const NotFound = () => {
  return (
    <Page>
      <div className="p-4">
        <p>
          Error 404; Page not found :(
          <br />
        </p>
        <p className="text-blue-400">
          <a href="#">Click me!</a>
        </p>
      </div>
    </Page>
  );
};
