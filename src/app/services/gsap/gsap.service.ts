import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

@Injectable({
  providedIn: 'root'
})
export class GsapService {
  /**
   * GSAP's Match Media singleton.
   * Add animations to this that will run based on current media query conditions.
   */
  private _mm?: gsap.MatchMedia;

  constructor() {
    gsap.registerPlugin(SplitText);
  }

  get media(): gsap.MatchMedia {
    if (!this._mm) {
      this._mm = gsap.matchMedia();
    }
    return this._mm;
  }
}
