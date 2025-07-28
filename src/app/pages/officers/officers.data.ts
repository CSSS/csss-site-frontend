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
  | 'Exec at Large'
  | 'First-Year Rep';

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
        position: 'Exec at Large',
        photoName: 'trippi-troppi.png'
      },
      {
        name: 'Alexander Ng',
        position: 'Exec at Large',
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
        position: 'Exec at Large',
        photoName: 'trippi-troppi.png'
      },
      {
        name: 'Michael Ho',
        position: 'Exec at Large',
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
        position: 'Exec at Large',
        photoName: 'trippi-troppi.png'
      },
      {
        name: 'Joyce Zhang',
        position: 'Exec at Large',
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
