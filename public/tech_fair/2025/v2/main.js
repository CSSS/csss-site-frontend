function setOverlay(distanceScrolled, windowHeight) {
  const percent = Math.min(distanceScrolled / windowHeight, 1);
  const fade = percent * 50;

  overlayEl.style.background = `linear-gradient(to right,
      rgba(0, 0, 0, 1) 0%, 
      rgba(0, 0, 0, 1) ${50 - fade}%, 
      rgba(0, 0, 0, 0) ${50 - fade}%, 
      rgba(0, 0, 0, 0) ${50 + fade}%, 
      rgba(0, 0, 0, 1) ${50 + fade}%, 
      rgba(0, 0, 0, 1) 100%)`;

  overlayText.style.opacity = 1 - percent;
}

function setProgressBar(distanceScrolled, windowHeight) {
  const docHeight = document.documentElement.scrollHeight - windowHeight;
  const percent = (distanceScrolled / docHeight) * 100;
  console.log(percent);
  progressBar.style.width = `${percent}%`;
}

const overlayEl = document.querySelector('.overlay');
const overlayText = document.querySelector('.overlay-text');
const progressBar = document.querySelector('.progress-bar');
document.body.classList.remove('loading');
setOverlay(window.scrollY, window.innerHeight);
setProgressBar(window.scrollY, window.innerHeight);

/**
 * Event listener for the overlay to open up.
 */
window.addEventListener('scroll', () => {
  setOverlay(window.scrollY, window.innerHeight);
  setProgressBar(window.scrollY, window.innerHeight);
});
