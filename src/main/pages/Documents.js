import React from 'react';
import { Page, Footer } from '../components';

export const Documents = () => {
  return (
    <Page>
      <div className="p-16 max-w-4xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Documents
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed text-left mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Here you can find all the important documents related to our society.
        </p>

        <div className="flex justify-center items-center mb-24">
          <a
            href="/static/files/docs/constitution_july2024.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg sm:text-xl md:text-2xl px-4 py-2 rounded"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Download Constitution
          </a>
          <a
            href="/static/files/docs/policies_july2024.pdf"
            download
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg sm:text-xl md:text-2xl px-4 py-2 rounded"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Download Policies
          </a>
        </div>

        <p>Last Updated: 13 August 2024</p>
      </div>
      <Footer />
    </Page>
  );
};
