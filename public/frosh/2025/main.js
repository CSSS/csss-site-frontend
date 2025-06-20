const styleVars = window.getComputedStyle(document.body);

/**
 * Animates the reeds parting when scrolling down.
 */
function reedsParting() {
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

function headerGradient() {
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
    toggleActions: 'play none play reverse',
    markers: true
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
  reedsParting();
  headerGradient();
  if (window.matchMedia('(min-width: 1280px').matches) {
    imagePopIn();
  }
});
