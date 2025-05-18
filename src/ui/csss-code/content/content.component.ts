import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  OnDestroy,
  signal,
  ViewChild
} from '@angular/core';

const LETTER_HEIGHT = 24;

@Component({
  selector: 'code-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements AfterViewInit, OnDestroy {
  /**
   * Reference to the content inside the page.
   */
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;

  /**
   * Observer to watch when an element resizes.
   */
  private resizeObs!: ResizeObserver;

  /**
   * How many lines should be printed in the gutter.
   */
  numbersToPrint = signal(0);

  /**
   * The array to display the lines needed for the content.
   * Yes there is a magic number. No I'm not sure how to do this without it.
   * It's about 1.3125 rem, given rem is 16px. If you change rem, you probably break this.
   */
  numbersToDisplay = computed(() => Array.from({ length: this.numbersToPrint() }, (_, i) => i + 1));

  constructor() {}

  ngAfterViewInit(): void {
    /**
     * This observer is set to watch the content of the page and if the height of the content reaches a point where it
     * can add/take away numbers, then we update the UI.
     * This needs to run outside the zone to avoid a ton of change detection calls.
     */
    this.resizeObs = new ResizeObserver(entries => {
      for (const entry of entries) {
        const numbersToFit = Math.floor(entry.contentRect.height / LETTER_HEIGHT);

        if (this.numbersToPrint() !== numbersToFit) {
          // No need to reattach to the zone since we're updating a signal.
          this.numbersToPrint.set(numbersToFit);
        }
      }
    });

    this.resizeObs.observe(this.content.nativeElement);
  }

  ngOnDestroy(): void {
    // Need to disconnect from this observer after this component is destroyed, or else we get a memory leak.
    if (this.resizeObs) {
      this.resizeObs.disconnect();
    }
  }
}
