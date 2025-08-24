import { IconDefinition } from '@fortawesome/angular-fontawesome';

const bgPath =
  'm257 45-44 88a9 9 0 0 1-13 3l-44-25 28 141a9 9 0 0 1-15 8l-57-61-14 33a9 9 0 0 1-10 5l-73-15 25 77a9 9 0 0 1-4 10L7 323l127 102a9 9 0 0 1 2 10l-15 43h273l-16-43a9 9 0 0 1 3-10l126-102-28-14a9 9 0 0 1-5-10l25-77-73 15a9 9 0 0 1-10-5l-14-33-57 61a9 9 0 0 1-14-8l27-141-44 25a9 9 0 0 1-12-3z';

export const fallHacksBg: IconDefinition = {
  prefix: 'csss',
  iconName: 'fall-hacks-logo',
  icon: [512, 512, [], '', bgPath]
};

const codePath =
  'M201 395 93 347v-16l108-54v26l-75 35 75 31zm101-138-59 160h-30l59-160zm11 112 75-31-75-35v-26l109 54v16l-109 48z';
export const fallHacksCode: IconDefinition = {
  prefix: 'csss',
  iconName: 'fall-hacks-logo',
  icon: [512, 512, [], '', codePath]
};
