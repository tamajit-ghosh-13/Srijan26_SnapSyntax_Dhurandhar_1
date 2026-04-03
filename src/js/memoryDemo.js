// Component definitions for drag-and-drop toolbox
const COMPONENTS = [
  {
    id: "gradient-card",
    label: "Gradient Card",
    points: 22,
    html: `<div style="background:linear-gradient(135deg,#1e3a5f,#0f2040);border-radius:12px;padding:1.2rem;border:1px solid rgba(100,180,255,0.2);margin-bottom:0.75rem;">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.75rem;">
        <div style="width:36px;height:36px;border-radius:9px;background:linear-gradient(135deg,#60a5fa,#3b82f6);display:flex;align-items:center;justify-content:center;">💎</div>
        <div><div style="font-family:'Orbitron',monospace;font-size:0.65rem;font-weight:700;color:#93c5fd;">PREMIUM CARD</div><div style="font-size:0.55rem;color:rgba(147,197,253,0.5);font-family:'JetBrains Mono',monospace;">COMPONENT·v2</div></div>
      </div>
      <p style="font-size:0.8rem;color:rgba(255,255,255,0.7);line-height:1.5;margin-bottom:0.75rem;">Glassmorphic card with gradient header.</p>
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
        <span style="font-size:0.55rem;padding:0.15rem 0.5rem;border-radius:20px;background:rgba(96,165,250,0.15);color:#60a5fa;border:1px solid rgba(96,165,250,0.3);">Tailwind</span>
        <span style="font-size:0.55rem;padding:0.15rem 0.5rem;border-radius:20px;background:rgba(167,139,250,0.15);color:#a78bfa;border:1px solid rgba(167,139,250,0.3);">CSS</span>
      </div>
    </div>`,
  },
  {
    id: "stat-grid",
    label: "Stat Grid",
    points: 28,
    html: `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.5rem;margin-bottom:0.75rem;">
      <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:0.6rem;text-align:center;border:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:'Orbitron',monospace;font-size:0.9rem;font-weight:700;color:#60a5fa;">98%</div>
        <div style="font-size:0.5rem;color:rgba(255,255,255,0.3);font-family:'JetBrains Mono',monospace;">SCORE</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:0.6rem;text-align:center;border:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:'Orbitron',monospace;font-size:0.9rem;font-weight:700;color:#a78bfa;">12s</div>
        <div style="font-size:0.5rem;color:rgba(255,255,255,0.3);font-family:'JetBrains Mono',monospace;">BUILD</div>
      </div>
      <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:0.6rem;text-align:center;border:1px solid rgba(255,255,255,0.06);">
        <div style="font-family:'Orbitron',monospace;font-size:0.9rem;font-weight:700;color:#34d399;">A+</div>
        <div style="font-size:0.5rem;color:rgba(255,255,255,0.3);font-family:'JetBrains Mono',monospace;">GRADE</div>
      </div>
    </div>`,
  },
  {
    id: "icon-header",
    label: "Icon Header",
    points: 20,
    html: `<div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
      <div style="width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#60a5fa,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:1.2rem;">💎</div>
      <div>
        <div style="font-family:'Orbitron',monospace;font-size:0.75rem;font-weight:700;color:#93c5fd;">PREMIUM CARD</div>
        <div style="font-size:0.6rem;color:rgba(147,197,253,0.5);font-family:'JetBrains Mono',monospace;">COMPONENT·v2</div>
      </div>
    </div>`,
  },
  {
    id: "tag-row",
    label: "Tag Row",
    points: 15,
    html: `<div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem;">
      <span style="font-size:0.6rem;padding:0.2rem 0.6rem;border-radius:20px;background:rgba(96,165,250,0.15);color:#60a5fa;border:1px solid rgba(96,165,250,0.3);">Tailwind</span>
      <span style="font-size:0.6rem;padding:0.2rem 0.6rem;border-radius:20px;background:rgba(167,139,250,0.15);color:#a78bfa;border:1px solid rgba(167,139,250,0.3);">CSS</span>
      <span style="font-size:0.6rem;padding:0.2rem 0.6rem;border-radius:20px;background:rgba(52,211,153,0.15);color:#34d399;border:1px solid rgba(52,211,153,0.3);">JS</span>
    </div>`,
  },
  {
    id: "body-text",
    label: "Body Text",
    points: 10,
    html: `<p style="font-family:'Rajdhani',sans-serif;font-size:0.85rem;color:rgba(255,255,255,0.8);line-height:1.5;margin-bottom:0.75rem;">A sleek glassmorphic card with a gradient background, rounded icon, and layered typography.</p>`,
  },
];

const MAX_SCORE = COMPONENTS.reduce((acc, c) => acc + c.points, 0);

// Application state
let testActive = false;
let droppedIds = new Set();
let currentScore = 0;

// Confetti animation logic
function launchConfetti(count = 120) {
  const colors = [
    "#00f5ff",
    "#ff00aa",
    "#a855f7",
    "#00ff88",
    "#ffaa00",
    "#ff2244",
    "#ffffff",
  ];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("div");
    el.className = "confetti-particle";
    const size = 4 + Math.random() * 8;
    el.style.cssText = `
      left: ${20 + Math.random() * 60}%;
      top: 0;
      width: ${size}px;
      height: ${size * (0.4 + Math.random() * 1.2)}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      transform: rotate(${Math.random() * 360}deg);
      animation-duration: ${1.5 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    document.body.appendChild(el);
    el.addEventListener("animationend", () => el.remove());
  }
}

function showPerfectSnap() {
  launchConfetti(160);
  if (window.triggerSnapExplosion) {
    window.triggerSnapExplosion(
      window.innerWidth / 2,
      window.innerHeight / 2,
      100,
    );
  }

  const banner = document.createElement("div");
  banner.style.cssText = `
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    z-index:9980;text-align:center;pointer-events:none;
    animation:scaleIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275);
  `;
  banner.innerHTML = `
    <div style="background:rgba(2,4,8,0.9);border:2px solid #00f5ff;border-radius:20px;
    padding:2rem 3rem;box-shadow:0 0 60px rgba(0,245,255,0.3);">
      <div style="font-family:'Orbitron',monospace;font-size:clamp(1.5rem,5vw,3rem);font-weight:900;
      background:linear-gradient(135deg,#00f5ff,#a855f7,#ff00aa);-webkit-background-clip:text;
      -webkit-text-fill-color:transparent;background-clip:text;">
        ⚡ PERFECT SNAP ⚡
      </div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:#00ff88;
      margin-top:0.5rem;letter-spacing:0.2em;">100% ACCURACY ACHIEVED</div>
    </div>
  `;
  document.body.appendChild(banner);
  setTimeout(() => {
    banner.style.transition = "opacity 0.5s, transform 0.5s";
    banner.style.opacity = "0";
    banner.style.transform = "translate(-50%,-50%) scale(0.8)";
    setTimeout(() => banner.remove(), 500);
  }, 3000);
}

// Accuracy calculation logic
function updateAccuracy() {
  currentScore = 0;
  for (const id of droppedIds) {
    const comp = COMPONENTS.find((c) => c.id === id);
    if (comp) currentScore += comp.points;
  }

  const pct = Math.min(100, Math.round((currentScore / MAX_SCORE) * 100));
  const bar = document.getElementById("accuracy-bar");
  const display = document.getElementById("accuracy-display");
  const label = document.getElementById("accuracy-label");

  if (bar) bar.style.width = pct + "%";
  if (display) display.textContent = pct + "%";

  if (label) {
    if (pct === 0) label.textContent = "AWAITING RECONSTRUCTION...";
    else if (pct < 30) label.textContent = "MEMORY FRAGMENTS DETECTED";
    else if (pct < 60) label.textContent = "PALACE FORMING...";
    else if (pct < 80) label.textContent = "STRONG RECALL ACTIVE";
    else if (pct < 95) label.textContent = "NEAR-PERFECT SNAP";
    else label.textContent = "✦ PERFECT SNAP — FLAWLESS RECALL";
  }

  if (bar) {
    if (pct < 50) {
      bar.style.background = "linear-gradient(90deg,#ff2244,#ffaa00)";
      bar.style.boxShadow = "0 0 12px #ff2244";
    } else if (pct < 85) {
      bar.style.background = "linear-gradient(90deg,#ffaa00,#00f5ff)";
      bar.style.boxShadow = "0 0 12px #ffaa00";
    } else {
      bar.style.background = "linear-gradient(90deg,#00f5ff,#00ff88)";
      bar.style.boxShadow = "0 0 12px #00ff88";
    }
  }

  if (pct >= 95 && droppedIds.size === COMPONENTS.length) {
    setTimeout(showPerfectSnap, 300);
  }
}

// Drop zone drag-and-drop functionality
function setupDropZone() {
  const dropZone = document.getElementById("drop-zone");
  const recreation = document.getElementById("recreation-canvas");
  const placeholder = document.getElementById("recreation-placeholder");
  if (!dropZone || !recreation) return;

  dropZone.style.display = "block";
  if (placeholder) placeholder.style.display = "none";

  const buildArea = document.createElement("div");
  buildArea.id = "build-area";
  buildArea.style.cssText = `
    min-height:200px;padding:0.75rem;border-radius:10px;
    background:linear-gradient(135deg,#0d0d2b 0%,#1a0a2e 100%);
    border:1px solid rgba(0,245,255,0.15);
    display:flex;flex-direction:column;
  `;
  recreation.appendChild(buildArea);

  recreation.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "rgba(0,245,255,0.6)";
    dropZone.style.background = "rgba(0,245,255,0.05)";
  });
  recreation.addEventListener("dragleave", () => {
    dropZone.style.borderColor = "rgba(0,245,255,0.3)";
    dropZone.style.background = "rgba(0,245,255,0.02)";
  });
  recreation.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.style.borderColor = "rgba(0,245,255,0.3)";
    dropZone.style.background = "rgba(0,245,255,0.02)";

    const id = e.dataTransfer.getData("text/plain");
    if (!id) return;

    const comp = COMPONENTS.find((c) => c.id === id);
    if (!comp || droppedIds.has(id)) return;

    droppedIds.add(id);

    const wrapper = document.createElement("div");
    wrapper.dataset.compId = id;
    wrapper.style.position = "relative";
    wrapper.innerHTML = comp.html;

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "✕";
    removeBtn.style.cssText = `
      position:absolute;top:4px;right:4px;
      width:18px;height:18px;border-radius:50%;
      background:rgba(255,34,68,0.5);border:none;
      color:white;font-size:0.6rem;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      line-height:1;z-index:10;transition:background 0.2s;
    `;
    removeBtn.addEventListener("click", () => {
      droppedIds.delete(id);
      wrapper.remove();
      updateAccuracy();
      const toolItem = document.querySelector(`[data-tool-id="${id}"]`);
      if (toolItem) {
        toolItem.style.opacity = "1";
        toolItem.draggable = true;
      }
    });
    removeBtn.addEventListener(
      "mouseenter",
      () => (removeBtn.style.background = "rgba(255,34,68,0.9)"),
    );
    removeBtn.addEventListener(
      "mouseleave",
      () => (removeBtn.style.background = "rgba(255,34,68,0.5)"),
    );

    wrapper.appendChild(removeBtn);
    buildArea.appendChild(wrapper);

    const toolItem = document.querySelector(`[data-tool-id="${id}"]`);
    if (toolItem) {
      toolItem.style.opacity = "0.35";
      toolItem.draggable = false;
    }

    updateAccuracy();

    wrapper.style.animation =
      "scaleIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275)";
  });
}

// Initialize the toolbox UI
function buildToolbox() {
  const toolbox = document.getElementById("toolbox");
  if (!toolbox) return;

  COMPONENTS.forEach((comp) => {
    const item = document.createElement("div");
    item.className = "toolbox-item glass-card";
    item.dataset.toolId = comp.id;
    item.draggable = true;
    item.style.cssText = `
      padding:0.5rem 0.9rem;cursor:grab;
      display:flex;align-items:center;gap:0.5rem;
      border-radius:8px;transition:all 0.2s ease;
    `;
    item.innerHTML = `
      <span style="font-family:'JetBrains Mono',monospace;font-size:0.65rem;color:#00f5ff;">
        ${comp.label}
      </span>
      <span style="font-family:'JetBrains Mono',monospace;font-size:0.55rem;color:rgba(232,244,255,0.25);">
        +${comp.points}pts
      </span>
    `;
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", comp.id);
      e.dataTransfer.effectAllowed = "copy";
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => {
      item.style.opacity = droppedIds.has(comp.id) ? "0.35" : "1";
    });

    toolbox.appendChild(item);
  });
}

// Setup control buttons for the demo
function initControls() {
  const testBtn = document.getElementById("test-memory-btn");
  const resetBtn = document.getElementById("reset-demo-btn");
  const revealBtn = document.getElementById("reveal-answer-btn");
  const original = document.getElementById("original-design");

  testBtn?.addEventListener("click", () => {
    if (testActive) return;
    testActive = true;
    if (original) {
      original.style.transition = "opacity 0.5s ease, filter 0.5s ease";
      original.style.opacity = "0";
      original.style.filter = "blur(10px)";
      setTimeout(() => {
        original.parentElement.parentElement.style.opacity = "0.4";
        original.parentElement.parentElement.style.pointerEvents = "none";
      }, 500);
    }
    setupDropZone();

    testBtn.textContent = "🧠 Memory Test Active";
    testBtn.style.opacity = "0.5";
    testBtn.disabled = true;

    const label = document.getElementById("accuracy-label");
    if (label) {
      label.textContent = "DROP COMPONENTS TO RECONSTRUCT THE DESIGN...";
      label.style.color = "#00f5ff";
    }
  });

  resetBtn?.addEventListener("click", () => {
    testActive = false;
    droppedIds.clear();
    currentScore = 0;
    if (original) {
      original.style.opacity = "1";
      original.style.filter = "none";
      original.parentElement.parentElement.style.opacity = "1";
      original.parentElement.parentElement.style.pointerEvents = "auto";
    }

    const buildArea = document.getElementById("build-area");
    if (buildArea) buildArea.remove();
    const dropZone = document.getElementById("drop-zone");
    if (dropZone) dropZone.style.display = "none";
    const placeholder = document.getElementById("recreation-placeholder");
    if (placeholder) placeholder.style.display = "flex";

    document.querySelectorAll("[data-tool-id]").forEach((el) => {
      el.style.opacity = "1";
      el.draggable = true;
    });

    updateAccuracy();

    if (testBtn) {
      testBtn.innerHTML = "<span>🧠 Test My Memory</span>";
      testBtn.style.opacity = "1";
      testBtn.disabled = false;
    }
  });

  revealBtn?.addEventListener("click", () => {
    if (!testActive) return;
    COMPONENTS.forEach((comp) => {
      if (!droppedIds.has(comp.id)) {
        const toolItem = document.querySelector(`[data-tool-id="${comp.id}"]`);
        if (toolItem && toolItem.draggable) {
          // Simulate drop
          const fakeEvent = {
            preventDefault: () => {},
            dataTransfer: { getData: () => comp.id },
          };
          const recreation = document.getElementById("recreation-canvas");
          recreation?.dispatchEvent(
            new DragEvent("dragover", { bubbles: true }),
          );
          // Actually just manually add
          droppedIds.add(comp.id);
          if (toolItem) {
            toolItem.style.opacity = "0.35";
            toolItem.draggable = false;
          }

          const buildArea = document.getElementById("build-area");
          if (buildArea) {
            const div = document.createElement("div");
            div.innerHTML = comp.html;
            div.style.animation = "scaleIn 0.3s ease";
            buildArea.appendChild(div);
          }
        }
      }
    });
    updateAccuracy();
  });
}

export function initMemoryDemo() {
  buildToolbox();
  initControls();
}
