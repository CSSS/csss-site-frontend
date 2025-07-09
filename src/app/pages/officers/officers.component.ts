import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { ExecutiveAdministration, executives } from './officers';

@Component({
  selector: 'csss-officers',
  imports: [CsssCodeModule],
  templateUrl: './officers.component.html',
  styleUrl: './officers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficersComponent {
  displayExecs = signal<ExecutiveAdministration>(executives[0]);
}
