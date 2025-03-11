import React from 'react';
import { Page, Footer } from '../../components';

export const AboutElections = () => {
  return (
    <Page>
      <div className="p-16 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          About Elections
        </h1>
        <p className="flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-8">
          The CSSS holds elections annually to elect the next executive team.
          The executive team is responsible for managing the society and
          organizing events for the student body. The election process is
          overseen by the current executive team and is open to all current CSSS
          members.
        </p>
      </div>
      <Footer />
    </Page>
  );
};
