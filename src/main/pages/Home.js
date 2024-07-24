import React, { useEffect, useState } from 'react';
import { Page } from '../components';
import { useSpring, animated } from 'react-spring';

export const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animations after a short delay
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  // Animation for the image darkening
  const imageSpring = useSpring({
    filter: loaded ? 'brightness(50%)' : 'brightness(100%)',
    config: { duration: 4000 }
  });

  // Animation for the text
  const textSpring = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 120, friction: 14, delay: 1000 }
  });

  return (
    <Page hideMinimap={true}>
      <div className="relative w-full min-h-screen">
        <animated.img
          src="/homepage.jpg"
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
      <div className="p-8">
        <p
          className="text-lg sm:text-xl md:text-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
    </Page>
  );
};
