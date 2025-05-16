import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  signal,
  WritableSignal
} from '@angular/core';
import { NavbarEntry } from 'pages/navbar-entries';
import { faChevronDown, faChevronRight, faFile } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';

interface NavbarItem extends NavbarEntry {
  isOpen: boolean;
}

@Component({
  selector: 'csss-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  entries = input.required<NavbarEntry[]>();
  navItems: WritableSignal<NavbarItem[]> = signal([]);

  ngOnInit(): void {
    this.navItems.set(
      this.entries().map(entry => {
        return {
          ...entry,
          isOpen: true
        };
      })
    );
  }

  getIcon(item: NavbarEntry | NavbarItem): IconDefinition | undefined {
    switch (item.type) {
      case 'file': {
        return faFile;
      }
      case 'folder': {
        return 'isOpen' in item && item.isOpen ? faChevronDown : faChevronRight;
      }
    }
  }

  onItemClick(item: NavbarEntry | NavbarItem): void {
    if ('isOpen' in item) {
      this.navItems.set(
        this.navItems().map(entry => {
          const isOpen = entry.key === item.key ? !entry.isOpen : entry.isOpen;
          return {
            ...entry,
            isOpen
          };
        })
      );
    }
  }
}
