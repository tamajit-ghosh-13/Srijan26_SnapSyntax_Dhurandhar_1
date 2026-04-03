
let ticking = false;
let lastScrollY = 0;
const navbar = document.getElementById("navbar");
const progressFill = document.getElementById("nav-progress");
const progressPct = document.getElementById("progress-pct");

const PARALLAX_LAYERS = [
  { selector: ".parallax-slow", speedY: 0.2 },
  { selector: ".parallax-medium", speedY: 0.4 },
  { selector: ".parallax-fast", speedY: 0.65 },
];

function updateParallax(scrollY) {
  for (const layer of PARALLAX_LAYERS) {
    document.querySelectorAll(layer.selector).forEach((el) => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + scrollY + rect.height / 2;
      const delta = (scrollY - center + window.innerHeight / 2) * layer.speedY;
      el.style.transform = `translateY(${delta}px)`;
    });
  }
}

function onScroll() {
  lastScrollY = window.scrollY;

  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (scrollTop / docH) * 100 : 0;

      if (progressFill) {
        progressFill.style.width = pct.toFixed(1) + "%";
        document.documentElement.style.setProperty(
          "--scroll-progress",
          pct.toFixed(1) + "%",
        );
      }
      if (progressPct) {
        progressPct.textContent = Math.round(pct) + "%";
      }

      if (navbar) {
        if (scrollTop > 60) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }

      updateParallax(scrollTop);

      ticking = false;
    });
    ticking = true;
  }
}

export function initScrollSystem() {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
