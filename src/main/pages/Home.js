import React, { useEffect, useState } from 'react';
import { Page } from '../components';
import { useSpring, animated } from 'react-spring';

// Placeholder images and routes
const sections = [
  {
    text: 'Meet the exec team!',
    image: '/homepage.jpg',
    link: '/exec-team'
  },
  {
    text: 'Get involved!',
    image: '/homepage.jpg',
    link: '/get-involved'
  },
  {
    text: 'Our events!',
    image: '/homepage.jpg',
    link: '/events'
  },
  {
    text: 'Our constitution!',
    image: '/homepage.jpg',
    link: '/constitution'
  },
  {
    text: 'Visit our Common Room',
    image: '/homepage.jpg',
    link: '/common-room'
  }
];

// Placeholder images for gallery
const galleryImages = [
  '/homepage.jpg',
  '/homepage.jpg',
  '/homepage.jpg',
  '/homepage.jpg'
];

export const Home = () => {
  const [loaded, setLoaded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Animation trigger for big banner
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500);

    // Set up interval for gallery rotation
    const interval = setInterval(() => {
      setGalleryIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
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
      <div className="p-16">
        <p
          className="text-lg sm:text-xl md:text-2xl"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
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
      <div className="p-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Gallery
        </h2>
        <div className="relative mt-8 w-full max-w-4xl h-[30rem] mx-auto rounded-2xl overflow-hidden shadow-lg">
          {galleryImages.map((image, index) => (
            <animated.img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${galleryIndex === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-2000"
            style={{ opacity: galleryIndex === galleryImages.length ? 1 : 0 }}
          ></div>
        </div>
      </div>
    </Page>
  );
};
