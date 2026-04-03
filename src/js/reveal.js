
export function initReveal() {
  const targets = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .clip-reveal",
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;

          const delay = el.dataset.delay
            ? parseFloat(el.dataset.delay) * 1000
            : 0;

          setTimeout(() => {
            el.classList.add("visible");
          }, delay);

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    },
  );

  targets.forEach((el, i) => {
    if (!el.dataset.delay && el.parentElement?.dataset?.stagger) {
      const siblings = [...el.parentElement.children].filter(
        (c) =>
          c.classList.contains("reveal") ||
          c.classList.contains("reveal-left") ||
          c.classList.contains("reveal-right"),
      );
      const idx = siblings.indexOf(el);
      if (idx > 0) el.dataset.delay = (idx * 0.12).toFixed(2);
    }
    observer.observe(el);
  });
}
