
let canvas,
  ctx,
  particles = [],
  mouse = { x: -9999, y: -9999, down: false };
let animId = null;
let dpr = 1;
let W = 0,
  H = 0;

// Config
const CFG = {
  count: window.innerWidth < 768 ? 400 : 1200,
  connectDist: 80,
  mouseRadius: 130,
  mouseForce: 0.18,
  baseSpeed: 0.3,
  snapRadius: 300,
  colors: [
    "rgba(0,245,255,0.8)",
    "rgba(0,200,212,0.6)",
    "rgba(255,0,170,0.5)",
    "rgba(168,85,247,0.6)",
    "rgba(124,58,237,0.5)",
    "rgba(0,255,136,0.4)",
    "rgba(255,255,255,0.3)",
  ],
  hexColors: [
    "#00f5ff",
    "#00c8d4",
    "#ff00aa",
    "#a855f7",
    "#7c3aed",
    "#00ff88",
    "#ffffff",
  ],
};

class Particle {
  constructor(w, h) {
    this.reset(w, h);
  }

  reset(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.ox = this.x;
    this.oy = this.y;
    this.vx = (Math.random() - 0.5) * CFG.baseSpeed;
    this.vy = (Math.random() - 0.5) * CFG.baseSpeed;
    this.r = 0.4 + Math.random() * 1.2;
    const idx = Math.floor(Math.random() * CFG.colors.length);
    this.color = CFG.colors[idx];
    this.hexColor = CFG.hexColors[idx];
    this.alpha = 0.15 + Math.random() * 0.45;
    this.snapped = false;
    this.snapVx = 0;
    this.snapVy = 0;
    return this;
  }

  update(w, h) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < CFG.mouseRadius && dist > 0) {
      const force =
        ((CFG.mouseRadius - dist) / CFG.mouseRadius) * CFG.mouseForce;
      const angle = Math.atan2(dy, dx);
      const push = mouse.down ? -1 : 1;
      this.vx += Math.cos(angle) * force * push;
      this.vy += Math.sin(angle) * force * push;
    }

    if (this.snapped) {
      this.vx += this.snapVx * 0.15;
      this.vy += this.snapVy * 0.15;
      this.snapVx *= 0.9;
      this.snapVy *= 0.9;
      if (Math.abs(this.snapVx) < 0.01 && Math.abs(this.snapVy) < 0.01) {
        this.snapped = false;
      }
    }

    this.vx *= 0.96;
    this.vy *= 0.96;
    this.vx += (Math.random() - 0.5) * 0.04;
    this.vy += (Math.random() - 0.5) * 0.04;

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < -10) {
      this.x = w + 10;
      this.ox = this.x;
    }
    if (this.x > w + 10) {
      this.x = -10;
      this.ox = this.x;
    }
    if (this.y < -10) {
      this.y = h + 10;
      this.oy = this.y;
    }
    if (this.y > h + 10) {
      this.y = -10;
      this.oy = this.y;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha =
      this.alpha * (0.7 + 0.3 * Math.sin(Date.now() * 0.001 + this.x));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.r * 2;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.restore();
  }

  snapExplode(cx, cy) {
    const dx = this.x - cx;
    const dy = this.y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < CFG.snapRadius) {
      const force = (CFG.snapRadius - dist) / CFG.snapRadius;
      const angle = Math.atan2(dy, dx);
      this.snapVx = Math.cos(angle) * force * 18;
      this.snapVy = Math.sin(angle) * force * 18;
      this.snapped = true;
    }
  }
}

// Draw lines between nearby particles
function drawConnections() {
  const step = Math.max(1, Math.floor(particles.length / 600));
  for (let i = 0; i < particles.length; i += step) {
    for (let j = i + 1; j < particles.length; j += step) {
      const a = particles[i],
        b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CFG.connectDist) {
        const alpha = (1 - dist / CFG.connectDist) * 0.15;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
        const alphaHex = Math.floor(alpha * 255)
          .toString(16)
          .padStart(2, "0");
        grad.addColorStop(0, a.hexColor + alphaHex);
        grad.addColorStop(1, b.hexColor + alphaHex);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.6;
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

// Main animation loop
function render() {
  animId = requestAnimationFrame(render);

  ctx.clearRect(0, 0, W, H);

  const vignette = ctx.createRadialGradient(
    W / 2,
    H / 2,
    H * 0.2,
    W / 2,
    H / 2,
    H * 0.9,
  );
  vignette.addColorStop(0, "rgba(2,4,8,0)");
  vignette.addColorStop(1, "rgba(2,4,8,0.4)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, W, H);

  drawConnections();

  for (const p of particles) {
    p.update(W, H);
    p.draw(ctx);
  }
}

// Handle window resizing
function resize() {
  dpr = window.devicePixelRatio || 1;
  W = canvas.offsetWidth;
  H = canvas.offsetHeight;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);
}

// Initialize the particle system
export function initParticles() {
  canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  resize();
  window.addEventListener("resize", resize, { passive: true });

  for (let i = 0; i < CFG.count; i++) {
    particles.push(new Particle(W, H));
  }

  canvas.addEventListener(
    "mousemove",
    (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    },
    { passive: true },
  );

  document.addEventListener(
    "mousemove",
    (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    },
    { passive: true },
  );

  document.addEventListener("mousedown", () => (mouse.down = true));
  document.addEventListener("mouseup", () => (mouse.down = false));

  canvas.addEventListener(
    "touchmove",
    (e) => {
      const t = e.touches[0];
      mouse.x = t.clientX;
      mouse.y = t.clientY;
    },
    { passive: true },
  );

  const logo = document.getElementById("hero-logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const p of particles) p.snapExplode(cx, cy);
      if (window.triggerSnapExplosion) {
        window.triggerSnapExplosion(e.clientX, e.clientY, 60);
      }
    });
  }

  const enterBtn = document.getElementById("enter-palace-btn");
  if (enterBtn) {
    enterBtn.addEventListener("click", (e) => {
      for (const p of particles) p.snapExplode(W / 2, H / 2);
      if (window.triggerSnapExplosion)
        window.triggerSnapExplosion(e.clientX, e.clientY, 80);

      setTimeout(() => {
        document
          .getElementById("memory-demo")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    });
  }

  render();
}

export function snapAll(cx, cy) {
  if (!particles.length) return;
  for (const p of particles) p.snapExplode(cx, cy);
}
