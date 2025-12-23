import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  signal,
  viewChild
} from '@angular/core';
import { UiService } from 'services/ui/ui.service';

const LETTER_HEIGHT = 24;

@Component({
  selector: 'code-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeArticleComponent implements AfterContentInit, OnDestroy {
  private articleContent = viewChild.required<ElementRef<HTMLDivElement>>('article');

  /**
   * The array to display the lines needed for the content.
   */
  protected numbersToDisplay = signal<number[]>([]);
  /**
   * Observer to watch when an element resizes.
   */
  private resizeObs!: ResizeObserver;

  private uiService = inject(UiService);

  ngAfterContentInit(): void {
    /**
     * This observer is set to watch the content of the content.
     * It will recalculate the amount of line gutter numbers every time the
     * height of the article element changes.
     */
    this.resizeObs = new ResizeObserver(entries => {
      if (!this.uiService.isLargeViewport()) {
        return;
      }
      for (const entry of entries) {
        const numbersToFit = Math.ceil(entry.contentRect.height / LETTER_HEIGHT);

        if (this.numbersToDisplay().length !== numbersToFit) {
          this.numbersToDisplay.set(Array.from({ length: numbersToFit }, (_, i) => i + 1));
        }
      }
    });

    this.resizeObs.observe(this.articleContent().nativeElement);
  }

  ngOnDestroy(): void {
    // Need to disconnect from this observer after this component is destroyed, or else we get a memory leak.
    if (this.resizeObs) {
      this.resizeObs.disconnect();
    }
  }
}
