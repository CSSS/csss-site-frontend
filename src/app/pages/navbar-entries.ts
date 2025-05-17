export interface NavbarEntry {
  key: string;
  label: string;
  type: 'file' | 'folder';
  entries?: NavbarEntry[];
}

export const navbarEntries: NavbarEntry[] = [
  {
    key: 'readme',
    label: 'README',
    type: 'file'
  },
  {
    key: 'csss',
    label: 'The CSSS',
    type: 'folder',
    entries: [
      {
        key: 'about',
        label: 'About',
        type: 'file'
      },
      {
        key: 'affiliates',
        label: 'Affiliates',
        type: 'file'
      },
      {
        key: 'committees',
        label: 'Committees',
        type: 'file'
      },
      {
        key: 'common-room',
        label: 'Common Room',
        type: 'file'
      },
      {
        key: 'documents',
        label: 'Documents',
        type: 'file'
      },
      {
        key: 'officers',
        label: 'Officers',
        type: 'file'
      }
    ]
  },
  {
    key: 'elections',
    label: 'Elections',
    type: 'folder',
    entries: [
      {
        key: 'elections-upcoming',
        label: 'Upcoming',
        type: 'file'
      },
      {
        key: 'speeches',
        label: 'Speeches',
        type: 'file'
      },
      {
        key: 'elections-archive',
        label: 'Archive',
        type: 'file'
      }
    ]
  },
  {
    key: 'events',
    label: 'Events',
    type: 'folder',
    entries: [
      {
        key: 'events-upcoming',
        label: 'Upcoming',
        type: 'file'
      },
      {
        key: 'events-archive',
        label: 'Archive',
        type: 'file'
      }
    ]
  }
];
