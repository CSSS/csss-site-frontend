import React from 'react';
import { Page, Footer } from '../components';

export const Documents = () => {
  return (
    <Page>
      <div className="px-16 py-12 max-w-4xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Documents
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl mb-12"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Welcome to our document repository. Here, you can access the two key
          CSSS documents: The Constitution and Policies. Simply click on the
          links below to download them.
        </p>

        {/* CSS Documents */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a
            href="/static/files/docs/constitution_july2024.pdf"
            download
            className="relative flex-grow w-full sm:w-1/2 md:w-1/3"
          >
            <div className="relative w-full px-4 py-6 rounded flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#cfcfcf"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              >
                <polyline points="44 8 44 16 52 16" />
                <polygon points="52 16 44 8 12 8 12 56 52 56 52 16" />
                <line x1="20" y1="20" x2="28" y2="20" />
                <line x1="20" y1="28" x2="44" y2="28" />
                <line x1="36" y1="36" x2="20" y2="36" />
                <line x1="20" y1="44" x2="44" y2="44" />
              </svg>
              <p className="mb-2 text-lg text-center sm:text-xl md:text-2xl">
                Download Constitution
              </p>
              <p className="text-sm">July 2024</p>
              <div className="absolute inset-0 rounded-xl hover:bg-gray-200 opacity-10 transition-opacity duration-300"></div>
            </div>
          </a>
          <a
            href="/static/files/docs/policies_july2024.pdf"
            download
            className="relative flex-grow w-full sm:w-1/2 md:w-1/3"
          >
            <div className="relative w-full px-4 py-6 rounded flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="#cfcfcf"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              >
                <polyline points="44 8 44 16 52 16" />
                <polygon points="52 16 44 8 12 8 12 56 52 56 52 16" />
                <line x1="20" y1="20" x2="28" y2="20" />
                <line x1="20" y1="28" x2="44" y2="28" />
                <line x1="36" y1="36" x2="20" y2="36" />
                <line x1="20" y1="44" x2="44" y2="44" />
              </svg>
              <p className="mb-2 text-lg text-center sm:text-xl md:text-2xl">
                Download Policies
              </p>
              <p className="text-sm">July 2024</p>
              <div className="absolute inset-0 rounded-xl hover:bg-gray-200 opacity-10 transition-opacity duration-300"></div>
            </div>
          </a>
        </div>

        <p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed text-left"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          For those who want to stay up-to-date, we also provide access to the
          General Meeting Minutes. These are updated weekly and are available in
          our
          <a
            href="https://github.com/CSSS/minutes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 ml-1"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            GitHub repository
          </a>
          .
        </p>
      </div>
      <Footer />
    </Page>
  );
};
