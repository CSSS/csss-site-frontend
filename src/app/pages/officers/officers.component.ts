import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  signal,
  viewChild
} from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { ExecutiveAdministration, executives } from './officers';

const REM = 16;

@Component({
  selector: 'csss-officers',
  imports: [CsssCodeModule],
  templateUrl: './officers.component.html',
  styleUrl: './officers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficersComponent implements AfterViewInit {
  protected displayExecs = signal<ExecutiveAdministration>(executives[0]);

  protected yearsToDisplay = computed(() => {
    const result = [];
    const currentYear = Math.trunc(new Date().getFullYear());
    for (let i = 0; i < this.lineWidth() - 1; i++) {
      result.push(currentYear - i);
    }
    return result;
  });

  private timeline = viewChild.required<ElementRef<HTMLDivElement>>('timeline');

  private lineWidth = signal<number>(0);

  private resizeObs!: ResizeObserver;

  ngAfterViewInit(): void {
    this.resizeObs = new ResizeObserver(entries => {
      for (const entry of entries) {
        console.log(entry.contentRect);
        const linesToDisplay = Math.trunc(entry.contentRect.width / (6 * REM));

        if (this.lineWidth() !== linesToDisplay) {
          this.lineWidth.set(linesToDisplay);
        }
      }
    });
    this.resizeObs.observe(this.timeline().nativeElement);
  }
}
