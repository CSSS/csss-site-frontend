/* eslint-disable */
const sky = document.getElementById('sky');

const skyColours = [
  'linear-gradient(to bottom, #0a0a2e 0%, #1a1a3e 50%, #2a2a4e 100%)', // Dark pre-dawn
  'linear-gradient(to bottom, #1e3a5f 0%, #4a5f7f 50%, #7a8f9f 100%)', // Dawn
  'linear-gradient(to bottom, #87CEEB 0%, #B0E0E6 50%, #FFE4B5 100%)', // Morning
  'linear-gradient(to bottom, #4A90E2 0%, #87CEEB 50%, #F0E68C 100%)', // Mid-morning
  'linear-gradient(to bottom, #1090FF 0%, #4A90E2 50%, #87CEEB 100%)', // Noon
  'linear-gradient(to bottom, #FF8C42 0%, #FFA07A 50%, #FFD700 100%)', // Afternoon
  'linear-gradient(to bottom, #FF6B6B 0%, #FF8E53 50%, #FEB47B 100%)', // Evening
  'linear-gradient(to bottom, #4A148C 0%, #6A1B9A 50%, #7B1FA2 100%)', // Dusk
  'linear-gradient(to bottom, #0a0a2e 0%, #1a1a3e 50%, #2a2a4e 100%)' // Night
];

let currentColorIndex = 0;
let lastScrollY = 0;

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
  const scrollPercent =
    window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  const colorIndex = scrollPercent * (skyColours.length - 1);
  const currentIndex = Math.floor(colorIndex);
  const nextIndex = Math.min(currentIndex + 1, skyColours.length - 1);
  const blendFactor = colorIndex - currentIndex;

  // Parse current and next gradient colors
  const currentColors = parseGradient(skyColours[currentIndex]);
  const nextColors = parseGradient(skyColours[nextIndex]);

  // Interpolate between gradients
  const color1 = interpolateColor(currentColors[0], nextColors[0], blendFactor);
  const color2 = interpolateColor(currentColors[1], nextColors[1], blendFactor);
  const color3 = interpolateColor(currentColors[2], nextColors[2], blendFactor);

  sky.style.background = `linear-gradient(to bottom, rgb(${color1.join(',')}) 0%, rgb(${color2.join(',')}) 50%, rgb(${color3.join(',')}) 100%)`;
}

window.addEventListener('scroll', updateSkyColour);
updateSkyColour(skyColours[0]);
