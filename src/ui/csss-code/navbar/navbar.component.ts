import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NavbarEntry } from 'pages/navbar-entries';
import { faChevronDown, faChevronRight, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'csss-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  entries = input.required<NavbarEntry[]>();

  fileIcon = faFile;
  folderClosedIcon = faChevronRight;
  folderOpenIcon = faChevronDown;
}
