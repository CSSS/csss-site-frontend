import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as Flex from '../Flex';
import * as Icon from '../Icon';

import './NavBar.css'; // csss-nav-app-drawer, csss-nav-mobile-menu

export const NavBar = ({
  apps,
  children,
  className,
  isMobileDevice,
  style,
  title
}) => {
  // used for mobile device navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  /* navigation bar (left-side)
   * NOTE: this fills whatever space is given by its container */
  const navBar = (
    <div
      className={
        'flex w-full h-full flex-row items-stretch overflow-x-hidden bg-zinc-950 border-r border-zinc-900 ' +
        className
      }
      style={style}
    >
      {/*
        application drawer;
        csss-nav-app-drawer in ./NavBar.css.
        I chose to define the app drawer's styles in this CSS file as
        Tailwind is finicky for what I want to do; raw CSS is easier. 
      */}
      <div className="csss-nav-app-drawer border-zinc-800 border-r">
        <Icon.CSSS style={{ '--csss-icon-color': 'white' }} />
        {apps}
      </div>
      {/* navigation drawer */}
      <div className="h-full flex flex-col grow gap-px overflow-y-scroll">
        <div className="flex flex-row p-3 h-10 w-full align-center justify-between">
          <h2 className="text-zinc-400">{title}</h2>
          {!isMobileDevice && (
            <p className="text-zinc-400">&#183;&#183;&#183;</p>
          )}
        </div>
        {/* folders and items */}
        {children}
      </div>
    </div>
  );

  if (isMobileDevice) {
    return (
      <>
        <div className="flex flex-row p-3 h-full w-full align-center justify-between bg-zinc-950 border-b border-zinc-900">
          <h2 className="block text-zinc-400 leading-10 text-lg">{title}</h2>
          <button
            className="rounded bg-zinc-950 hover:bg-zinc-900 font-bold text-lg text-zinc-400 w-10 h-10 border border-zinc-700"
            onClick={toggleMenu}
          >
            {/* looks like [...] */}
            &#183;&#183;&#183;
          </button>
        </div>
        {/*
          mobile pop-out menu;
          csss-nav-mobile-menu in ./NavBar.css. Ditto ^^. 
        */}
        <div className={'csss-nav-mobile-menu ' + (isOpen ? '' : 'hidden')}>
          <div className="navbar" onClick={toggleMenu}>
            {navBar}
          </div>
          <div className="exit" onClick={toggleMenu} />
        </div>
      </>
    );
  }

  return navBar;
};
