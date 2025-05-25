function setOverlay() {
  const scrollTop = window.scrollY;
  const maxScroll = window.innerHeight;
  const percent = Math.min(scrollTop / maxScroll, 1);
  const fade = percent * 50;

  document.querySelector('.overlay').style.background =
    `linear-gradient(to right,
      rgba(0, 0, 0, 1) 0%, 
      rgba(0, 0, 0, 1) ${50 - fade}%, 
      rgba(0, 0, 0, 0) ${50 - fade}%, 
      rgba(0, 0, 0, 0) ${50 + fade}%, 
      rgba(0, 0, 0, 1) ${50 + fade}%, 
      rgba(0, 0, 0, 1) 100%)`;
}
/**
 * Event listener for the overlay to open up.
 */
window.addEventListener('scroll', () => {
  setOverlay();
});
