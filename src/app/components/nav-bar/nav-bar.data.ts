import { CodeMenuItem } from '@csss-code/list/list-item/list-item.component';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faFile, faRoadBarrier } from '@fortawesome/free-solid-svg-icons';

export interface NavItem extends CodeMenuItem<NavItem> {
  link?: string;
  isOpen?: boolean;
  icon: IconDefinition;
}

export const NAVBAR_ENTRIES: NavItem[] = [
  {
    key: 'csss',
    label: 'The CSSS',
    icon: faChevronRight,
    isOpen: true,
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
    icon: faChevronRight,
    isOpen: true,
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
    icon: faChevronRight,
    isOpen: true,
    children: []
  }
];
