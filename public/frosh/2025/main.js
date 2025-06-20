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

function imagePopIn() {
  document.querySelectorAll('.gallery').forEach(gallery => {
    const photos = gallery.querySelectorAll('.photo');

    gsap.from(photos, {
      scrollTrigger: {
        trigger: gallery,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: '5vh',
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: 0.2
    });
  });
}

window.addEventListener('load', _ => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  reedsParting();
  if (window.matchMedia('(min-width: 1280px').matches) {
    imagePopIn();
  }
});
