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

window.addEventListener('load', _ => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  reedsParting();
});
