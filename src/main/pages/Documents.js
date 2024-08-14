import React from 'react';
import { Page, Footer } from '../components';

export const Documents = () => {
  return (
    <Page>
      <div className="p-16 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Documents
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-left" 
           style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Here you can find all the important documents related to our society.
        </p>
      </div>
      <Footer />
    </Page>
  );
};
