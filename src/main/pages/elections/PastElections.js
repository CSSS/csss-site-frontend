import React from 'react';
import { Page, Footer } from '../../components';

export const PastElections = () => {
  return (
    <Page>
      <div
        className="p-16 max-w-4xl mx-auto"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 pb-8">
          Past Elections
        </h1>
        <div className="flex flex-col items-center justify-center text-md sm:text-lg md:text-xl mb-8 gap-8">
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
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2024
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2023
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2022
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2021
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2020
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2019
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2018
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2017
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2016
            </a>
          </p>
          <p>
            <a
              className="text-blue-500 hover:text-blue-700"
              href="#past_elections"
            >
              2015
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </Page>
  );
};
