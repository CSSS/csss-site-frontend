import React, { useEffect, useState } from 'react';
import { Page } from '../components';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faDiscord,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Updated images and routes
const sections = [
  {
    text: 'Meet the exec team!',
    image: '/homepage/team.jpg',
    link: '#officers'
  },
  {
    text: 'Get involved!',
    image: '/homepage/getinvolved.jpg',
    link: '#about'
  },
  {
    text: 'Our events!',
    image: '/homepage/events.jpg',
    link: '#events'
  },
  {
    text: 'Documents!',
    image: '/homepage/documents.jpg',
    link: '#documents'
  },
  {
    text: 'Visit our Common Room',
    image: '/homepage/commonroom.jpg',
    link: '#common_rooms'
  }
];

export const Home = () => {
  const [loaded, setLoaded] = useState(false);

  // Animation trigger for big banner
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  // Animation for the banner darkening
  const imageSpring = useSpring({
    filter: loaded ? 'brightness(50%)' : 'brightness(100%)',
    config: { duration: 4000 }
  });

  // Animation for the banner text
  const textSpring = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 120, friction: 14, delay: 1000 }
  });

  return (
    <Page hideMinimap={true}>
      <div className="relative w-full min-h-screen">
        <animated.img
          src="/homepage/homepage.jpg"
          alt="SFU CSSS"
          className="absolute inset-0 w-full h-full object-cover"
          style={imageSpring}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center ${loaded ? 'bg-black bg-opacity-50' : 'bg-transparent'} transition-colors duration-1000`}
        >
          <animated.h1
            className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight text-center"
            style={{ ...textSpring, fontFamily: 'Poppins, sans-serif' }}
          >
            Welcome to the
            <br />
            Computing Science Student Society
          </animated.h1>
        </div>
      </div>
      <div className="p-16 max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          A message from your president
        </h2>
        <h3
          className="text-xl sm:text-2xl md:text-3xl font-light mt-2 text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          By Isabelle Kwan
        </h3>
        <div className="mt-6">
          <img
            src="/homepage/president.jpg"
            alt="President Portrait"
            className="w-64 h-80 object-cover rounded-lg float-left mr-6 mb-4"
          />
          <p
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-left"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span
              className="text-5xl sm:text-6xl md:text-7xl font-bold float-left mr-4"
              style={{ lineHeight: '1.2em' }}
            >
              H
            </span>
            ello! I'm Isabelle Kwan, and I'm delighted to welcome you to the
            CSSS. We are Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Pellentesque quis lacus eget urna ornare commodo quis id ante.
            Integer porttitor diam quis tellus malesuada auctor. Suspendisse
            vestibulum eros a finibus malesuada. Mauris nec risus eu velit
            ullamcorper luctus aliquet eu justo. Suspendisse laoreet lacus ut
            risus eleifend, non tempor orci mattis. Sed arcu augue, posuere in
            tempus vel, gravida ac ipsum. Ut non eleifend nibh. Aenean semper
            fermentum arcu eget ultrices. Nullam velit dui, porttitor ac viverra
            eu, porta ac eros. Nunc dapibus nulla arcu, ut malesuada libero
            semper a. Donec venenatis lorem quis mauris vestibulum, quis
            consectetur dolor auctor. Ut congue euismod arcu at commodo.
            Maecenas sit amet scelerisque erat. See you around! Signed, Isabelle
            Kwan
          </p>
        </div>
      </div>
      <div className="mx-16 my-8">
        <a href={sections[4].link}>
          <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src={sections[4].image}
              alt={sections[4].text}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-8">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {sections[4].text}
              </h2>
            </div>
          </div>
        </a>
      </div>
      <div className="mx-16 my-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {sections.slice(0, 4).map((section, index) => (
          <a key={index} href={section.link}>
            <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img
                src={section.image}
                alt={section.text}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-8">
                <h2
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {section.text}
                </h2>
              </div>
            </div>
          </a>
        ))}
      </div>
      <footer className="bg-[#0f172a] text-white py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h4 className="text-lg font-bold">Common Room Address</h4>
              <p>Applied Science Building 9971</p>
              <p>Simon Fraser University</p>
              <p>8888 University Drive</p>
              <p>Burnaby, BC</p>
              <p>Canada V5A 1S6</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/sfucsss/"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://discord.com/invite/sfucsss"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faDiscord} size="lg" />
              </a>
              <a
                href="https://www.instagram.com/sfu_csss/"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/sfucsss/"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="mailto:csss-exec-current@sfu.ca"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Page>
  );
};
