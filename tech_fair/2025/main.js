/** Photos in the photo gallery element. */
let photos;

/** Variables declared in the :root component in `style.css` */
const cssVars = getComputedStyle(document.querySelector(':root'));

/** The size of rem, in pixels */
const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

/** The size of the header in pixels. */
const headerSize = parseFloat(cssVars.getPropertyValue('--header-height')) * remSize;

/** Checks if the page is scrolled to the top. */
let isAtTop = window.scrollY > headerSize;

function setPopInEffect() {
  for (const photo of photos) {
    gsap.fromTo(
      photo,
      {
        opacity: 0,
        y: 100,
        duration: 2
      },
      {
        scrollTrigger: photo,
        opacity: 1,
        y: 0
      }
    );
  }
}

function setScrolledEffect() {
  const scrollTrigger = {
    trigger: '#header',
    start: 'bottom top',
    toggleActions: 'play none reverse none'
  };

  const timing = 0.3;

  gsap.to('#header', {
    scrollTrigger,
    borderBottom: 'solid black 1px',
    duration: 0.1
  });
  gsap.to('#nav-list', {
    scrollTrigger,
    padding: 0,
    duration: timing
  });
  gsap.to('#home-link', {
    scrollTrigger,
    height: 0,
    width: 0,
    x: '-5rem',
    y: '-1rem',
    duration: timing,
    ease: 'none'
  });
  gsap.to('#home-logo', {
    scrollTrigger,
    height: 0,
    width: 0,
    x: '-5rem',
    y: '-1rem',
    duration: timing,
    ease: 'none'
  });
}

function setIncrementalText() {
  let split = SplitText.create('.response', {
    type: 'words'
  });

  gsap.from(split.words, {
    scrollTrigger: {
      trigger: '.response',
      start: 'top bottom',
      once: true
    },
    autoAlpha: 0,
    stagger: 0.05
  });
}

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
  photos = document.querySelectorAll('.gallery-content');
  document.body.style.display = 'block';

  setPopInEffect();
  setScrolledEffect();
  setIncrementalText();
});
