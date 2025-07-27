import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
  signal
} from '@angular/core';
import { BREAKPOINT_STRING_MAP } from 'styles/breakpoints';

const LETTER_HEIGHT = 24;

@Component({
  selector: 'code-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements AfterContentInit, OnDestroy {
  /**
   * Angular's way of manipulating the DOM.
   */
  private renderer: Renderer2 = inject(Renderer2);

  /**
   * Reference to this element.
   */
  private elementRef: ElementRef = inject(ElementRef);

  /**
   * How many lines should be printed in the line gutter.
   */
  protected numbersToPrint = signal(0);

  /**
   * The array to display the lines needed for the content.
   */
  protected numbersToDisplay = computed(() =>
    Array.from({ length: this.numbersToPrint() }, (_, i) => i + 1)
  );

  /**
   * Observer to watch when an element resizes.
   */
  private resizeObs!: ResizeObserver;

  /**
   * Observer to view our breakpoint widths.
   */
  private breakpointObs = inject(BreakpointObserver);

  ngAfterContentInit(): void {
    // Don't set the line numbers if we're on a smaller screen.
    if (!this.breakpointObs.isMatched(BREAKPOINT_STRING_MAP['small'])) {
      return;
    }

    /**
     * This observer is set to watch the content of the content.
     * It will recalculate the amount of line gutter numbers every time the
     * height of the article element changes.
     */
    this.resizeObs = new ResizeObserver(entries => {
      for (const entry of entries) {
        const numbersToFit = Math.trunc(entry.contentRect.height / LETTER_HEIGHT);

        if (this.numbersToPrint() !== numbersToFit) {
          this.numbersToPrint.set(numbersToFit);
        }
      }
    });

    this.resizeObs.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    // Need to disconnect from this observer after this component is destroyed, or else we get a memory leak.
    if (this.resizeObs) {
      this.resizeObs.disconnect();
    }
  }
}
