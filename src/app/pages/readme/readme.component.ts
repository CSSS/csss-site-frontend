import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CsssCodeModule } from '@csss-code/csss-code.module';
import { FooterComponent } from 'components/footer/footer.component';

@Component({
  selector: 'csss-readme',
  imports: [CsssCodeModule, FooterComponent, RouterModule],
  templateUrl: './readme.component.html',
  styleUrl: './readme.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMeComponent {}
