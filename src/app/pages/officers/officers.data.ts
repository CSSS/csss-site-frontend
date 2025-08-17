type ExecPosition =
  | 'President'
  | 'Vice President'
  | 'Treasurer'
  | 'Director of Resources'
  | 'Director of Events'
  | 'Director of Educational Events'
  | 'Assistant Director of Events'
  | 'Director of Communications'
  | 'Director of Multimedia'
  | 'Director of Archives'
  | 'SFSS Council Representative'
  | 'Executive at Large'
  | 'First-Year Representative';

type ElectedRep = 'Elections Officer' | 'Frosh Week Chair';

type Semester = 'Spring' | 'Summer' | 'Fall';

interface Executive {
  name: string;
  position: ExecPosition;
  photoName: string;
  semester?: Semester;
}

export interface ExecutiveAdministration {
  startYear: number;
  endYear: number;
  members: Executive[];
}

export interface ExecDescription {
  position: ExecPosition | ElectedRep;
  duties: string[];
}

export const EXEC_DESCRIPTIONS: Array<ExecDescription> = [
  {
    position: 'President',
    duties: [
      'Maintains the integrity of the CSSS and delegate duties as necessary',
      'Calls General Meetings',
      'Member of every committee within the CSSS and all committees the CSSS needs representation for',
      'Official spokesperson, representative, and contact of the CSSS',
      'Monitors all the projects funded through the CSSS'
    ]
  },
  {
    position: 'Vice President',
    duties: [
      'Chairs all meetings in the CSSS',
      'Member of every committee within the CSSS and all committees the CSSS needs representation for',
      'Coordinate volunteers for the operation of the CSSS',
      'Promote CSSS events to external groups for sponsorship',
      'Maintain relationships with alumni and outside groups'
    ]
  },
  {
    position: 'Treasurer',
    duties: [
      'Manages the finances of the CSSS, including subscriptions and revenue',
      "Maintains all financial records and regularly reports on the society's financial state to our members"
    ]
  },
  {
    position: 'Director of Resources',
    duties: [
      'Maintains the resources available to the members, such as the common room, technical equipment, and vending machines',
      'Acquires goods and assets that are necessary for the upkeep of the CSSS'
    ]
  },
  {
    position: 'Director of Events',
    duties: ['Organizes large CSSS-sponsored events', 'Chairs the Events Committee']
  },
  {
    position: 'Director of Educational Events',
    duties: [
      'Organizes professional and eductional CSSS-sponsored events',
      'Member of the Events Committee'
    ]
  },
  {
    position: 'Assistant Director of Events',
    duties: ['Organizes recurring CSSS-sponsored events', 'Member of the Events Committee']
  },
  {
    position: 'Director of Communications',
    duties: [
      'Promotes and manages public relations for the CSSS',
      'Maintains records of all correspondence between the CSSS and other organizations',
      'Manages all the social media accounts of the CSSS and helps advertise events the society is a part of'
    ]
  },
  {
    position: 'Director of Multimedia',
    duties: [
      'Create and obtain media for promotional material, artwork and photographs for Executives'
    ]
  },
  {
    position: 'Director of Archives',
    duties: [
      'Manages the documentation for meetings, events, policies and other critical records for the CSSS',
      'Ensures General Meetings are announced and takes meeting minutes',
      'Maintains CSSS officer membership lists',
      'Stay current with regulations and procedures of both the CSSS and the Simon Fraser Student Society'
    ]
  },
  {
    position: 'SFSS Council Representative',
    duties: [
      "The CSSS's Student Union Council Representative",
      'Ensures the CSSS is represented fairly and advocates in the interest of our members'
    ]
  },
  {
    position: 'Executive at Large',
    duties: [
      'Helps the Director of Resources in maintaining the shared resources of the CSSS',
      'Assists Executives in tasks related to the operation of the CSSS'
    ]
  },
  {
    position: 'First-Year Representative',
    duties: [
      'Advocates on behalf of members in their first year of post-secondary education',
      'Sits on at least one CSSS committee',
      'Assists Executives in tasks related to the operation of the CSSS'
    ]
  }
];

export const ELECTED_DESCRIPTIONS: Array<ExecDescription> = [
  {
    position: 'Elections Officer',
    duties: [
      'Organizes and manages a CSSS election',
      'Receives all nominations for members and announces elections results'
    ]
  },
  {
    position: 'Frosh Week Chair',
    duties: [
      'Responsible for organizing Frosh Week',
      'Chairs the Frosh Week Committee and holds all planning meetings'
    ]
  }
];

export const executives: ExecutiveAdministration[] = [
  {
    startYear: 2025,
    endYear: 2026,
    members: [
      {
        name: 'Mabel Ling',
        position: 'President',
        photoName: 'ballerina-cappuccina.png'
      },
      {
        name: 'Karen Yao',
        position: 'Vice President',
        photoName: 'bobritto-bandito.png'
      },
      {
        name: 'Matthew Liu',
        position: 'Treasurer',
        photoName: 'tralalero-tralala.png'
      },
      {
        name: 'Michael Ho',
        position: 'Director of Resources',
        photoName: 'bombombini-gusini.png'
      },
      {
        name: 'Samantha Gan',
        position: 'Director of Events',
        photoName: 'brr-brr-patapim.png'
      },
      {
        name: 'Ilia Mosaddegh',
        position: 'Director of Educational Events',
        photoName: 'lirili-larila.png'
      },
      {
        name: 'Nathan Huynh',
        position: 'Assistant Director of Events',
        photoName: 'chimpanzini-bananini.png'
      },
      {
        name: 'Chloe Shen',
        position: 'Director of Communications',
        photoName: 'glorbo-fruttodrillo.png'
      },
      {
        name: 'Chloe Xie',
        position: 'Director of Multimedia',
        photoName: 'tung-tung-tung-sahur.png'
      },
      {
        name: 'Dina Zeng',
        position: 'Director of Archives',
        photoName: 'tric-trac-baraboom.png'
      },
      {
        name: 'Aiya Bowman',
        position: 'Executive at Large',
        photoName: 'trippi-troppi.png'
      },
      {
        name: 'Alexander Ng',
        position: 'Executive at Large',
        photoName: 'giraffa-celeste.png'
      }
    ]
  },
  {
    startYear: 2024,
    endYear: 2025,
    members: [
      {
        name: 'Isabelle Kwan',
        position: 'President',
        photoName: 'bobritto-bandito.png'
      },
      {
        name: 'Jake Choi',
        position: 'Vice President',
        photoName: 'bobritto-bandito.png'
      },
      {
        name: 'Mabel Ling',
        position: 'Treasurer',
        photoName: 'tralalero-tralala.png'
      },
      {
        name: 'Aiya Bowman',
        position: 'Director of Resources',
        photoName: 'bombombini-gusini.png'
      },
      {
        name: 'Emily Qin',
        position: 'Director of Events',
        photoName: 'brr-brr-patapim.png'
      },
      {
        name: 'Elvin Zukic',
        position: 'Director of Educational Events',
        photoName: 'lirili-larila.png'
      },
      {
        name: 'Taranveer Singh',
        position: 'Assistant Director of Events',
        photoName: 'chimpanzini-bananini.png'
      },
      {
        name: 'Chloe Shen',
        position: 'Director of Communications',
        photoName: 'glorbo-fruttodrillo.png'
      },
      {
        name: 'Annie Jiao',
        position: 'Director of Multimedia',
        photoName: 'tung-tung-tung-sahur.png'
      },
      {
        name: 'Dina Zeng',
        position: 'Director of Archives',
        photoName: 'tric-trac-baraboom.png'
      },
      {
        name: 'Rastko Koprivica',
        position: 'Executive at Large',
        photoName: 'trippi-troppi.png'
      },
      {
        name: 'Michael Ho',
        position: 'Executive at Large',
        photoName: 'giraffa-celeste.png'
      }
    ]
  },
  {
    startYear: 2023,
    endYear: 2024,
    members: [
      {
        name: 'Justin Yan',
        position: 'President',
        photoName: 'ballerina-cappuccina.png'
      },
      {
        name: 'Valerie Kistrina',
        position: 'Vice President',
        photoName: 'bobritto-bandito.png'
      },
      {
        name: 'Gabe Stang',
        position: 'Treasurer',
        photoName: 'tralalero-tralala.png'
      },
      {
        name: 'Sean Chan',
        position: 'Director of Resources',
        photoName: 'bombombini-gusini.png'
      },
      {
        name: 'Patrick Peake',
        position: 'Director of Events',
        photoName: 'brr-brr-patapim.png'
      },
      {
        name: 'Micah Baker',
        position: 'Director of Educational Events',
        photoName: 'lirili-larila.png'
      },
      {
        name: 'Arya Faghihy',
        position: 'Assistant Director of Events',
        photoName: 'chimpanzini-bananini.png'
      },
      {
        name: 'Isabelle Kwan',
        position: 'Director of Communications',
        photoName: 'glorbo-fruttodrillo.png'
      },
      {
        name: 'Yolanda Lam',
        position: 'Director of Multimedia',
        photoName: 'tung-tung-tung-sahur.png'
      },
      {
        name: 'Dina Zeng',
        position: 'Director of Archives',
        photoName: 'tric-trac-baraboom.png'
      },
      {
        name: 'Jake Choi',
        position: 'Executive at Large',
        photoName: 'trippi-troppi.png'
      },
      {
        name: 'Joyce Zhang',
        position: 'Executive at Large',
        photoName: 'giraffa-celeste.png'
      }
    ]
  }
];

export const ALL_EXEC_IMAGES = [
  'ballerina-cappuccina.png',
  'bobritto-bandito.png',
  'bombardiro-crocodillo.png',
  'bombombini-gusini.png',
  'boneca-ambalabu.png',
  'brr-brr-patapim.png',
  'burbaloni-luliloli.png',
  'cappucino-asassino.png',
  'chimpanzini-bananini.png',
  'frigo-camelo.png',
  'giraffa-celeste.png',
  'glorbo-fruttodrillo.png',
  'lirili-larila.png',
  'orangutini-ananasini.png',
  'tigrullini-watermellini.png',
  'tralalero-tralala.png',
  'tric-trac-baraboom.png',
  'trippi-troppi.png',
  'trulimero-trulicina.png',
  'tung-tung-tung-sahur.png',
  'uccelloburger.png',
  'vacca-saturno-saturnita.png'
];

export function getRandomExecImage(): string {
  return ALL_EXEC_IMAGES[Math.floor(Math.random() * ALL_EXEC_IMAGES.length)];
}
