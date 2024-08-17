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
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

// Updated images and routes
const sections = [
  {
    text: 'Meet the exec team!',
    image: '/static/files/main/team.jpg',
    link: '#officers'
  },
  {
    text: 'Get involved!',
    image: '/static/files/main/getinvolved.jpg',
    link: '#about'
  },
  {
    text: 'Our events!',
    image: '/static/files/main/events.jpg',
    link: '#events'
  },
  {
    text: 'Documents!',
    image: '/static/files/main/documents.jpg',
    link: '#documents'
  },
  {
    text: 'Visit our Common Room',
    image: '/static/files/main/commonroom.jpg',
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
    <Page>
      <div className="relative w-full" style={{ height: 'calc(100vh - 32px)' }}>
        <animated.img
          src="/static/files/main/homepage.png"
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
        {/* Down arrow icon */}
        <div className="absolute bottom-20 w-full flex justify-center">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-white text-4xl animate-bounce"
          />
        </div>
      </div>
      <div className="p-16 max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          A message from your president
        </h2>
        <div className="mt-10">
          <img
            src="/static/files/main/president.jpg"
            alt="President Portrait"
            className="w-64 h-80 object-cover rounded-lg float-left mr-6 mb-4"
            style={{ 'overflow-clip-margin': 'unset' }}
          />
          <p
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-left"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span
              className="text-5xl sm:text-6xl md:text-7xl font-bold float-left mr-4"
              style={{ lineHeight: '1em' }}
            >
              H
            </span>
            i everyone! My name is Isabelle and I am thrilled to welcome you to
            the Computing Science Student Society – the coolest and most engaged
            community on campus!
            <br />
            <br />
            No matter your level of experience, whether you’re a seasoned coder,
            just starting to explore the world of computing, or just trying to
            fill an elective requirement with CMPT 120, you’ve found your
            people. We’ve got an amazing year ahead, packed with social events,
            technical workshops, hackathons, gaming nights, and tons of
            opportunities to meet like-minded friends.
            <br />
            <br />
            But it’s not just about the tech. We’re here to build a supportive
            and inclusive community where everyone feels at home. So, jump in
            and don’t hesitate to share your ideas. We have so many
            opportunities for you to get involved, volunteer, and build your
            resumes, so stay up to date with all our meetings and announcements!
            <br />
            <br />
            Finally, if you ever see me or any of the other executives on
            campus, give us a wave! We are so excited for the upcoming year and
            all the things we will accomplish together.
            <br />
            <br />
            All the best,
            <br />
            Isabelle Kwan
            <br />
            CSSS President
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
      <Footer />
    </Page>
  );
};
