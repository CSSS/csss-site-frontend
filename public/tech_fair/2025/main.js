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
        x: -100,
        duration: 2
      },
      {
        scrollTrigger: photo,
        opacity: 1,
        x: 0
      }
    );
  }
}

function setScrolledEffect() {
  const scrolledElements = [
    document.getElementById('header'),
    document.getElementById('nav-list'),
    document.getElementById('home-logo')
  ];

  checkScrolledEffect(scrolledElements);

  window.addEventListener('scroll', () => {
    checkScrolledEffect(scrolledElements);
  });
}

document.addEventListener('DOMContentLoaded', event => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  photos = document.querySelectorAll('.gallery-content');

  setPopInEffect();
  // setScrolledEffect();
});
