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
