import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';
import { CardComponent } from '@csss-code/card/card.component';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import gsap from 'gsap';
import { ExecutiveAdministration, executives, getRandomExecImage } from './officers';

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
  private renderer = inject(Renderer2);

  protected frontExecs = signal<ExecutiveAdministration>(executives[0]);
  protected backExecs = signal<ExecutiveAdministration>(executives[0]);

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
   * Executive card Angular elements.
   */
  private execCardsWrapper = viewChildren<ElementRef<HTMLDivElement>>('execCard');

  private execCardFronts = viewChildren<CardComponent>('cardFront');
  private execCardBacks = viewChildren<CardComponent>('cardBack');

  /**
   * Observer to recalculate the line widths if the viewport width changes.
   */
  private resizeObs!: ResizeObserver;

  /**
   * Executive card native elements.
   */
  private execCardsEl?: HTMLDivElement[];

  /**
   * Width of the lines in the timeline.
   */
  private lineWidth = signal<number>(0);

  /**
   * The start year of the admins on the front side of the cards.
   */
  private frontYear = new Date().getFullYear();

  /**
   * The start year of the admins on the back side of the cards.
   */
  private backYear = this.frontYear;

  /**
   * Cache the admins so we don't need to fetch them each time.
   * Will probably need some way to remove older cached entries if memory becomes an issue.
   */
  private cachedAdmins = new Map<number, ExecutiveAdministration>();

  /**
   * By how much the current cards are flipped (in degrees).
   */
  private currentCardRotationY = 0;

  /**
   * True if the cards are currently flipping, false otherwise.
   */
  private areCardsFlipping = false;

  /**
   * True if the cards are displaying their backside, false otherwise.
   */
  private areCardsFlipped = false;

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

    // Get the native elements to manipulate with GSAP
    this.execCardsEl = this.execCardsWrapper().map(c => c.nativeElement);
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
    // Don't allow another year to be selected while we're flipping
    if (this.areCardsFlipping) {
      return;
    }

    let newAdminToSet = this.cachedAdmins.get(year);
    if (!newAdminToSet) {
      // TODO: Replace this with a request to the backend for election results.
      // Will probably write a Service for this and place the cache there.
      newAdminToSet = executives.find(e => e.startYear === year);
      if (!newAdminToSet) {
        throw new Error(`Administration for year ${year} not found.`);
      }
      this.cachedAdmins.set(year, newAdminToSet);
    }

    this.flipCards(newAdminToSet);
  }

  private flipCards(newAdminToSet: ExecutiveAdministration): void {
    if (!this.execCardsEl || !this.execCardsEl.length) {
      throw new Error('No executive card elements found');
    }

    // Set the flag so no new flip animations can be run.
    this.areCardsFlipping = true;
    this.areCardsFlipped = !this.areCardsFlipped;
    const stagger = 0.1;
    const newMembers = newAdminToSet.members;
    const sideToReplace = this.areCardsFlipped ? '.card-back' : '.card-front';

    const tl = gsap.timeline({
      onComplete: () => {
        if (this.areCardsFlipped) {
          this.backYear = newAdminToSet.startYear;
        } else {
          this.frontYear = newAdminToSet.startYear;
        }
        this.currentCardRotationY += 180;
        if (this.currentCardRotationY >= 360 && this.execCardsEl) {
          this.currentCardRotationY = 0;
          gsap.set(this.execCardsEl, { rotateY: 0 });
        }
        this.areCardsFlipping = false;
      }
    });

    for (let i = 0; i < newMembers.length; i++) {
      const cardEl = this.execCardsEl[i];
      const cardComp = this.areCardsFlipped ? this.execCardBacks()[i] : this.execCardFronts()[i];
      const cardComponentEl = cardEl.querySelector(sideToReplace);
      if (!cardComponentEl) {
        throw new Error(`No card component at index ${i} for ${sideToReplace}`);
      }
      const name = cardComponentEl.querySelector('h3');
      const pos = cardComponentEl.querySelector('h4');
      if (name) {
        this.renderer.setProperty(name, 'innerText', newMembers[i].name);
      }
      if (pos) {
        this.renderer.setProperty(pos, 'innerText', newMembers[i].position);
      }
      cardComp.setBackground(`images/${getRandomExecImage()}`);
      tl.add(
        gsap.to(cardEl, {
          rotateY: this.currentCardRotationY + 180,
          duration: 0.2,
          ease: 'none'
        }),
        `<+=${stagger}` // Start each animation `stagger` seconds after the previous one
      );
    }
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
