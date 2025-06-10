import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
  signal,
  viewChild
} from '@angular/core';

@Component({
  selector: 'code-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements AfterViewInit, OnDestroy {
  /**
   * The full article with the content inside.
   */
  readonly view = viewChild.required('article', { read: ElementRef });

  /**
   * The content of the article, excluding the article itself.
   */
  readonly h2s = contentChildren('h2', { read: ElementRef });
  readonly ps = contentChildren('p', { read: ElementRef });

  renderer: Renderer2 = inject(Renderer2);

  /**
   * Observer to watch when an element resizes.
   */
  private resizeObs!: ResizeObserver;

  /**
   * How many lines should be printed in the line gutter.
   */
  numbersToPrint = signal(0);

  /**
   * The array to display the lines needed for the content.
   * Yes there is a magic number. No I'm not sure how to do this without it.
   * It's about 1.3125 rem, given rem is 16px. If you change rem, you probably break this.
   */
  numbersToDisplay = computed(() => Array.from({ length: this.numbersToPrint() }, (_, i) => i + 1));

  ngAfterViewInit(): void {
    /**
     * This observer is set to watch the content of the page and if the height of the content reaches a point where it
     * can add/take away numbers, then we update the UI.
     * This needs to run outside the zone to avoid a ton of change detection calls.
     */
    this.resizeObs = new ResizeObserver(entries => {
      for (const entry of entries) {
        const numbersToFit = Math.floor(entry.contentRect.height);

        if (this.numbersToPrint() !== numbersToFit) {
          this.numbersToPrint.set(numbersToFit);
        }
      }
    });

    this.resizeObs.observe(this.view().nativeElement);
  }

  ngOnDestroy(): void {
    // Need to disconnect from this observer after this component is destroyed, or else we get a memory leak.
    if (this.resizeObs) {
      this.resizeObs.disconnect();
    }
  }
}
