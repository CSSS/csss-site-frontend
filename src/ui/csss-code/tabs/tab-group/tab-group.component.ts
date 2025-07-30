import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  effect,
  ElementRef,
  HostListener,
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
  @HostListener('window:resize')
  onResize(): void {
    const tab = this.activeTab();
    if (!tab) {
      return;
    }

    this.setSelectorStyle();
  }

  /**
   * The CodeTabComponents supplied into the CodeTabGroupComponent.
   */
  protected tabComponents = contentChildren(CodeTabComponent);

  /**
   * The tab buttons that allow you to choose which tab to open.
   */
  protected tabLabelEls = viewChildren<ElementRef<HTMLDivElement>>('tab');

  /**
   * The tab that has its content currently displayed.
   */
  protected activeTab = signal<CodeTabComponent | null>(null);

  /**
   * A record that is used to update the CSS styles of the selector.
   */
  protected selectorStyles = signal<Record<string, string>>({});

  constructor() {
    // Handles the active tab changing.
    effect(() => {
      const activeTab = this.activeTab();
      if (!activeTab) {
        return;
      }
      for (const tab of this.tabComponents()) {
        if (activeTab === tab) {
          tab.isActive.set(true);
          const selectedTabEl = this.tabLabelEls()[tab.tabIndex()];
          this.selectorStyles.set({
            left: `${selectedTabEl.nativeElement.offsetLeft}px`,
            width: `${selectedTabEl.nativeElement.offsetWidth}px`
          });
          this.setSelectorStyle();
          continue;
        }

        if (tab.isActive()) {
          tab.isActive.set(false);
        }
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

  /**
   * Changes the style of the tab selector, which makes it move to the currently active tab.
   *
   */
  private setSelectorStyle(): void {
    const activeTab = this.activeTab();
    if (!activeTab) {
      return;
    }

    const selectedTabEl = this.tabLabelEls()[activeTab.tabIndex()];
    this.selectorStyles.set({
      left: `${selectedTabEl.nativeElement.offsetLeft}px`,
      width: `${selectedTabEl.nativeElement.offsetWidth}px`
    });
  }
}
