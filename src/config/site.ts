import type { NavItem, SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  name: 'Computing Science Student Society',
  title: 'SFU Computing Science Student Society',
  description: 'The website of the SFU Computing Science Student Society.'
};

export const navItems: NavItem[] = [
  {
    label: 'The CSSS',
    children: [
      { label: 'README', href: '/readme/' },
      { label: 'Officers', href: '/officers/' },
      { label: 'Committees', href: '/committees/' },
      { label: 'Common Room', href: '/common-room/' },
      { label: 'Affiliates', href: '/affiliates/' }
    ]
  },
  {
    label: 'Events',
    children: [
      { label: 'About', href: '/events/' },
      { label: 'Archives', href: '/events/archives/' }
    ]
  },
  {
    label: 'Elections',
    children: [
      { label: 'About', href: '/elections/' },
      { label: 'Schedule', href: '/elections/schedule/' },
      { label: 'Speeches', href: '/elections/speeches/' }
    ]
  }
];

export const footerNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'README', href: '/readme/' },
  { label: 'Events', href: '/events/' },
  { label: 'Elections', href: '/elections/' }
];

export const socialLinks = {
  website: 'https://sfucsss.org',
  discord: 'https://discord.gg/sfucsss',
  instagram: 'https://www.instagram.com/sfu_csss/',
  linkedin: 'https://ca.linkedin.com/company/sfucsss',
  facebook: 'https://www.facebook.com/sfucsss'
} as const;
