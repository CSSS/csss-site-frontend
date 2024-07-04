import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as Flex from '../Flex';
import { Arrow, Cross, CSSS, Folder, File, Film, Hamburger } from '../Icon';

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
        'flex w-full h-full flex-row items-stretch overflow-x-hidden bg-slate-900 ' +
        (isMobileDevice ? 'border-r border-slate-700 ' : '') +
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
      <div className="csss-nav-app-drawer border-slate-700 border-r">
        {apps}
      </div>
      {/* navigation drawer */}
      <div className="h-full flex flex-col grow gap-px overflow-y-scroll">
        <div className="flex flex-row p-3 h-10 w-full align-center justify-between">
          <h2 className="text-slate-400">{title}</h2>
          {!isMobileDevice && (
            <p className="text-slate-400">&#183;&#183;&#183;</p>
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
        <div className="flex flex-row p-3 h-full w-full align-center justify-between bg-slate-800 border-b border-slate-600">
          <h2 className="block text-slate-400 leading-10 text-lg">{title}</h2>
          <button
            className="rounded bg-slate-800 hover:bg-slate-600 font-bold text-lg text-slate-400 w-10 h-10 border border-slate-600"
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
          <div className="navbar">{navBar}</div>
          <div className="exit" onClick={toggleMenu} />
        </div>
      </>
    );
  }

  return navBar;
};
