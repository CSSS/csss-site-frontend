import type { NavItem, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Computing Science Student Society',
  title: 'SFU Computing Science Student Society',
  description: 'The website of the SFU Computing Science Student Society.'
};

export const navItems: NavItem[] = [
  {
    label: 'THE CSSS',
    children: [
      { label: 'OFFICERS', href: '/officers' },
      { label: 'COMMITTEES', href: '/committees' },
      { label: 'COMMON ROOM', href: '/common-room' },
      { label: 'AFFILIATES', href: '/affiliates' }
    ]
  },
  {
    label: 'EVENTS',
    children: [
      { label: 'ABOUT', href: '/events' },
      { label: 'ARCHIVES', href: '/events/archives' },
      { label: 'FROSH WEEK', href: 'https://frosh.sfucsss.org', external: true },
      { label: 'FALL HACKS', href: 'https://fall-hacks.sfucsss.org', external: true },
      { label: 'TECH FAIR', href: 'https://tech-fair.sfucsss.org', external: true },
      { label: 'MOUNTAIN MADNESS', href: 'https://madness.sfucsss.org', external: true }
    ]
  },
  {
    label: 'ELECTIONS',
    children: [
      { label: 'ABOUT', href: '/elections' }
      // { label: 'SCHEDULE', href: '/elections/schedule' },
      // { label: 'SPEECHES', href: '/elections/speeches' }
    ]
  }
];

export const footerNavItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'OFFICERS', href: '/officers' },
  { label: 'EVENTS', href: '/events' },
  { label: 'ELECTIONS', href: '/elections' }
];

export const socialLinks = {
  website: 'https://sfucsss.org',
  discord: 'https://discord.gg/sfucsss',
  instagram: 'https://www.instagram.com/sfu_csss/',
  linkedin: 'https://ca.linkedin.com/company/sfucsss',
  facebook: 'https://www.facebook.com/sfucsss'
} as const;
