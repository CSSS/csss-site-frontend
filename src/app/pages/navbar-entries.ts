export interface NavEntry {
  key: string;
  label: string;
  type: 'file' | 'folder';
  children?: NavEntry[];
  link?: string;
}

export const navEntries: NavEntry[] = [
  {
    key: 'readme',
    label: 'README',
    type: 'file',
    link: '/readme'
  },
  {
    key: 'csss',
    label: 'The CSSS',
    type: 'folder',
    children: [
      {
        key: 'about',
        label: 'About',
        type: 'file',
        link: '/about'
      },
      {
        key: 'affiliates',
        label: 'Affiliates',
        type: 'file',
        link: 'affiliates'
      },
      {
        key: 'committees',
        label: 'Committees',
        type: 'file',
        link: 'committees'
      },
      {
        key: 'common-room',
        label: 'Common Room',
        type: 'file',
        link: 'common-room'
      },
      {
        key: 'documents',
        label: 'Documents',
        type: 'file',
        link: 'documents'
      },
      {
        key: 'officers',
        label: 'Officers',
        type: 'file',
        link: 'officers'
      }
    ]
  },
  {
    key: 'elections',
    label: 'Elections',
    type: 'folder',
    children: [
      {
        key: 'elections-upcoming',
        label: 'Upcoming',
        type: 'file',
        link: 'elections-upcoming'
      },
      {
        key: 'speeches',
        label: 'Speeches',
        type: 'file',
        link: 'speeches'
      },
      {
        key: 'elections-archive',
        label: 'Archive',
        type: 'file',
        link: 'elections-archive'
      }
    ]
  },
  {
    key: 'events',
    label: 'Events',
    type: 'folder',
    children: [
      {
        key: 'events-upcoming',
        label: 'Upcoming',
        type: 'file',
        link: 'events-upcoming'
      },
      {
        key: 'events-archive',
        label: 'Archive',
        type: 'file',
        link: 'events-archive'
      }
    ]
  }
];
