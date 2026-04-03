export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#020408",
          deep: "#050d1a",
          navy: "#071428",
          cyan: "#00f5ff",
          "cyan-dim": "#00c8d4",
          magenta: "#ff00aa",
          violet: "#7c3aed",
          "violet-bright": "#a855f7",
          green: "#00ff88",
          amber: "#ffaa00",
          red: "#ff2244",
          white: "#e8f4ff",
        },
      },
      fontFamily: {
        display: ['"Orbitron"', "monospace"],
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        body: ['"Rajdhani"', "sans-serif"],
      },
      animation: {
        glitch: "glitch 2s infinite",
        "glitch-fast": "glitch 0.5s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        scan: "scan 3s linear infinite",
        "type-cursor": "typeCursor 1s step-end infinite",
        "border-spin": "borderSpin 3s linear infinite",
        "matrix-fall": "matrixFall 2s linear infinite",
        "neon-flicker": "neonFlicker 3s ease-in-out infinite",
        "rotate-3d": "rotate3d 8s linear infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)", filter: "none" },
          "20%": {
            transform: "translate(-2px, 2px)",
            filter: "hue-rotate(90deg)",
          },
          "40%": {
            transform: "translate(2px, -2px)",
            filter: "hue-rotate(-90deg)",
          },
          "60%": {
            transform: "translate(-1px, 1px)",
            filter: "hue-rotate(45deg)",
          },
          "80%": { transform: "translate(1px, -1px)", filter: "none" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(1deg)" },
          "66%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 20px #00f5ff",
          },
          "50%": {
            boxShadow: "0 0 10px #00f5ff, 0 0 30px #00f5ff, 0 0 60px #00f5ff",
          },
        },
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
        typeCursor: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        borderSpin: {
          "0%": { "--border-angle": "0deg" },
          "100%": { "--border-angle": "360deg" },
        },
        matrixFall: {
          "0%": { transform: "translateY(-100%)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        neonFlicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%": { opacity: "0.4" },
          "97%": { opacity: "1" },
          "98%": { opacity: "0.2" },
          "99%": { opacity: "1" },
        },
        rotate3d: {
          "0%": {
            transform: "perspective(1000px) rotateY(0deg) rotateX(10deg)",
          },
          "100%": {
            transform: "perspective(1000px) rotateY(360deg) rotateX(10deg)",
          },
        },
        slideUp: {
          from: { transform: "translateY(40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          from: { transform: "translateX(-60px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.8)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon-cyan": "0 0 5px #00f5ff, 0 0 20px #00f5ff40, 0 0 40px #00f5ff20",
        "neon-magenta":
          "0 0 5px #ff00aa, 0 0 20px #ff00aa40, 0 0 40px #ff00aa20",
        "neon-violet":
          "0 0 5px #a855f7, 0 0 20px #a855f740, 0 0 40px #a855f720",
        glass:
          "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass-hover":
          "0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
        deep: "0 25px 50px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
