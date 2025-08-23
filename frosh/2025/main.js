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
 * Added code so it has a consistent velocity.
 */
function animateDucky() {
  const duck = document.getElementById('animated-duck-container');

  // Get the width of the duck and have it start off the screen, based on its width
  const start = -duck.getBoundingClientRect().width;
  // and the width of the viewport
  const end = window.innerWidth;

  // Get the distance the duck needs to travel and move it at a rate of 100px per second.
  const distance = end - start;
  const duration = distance / 100; // measured in pixels

  // Set the duck to start at the left side
  gsap.set(duck, { left: start });
  // Move it to the right, repeat infinitely
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
      duration: 0.5,
      ease: 'none',
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

/**
 * Controls the countdown on the hero
 */
function setCountdown() {
  // Target time is September 8, 2025 PDT @ 1PM
  const target = new Date('2025-09-08T13:00:00.000-07:00').getTime();

  // Don't show the countdown if it's past the Frosh start date.
  if (target < new Date().getTime()) {
    document.getElementById('countdown').style.display = 'none';
    return;
  }
  const secToMs = 1000;
  const minToMs = secToMs * 60;
  const hourToMs = minToMs * 60;
  const dayToMs = hourToMs * 24;

  const secEle = document.getElementById('cd-sec');
  const minEle = document.getElementById('cd-min');
  const hourEle = document.getElementById('cd-hour');
  const dayEle = document.getElementById('cd-day');

  let update = () => {
    const now = new Date().getTime();
    let difference = target - now;

    let secs = Math.floor((difference / secToMs) % 60);
    let mins = Math.floor((difference / minToMs) % 60);
    let hours = Math.floor((difference / hourToMs) % 24);
    let days = Math.floor(difference / dayToMs);

    secEle.textContent = secs;
    minEle.textContent = mins;
    hourEle.textContent = hours;
    dayEle.textContent = days;
  };

  update();
  setInterval(update, 1000);
}

window.addEventListener('load', _ => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  animateReedsParting();
  handleHeaderChanges();
  animateDucky();
  setCountdown();
  if (window.matchMedia('(min-width: 1280px').matches) {
    imagePopIn();
  }
  window.addEventListener('resize', () => {
    gsap.killTweensOf('#animated-duck-container');
    animateDucky();
  });
});
