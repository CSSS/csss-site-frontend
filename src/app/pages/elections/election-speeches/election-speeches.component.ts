import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { NOMINEES } from './speeches/general2026';

type GeneralPosition =
  | 'President'
  | 'Vice-President'
  | 'Treasurer'
  | 'Director of Resources'
  | 'Director of Events'
  | 'Director of Educational Events'
  | 'Assistant Director of Events'
  | 'Director of Communications'
  | 'Secretary'
  | 'SFSS Council Representative';

const ORDERING = {
  President: 0,
  'Vice-President': 1,
  Treasurer: 2,
  'Director of Resources': 3,
  'Director of Events': 4,
  'Director of Educational Events': 5,
  'Assistant Director of Events': 6,
  'Director of Communications': 7,
  Secretary: 8,
  'SFSS Council Representative': 9
};

interface Position {
  position: GeneralPosition;
  speech: string;
}

export interface Nominee {
  name: string;
  positions: Position[];
}

interface CandidateSpeech {
  name: string;
  speech: string;
}

@Component({
  selector: 'cs-election-speeches',
  imports: [ArticleComponent],
  templateUrl: './election-speeches.component.html',
  styleUrl: './election-speeches.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElectionSpeechesComponent implements OnInit {
  nominees: Nominee[] = NOMINEES;
  positionEntries: { key: GeneralPosition; value: CandidateSpeech[] }[] = [];

  private order = ORDERING;

  ngOnInit(): void {
    const temp = new Map<GeneralPosition, CandidateSpeech[]>();
    for (const n of this.nominees) {
      for (const p of n.positions) {
        const speeches = temp.get(p.position) ?? [];
        speeches.push({
          name: n.name,
          speech: p.speech
        });
        temp.set(p.position, speeches);
      }
    }
    // Sort by static order
    this.positionEntries = Array.from(temp.entries())
      .sort((a, b) => this.order[a[0]] - this.order[b[0]])
      .map(([key, value]) => ({ key, value }));
  }
}
