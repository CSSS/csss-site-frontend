import { CodeListItem } from '@csss-code/list/list-item/list-item.component';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import {
  faBook,
  faChevronRight,
  faFile,
  faRoadBarrier,
  faUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons';
import { EXTERNAL_LINKS } from 'components/url/links.data';

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
        label: 'Frosh Week',
        icon: faUpRightFromSquare,
        href: 'https://frosh.sfucsss.org'
      },
      {
        key: 'events.fall-hacks',
        label: 'Fall Hacks',
        icon: faUpRightFromSquare,
        href: 'https://new.sfucsss.org/fall_hacks/2024/index.html'
      },
      {
        key: 'events.mountain-madness',
        label: 'Mountain Madness',
        icon: faUpRightFromSquare,
        href: 'https://new.sfucsss.org/mountain_madness/2024/index.html'
      },
      {
        key: 'events.archives',
        label: 'Archives',
        icon: faBook,
        route: '/event-archives'
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
        key: 'elections.about',
        label: 'About',
        icon: faFile,
        route: '/elections'
      },
      {
        key: 'elections.upcoming',
        label: 'Upcoming',
        icon: faRoadBarrier,
        route: '/upcoming-elections',
        isDisabled: true
      },
      {
        key: 'elections.speeches',
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
        href: EXTERNAL_LINKS['constitution']
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
        href: 'https://sfss.ca/about/meeting-times-minutes/council'
      }
    ]
  }
];
