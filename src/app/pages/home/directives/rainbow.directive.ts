import { Directive, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

let uniqueId = 0;

/**
 * Only used on Font Awesome Icon elements `<fa-icon>`.
 * Adds a moving, vertical rainbow gradient to the icon.
 * TODO:Make this extendable, so that people can choose the colours and speed this animation plays at.
 */
@Directive({
  selector: '[codeRainbowGradient]'
})
export class RainbowDirective implements OnInit, OnDestroy {
  /**
   * The element the directive is applied to.
   */
  private el: ElementRef = inject(ElementRef);

  /**
   * Angular's safe way of manipulating DOM elements.
   */
  private renderer: Renderer2 = inject(Renderer2);

  /**
   * Observes any changes to the element.
   * Used to capture the moment when the SVG of the fa-icon is instantiated.
   */
  private mutationObs: MutationObserver | null = null;

  ngOnInit(): void {
    // Create this here because we know the SVG has not been made yet.
    this.mutationObs = new MutationObserver(() => {
      const svgEl = this.el.nativeElement.querySelector('svg');
      if (svgEl) {
        this.renderGradient(svgEl);
        // Once the gradient is attached, we don't need the observer anymore.
        this.mutationObs?.disconnect(); // Stop listening
        this.mutationObs = null; // Remove the reference so it can be garbage collected.
      }
    });

    // Set the observer to watch child nodes too.
    this.mutationObs.observe(this.el.nativeElement, {
      childList: true
    });
  }

  ngOnDestroy(): void {
    // Make sure to disconnect from the observer so we don't have a memory leak.
    this.mutationObs?.disconnect();
  }

  /**
   * Creates a vertical conveyor belt-like rainbow gradient on the fa-icon.
   */
  renderGradient(svgEl: SVGSVGElement) {
    const pathEl: SVGPathElement | null = svgEl.querySelector('path');
    if (!pathEl) {
      throw new Error('No path inside SVG');
    }

    // This is a directive, so multiple component could possibly be using it.
    const gradientId = `rainbow-gradient__${uniqueId++}`;

    // Create the linear gradient that will be the SVG's fill colour.
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/linearGradient
    const gradient = this.renderer.createElement('linearGradient', 'svg');

    // Sets the start and end points of the gradient.
    // This needs to be at least double the length/width of the icon or
    // else it won't scroll smoothly and will jump when
    // it reaches the end of the loop, so we have to repeat the pattern.
    const repeats = 2;
    this.renderer.setAttribute(gradient, 'id', `${gradientId}`);
    this.renderer.setAttribute(gradient, 'x1', '0%');
    this.renderer.setAttribute(gradient, 'y1', '0%');
    this.renderer.setAttribute(gradient, 'x2', '0%');
    // Vertical, so the gradient must be double the height.
    this.renderer.setAttribute(gradient, 'y2', `${2 * 100}%`);

    // To smoothly create the gradient, we use HSL to sample the colour wheel.
    const samplesPerRepeat = 60; // Number of samples in one pattern, reset to start colour after this.
    const totalSteps = repeats * samplesPerRepeat; // Total number of samples in the whole gradient.
    for (let i = 0; i <= totalSteps; i++) {
      // The SVG element that defines what colour a gradient should have at a certain point.
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/stop
      const stop = this.renderer.createElement('stop', 'svg');

      // (i % samplesPerRepeat): See how far we've sampled in the current pattern
      // (...) / samplesPerRepeat: Get a fraction that represents how far we need to sample in the wheel.
      // (...) * 360: Translate the fraction to an angle in the colour wheel.
      const hue = ((i % samplesPerRepeat) / samplesPerRepeat) * 360;
      // How far the stop should be set on the total pattern.
      const offset = (i / totalSteps) * 100;
      const color = `hsl(${hue}, 100%, 50%)`;

      // Set these values on the linear gradient.
      this.renderer.setAttribute(stop, 'offset', `${offset}%`);
      this.renderer.setAttribute(stop, 'stop-color', color);
      this.renderer.appendChild(gradient, stop);
    }

    // Create an `animateTransform` of an SVG, which is what moves the rainbow.
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/animateTransform
    const animate = this.renderer.createElement('animateTransform', 'svg');
    // `gradientTransform` is what gets changed.
    this.renderer.setAttribute(animate, 'attributeName', 'gradientTransform');
    // Move the gradient...
    this.renderer.setAttribute(animate, 'type', 'translate');
    // ...from a position -1 times its height (offscreen)...
    this.renderer.setAttribute(animate, 'from', '0,-1');
    // ...to its base position, but only scroll through 100% of its length...
    this.renderer.setAttribute(animate, 'to', '0,0');
    // ...animate over X seconds...
    this.renderer.setAttribute(animate, 'dur', '6s');
    // ...repeat this animation indefinitely.
    this.renderer.setAttribute(animate, 'repeatCount', 'indefinite');

    // Holds the objects that will be used later (the linear gradient)
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/defs
    const defs = this.renderer.createElement('defs', 'svg');

    // Put the new SVG together
    // The gradient is given an animation to be run
    this.renderer.appendChild(gradient, animate);
    // Store the gradient in the definitions
    this.renderer.appendChild(defs, gradient);
    // Store the definitions on the SVG
    this.renderer.insertBefore(svgEl, defs, svgEl.firstChild);
    // IMPORTANT: Remove the fill colour on the icon's path that will overwrite this gradient.
    this.renderer.removeAttribute(pathEl, 'fill');
    // Apply the linear gradient to the SVG itself, not its path.
    this.renderer.setAttribute(svgEl, 'fill', `url(#${gradientId})`);
  }
}
