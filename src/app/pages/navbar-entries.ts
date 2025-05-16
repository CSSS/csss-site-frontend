export interface NavbarEntry {
  key: string;
  descriptor: string;
  type: 'file' | 'folder';
  entries?: NavbarEntry[];
}

export const navbarEntries: NavbarEntry[] = [
  {
    key: 'readme',
    descriptor: 'README',
    type: 'file'
  },
  {
    key: 'csss',
    descriptor: 'The CSSS',
    type: 'folder',
    entries: [
      {
        key: 'about',
        descriptor: 'About',
        type: 'file'
      },
      {
        key: 'affiliates',
        descriptor: 'Affiliates',
        type: 'file'
      },
      {
        key: 'committees',
        descriptor: 'Committees',
        type: 'file'
      },
      {
        key: 'common-room',
        descriptor: 'Common Room',
        type: 'file'
      },
      {
        key: 'documents',
        descriptor: 'Documents',
        type: 'file'
      },
      {
        key: 'officers',
        descriptor: 'Officers',
        type: 'file'
      }
    ]
  },
  {
    key: 'elections',
    descriptor: 'Elections',
    type: 'folder',
    entries: [
      {
        key: 'elections-upcoming',
        descriptor: 'Upcoming',
        type: 'file'
      },
      {
        key: 'speeches',
        descriptor: 'Speeches',
        type: 'file'
      },
      {
        key: 'elections-archive',
        descriptor: 'Archive',
        type: 'file'
      }
    ]
  },
  {
    key: 'events',
    descriptor: 'Events',
    type: 'folder',
    entries: [
      {
        key: 'events-upcoming',
        descriptor: 'Upcoming',
        type: 'file'
      },
      {
        key: 'events-archive',
        descriptor: 'Archive',
        type: 'file'
      }
    ]
  }
];
