import React from 'react';
import { Page } from './Page.js';

export const Home = () => {
  return (
    <Page>
      <div className="p-4">
        <p>
          WELCOME TO<br />
          THE <b>FUTURE WEBSITE</b><br />
          OF THE <b>SIMON FRASER UNIVERSITY</b><br />
          <b>COMPUTING SCIENCE STUDENT SOCIETY</b> (CSSS)!<br />
        </p>
        <p className="text-slate-400">
          (Currently under construction.)
        </p>
        <p className="text-blue-400">
          <a href="https://sfucsss.org">
            Click here to go see the old site.
          </a>
        </p>
      </div>
    </Page>
  );
};
