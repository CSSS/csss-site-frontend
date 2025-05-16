export interface NavbarFile {
  key: string;
  name: string;
}

export interface NavbarFolder {
  key: string;
  name: string;
  entries: NavbarEntry[];
}

export type NavbarEntry = NavbarFile | NavbarFolder;

export const navbarEntries: NavbarEntry[] = [
  {
    key: 'readme',
    name: 'README'
  },
  {
    key: 'home',
    name: 'The CSSS',
    entries: [
      {
        key: 'about',
        name: 'About'
      },
      {
        key: 'affiliates',
        name: 'Affiliates'
      },
      {
        key: 'committees',
        name: 'Committees'
      },
      {
        key: 'common-room',
        name: 'Common Room'
      },
      {
        key: 'documents',
        name: 'Documents'
      },
      {
        key: 'officers',
        name: 'Officers'
      }
    ]
  },
  {
    key: 'elections',
    name: 'Elections',
    entries: [
      {
        key: 'elections-upcoming',
        name: 'Upcoming'
      },
      {
        key: 'speeches',
        name: 'Speeches'
      },
      {
        key: 'elections-archive',
        name: 'Archive'
      }
    ]
  },
  {
    key: 'events',
    name: 'Events',
    entries: [
      {
        key: 'events-upcoming',
        name: 'Upcoming'
      },
      {
        key: 'events-archive',
        name: 'Archive'
      }
    ]
  }
];
