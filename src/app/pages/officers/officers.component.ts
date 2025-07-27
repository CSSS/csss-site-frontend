import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  OnDestroy,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';
import { ArticleComponent } from '@csss-code/article/article.component';
import { CardComponent } from '@csss-code/card/card.component';
import { gsap } from 'gsap';
import { ExecutiveAdministration, executives, getRandomExecImage } from './officers';

const REM = 16;
const LINE_WIDTH = 6;

@Component({
  selector: 'cs-officers',
  imports: [CardComponent, ArticleComponent],
  templateUrl: './officers.component.html',
  styleUrl: './officers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficersComponent implements AfterViewInit, OnDestroy {
  /**
   * The years to display on the line.
   */
  protected yearsToDisplay = computed(() => {
    const result = [];
    const currentYear = Math.trunc(new Date().getFullYear());
    for (let i = 0; i < this.lineWidth() - 1; i++) {
      result.push(currentYear - i);
    }
    return result;
  });

  /**
   * The year currently selected.
   */
  protected currentYear = signal(new Date().getFullYear());

  protected currentAdministration = computed<ExecutiveAdministration | null>(() => {
    const year = this.currentYear();
    let newAdmin = this.cachedAdmins.get(year);
    if (!newAdmin) {
      // TODO: Fetch this from the back end.
      newAdmin = executives.find(e => e.startYear === year);
      if (!newAdmin) {
        throw new Error(`Administration for year ${year} not found.`);
      }
      // FIXME: Remove this once admins are properly fetched.
      newAdmin.members = newAdmin.members.map(exec => {
        return {
          ...exec,
          photoName: this.toLocalUrl('')
        };
      });
      // end of FIXME:
      this.cachedAdmins.set(year, newAdmin);
    }

    return newAdmin;
  });

  private execCards = viewChildren<CardComponent>('execCard');

  /**
   * Timeline element that wraps the lines.
   */
  private timelineEl = viewChild.required<ElementRef<HTMLDivElement>>('timeline');

  /**
   * Observer to recalculate the line widths if the viewport width changes.
   */
  private resizeObs!: ResizeObserver;

  /**
   * Width of the lines in the timeline.
   */
  private lineWidth = signal<number>(0);

  /**
   * Cache the admins so we don't need to fetch them each time.
   * Will probably need some way to remove older cached entries if memory becomes an issue.
   */
  private cachedAdmins = new Map<number, ExecutiveAdministration>();

  constructor() {
    effect(() => {
      if (!this.currentAdministration() || !this.execCards().length) {
        return;
      }

      this.animateCards();
    });
  }

  ngAfterViewInit(): void {
    // Watch for viewport changes so we know how many lines to print.
    this.resizeObs = new ResizeObserver(entries => {
      for (const entry of entries) {
        const linesToDisplay = Math.trunc(entry.contentRect.width / (LINE_WIDTH * REM));
        if (this.lineWidth() !== linesToDisplay) {
          this.lineWidth.set(linesToDisplay);
        }
      }
    });
    this.resizeObs.observe(this.timelineEl().nativeElement);
    this.calcAndSetLineWidth(this.timelineEl().nativeElement.offsetWidth);
  }

  ngOnDestroy(): void {
    this.resizeObs.disconnect();
  }

  private animateCards(): void {
    const cards = this.execCards();
    if (!cards || !cards.length) {
      return;
    }

    const targets = cards.map(el => el.elementRef.nativeElement);
    gsap.from(targets, {
      bottom: -50,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.out'
    });
  }

  /**
   * Changes the files name to one that can be used to set the background image.
   *
   * @param fileName - The file name to change. Must be in the `public/images/` folder
   * @returns File name in the CSS URL form.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private toLocalUrl(fileName: string): string {
    return `images/placeholders/${getRandomExecImage()}`;
  }

  /**
   * Calculates the line width based on the timeline width and sets it.
   *
   * @param width - Width of the timeline element.
   */
  private calcAndSetLineWidth(width: number): void {
    this.lineWidth.set(width / (LINE_WIDTH * REM));
  }
}
