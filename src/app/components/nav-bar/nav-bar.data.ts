import { MenuItem } from '@csss-code/menu/menu-item/menu-item.component';
import {
  faChevronDown,
  faChevronRight,
  faFile,
  faRoadBarrier
} from '@fortawesome/free-solid-svg-icons';

export interface NavbarItem extends MenuItem {
  children?: NavbarItem[];
  link?: string;
}

export const NAVBAR_ENTRIES: NavbarItem[] = [
  {
    key: 'csss',
    label: 'The CSSS',
    icon: (state: boolean) => (state ? faChevronDown : faChevronRight),
    children: [
      {
        key: 'readme',
        label: 'README',
        icon: faFile,
        link: '/readme'
      },
      {
        key: 'officers',
        label: 'Officers',
        icon: faFile,
        link: '/officers'
      },
      {
        key: 'committees',
        label: 'Committees',
        icon: faFile,
        link: '/committees'
      },
      {
        key: 'common-room',
        label: 'Common Room',
        icon: faFile,
        link: '/common-room'
      },
      {
        key: 'events',
        label: 'Events',
        icon: faFile,
        link: '/events'
      },
      {
        key: 'affiliates',
        label: 'Affiliates',
        icon: faFile,
        link: '/affiliates'
      }
      // {
      //   key: 'documents',
      //   label: 'Documents',
      //   type: faFile,
      //   link: '/documents'
      // },
    ]
  },
  {
    key: 'elections',
    label: 'Elections',
    icon: (state: boolean) => (state ? faChevronDown : faChevronRight),
    children: [
      {
        key: 'elections',
        label: 'Upcoming',
        icon: faRoadBarrier,
        link: '/elections',
        isDisabled: true
      },
      {
        key: 'speeches',
        label: 'Speeches',
        icon: faRoadBarrier,
        link: '/speeches',
        isDisabled: true
      }
    ]
  },
  {
    key: 'documents',
    label: 'Documents',
    icon: (state: boolean) => (state ? faChevronDown : faChevronRight),
    children: []
  }
];
