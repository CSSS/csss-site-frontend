import { CodeListItem } from '@csss-code/list/list-item/list-item.component';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faFile, faRoadBarrier } from '@fortawesome/free-solid-svg-icons';

export interface NavItem extends CodeListItem<NavItem> {
  url?: string;
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
        url: '/readme'
      },
      {
        key: 'officers',
        label: 'Officers',
        icon: faFile,
        url: '/officers'
      },
      {
        key: 'committees',
        label: 'Committees',
        icon: faFile,
        url: '/committees'
      },
      {
        key: 'common-room',
        label: 'Common Room',
        icon: faFile,
        url: '/common-room'
      },
      {
        key: 'events',
        label: 'Events',
        icon: faFile,
        url: '/events'
      },
      {
        key: 'affiliates',
        label: 'Affiliates',
        icon: faFile,
        url: '/affiliates'
      }
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
        url: '/elections',
        isDisabled: true
      },
      {
        key: 'speeches',
        label: 'Speeches',
        icon: faRoadBarrier,
        url: '/speeches',
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
