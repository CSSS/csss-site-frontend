import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  OnDestroy,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import gsap from 'gsap';
import { addToSignalMap } from 'utils/signalUtils';
import { ExecutiveAdministration, executives } from './officers';

const REM = 16;
const LINE_WIDTH = 6;

@Component({
  selector: 'csss-officers',
  imports: [CsssCodeModule],
  templateUrl: './officers.component.html',
  styleUrl: './officers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficersComponent implements AfterViewInit, OnDestroy {
  /**
   * The executives currently being displayed.
   */
  protected displayExecs = signal<ExecutiveAdministration>(executives[0]);

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
   * Timeline element that wraps the lines.
   */
  private timelineEl = viewChild.required<ElementRef<HTMLDivElement>>('timeline');

  /**
   * Executive card elements.
   */
  private execCards = viewChildren('execCard', { read: ElementRef });

  /**
   * Width of the lines in the timeline.
   */
  private lineWidth = signal<number>(0);

  /**
   * Observer to recalculate the line widths if the viewport width changes.
   */
  private resizeObs!: ResizeObserver;

  /**
   * Cache the admins so we don't need to fetch them each time.
   * Will probably need some way to remove older cached entries if memory becomes an issue.
   */
  private cachedAdmins = signal<Map<number, ExecutiveAdministration>>(new Map());

  private cardAnimations?: gsap.core.Tween;

  ngAfterViewInit(): void {
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
    this.registerFlips();
  }

  ngOnDestroy(): void {
    this.resizeObs.disconnect();
  }

  /**
   * Handles the line clicked.
   * This will update the cache or pull new data, then animate the cards to display new
   * information.
   *
   * @param year - The year of the line clicked.
   */
  protected lineClicked(year: number): void {
    let admin = this.cachedAdmins().get(year);
    if (!admin) {
      // TODO: Replace this with a request to the backend for election results.
      // Will probably write a Service for this and place the cache there.
      admin = executives.find(e => e.startYear === year);
      if (!admin) {
        throw new Error(`Administration for year ${year} not found.`);
      }
      addToSignalMap(this.cachedAdmins, year, admin);
    }

    this.cardAnimations?.play();
    this.displayExecs.set(admin);
  }

  /**
   * Calculates the line width based on the timeline width and sets it.
   *
   * @param width - Width of the timeline element.
   */
  private calcAndSetLineWidth(width: number): void {
    this.lineWidth.set(width / (LINE_WIDTH * REM));
  }

  private registerFlips(): void {
    const cards = this.execCards().map(c => c.nativeElement);
    this.cardAnimations = gsap.to(cards, {
      rotateY: 180,
      duration: 0.5,
      paused: true,
      ease: 'none',
      stagger: 0.1
    });
  }
}
