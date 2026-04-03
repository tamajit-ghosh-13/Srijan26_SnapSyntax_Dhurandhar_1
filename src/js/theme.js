
const THEMES = ["dark", "light", "neon"];

function applyTheme(theme) {
  const body = document.body;

  body.classList.remove("theme-light", "theme-neon");
  if (theme === "light") body.classList.add("theme-light");
  if (theme === "neon") body.classList.add("theme-neon");

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
    if (btn.dataset.theme === theme) {
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
    }
  });

  try {
    localStorage.setItem("snap-theme", theme);
  } catch {}
}

function cinemaSwitch(theme) {
  const flash = document.createElement("div");
  flash.style.cssText = `
    position:fixed;inset:0;z-index:99980;
    background:${theme === "light" ? "#f0f4ff" : theme === "neon" ? "#000" : "#020408"};
    opacity:0;pointer-events:none;transition:opacity 0.2s ease;
  `;
  document.body.appendChild(flash);
  requestAnimationFrame(() => {
    flash.style.opacity = "0.6";
    setTimeout(() => {
      applyTheme(theme);
      flash.style.opacity = "0";
      setTimeout(() => flash.remove(), 300);
    }, 150);
  });
}

export function initTheme() {
  let saved = "dark";
  try {
    saved = localStorage.getItem("snap-theme") || "dark";
  } catch {}
  applyTheme(saved);

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      if (!THEMES.includes(theme)) return;
      cinemaSwitch(theme);
    });
  });
}
