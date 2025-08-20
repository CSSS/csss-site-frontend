import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'cs-fall-hacks-icon',
  imports: [],
  templateUrl: './fall-hacks-icon.component.html',
  styleUrl: './fall-hacks-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FallHacksIconComponent {
  bgColor = input<string>();
  fgColor = input<string>();
  width = input<number>();
  height = input<number>();
  protected _bgColor = computed(() => this.bgColor() ?? '#000');
  protected _fgColor = computed(() => this.fgColor() ?? '#0f0');
  protected _width = computed(() => this.width() ?? 64);
  protected _height = computed(() => this.height() ?? 64);
}
