const stars = document.getElementById('stars');
const content = document.getElementById('info-container');

const menuNav = document.getElementById('menu');
const overlay = document.getElementById('overlay');

const goodCounter = document.getElementById('good-counter');
const evilCounter = document.getElementById('evil-counter');

const scheduleDays = document.querySelectorAll('.schedule__day');

const skyColours = [
  'linear-gradient(to bottom, #0a0a2e 0%, #1a1a3e 50%, #2a2a4e 100%)', // Dark pre-dawn
  'linear-gradient(to bottom, #1e3a5f 0%, #4a5f7f 50%, #7a8f9f 100%)', // Dawn
  // 'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 50%, #FFE4B5 100%)', // Morning
  'linear-gradient(to bottom, #4A90E2 0%, #87CEEB 50%, #F0E68C 100%)', // Mid-morning
  'linear-gradient(to bottom, #1090FF 0%, #4A90E2 50%, #87CEEB 100%)', // Noon
  'linear-gradient(to bottom, #FF8C42 0%, #FFA07A 50%, #FFD700 100%)', // Afternoon
  'linear-gradient(to bottom, #FF6B6B 0%, #FF8E53 50%, #FEB47B 100%)', // Evening
  'linear-gradient(to bottom, #0a0a2e 0%, #1a1a3e 50%, #2a2a4e 100%)' // Night
];

function interpolateColor(color1, color2, factor) {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}

function parseGradient(gradientStr) {
  const matches = gradientStr.match(/#[0-9A-Fa-f]{6}/g);
  return matches
    ? matches.map(hex => [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16)
      ])
    : [];
}

function updateSkyColour() {
  const scrollPercent = content.scrollTop / (content.scrollHeight - content.clientHeight);
  const colorIndex = scrollPercent * (skyColours.length - 1);
  const currentIndex = Math.floor(colorIndex);
  const nextIndex = Math.min(currentIndex + 1, skyColours.length - 1);
  const blendFactor = colorIndex - currentIndex;

  const currentColors = parseGradient(skyColours[currentIndex]);
  const nextColors = parseGradient(skyColours[nextIndex]);

  const color1 = interpolateColor(currentColors[0], nextColors[0], blendFactor);
  const color2 = interpolateColor(currentColors[1], nextColors[1], blendFactor);
  const color3 = interpolateColor(currentColors[2], nextColors[2], blendFactor);

  sky.style.background = `linear-gradient(to bottom, rgb(${color1.join(',')}) 0%, rgb(${color2.join(',')}) 50%, rgb(${color3.join(',')}) 100%)`;

  if (scrollPercent > 0.7) {
    stars.style.opacity = Math.min((scrollPercent - 0.7) / 0.3, 1);
  } else {
    stars.style.opacity = 0;
  }
}

function makeStars() {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    stars.appendChild(star);
  }
}

function openMenu() {
  menuNav.classList.remove('hidden');
  overlay.classList.remove('hidden');
  content.style.overflow = 'hidden';
}

function closeMenu() {
  menuNav.classList.add('hidden');
  overlay.classList.add('hidden');
  content.style.overflow = 'auto';
}

// TODO: Replace these buttons with counts from the backend
function incrementGood() {
  goodCounter.textContent = parseInt(goodCounter.textContent) + 1;
}

function incrementEvil() {
  evilCounter.textContent = parseInt(evilCounter.textContent) + 1;
}

function main() {
  // Day selector
  document.querySelectorAll('input[name="schedule-day"]').forEach(radio => {
    radio.addEventListener('change', e => {
      const selectedDay = e.target.value;
      scheduleDays.forEach(day => {
        day.classList.add('hidden');
      });
      document
        .querySelector(`.schedule__day[data-day="${selectedDay}"]`)
        ?.classList.remove('hidden');
    });
  });

  // Initially hide Sunday
  document.querySelector('.schedule__day[data-day="sunday"]')?.classList.add('hidden');

  // Handles the sky changing colours
  content.addEventListener('scroll', updateSkyColour);
  updateSkyColour();
  makeStars();

  // Menu handling
  const links = document.getElementsByClassName('menu__link');
  for (const link of links) {
    link.addEventListener('click', closeMenu);
  }
  document.getElementById('home').addEventListener('click', closeMenu);
}

main();
