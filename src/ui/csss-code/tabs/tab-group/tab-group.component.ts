import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
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
export class CodeTabGroupComponent implements AfterContentInit {
  protected tabs = contentChildren(CodeTabComponent);
  protected tabEls = viewChildren<ElementRef<HTMLDivElement>>('tab');
  protected activeTab = signal<CodeTabComponent>(this.tabs()[0]);
  protected selectorStyles = signal<Record<string, string>>({});

  ngAfterContentInit(): void {
    if (!this.tabs() || !this.tabs().length) {
      throw new Error('Empty tab group');
    }
  }

  selectTab(index: number): void {
    const tabs = this.tabs();

    if (index < 0 || index >= tabs.length) {
      throw new Error(`Invalid tab index ${index}.`);
    }

    const currTab = this.activeTab();
    const selectedTab = this.tabs()[index];
    if (!selectedTab) {
      throw new Error(`Tab at index ${index} does not exist.`);
    }

    if (currTab === selectedTab) {
      return;
    }

    const selectedTabEl = this.tabEls()[index];
    currTab?.isActive.set(false);
    this.activeTab.set(selectedTab);
    this.selectorStyles.set({
      left: `${selectedTabEl.nativeElement.offsetLeft}px`,
      width: `${selectedTabEl.nativeElement.offsetWidth}px`
    });
  }
}
