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

function setHeaderScroll() {
  const header = document.getElementById('header');
  const navs = document.querySelectorAll('a[href^="#"]');
  let ignoreScroll = false;
  let lastScrollY = 0;

  // Disables the header hiding when scrolling down if a navigation link is pressed.
  for (const nav of navs) {
    nav.addEventListener('click', () => {
      ignoreScroll = true;

      setTimeout(() => {
        lastScrollY = window.scrollY;
        ignoreScroll = false;
      }, 2000);
    });
  }

  // Sets the header to hide/show when scrolling down/up on the page.
  window.addEventListener('scroll', () => {
    if (ignoreScroll) {
      return;
    }

    if (window.scrollY > lastScrollY) {
      header.style.top = '-5rem';
    } else {
      header.style.top = '0';
    }
    lastScrollY = window.scrollY;
  });
}

(() => {
  // setHeaderScroll();
  setPopInEffect();
})();
