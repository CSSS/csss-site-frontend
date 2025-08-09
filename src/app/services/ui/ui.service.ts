import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BREAKPOINT_STRING_MAP } from 'styles/breakpoints';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  /**
   * Flag representing if the menu is closed or open.
   */
  isFileSystemOpen = signal<boolean>(false);

  /**
   * Observer to watch when a breakpoint is hit.
   */
  breakpointObs = inject(BreakpointObserver);

  isLargeViewport = toSignal(
    this.breakpointObs.observe(BREAKPOINT_STRING_MAP['large']).pipe(
      map(bp => {
        console.log(bp);
        return bp.breakpoints[BREAKPOINT_STRING_MAP['large']];
      })
    ),
    { initialValue: this.breakpointObs.isMatched(BREAKPOINT_STRING_MAP['large']) }
  );
}
