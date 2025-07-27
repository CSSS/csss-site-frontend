type NavIcon = 'file' | 'folder' | 'wip';

export interface NavbarItem {
  key: string;
  label: string;
  type: NavIcon;
  children?: NavbarItem[];
  link?: string;
}

export const NAVBAR_ENTRIES: NavbarItem[] = [
  {
    key: 'csss',
    label: 'The CSSS',
    type: 'folder',
    children: [
      {
        key: 'readme',
        label: 'README',
        type: 'file',
        link: '/readme'
      },
      {
        key: 'officers',
        label: 'Officers',
        type: 'file',
        link: '/officers'
      },
      {
        key: 'committees',
        label: 'Committees',
        type: 'file',
        link: '/committees'
      },
      {
        key: 'common-room',
        label: 'Common Room',
        type: 'file',
        link: '/common-room'
      },
      {
        key: 'affiliates',
        label: 'Affiliates',
        type: 'file',
        link: '/affiliates'
      }
      // {
      //   key: 'documents',
      //   label: 'Documents',
      //   type: 'file',
      //   link: '/documents'
      // },
    ]
  },
  {
    key: 'elections',
    label: 'Elections',
    type: 'folder',
    children: [
      {
        key: 'elections',
        label: 'Upcoming',
        type: 'wip',
        link: '/elections'
      },
      {
        key: 'speeches',
        label: 'Speeches',
        type: 'wip',
        link: '/speeches'
      }
    ]
  },
  {
    key: 'events',
    label: 'Events',
    type: 'folder',
    children: [
      {
        key: 'events',
        label: 'Upcoming',
        type: 'wip',
        link: '/events'
      },
      {
        key: 'events-archive',
        label: 'Archive',
        type: 'wip',
        link: '/events-archive'
      }
    ]
  }
];
