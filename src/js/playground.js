// Presets
const PRESETS = {
  card: `<!-- Glassmorphic Card Component -->
<div class="min-h-screen bg-slate-950 flex items-center justify-center p-8">
  <div class="relative w-72 rounded-2xl overflow-hidden
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.4)]
              hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]
              transition-all duration-500 group">

    <!-- Gradient top bar -->
    <div class="h-1 w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"></div>

    <div class="p-6">
      <!-- Icon + title -->
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-xl
                    bg-gradient-to-br from-cyan-400 to-violet-600
                    flex items-center justify-center text-xl
                    shadow-[0_0_20px_rgba(0,245,255,0.3)]">
          ⚡
        </div>
        <div>
          <h3 class="text-sm font-bold text-white font-mono tracking-widest uppercase">
            Memory Snap
          </h3>
          <p class="text-xs text-white/30 font-mono">v3.0 · Srijan 2026</p>
        </div>
      </div>

      <!-- Body -->
      <p class="text-sm text-white/60 leading-relaxed mb-5">
        Snap any design into perfect Tailwind syntax. Study it once.
        Build it forever.
      </p>

      <!-- Stats row -->
      <div class="grid grid-cols-3 gap-2 mb-5">
        <div class="rounded-lg bg-white/5 border border-white/8 p-2 text-center">
          <div class="text-cyan-400 font-mono font-bold text-base">98%</div>
          <div class="text-white/25 font-mono text-[9px] uppercase">Score</div>
        </div>
        <div class="rounded-lg bg-white/5 border border-white/8 p-2 text-center">
          <div class="text-violet-400 font-mono font-bold text-base">12s</div>
          <div class="text-white/25 font-mono text-[9px] uppercase">Build</div>
        </div>
        <div class="rounded-lg bg-white/5 border border-white/8 p-2 text-center">
          <div class="text-emerald-400 font-mono font-bold text-base">A+</div>
          <div class="text-white/25 font-mono text-[9px] uppercase">Grade</div>
        </div>
      </div>

      <!-- Button -->
      <button class="w-full py-2.5 rounded-xl
                     bg-gradient-to-r from-cyan-500 to-violet-600
                     text-black text-xs font-bold font-mono
                     tracking-widest uppercase
                     hover:from-pink-500 hover:to-violet-600
                     hover:text-white
                     transition-all duration-300
                     shadow-[0_0_20px_rgba(0,245,255,0.2)]
                     hover:shadow-[0_0_30px_rgba(255,0,170,0.3)]
                     hover:-translate-y-0.5">
        SNAP THIS →
      </button>
    </div>
  </div>
</div>`,

  button: `<!-- Cyber Neon Button Showcase -->
<div class="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-6 p-8">

  <!-- Primary CTA -->
  <button class="relative px-8 py-3 rounded-lg font-mono text-sm font-bold
                 tracking-widest uppercase text-black
                 bg-gradient-to-r from-cyan-400 to-cyan-500
                 shadow-[0_0_20px_rgba(0,245,255,0.4)]
                 hover:shadow-[0_0_40px_rgba(0,245,255,0.6)]
                 hover:-translate-y-1 hover:scale-105
                 transition-all duration-200 overflow-hidden group">
    <span class="relative z-10">⚡ SNAP SYNTAX</span>
    <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>

  <!-- Ghost -->
  <button class="px-8 py-3 rounded-lg font-mono text-sm font-bold
                 tracking-widest uppercase text-cyan-400
                 border border-cyan-500/50
                 hover:bg-cyan-500/10
                 hover:border-cyan-400
                 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]
                 hover:-translate-y-0.5
                 transition-all duration-200">
    → Ghost Button
  </button>

  <!-- Danger -->
  <button class="px-8 py-3 rounded-lg font-mono text-sm font-bold
                 tracking-widest uppercase text-rose-400
                 border border-rose-500/50
                 bg-rose-500/5
                 hover:bg-rose-500/15
                 hover:shadow-[0_0_20px_rgba(255,34,68,0.3)]
                 hover:-translate-y-0.5
                 transition-all duration-200">
    ✕ Destroy Memory
  </button>

  <!-- Loading state -->
  <button class="px-8 py-3 rounded-lg font-mono text-sm font-bold
                 tracking-widest uppercase text-white/50
                 border border-white/10 bg-white/5
                 cursor-not-allowed" disabled>
    <span class="inline-block w-3 h-3 border-2 border-t-cyan-400 border-white/20
                 rounded-full animate-spin mr-2"></span>
    SNAPPING...
  </button>
</div>`,

  navbar: `<!-- Glassmorphic Sticky Navbar -->
<div class="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950/20 to-slate-950">
  <!-- Navbar -->
  <nav class="sticky top-0 z-50 flex items-center justify-between px-6 h-16
              bg-black/60 backdrop-blur-xl border-b border-white/8
              shadow-[0_4px_30px_rgba(0,0,0,0.3)]">

    <!-- Logo -->
    <div class="flex items-center gap-2.5">
      <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600
                  flex items-center justify-center text-xs font-black text-black font-mono">
        SS
      </div>
      <span class="font-mono font-bold text-sm tracking-widest
                   bg-gradient-to-r from-cyan-400 to-violet-500
                   bg-clip-text text-transparent">
        SNAP SYNTAX
      </span>
    </div>

    <!-- Links -->
    <div class="hidden md:flex gap-6">
      <a href="#" class="font-mono text-xs tracking-widest uppercase
                         text-white/40 hover:text-cyan-400
                         transition-colors duration-200">Demo</a>
      <a href="#" class="font-mono text-xs tracking-widest uppercase
                         text-white/40 hover:text-cyan-400
                         transition-colors duration-200">Gallery</a>
      <a href="#" class="font-mono text-xs tracking-widest uppercase
                         text-white/40 hover:text-cyan-400
                         transition-colors duration-200">Snap</a>
    </div>

    <!-- CTA -->
    <button class="px-4 py-1.5 rounded-lg font-mono text-xs font-bold
                   tracking-widest uppercase
                   bg-gradient-to-r from-cyan-500 to-violet-600 text-black
                   hover:shadow-[0_0_20px_rgba(0,245,255,0.3)]
                   transition-all duration-200">
      Enter →
    </button>
  </nav>

  <!-- Page content -->
  <div class="flex items-center justify-center h-[calc(100vh-4rem)]">
    <p class="font-mono text-white/20 text-sm tracking-widest">Scroll area</p>
  </div>
</div>`,

  badge: `<!-- Badge + Tag Component System -->
<div class="min-h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 p-8">

  <!-- Status badges -->
  <div class="flex flex-wrap gap-3 justify-center">
    <span class="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase
                 bg-emerald-500/15 text-emerald-400 border border-emerald-500/30
                 shadow-[0_0_10px_rgba(0,255,136,0.1)]">
      ● Live
    </span>
    <span class="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase
                 bg-amber-500/15 text-amber-400 border border-amber-500/30">
      ◆ Beta
    </span>
    <span class="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase
                 bg-rose-500/15 text-rose-400 border border-rose-500/30">
      ✕ Offline
    </span>
    <span class="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase
                 bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
      ⚡ New
    </span>
  </div>

  <!-- Tech stack tags -->
  <div class="flex flex-wrap gap-2 justify-center max-w-sm">
    <span class="px-2.5 py-0.5 rounded text-[10px] font-mono
                 bg-sky-500/10 text-sky-400 border border-sky-500/20">Tailwind v4</span>
    <span class="px-2.5 py-0.5 rounded text-[10px] font-mono
                 bg-violet-500/10 text-violet-400 border border-violet-500/20">PostCSS</span>
    <span class="px-2.5 py-0.5 rounded text-[10px] font-mono
                 bg-pink-500/10 text-pink-400 border border-pink-500/20">Vite 5</span>
    <span class="px-2.5 py-0.5 rounded text-[10px] font-mono
                 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Vanilla JS</span>
    <span class="px-2.5 py-0.5 rounded text-[10px] font-mono
                 bg-amber-500/10 text-amber-400 border border-amber-500/20">Canvas API</span>
  </div>

  <!-- Score chip -->
  <div class="flex items-center gap-3 px-5 py-3 rounded-2xl
              bg-white/5 border border-white/10">
    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600
                flex items-center justify-center text-xl">⚡</div>
    <div>
      <div class="font-mono text-xs text-white/30 uppercase tracking-widest">Snap Score</div>
      <div class="font-mono font-bold text-2xl text-white">
        97<span class="text-cyan-400 text-sm">%</span>
      </div>
    </div>
    <div class="ml-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
      <span class="font-mono text-xs text-emerald-400 font-bold">PERFECT</span>
    </div>
  </div>
</div>`,

  custom: `<!-- Your Custom Component — Start typing! -->
<div class="min-h-screen bg-zinc-950 flex items-center justify-center p-8">
  <div class="text-center">
    <div class="font-mono text-4xl font-black
                bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500
                bg-clip-text text-transparent mb-4">
      Hello, Memory Palace
    </div>
    <p class="font-mono text-sm text-white/40 tracking-widest">
      Start typing Tailwind classes above...
    </p>
  </div>
</div>`,
};

// Autocomplete hints
const TOKEN_HINTS = [
  "backdrop-blur-xl",
  "bg-white/5",
  "border-white/10",
  "shadow-lg",
  "hover:scale-105",
  "transition-all",
  "font-mono",
  "tracking-widest",
  "text-cyan-400",
  "rounded-2xl",
  "flex",
  "grid",
  "gap-4",
];

let debounceTimer = null;

// Update preview iframe
function updatePreview(code) {
  const frame = document.getElementById("preview-frame");
  if (!frame) return;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #09090b; }
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Orbitron:wght@700;900&display=swap');
  </style>
</head>
<body>
${code}
</body>
</html>`;

  frame.srcdoc = html;
}

// Update line numbers
function updateLineNumbers(code) {
  const container = document.getElementById("line-numbers");
  if (!container) return;
  const lines = code.split("\n").length;
  container.innerHTML = Array.from(
    { length: lines },
    (_, i) => `<div class="editor-line-num">${i + 1}</div>`,
  ).join("");
}

// Update token hints
function updateTokenHints(code) {
  const container = document.getElementById("token-hints");
  if (!container) return;
  const missing = TOKEN_HINTS.filter((h) => !code.includes(h)).slice(0, 6);
  container.innerHTML = missing
    .map(
      (h) =>
        `<button onclick="insertHint('${h}')"
      style="font-family:'JetBrains Mono',monospace;font-size:0.55rem;padding:0.15rem 0.5rem;
             border:1px solid rgba(0,245,255,0.15);border-radius:4px;color:rgba(0,245,255,0.5);
             background:transparent;cursor:pointer;transition:all 0.2s;letter-spacing:0.05em;"
      onmouseenter="this.style.borderColor='rgba(0,245,255,0.4)';this.style.color='#00f5ff';"
      onmouseleave="this.style.borderColor='rgba(0,245,255,0.15)';this.style.color='rgba(0,245,255,0.5)';">
      ${h}
    </button>`,
    )
    .join("");
}

window.insertHint = function (text) {
  const editor = document.getElementById("code-editor");
  if (!editor) return;
  const start = editor.selectionStart;
  const val = editor.value;
  editor.value = val.slice(0, start) + " " + text + " " + val.slice(start);
  editor.dispatchEvent(new Event("input"));
  editor.focus();
};

// Initialize playground
export function initPlayground() {
  const editor = document.getElementById("code-editor");
  if (!editor) return;

  editor.value = PRESETS.card;

  updatePreview(PRESETS.card);
  updateLineNumbers(PRESETS.card);
  updateTokenHints(PRESETS.card);

  editor.addEventListener("input", () => {
    updateLineNumbers(editor.value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      updatePreview(editor.value);
      updateTokenHints(editor.value);
    }, 150);
  });

  // Tab indentation
  editor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value =
        editor.value.slice(0, start) + "  " + editor.value.slice(end);
      editor.selectionStart = editor.selectionEnd = start + 2;
      editor.dispatchEvent(new Event("input"));
    }
  });

  document.querySelectorAll(".playground-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".playground-tab").forEach((t) => {
        t.classList.remove("active-tab");
        t.style.background = "transparent";
        t.style.color = "rgba(232,244,255,0.4)";
        t.style.borderColor = "rgba(255,255,255,0.1)";
      });
      tab.classList.add("active-tab");
      tab.style.background = "rgba(0,245,255,0.08)";
      tab.style.color = "#00f5ff";
      tab.style.borderColor = "rgba(0,245,255,0.2)";

      const preset = PRESETS[tab.dataset.preset] || PRESETS.card;
      editor.value = preset;
      editor.dispatchEvent(new Event("input"));
    });
  });

  document.getElementById("copy-code-btn")?.addEventListener("click", () => {
    navigator.clipboard.writeText(editor.value).then(() => {
      const btn = document.getElementById("copy-code-btn");
      const orig = btn.textContent;
      btn.textContent = "✓ Copied!";
      btn.style.color = "#00ff88";
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.color = "";
      }, 1500);
    });
  });

  // Format button
  document.getElementById("format-code-btn")?.addEventListener("click", () => {
    let code = editor.value;
    let indent = 0;
    const lines = code.split("\n").map((line) => {
      line = line.trim();
      if (line.startsWith("</")) indent = Math.max(0, indent - 2);
      const out = " ".repeat(indent) + line;
      if (
        line.startsWith("<") &&
        !line.startsWith("</") &&
        !line.endsWith("/>") &&
        !line.startsWith("<!--")
      ) {
        indent += 2;
      }
      return out;
    });
    editor.value = lines.join("\n");
    editor.dispatchEvent(new Event("input"));
  });

  let isMobile = false;
  document
    .getElementById("toggle-preview-mode")
    ?.addEventListener("click", () => {
      isMobile = !isMobile;
      const wrapper = document.getElementById("preview-pane-wrapper");
      const label = document.getElementById("preview-mode-label");
      if (wrapper) {
        wrapper.style.maxWidth = isMobile ? "375px" : "100%";
        wrapper.style.margin = isMobile ? "1rem auto" : "0";
      }
      if (label) label.textContent = isMobile ? "mobile" : "desktop";
    });
}
