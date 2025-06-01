/** Variables declared in the :root component in `style.css` */
const cssVars = getComputedStyle(document.querySelector(':root'));

/** The size of rem, in pixels */
const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

/** The size of the header in pixels. */
const headerSize = parseFloat(cssVars.getPropertyValue('--header-height')) * remSize;

/** Checks if the page is scrolled to the top. */
let isAtTop = window.scrollY > headerSize;

function setPopInEffect() {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    }
  });

  const sections = document.querySelectorAll('.hidden');
  for (const section of sections) {
    observer.observe(section);
  }
}

function checkScrolledEffect(scrolledElements) {
  if (window.scrollY <= headerSize && !isAtTop) {
    isAtTop = true;
    for (const el of scrolledElements) {
      el.classList.remove('scrolled');
    }
  } else if (window.scrollY > headerSize && isAtTop) {
    isAtTop = false;
    for (const el of scrolledElements) {
      el.classList.add('scrolled');
    }
  }
}

function setScrolledEffect() {
  const scrolledElements = [
    document.getElementById('nav-list'),
    document.getElementById('home-logo')
  ];

  checkScrolledEffect(scrolledElements);

  window.addEventListener('scroll', () => {
    checkScrolledEffect(scrolledElements);
  });
}

(() => {
  setPopInEffect();
  setScrolledEffect();
})();
