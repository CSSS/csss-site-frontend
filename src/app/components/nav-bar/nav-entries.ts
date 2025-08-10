import { CodeListItem } from '@csss-code/list/list-item/list-item.component';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import {
  faChevronRight,
  faFile,
  faRoadBarrier,
  faUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';

export interface NavItem extends CodeListItem<NavItem> {
  route?: string; // Internal route
  href?: string; // External link
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
        route: '/readme'
      },
      {
        key: 'officers',
        label: 'Officers',
        icon: faFile,
        route: '/officers'
      },
      {
        key: 'committees',
        label: 'Committees',
        icon: faFile,
        route: '/committees'
      },
      {
        key: 'common-room',
        label: 'Common Room',
        icon: faFile,
        route: '/common-room'
      },
      {
        key: 'affiliates',
        label: 'Affiliates',
        icon: faFile,
        route: '/affiliates'
      }
    ]
  },
  {
    key: 'events',
    label: 'Events',
    icon: faFile,
    isOpen: true,
    children: [
      {
        key: 'events.about',
        label: 'About',
        icon: faFile,
        route: '/events'
      },
      {
        key: 'events.tech-fair',
        label: 'Tech Fair',
        icon: faUpRightFromSquare,
        href: 'https://tech-fair.sfucsss.org'
      },
      {
        key: 'events.frosh',
        label: 'Frosh',
        icon: faUpRightFromSquare,
        href: 'https://frosh.sfucsss.org'
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
        route: '/elections',
        isDisabled: true
      },
      {
        key: 'speeches',
        label: 'Speeches',
        icon: faRoadBarrier,
        route: '/speeches',
        isDisabled: true
      }
    ]
  },
  {
    key: 'documents',
    label: 'Documentation',
    icon: faChevronRight,
    isOpen: true,
    children: [
      {
        key: 'documentation.constitution',
        label: 'Constitution',
        icon: faUpRightFromSquare,
        href: 'https://github.com/CSSS/public-docs/tree/master/constitutions'
      },
      {
        key: 'documentation.policies',
        label: 'Policies',
        icon: faUpRightFromSquare,
        href: 'https://github.com/CSSS/public-docs/tree/master/policies'
      },
      {
        key: 'documentation.sfss-minutes',
        label: 'SFSS Minutes',
        icon: faUpRightFromSquare,
        href: 'https://sfss.ca/about/meeting-times-minutes/council/'
      }
    ]
  }
];
