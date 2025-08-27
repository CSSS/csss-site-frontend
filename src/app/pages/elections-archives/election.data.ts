import { ElectionModel } from 'libs/backend-api/model/election-model';

export type Semester = 'spring' | 'summer' | 'fall';

export interface ElectionViewModel extends ElectionModel {
  year: number;
  semester: Semester;
}

export function dateToSemester(date: Date): Semester {
  /* January (0) - April (3): Spring
   * May (4) - August (7): Summer
   * May (8) - August (11): Fall
   */
  const month = date.getMonth();

  if (month <= 3) {
    return 'spring';
  }
  if (month <= 7) {
    return 'summer';
  }
  if (month <= 11) {
    return 'fall';
  }
  throw new Error(`Unknown month ${month}`);
}
