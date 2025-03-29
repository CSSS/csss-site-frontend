import React from 'react';
import { Page, Footer } from '../../components';
import elections from './data.json';

const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
// TODO: replace with api call for all past elections

export const PastElections = () => {
  const electionEntries = Object.entries(elections.elections); // Convert object to an array
  const pastElections = electionEntries.filter(
    ([_, election]) => election.end_date
  );

  return (
    <Page>
      <div
        className="p-16 max-w-4xl mx-auto"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 pb-8">
          Past Elections
        </h1>
        <div className="flex flex-col text-md sm:text-lg md:text-xl mb-8 gap-8">
          <p>
            {' '}
            <a
              className="text-blue-500 hover:text-blue-700"
              href="https://sfucsss.org/elections/"
              target="_blank"
            >
              Old website
            </a>
          </p>

          {pastElections.map(([slug, election]) => (
            <div key={slug}>
              <a
                className="text-blue-500 hover:text-blue-700"
                href={`#elections/${slug}`}
              >
                {election.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Page>
  );
};
