import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  effect,
  ElementRef,
  signal,
  viewChildren
} from '@angular/core';
import { CodeTabComponent } from '../tab.component';

@Component({
  selector: 'code-tab-group',
  imports: [CommonModule],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeTabGroupComponent implements AfterViewInit, AfterContentInit {
  protected tabComponents = contentChildren(CodeTabComponent);
  protected tabLabelEls = viewChildren<ElementRef<HTMLDivElement>>('tab');
  protected activeTab = signal<CodeTabComponent | null>(null);
  protected selectorStyles = signal<Record<string, string>>({});

  constructor() {
    effect(() => {
      const activeTab = this.activeTab();
      if (!activeTab) {
        return;
      }
      for (const tab of this.tabComponents()) {
        if (activeTab !== tab) {
          tab.isActive.set(false);
          continue;
        }
        tab.isActive.set(true);
        const selectedTabEl = this.tabLabelEls()[tab.tabIndex()];
        this.selectorStyles.set({
          left: `${selectedTabEl.nativeElement.offsetLeft}px`,
          width: `${selectedTabEl.nativeElement.offsetWidth}px`
        });
      }
    });
  }

  ngAfterContentInit(): void {
    if (!this.tabComponents().length) {
      throw new Error('No tab components found.');
    }

    for (const [index, tab] of this.tabComponents().entries()) {
      tab.tabIndex.set(index);
    }
    // Set the first tab child as the active one.
    this.tabComponents()[0].isActive.set(true);
  }

  ngAfterViewInit(): void {
    if (!this.tabLabelEls().length) {
      throw new Error('No tab labels found.');
    }

    this.activeTab.set(this.tabComponents()[0]);
  }
}
