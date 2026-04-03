export function initCursor() {
  if (window.matchMedia("(hover: none)").matches) return;

  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  let mx = -100,
    my = -100; // mouse actual position
  let rx = -100,
    ry = -100; // ring lagged position
  let raf = null;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function loop() {
    raf = requestAnimationFrame(loop);

    // Dot snaps instantly
    dot.style.left = mx + "px";
    dot.style.top = my + "px";

    // Ring lags (lerp factor = 0.12 for butter)
    rx = lerp(rx, mx, 0.12);
    ry = lerp(ry, my, 0.12);
    ring.style.left = rx + "px";
    ring.style.top = ry + "px";
  }

  document.addEventListener(
    "mousemove",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
    },
    { passive: true },
  );

  // State changes on hover
  document.addEventListener("mouseover", (e) => {
    const el = e.target;
    const isClickable = el.closest(
      'a, button, [role="button"], input, textarea, select, label, [draggable]',
    );

    if (isClickable) {
      dot.style.transform = "translate(-50%,-50%) scale(2)";
      dot.style.background = "#ff00aa";
      dot.style.boxShadow = "0 0 6px #ff00aa, 0 0 20px rgba(255,0,170,0.3)";
      ring.style.width = "48px";
      ring.style.height = "48px";
      ring.style.borderColor = "#ff00aa";
    } else {
      dot.style.transform = "translate(-50%,-50%) scale(1)";
      dot.style.background = "#00f5ff";
      dot.style.boxShadow = "0 0 6px #00f5ff, 0 0 20px rgba(0,245,255,0.3)";
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "#00f5ff";
    }
  });

  // Click pulse
  document.addEventListener("mousedown", () => {
    dot.style.transform = "translate(-50%,-50%) scale(0.6)";
    ring.style.transform = "translate(-50%,-50%) scale(0.8)";
  });
  document.addEventListener("mouseup", () => {
    dot.style.transform = "translate(-50%,-50%) scale(1)";
    ring.style.transform = "translate(-50%,-50%) scale(1)";
  });

  // Hide when leaving window
  document.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    dot.style.opacity = "1";
    ring.style.opacity = "0.6";
  });

  loop();
}
