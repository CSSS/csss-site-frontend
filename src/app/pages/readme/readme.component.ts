import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  viewChild
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

@Component({
  selector: 'csss-readme',
  imports: [CsssCodeModule, RouterModule, FontAwesomeModule],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMeComponent implements AfterViewInit {
  protected arrowIcon = faArrowDown;
  protected externalLinkIcon = faArrowUpRightFromSquare;

  private typedText = viewChild.required<ElementRef<HTMLDivElement>>('typeIn');
  private typedTextEl = computed(() => this.typedText().nativeElement);

  ngAfterViewInit(): void {
    const split = SplitText.create(this.typedTextEl(), {
      type: 'chars'
    });

    gsap.from(split.chars, {
      display: 'none',
      delay: 0.5,
      stagger: 0.05,
      onComplete() {
        split.revert();
      }
    });
  }
}
