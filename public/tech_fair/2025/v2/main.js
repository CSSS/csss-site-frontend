/**
 * Controls the progress bar at the top of the site.
 *
 * @param {number} windowHeight - The height of the viewport.
 */
function setProgressBar(windowHeight) {
  const rect = main.getBoundingClientRect();
  const mainHeight = rect.height;
  const mainOffset = windowHeight - rect.top;
  const scrollPercent =
    Math.min(mainHeight, Math.max(0, mainOffset)) / mainHeight;
  progressBar.style.width = `${scrollPercent * 100}%`;
}

// Handles the scrolling features
const main = document.querySelector('main');
const progressBar = document.querySelector('.progress-bar');

document.body.classList.remove('loading');
setProgressBar(window.innerHeight);

/**
 * Event listener for the overlay to open up.
 */
window.addEventListener('scroll', () => {
  setProgressBar(window.innerHeight);
});

const observer = new IntersectionObserver((entries) => {
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
