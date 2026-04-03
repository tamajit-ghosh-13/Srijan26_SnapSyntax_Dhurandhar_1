
const PHRASES = [
  "Don't just code what you see. Rebuild what you remember.",
  "Every design lives in the Memory Palace. Recall it. Ship it.",
  "Snap the syntax. Own the palace. Win Srijan 2026.",
  "60fps. Zero libraries. Pure CSS sorcery.",
  "The future of web dev is already in your head.",
];

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#________";
const TYPE_SPEED = 45; // ms per character
const GLITCH_PROB = 0.03; // probability of glitch per frame
const PAUSE_AFTER = 2600; // ms before deleting
const DELETE_SPEED = 22; // ms per delete

let el = null;
let currentPhrase = 0;
let charIndex = 0;
let isDeleting = false;
let glitchTimeout = null;

function applyGlitch(str) {
  if (Math.random() > GLITCH_PROB * str.length) return str;
  const arr = str.split("");
  const pos = Math.floor(Math.random() * arr.length);
  arr[pos] = GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
  return arr.join("");
}

function tick() {
  const phrase = PHRASES[currentPhrase];

  if (!isDeleting) {
    charIndex++;
    const displayed = phrase.slice(0, charIndex);
    el.textContent =
      Math.random() < GLITCH_PROB ? applyGlitch(displayed) : displayed;

    if (charIndex >= phrase.length) {
      glitchTimeout = setTimeout(() => {
        isDeleting = true;
        tick();
      }, PAUSE_AFTER);
      return;
    }
    glitchTimeout = setTimeout(tick, TYPE_SPEED + Math.random() * 20);
  } else {
    charIndex = Math.max(0, charIndex - 1);
    el.textContent = phrase.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % PHRASES.length;
      glitchTimeout = setTimeout(tick, 400);
      return;
    }
    glitchTimeout = setTimeout(tick, DELETE_SPEED);
  }
}

export function initTypewriter() {
  el = document.getElementById("typewriter-output");
  if (!el) return;

  setTimeout(tick, 800);
}
