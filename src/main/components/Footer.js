import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faDiscord,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white py-8 mt-8">
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
  );
};
