import { ChangeDetectionStrategy, Component, computed, input, OnInit, Signal } from '@angular/core';
import { NavbarEntry } from 'pages/navbar-entries';
import { faChevronDown, faChevronRight, faFile } from '@fortawesome/free-solid-svg-icons';

interface NavbarItem extends NavbarEntry {
  isClosed: boolean;
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
  navEntries: NavbarItem[] = [];
  fileIcon = faFile;
  folderClosedIcon = faChevronRight;
  folderOpenIcon = faChevronDown;

  ngOnInit(): void {
    this.navEntries = this.entries().map(entry => {
      return {
        ...entry,
        isClosed: true
      };
    });
  }
}
