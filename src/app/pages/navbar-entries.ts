export interface NavbarEntry {
  key: string;
  name: string;
  type: 'file' | 'folder';
  entries?: NavbarEntry[];
}

export const navbarEntries: NavbarEntry[] = [
  {
    key: 'readme',
    name: 'README',
    type: 'file'
  },
  {
    key: 'home',
    name: 'The CSSS',
    type: 'folder',
    entries: [
      {
        key: 'about',
        name: 'About',
        type: 'file'
      },
      {
        key: 'affiliates',
        name: 'Affiliates',
        type: 'file'
      },
      {
        key: 'committees',
        name: 'Committees',
        type: 'file'
      },
      {
        key: 'common-room',
        name: 'Common Room',
        type: 'file'
      },
      {
        key: 'documents',
        name: 'Documents',
        type: 'file'
      },
      {
        key: 'officers',
        name: 'Officers',
        type: 'file'
      }
    ]
  },
  {
    key: 'elections',
    name: 'Elections',
    type: 'folder',
    entries: [
      {
        key: 'elections-upcoming',
        name: 'Upcoming',
        type: 'file'
      },
      {
        key: 'speeches',
        name: 'Speeches',
        type: 'file'
      },
      {
        key: 'elections-archive',
        name: 'Archive',
        type: 'file'
      }
    ]
  },
  {
    key: 'events',
    name: 'Events',
    type: 'folder',
    entries: [
      {
        key: 'events-upcoming',
        name: 'Upcoming',
        type: 'file'
      },
      {
        key: 'events-archive',
        name: 'Archive',
        type: 'file'
      }
    ]
  }
];
