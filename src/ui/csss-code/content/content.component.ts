import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  signal,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'code-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements AfterViewInit {
  @ViewChild('content', { read: ElementRef }) content!: ElementRef;
  childHeight = signal(0);

  /**
   * The array to display the lines needed for the content.
   * Yes there is a magic number. No I'm not sure how to do this without it.
   * It's about 1.3125 rem, given rem is 16px. If you change rem, you probably break this.
   */
  numbersToDisplay = computed(() => [...Array(Math.ceil(this.childHeight() / 21)).keys()]);

  ngAfterViewInit(): void {
    this.childHeight.set(this.content.nativeElement.offsetHeight);
  }
}
