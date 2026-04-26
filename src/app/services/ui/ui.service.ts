import { BreakpointObserver } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
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

  /**
   * To indicate whether this should run in the client or during build time.
   */
  private platformId = inject(PLATFORM_ID);

  isLargeViewport = toSignal(
    this.breakpointObs.observe(BREAKPOINT_STRING_MAP['large']).pipe(
      map(bp => {
        return bp.breakpoints[BREAKPOINT_STRING_MAP['large']];
      })
    ),
    {
      initialValue: isPlatformBrowser(this.platformId)
        ? this.breakpointObs.isMatched(BREAKPOINT_STRING_MAP['large'])
        : true
    }
  );
}
