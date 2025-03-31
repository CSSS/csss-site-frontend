import React, { useState, useEffect } from 'react';
import { Page, Footer } from '../../components';
import { SlNote } from 'react-icons/sl';
import { FaVoteYea } from 'react-icons/fa';
import elections from './elections.json';

const displayElection = (election) => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 pb-8">
        {election.name}
      </h1>
      {Object.entries(election.positions).map(([position, candidates]) => (
        <div key={position}>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold py-4">
            Position: {position}
          </h2>
          <ul>
            {candidates.map((candidate) => (
              <li className="py-4" key={candidate.full_name}>
                <h3>
                  {' '}
                  Nominee name: <strong>{candidate.full_name}</strong>
                </h3>
                <p>
                  Votes: <strong>{candidate.votes}</strong>
                </p>
                <h4 className="py-4">Nominee speech:</h4>
                <ul className="bg-gray-900 text-white p-4 rounded-sm shadow-md">
                  <li>{candidate.speech}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const AboutElections = () => {
  const electionEntries = Object.entries(elections.elections); // Convert object to an array
  const currentElection = electionEntries.filter(
    ([_, election]) => election.status != 'ended'
  );

  return (
    <Page>
      <div
        className="p-8 max-w-4xl mx-auto min-h-fit"
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
                href="#elections/about"
              >
                Major
              </a>
              ,{' '}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="#elections/about"
              >
                Minor
              </a>
              , or{' '}
              <a
                className="text-blue-500 hover:text-blue-700"
                href="#elections/about"
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
      </div>

      <div
        className="p-4 max-w-4xl mx-auto text-sm sm:text-md md:text-lg "
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {currentElection.map(([slug, election]) => (
          <div key={slug}>
            {election.status === 'voting' ? (
              <div className="flex flex-row items-center justify-between mb-4 gap-2 bg-gray-900 pl-8 rounded shadow-md">
                <span className="font-bold">{election.name}</span>
                <a
                  href={`#elections/${slug}`}
                  className="relative px-6 py-6 rounded flex flex-col items-center justify-center  hover:bg-white hover:text-black  duration-300"
                >
                  <FaVoteYea />
                  Vote
                </a>
              </div>
            ) : election.status === 'registration' ? (
              <div className="flex flex-row items-center justify-between mb-4 gap-4 bg-gray-900 pl-8 rounded shadow-md">
                <span className="font-bold">{election.name}</span>
                <a
                  href={`#elections/${slug}/register`}
                  className="relative px-6 py-6 rounded flex flex-col items-center justify-center  hover:bg-white hover:text-black  duration-300"
                >
                  <SlNote />
                  Register
                </a>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
        {currentElection.length === 0 && (
          <div>
            <h1 className="text-md sm:text-lg md:text-xl font-bold text-center mb-8 pb-8">
              There are currently no elections in progress.
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </Page>
  );
};
