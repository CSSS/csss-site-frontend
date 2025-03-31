import React from 'react';
import { Page, Footer } from '../../components';
import { useParams } from 'react-router-dom';
import elections from './elections.json';

export const ElectionInfo = () => {
  const { slug } = useParams();
  const election = elections.elections[slug];
  let header = null;

  if (!election) {
    header = (
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 pb-8">
        Election not found
      </h1>
    );
  } else {
    header = (
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 pb-8">
        {election.name}
      </h1>
    );
  }
  return (
    <Page>
      <div
        className="p-16 max-w-4xl mx-auto"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {header}
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
      <Footer />
    </Page>
  );
};
