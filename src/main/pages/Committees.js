import React, { useState } from 'react';
import { Footer, Page } from '../components';

const links = [
  {
    key: 'DoE',
    text: 'csss-doe-current@sfu.ca',
    link: 'mailto:csss-doe-current@sfu.ca'
  },
  {
    key: 'DoMM',
    text: 'csss-domm-current@sfu.ca',
    link: 'mailto:csss-domm-current@sfu.ca'
  },
  {
    key: 'W3C',
    arr: {
      text: 'csss-sysadmin@sfu.ca',
      link: 'mailto:csss-sysadmin@sfu.ca'
    },
    arr2: {
      text: 'csss-webmaster@sfu.ca',
      link: 'mailto:csss-webmaster@sfu.ca'
    }
  }
];

/**
 * When displaying the committees
 * The format is
 * description + email link in the description retrieved from links + the remaining description
 * Given that there is only one email address to embedded int the text body
 */

const committees = [
  {
    name: 'Events Committee',
    key: 'DoE',
    description: `The Events Committee meets bi-weekly to discuss and plan the CSSS's 
      various events such as hackathons, workshops, socials, etc. This committee is 
      chaired by the current Director of Events (DoE), and can be attended either on 
      Discord or in person when rooms are booked. Send the current DoE a message on 
      Discord or reach out to them via email at `,
    description2: ` to join the Events Committee!`
  },
  {
    name: 'Multimedia Committee',
    key: 'DoMM',
    description: `The Multimedia Committee meets asynchronously to work on multimedia 
    for the CSSS such as Instagram posts, posters to be printed and 
    plastered at SFU's campuses, graphics for our website(s), etc. This committee 
    is chaired by the current Director of Multimedia (DoM), and all discussion 
    currently takes place on Discord. Send the current DoM a message on Discord or 
    reach out to them via email at `,
    description2: ` to join the Multimedia Committee!`
  },

  {
    name: 'Tech Fair Committee',
    key: 'DoE',
    description: `The Tech Fair Committee is assembled when planning our yearly career fair, 
    Tech Fair! If you're interested in joining the Tech Fair Committee, reach out 
    to our current Director of Events on Discord or via email at `,
    description2: `! This committee is chaired and curated by an elected 
    officer, so keep an eye out for elections at our general meetings.`
  },
  {
    name: 'Frosh Committee',
    key: 'DoE',
    description: `The Frosh Committee is assembled when planning our yearly welcome week for 
    first-year Computing Science students! If you're interested in joining the Frosh 
    Committee, reach out to our current Director of Events on Discord or via 
    email at `,
    description2: `! This committee is chaired and curated by an elected officer, so keep an eye out 
    for elections at our general meetings.`
  },
  {
    name: 'Silicon Valley Committee',
    key: 'DoE',
    description: `The Silicon Valley Committee is assembled when planning our yearly retreat to 
    Silicon Valley, the heart of the American tech industry. If you're interested in 
    joining the Frosh Committee, reach out to our current Director of Events on 
    Discord or via email at `,
    description2: `! This committee is chaired and curated by an internally elected officer.`
  }
];

/**
 * Display W3 and Policy committee seperately
 * The following have their own display components:
 * - W3 has two distinct email addresses to display
 * - Policy has no email address to display
 */

const committees2 = [
  {
    name: 'W3 Committee',
    key: 'W3C',
    description: `
    The W3 Committee meets asynchronously to work on the various websites and 
    projects for the CSSS such as the current website you're looking at, events pages, 
    games such as PacMacro, etc. This committee is chaired by both the current System 
    Administrator (SysAdmin) and the current Webmaster of the CSSS, and all discussion 
    currently takes place on Discord. Send the current SysAdmin or the current 
    Webmaster a message on Discord or reach out to them via email at 
    `,
    description2: `
    or
    `,
    description3: `
    to join the W3 Committee!
    `
  },
  {
    name: 'Policy Committee',
    key: 'Policy',
    description: `
    The Policy Committee starts spontaneously when our constitution or policies come 
    into question. If you think changes should be made, reach out to the current 
    President or Vice President of the CSSS to assemble the Policy Committee and put 
    changes into motion!
    `
  }
];

/**
 * Three different components
 * 1. Text + Link + Text
 * 2. Text + Link + Text + Link + Text
 * 3. Text
 */

const TLTComponent = ({ committee, links, isOpen, toggle }) => {
  const link = links.find((link) => link.key === committee.key);
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={toggle}
          className="text-center font-bold max-w-80 py-4 px-4 rounded-lg 
         hover:bg-gray-700 text-md md:text-xl"
        >
          {committee.name}
        </button>
      </div>

      <div
        className={`p-8 my-8 max-w-4xl mx-auto bg-gray-700 rounded-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-left text-sm md:text-lg">
          {committee.description}
          <a
            href={link.link}
            className="italic underline font-semibold hover:text-black"
          >
            {link.text}
          </a>
          {committee.description2}
        </p>
      </div>
    </div>
  );
};

const TLTLTcomponent = ({ committee, links, isOpen, toggle }) => {
  const link = links.find((link) => link.key === committee.key);
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={toggle}
          className="text-center font-bold max-w-80 py-4 px-4 rounded-lg
           hover:bg-gray-700 text-md md:text-xl"
        >
          {committee.name}
        </button>
      </div>

      <div
        className={`p-8 my-8 max-w-4xl mx-auto bg-gray-700 rounded-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-left text-sm md:text-lg">
          {committee.description}
          <a
            href={link.arr.link}
            className="italic underline font-semibold hover:text-black"
          >
            {link.arr.text}
          </a>
          {committee.description2}
          <a
            href={link.arr2.link}
            className="italic underline font-semibold hover:text-black"
          >
            {link.arr2.text}
          </a>
          {committee.description3}
        </p>
      </div>
    </div>
  );
};

const JustText = ({ committee, isOpen, toggle }) => {
  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={toggle}
          className="text-center font-bold max-w-80 py-4 px-4 rounded-lg 
          hover:bg-gray-700 text-md md:text-xl"
        >
          {committee.name}
        </button>
      </div>

      <div
        className={`p-8 my-8 max-w-4xl mx-auto bg-gray-700 rounded-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-left text-sm md:text-lg">{committee.description}</p>
      </div>
    </div>
  );
};

/**
 * Main export function to display page and components
 */

export const Committees = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (name) => {
    setOpenSection(openSection === name ? null : name);
  };

  return (
    <Page style={{ fontFamily: 'Poppins, sans-serif' }}>
      <br></br>
      <br />

      {/* 
      - is sub header required?? 
    */}

      <div className="flex flex-col text-center mb-4">
        <div className="text-3xl md:text-5xl font-bold mb-4">Committees</div>
        {/* <div className="text-lg md:text-2xl mb-4">
          <p>A list of our committees.</p>
        </div> */}
      </div>

      <div className="bg-black rounded-lg">
        <div>
          {committees.map((committee) => (
            <TLTComponent
              key={committee.name}
              committee={committee}
              links={links}
              isOpen={openSection === committee.name}
              toggle={() => toggleSection(committee.name)}
            />
          ))}
        </div>

        <div>
          {committees2.map((committee) => {
            if (committee.key === 'W3C') {
              return (
                <TLTLTcomponent
                  key={committee.key}
                  committee={committee}
                  links={links}
                  isOpen={openSection === committee.name}
                  toggle={() => toggleSection(committee.name)}
                />
              );
            }
          })}
        </div>

        <div>
          {committees2.map((committee) => {
            if (committee.key === 'Policy') {
              return (
                <JustText
                  key={committee.key}
                  committee={committee}
                  isOpen={openSection === committee.name}
                  toggle={() => toggleSection(committee.name)}
                />
              );
            }
          })}
        </div>
      </div>

      <Footer />
    </Page>
  );
};
