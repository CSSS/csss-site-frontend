import React from 'react';
import { Page, Footer } from '../../components';
import { SlNote } from 'react-icons/sl';
import { FaVoteYea } from 'react-icons/fa';

export const AboutElections = () => {
  return (
    <Page>
      <div
        className="p-16 max-w-4xl mx-auto"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 pb-8">
          Elections
        </h1>
        <p className="flex items-center justify-center text-md sm:text-lg md:text-xl mb-8">
          The CSSS holds elections annually to elect the next executive team.
          The executive team is responsible for managing the society and
          organizing events for the student body. The election is overseen by an
          elected Elections officer and is open to all current CSSS members.
        </p>
        <br />
        <div className="flex flex-col sm:flex-row items-start text-md sm:text-lg md:text-xl mb-8 space-x-2">
          <strong className="text-xl sm:text-2xl font-bold">***</strong>
          <p>
            You are automatically a member of the CSSS if you are a declared
            CMPT{' '}
            <span className="italic">
              <a
                className="text-blue-500 hover:text-blue-700"
                href="#about_elections"
              >
                Major
              </a>
              ,{' '}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="#about_elections"
              >
                Minor
              </a>
              , or{' '}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="#about_elections"
              >
                Honours
              </a>
            </span>{' '}
            in any undergraduate program offered by the School of Computing
            Science; currently enrolled in any undergraduate Computing Science
            course; or an Honorary Member of the Society.
            <br />
            <strong>
              {' '}
              Voting is restricted to{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  textDecorationColor: 'red',
                  textUnderlineOffset: '0.2em'
                }}
              >
                Members only
              </span>
              .
            </strong>
          </p>
        </div>

        <div className="flex flex-row items-center justify-center text-md sm:text-lg md:text-xl mb-8 gap-8">
          <a
            href="#about_elections"
            className="relative w-full px-4 py-6 rounded flex flex-col items-center justify-center  hover:bg-white hover:text-black  duration-300"
          >
            <SlNote />
            Register
          </a>
          <a
            href="#about_elections"
            className=" relative w-full px-4 py-6 rounded flex flex-col items-center justify-center  hover:bg-white hover:text-black  duration-300"
          >
            <FaVoteYea />
            Vote
          </a>
        </div>
      </div>
      <Footer />
    </Page>
  );
};
