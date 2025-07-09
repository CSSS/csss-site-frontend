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
  photoUrl: string;
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
        photoUrl: 'ballerina-cappuccina.png'
      },
      {
        name: 'Karen Yao',
        position: 'Vice President',
        photoUrl: 'bobritto-bandito.png'
      },
      {
        name: 'Matthew Liu',
        position: 'Treasurer',
        photoUrl: 'tralalero-tralala.png'
      },
      {
        name: 'Michael Ho',
        position: 'Director of Resources',
        photoUrl: 'bombombini-gusini.png'
      },
      {
        name: 'Samantha Gan',
        position: 'Director of Events',
        photoUrl: 'brr-brr-patapim.png'
      },
      {
        name: 'Ilia Mosaddegh',
        position: 'Director of Educational Events',
        photoUrl: 'lirili-larila.png'
      },
      {
        name: 'Nathan Huynh',
        position: 'Assistant Director of Events',
        photoUrl: 'chimpanzini-bananini.png'
      },
      {
        name: 'Chloe Shen',
        position: 'Director of Communications',
        photoUrl: 'glorbo-fruttodrillo.png'
      },
      {
        name: 'Chloe Xie',
        position: 'Director of Multimedia',
        photoUrl: 'tung-tung-tung-sahur.png'
      },
      {
        name: 'Dina Zeng',
        position: 'Director of Archives',
        photoUrl: 'tric-trac-baraboom.png'
      },
      {
        name: 'Aiya Bowman',
        position: 'Exec at Large',
        photoUrl: 'trippi-troppi.png'
      },
      {
        name: 'Alexander Ng',
        position: 'Exec at Large',
        photoUrl: 'giraffa-celeste.png'
      }
    ]
  }
];
