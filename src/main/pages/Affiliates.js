import React from 'react';
import { Page, Footer } from '../components';
import { useSpring, animated } from 'react-spring';

// Affiliates data
const affiliates = [
  {
    text: 'WiCS',
    image: '/static/files/affiliates/wics.jpg',
    link: 'https://www.sfu.ca/computing/wics/'
  },
  {
    text: 'MSU',
    image: '/static/files/affiliates/msu.jpg',
    link: 'https://sfumsu.github.io/'
  },
  {
    text: 'ESSS',
    image: '/static/files/affiliates/esss.jpg',
    link: 'https://www.sfu.ca/esss/?page=home'
  },
  {
    text: 'MSESS',
    image: '/static/files/affiliates/msess.jpg',
    link: 'https://msess.ca/'
  },
  {
    text: 'SEE',
    image: '/static/files/affiliates/see.jpg',
    link: 'https://seess.ca/'
  },
  {
    text: 'WiE',
    image: '/static/files/affiliates/wie.jpg',
    link: 'https://www.sfu.ca/clubs/wie.html'
  },
  {
    text: 'SSSS',
    image: '/static/files/affiliates/ssss.jpg',
    link: 'https://sfussss.org/'
  },
  {
    text: 'DSSS',
    image: '/static/files/affiliates/dsss.jpg',
    link: 'https://discord.com/invite/kdj7F82mgn'
  }
];

export const Affiliates = () => {
  return (
    <Page>
      <div className="p-16 max-w-4xl mx-auto">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Affiliates
        </h1>
        <p
          className="flex items-center justify-center text-lg sm:text-xl md:text-2xl mb-8"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Links to our affiliated organizations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {affiliates.map((affiliate, index) => (
            <a key={index} href={affiliate.link} target="_blank">
              <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={affiliate.image}
                  alt={affiliate.text}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-8">
                  <h2
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {affiliate.text}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </Page>
  );
};
