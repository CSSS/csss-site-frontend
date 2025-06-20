const styleVars = window.getComputedStyle(document.body);

/**
 * Animates the reeds parting when scrolling down.
 */
function animateReedsParting() {
  const scrollTrigger = {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    toggleActions: 'play none reverse none',
    scrub: true
  };

  gsap.to('.reeds > .left', {
    x: '-100vw',
    scrollTrigger
  });

  gsap.to('.reeds > .right', {
    x: '100vw',
    scrollTrigger
  });
}

/**
 * Animates the duck swimming left to right.
 */
function animateDucky() {
  const duck = document.getElementById('animated-duck-container');

  const start = -duck.getBoundingClientRect().width;
  const end = window.innerWidth;

  const distance = end - start;
  const duration = distance / 100; // measured in pixels

  gsap.set(duck, { left: start });
  gsap.to('#animated-duck-container', {
    left: end,
    repeat: -1, // infinitely loop
    ease: 'none',
    repeatDelay: 4,
    duration
  });
}

/**
 * Makes the photos pop in from below.
 */
function imagePopIn() {
  document.querySelectorAll('.gallery').forEach(gallery => {
    const photos = gallery.querySelectorAll('.photo');

    gsap.from(photos, {
      scrollTrigger: {
        trigger: gallery,
        start: 'top 80%'
      },
      y: '5vh',
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2
    });
  });
}

/**
 * Animation that changes the text color of the header items when
 * scrolling down enough.
 */
function handleHeaderChanges() {
  gsap.to('header', {
    scrollTrigger: {
      trigger: 'main',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    backgroundColor: styleVars.getPropertyValue('--c-bot-main')
  });

  const navTrigger = {
    trigger: 'main',
    start: 'center center',
    toggleActions: 'play none play reverse'
  };

  gsap.to('header', {
    scrollTrigger: navTrigger,
    color: 'white'
  });

  // For the svg of the logo
  gsap.to('.st1', {
    scrollTrigger: navTrigger,
    fill: 'white'
  });
}

window.addEventListener('load', _ => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  animateReedsParting();
  handleHeaderChanges();
  animateDucky();
  if (window.matchMedia('(min-width: 1280px').matches) {
    imagePopIn();
  }
  window.addEventListener('resize', () => {
    gsap.killTweensOf('#animated-duck-container');
    animateDucky();
  });
});
