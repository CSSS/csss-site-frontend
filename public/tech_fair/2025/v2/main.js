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
  let lastScrollY = 0;
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      header.style.top = '-5rem';
    } else if (parseFloat(header.style.top) < 5) {
      header.style.top = '0';
    }
    lastScrollY = window.scrollY;
  });
}

(() => {
  setHeaderScroll();
  setPopInEffect();
})();
