import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { NavbarItem } from '@csss-code/navbar/navbar-item/navbar-item.component';

@Component({
  selector: 'csss-navbar',
  imports: [CsssCodeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  navbarEntries: NavbarItem[] = [
    {
      key: 'csss',
      label: 'The CSSS',
      type: 'folder',
      children: [
        {
          key: 'readme',
          label: 'README',
          type: 'file',
          link: '/readme'
        },
        {
          key: 'officers',
          label: 'Officers',
          type: 'file',
          link: '/officers'
        },
        {
          key: 'committees',
          label: 'Committees',
          type: 'file',
          link: '/committees'
        },
        {
          key: 'common-room',
          label: 'Common Room',
          type: 'file',
          link: '/common-room'
        },
        {
          key: 'affiliates',
          label: 'Affiliates',
          type: 'file',
          link: '/affiliates'
        }
        // {
        //   key: 'documents',
        //   label: 'Documents',
        //   type: 'file',
        //   link: '/documents'
        // },
      ]
    },
    {
      key: 'elections',
      label: 'Elections',
      type: 'folder',
      children: [
        {
          key: 'elections',
          label: 'Upcoming',
          type: 'wip',
          link: '/elections'
        },
        {
          key: 'speeches',
          label: 'Speeches',
          type: 'wip',
          link: '/speeches'
        }
      ]
    },
    {
      key: 'events',
      label: 'Events',
      type: 'folder',
      children: [
        {
          key: 'events',
          label: 'Upcoming',
          type: 'wip',
          link: '/events'
        },
        {
          key: 'events-archive',
          label: 'Archive',
          type: 'wip',
          link: '/events-archive'
        }
      ]
    }
  ];
}
