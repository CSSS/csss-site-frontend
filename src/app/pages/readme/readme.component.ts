import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CsssCodeModule } from '@csss-code/csss-code.module';

@Component({
  selector: 'csss-readme',
  imports: [CsssCodeModule, RouterModule],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMeComponent {}
