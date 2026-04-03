
import { initParticles } from "./particles.js";
import { initTypewriter } from "./typewriter.js";
import { initScrollSystem } from "./scroll.js";
import { initMemoryDemo } from "./memoryDemo.js";
import { initPlayground } from "./playground.js";
import { initCursor } from "./cursor.js";
import { initTheme } from "./theme.js";
import { initEasterEgg } from "./easterEgg.js";
import { initNavbar } from "./navbar.js";
import { initReveal } from "./reveal.js";

// Loader messages
const LOADER_MSGS = [
  "INITIALIZING MEMORY PALACE...",
  "LOADING PARTICLE ENGINE...",
  "COMPILING SYNTAX CORES...",
  "CALIBRATING SNAP DETECTOR...",
  "MEMORY PALACE READY.",
];

async function bootLoader() {
  const status = document.getElementById("loader-status");
  const loader = document.getElementById("loader");
  if (!status || !loader) return;

  let i = 0;
  const interval = setInterval(() => {
    if (i < LOADER_MSGS.length) {
      status.textContent = LOADER_MSGS[i++];
    } else {
      clearInterval(interval);
    }
  }, 280);

  await new Promise((r) => setTimeout(r, 1600));
  loader.classList.add("hidden");
}

// Init all modules
async function init() {
  await bootLoader();

  initCursor();
  initTheme();
  initNavbar();
  initReveal();
  initScrollSystem();
  initTypewriter();
  initParticles();
  initMemoryDemo();
  initPlayground();
  initEasterEgg();
  initGalleryCards();
  initFinalCTA();

  console.log(
    "%c⚡ SNAP SYNTAX 3.0 · MEMORY SNAP%c\nSrijan 2026 · Jadavpur University\nBuilt with: Tailwind v4 · PostCSS · Vite · Vanilla JS",
    "color:#00f5ff;font-family:monospace;font-size:16px;font-weight:bold;",
    "color:rgba(232,244,255,0.4);font-family:monospace;font-size:11px;",
  );
}

// Gallery card snap transitions
function initGalleryCards() {
  const syntaxSnippets = {
    NeuralDash: `<!-- NeuralDash Card — Snap Syntax -->
<div class="relative overflow-hidden rounded-2xl
            bg-gradient-to-br from-violet-950 to-indigo-950
            border border-violet-800/30 p-6
            backdrop-blur-sm shadow-[0_0_30px_rgba(168,85,247,0.15)]">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-10 h-10 rounded-xl bg-gradient-to-br
                from-violet-500 to-indigo-600
                flex items-center justify-center text-xl">💎</div>
    <div>
      <p class="font-mono text-xs font-bold text-violet-300
                tracking-widest uppercase">NEURAL DASH</p>
      <p class="font-mono text-[10px] text-violet-500/50">COMPONENT·v2</p>
    </div>
  </div>
  <!-- Chart bars -->
  <div class="flex items-end gap-1 h-16 mb-4">
    <div class="flex-1 bg-gradient-to-t from-violet-500/80 to-transparent
                rounded-sm" style="height:40%"></div>
    <!-- ...more bars -->
  </div>
  <div class="grid grid-cols-2 gap-2">
    <div class="bg-violet-500/10 border border-violet-500/20 rounded-lg p-3">
      <p class="font-mono text-xl font-bold text-violet-400">1.2M</p>
      <p class="font-mono text-[10px] text-white/30 uppercase">neurons</p>
    </div>
    <div class="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
      <p class="font-mono text-xl font-bold text-cyan-400">98.7%</p>
      <p class="font-mono text-[10px] text-white/30 uppercase">acc</p>
    </div>
  </div>
</div>`,
    PhotonGrid: `<!-- PhotonGrid Gallery — Snap Syntax -->
<div class="grid grid-cols-[2fr_1fr] grid-rows-2 gap-1
            rounded-2xl overflow-hidden h-64">
  <div class="row-span-2 relative bg-gradient-to-br
              from-blue-950 to-slate-950 group">
    <div class="absolute inset-0 bg-gradient-to-br
                from-cyan-500/10 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <span class="absolute bottom-2 left-2 font-mono text-[10px]
                 text-white/40">Hero.jpg</span>
  </div>
  <div class="bg-gradient-to-br from-violet-950 to-purple-950
              rounded-tr-2xl"></div>
  <div class="bg-gradient-to-br from-emerald-950 to-green-950
              rounded-br-2xl"></div>
</div>`,
    VaultOS: `<!-- VaultOS Terminal — Snap Syntax -->
<div class="rounded-2xl overflow-hidden border border-red-900/30
            bg-gradient-to-br from-black to-red-950/20">
  <!-- Titlebar -->
  <div class="flex justify-between items-center px-3 py-2
              bg-red-500/10 border-b border-red-900/20">
    <span class="font-mono text-xs font-bold text-red-400
                 tracking-widest">VAULT OS</span>
    <div class="flex gap-1">
      <div class="w-2 h-2 rounded-full bg-red-500"></div>
      <div class="w-2 h-2 rounded-full bg-red-500/30"></div>
      <div class="w-2 h-2 rounded-full bg-red-500/10"></div>
    </div>
  </div>
  <!-- Terminal -->
  <div class="p-4 font-mono text-xs leading-relaxed bg-black/50">
    <p class="text-red-400">$ vault init --project memory-snap</p>
    <p class="text-green-400">✓ Memory palace initialized</p>
    <p class="text-amber-400">⚡ Linking 3000 particles...</p>
    <p class="text-cyan-400">✦ SNAP SYNTAX v3.0 ready</p>
  </div>
</div>`,
  };

  window.triggerSnapTransition = function (btn) {
    const card = btn.closest("article");
    const title = card.querySelector("h3").textContent.trim();
    const snippet = syntaxSnippets[title] || "// Code not found";
    const overlay = document.createElement("div");
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:9990;background:rgba(2,4,8,0.97);
      display:flex;align-items:center;justify-content:center;padding:2rem;
      animation:fadeIn 0.3s ease-out;
    `;
    overlay.innerHTML = `
      <div style="max-width:700px;width:100%;position:relative;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
          <div>
            <div style="font-family:'JetBrains Mono',monospace;font-size:0.6rem;color:#ff00aa;letter-spacing:0.3em;margin-bottom:0.25rem;">⚡ PERFECT SNAP · SYNTAX OUTPUT</div>
            <div style="font-family:'Orbitron',monospace;font-size:1.2rem;font-weight:700;color:#00f5ff;">${title}</div>
          </div>
          <button onclick="this.closest('[style*=fixed]').remove()"
            style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;padding:0.5rem 1rem;border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:rgba(255,255,255,0.4);background:transparent;cursor:pointer;">
            ✕ Close
          </button>
        </div>
        <div style="position:relative;border-radius:12px;overflow:hidden;border:1px solid rgba(0,245,255,0.15);background:rgba(0,0,0,0.6);">
          <div style="padding:0.75rem 1rem;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;gap:0.4rem;">
            <div style="width:10px;height:10px;border-radius:50%;background:#ff5f57;"></div>
            <div style="width:10px;height:10px;border-radius:50%;background:#ffbd2e;"></div>
            <div style="width:10px;height:10px;border-radius:50%;background:#28ca41;"></div>
          </div>
          <pre style="padding:1.5rem;font-family:'JetBrains Mono',monospace;font-size:0.75rem;color:#00f5ff;overflow-x:auto;line-height:1.7;margin:0;white-space:pre;">${snippet.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
        </div>
        <div style="margin-top:1rem;display:flex;gap:0.75rem;justify-content:flex-end;">
          <button onclick="navigator.clipboard.writeText(\`${snippet.replace(/`/g, "\\`")}\`).then(()=>{this.textContent='✓ Copied!';setTimeout(()=>this.textContent='📋 Copy Code',1500)})"
            style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;padding:0.5rem 1rem;border:1px solid rgba(0,245,255,0.2);border-radius:6px;color:#00f5ff;background:rgba(0,245,255,0.05);cursor:pointer;">
            📋 Copy Code
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  };
}

// Final CTA snap
function initFinalCTA() {
  const btn = document.getElementById("final-snap-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    triggerSnapExplosion(window.innerWidth / 2, window.innerHeight / 2, 80);
    setTimeout(() => {
      showPerfectSnapMsg();
    }, 600);
  });
}

function showPerfectSnapMsg() {
  const msg = document.createElement("div");
  msg.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    z-index:9990;text-align:center;pointer-events:none;
    animation:scaleIn 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
  `;
  msg.innerHTML = `
    <div style="font-family:'Orbitron',monospace;font-size:clamp(2rem,8vw,5rem);font-weight:900;
    background:linear-gradient(135deg,#00f5ff,#a855f7,#ff00aa);-webkit-background-clip:text;
    -webkit-text-fill-color:transparent;background-clip:text;
    filter:drop-shadow(0 0 30px rgba(0,245,255,0.5));">
      PERFECT SNAP
    </div>
    <div style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#00f5ff;margin-top:0.5rem;letter-spacing:0.3em;">
      100% SYNTAX ACCURACY
    </div>
  `;
  document.body.appendChild(msg);
  setTimeout(() => {
    msg.style.transition = "opacity 0.5s ease";
    msg.style.opacity = "0";
    setTimeout(() => msg.remove(), 500);
  }, 2000);
}

window.triggerSnapExplosion = function (cx, cy, count = 40) {
  const colors = [
    "#00f5ff",
    "#ff00aa",
    "#a855f7",
    "#00ff88",
    "#ffaa00",
    "#ffffff",
  ];
  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
    const dist = 80 + Math.random() * 200;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    const size = 3 + Math.random() * 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    p.className = "snap-particle";
    p.style.cssText = `
      left:${cx}px;top:${cy}px;
      width:${size}px;height:${size}px;
      background:${color};
      box-shadow:0 0 ${size * 2}px ${color};
      --dx:${dx}px;--dy:${dy}px;
      animation-duration:${0.6 + Math.random() * 0.6}s;
    `;
    document.body.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
};

window.copyDeployStep = function (el, text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const icon = el.querySelector("[data-tip]") || el.lastElementChild;
      const orig = icon.textContent;
      icon.textContent = "✓";
      icon.style.opacity = "1";
      icon.style.color = "#00ff88";
      el.style.borderColor = "rgba(0,255,136,0.3)";
      setTimeout(() => {
        icon.textContent = orig;
        icon.style.opacity = "0.4";
        icon.style.color = "";
        el.style.borderColor = "";
      }, 1500);
    })
    .catch(() => {
      // Clipboard fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    });
};

window.triggerMatrixEasterEgg = function () {
  const overlay = document.getElementById("matrix-overlay");
  if (overlay) {
    overlay.classList.add("active");
    if (window._matrixStarted) return;
    window._matrixStarted = true;
    startMatrixRain();
  }
};

function startMatrixRain() {
  const wrapper = document.getElementById("matrix-canvas-wrapper");
  if (!wrapper) return;
  const chars = "SNAP SYNTAX MEMORY PALACE 01アイウエオカキクケコ⚡✦◈◉▸▹►▻";
  const cols = Math.floor(window.innerWidth / 18);
  for (let i = 0; i < cols; i++) {
    const col = document.createElement("div");
    col.className = "matrix-col";
    col.style.left = i * 18 + "px";
    col.style.animationDuration = 1 + Math.random() * 3 + "s";
    col.style.animationDelay = -Math.random() * 3 + "s";
    let str = "";
    for (let j = 0; j < 30; j++)
      str += chars[Math.floor(Math.random() * chars.length)];
    col.textContent = str;
    wrapper.appendChild(col);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
