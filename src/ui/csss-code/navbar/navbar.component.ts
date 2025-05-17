import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import { NavEntry } from 'pages/navbar-entries';
import { csssLogo } from '../../../assets/icons/csss-logo';

export interface NavbarItem extends NavEntry {
  children: NavbarItem[];
}

@Component({
  selector: 'code-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  entries = input.required<NavEntry[]>();
  navItems: WritableSignal<NavbarItem[]> = signal([]);
  csssIcon = csssLogo;

  ngOnInit(): void {
    this.navItems.set(this.navEntryToItem(this.entries()));
  }

  /**
   * Recursively converts all the navbar entries into object this navbar can use
   */
  private navEntryToItem(entries: NavEntry[]): NavbarItem[] {
    return entries.map(entry => {
      const children = entry.children?.length ? this.navEntryToItem(entry.children) : [];
      return {
        ...entry,
        children,
        isOpen: true
      };
    });
  }
}
