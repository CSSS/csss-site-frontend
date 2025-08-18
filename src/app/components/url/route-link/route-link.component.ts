import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getBaseRoute } from 'app/app.routes';

@Component({
  selector: 'cs-route-link',
  imports: [RouterModule],
  templateUrl: './route-link.component.html',
  styleUrl: './route-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteLinkComponent {
  key = input.required<string>();
  route = computed(() => {
    return '/' + getBaseRoute(this.key());
  });
  label = input<string>();
}
