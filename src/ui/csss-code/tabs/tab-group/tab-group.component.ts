import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  signal
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
  tabs = contentChildren(CodeTabComponent);
  activeTab = signal<CodeTabComponent | null>(null);

  ngAfterContentInit(): void {
    if (!this.tabs() || !this.tabs().length) {
      throw new Error('Empty tab group');
    }

    const tab = this.tabs().find(tab => tab.isActive()) ?? this.tabs()[0];
    if (!tab) {
      throw new Error('No tab could be activated.');
    }

    this.selectTab(tab);
  }

  selectTab(tab: CodeTabComponent): void {
    const currTab = this.activeTab();
    if (currTab) {
      currTab.isActive.set(false);
    }
    this.activeTab.set(tab);
    this.activeTab()?.isActive.set(true);
  }
}
