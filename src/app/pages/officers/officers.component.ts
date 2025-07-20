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
import { toLocalImageUrl } from 'utils/stringUtils';
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
  /**
   * The administration currently on the front side of the card (zero degrees rotation).
   */
  protected frontAdmin = signal<ExecutiveAdministration>(executives[0]);

  /**
   * The administration currently on the back side of the card (180 degrees rotation).
   */
  protected backAdmin = signal<ExecutiveAdministration>(executives[0]);

  /**
   * The administration currently on the visible side of the card.
   */
  protected displayAdmin = computed<ExecutiveAdministration>(() =>
    this.areCardsFlipped() ? this.backAdmin() : this.frontAdmin()
  );

  /**
   * The administration that is on the card, but not visible.
   */
  protected flippedAdmin = computed<ExecutiveAdministration>(() =>
    this.areCardsFlipped() ? this.frontAdmin() : this.backAdmin()
  );

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
   * Used to get to the native elements.
   */
  private execCards = viewChildren<ElementRef<HTMLDivElement>>('execCard');

  /**
   * Executive card native elements.
   * Mutate this when doing animations.
   */
  private execCardsEl = computed<HTMLDivElement[]>(() =>
    this.execCards().map(el => el.nativeElement)
  );

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
  private areCardsFlipped = signal(false);

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

  /**
   * Changes the files name to one that can be used to set the background image.
   *
   * @param fileName - The file name to change. Must be in the `public/images/` folder
   * @returns File name in the CSS URL form.
   */
  protected toLocalUrl(fileName: string): string {
    return toLocalImageUrl(getRandomExecImage());
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

    // Don't do anything if the selected administration year is already displayed.
    if (this.displayAdmin().startYear === year) {
      return;
    }

    // Replace the administration drawn on the back of the cards.
    const shouldReplaceBack = this.flippedAdmin().startYear !== year;

    // Check if the administration has been fetched before
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

    // If the administration is already on the flip side of the current set of cards then we can just flip the cards
    if (shouldReplaceBack) {
      if (this.areCardsFlipped()) {
        this.frontAdmin.set(newAdminToSet);
      } else {
        this.backAdmin.set(newAdminToSet);
      }
    }
    this.flipCards();
  }

  /**
   * Plays the flip animation.
   */
  private flipCards(): void {
    if (!this.execCardsEl() || !this.execCardsEl().length) {
      throw new Error('No executive card elements found');
    }

    // Set the flag so no new flip animations can be run.
    this.areCardsFlipping = true;

    // Create a timeline that every single card flip is added to so that they are staggered and the
    // completion functions properly runs.
    const tl = gsap.timeline({
      onComplete: () => {
        this.areCardsFlipped.update(b => !b);
        // Reset the rotation back to 0 to prevent someone hitting infinity if they spend a bunch of time
        // on this page.
        this.currentCardRotationY += 180;
        if (this.currentCardRotationY >= 360 && this.execCardsEl) {
          this.currentCardRotationY = 0;
          gsap.set(this.execCardsEl, { rotateY: 0 });
        }
        this.areCardsFlipping = false;
      }
    });

    // Add all of the animations to the timeline and stagger them.
    for (let i = 0; i < this.execCardsEl().length; i++) {
      const cardEl = this.execCardsEl()[i];
      tl.add(
        gsap.to(cardEl, {
          rotateY: this.currentCardRotationY + 180,
          duration: 0.05,
          ease: 'none'
        }),
        '<+=0.1' // START each animation 0.1 seconds after the previous one STARTS
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
