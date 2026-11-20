import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

// "?motion=on" forces animations even when the OS asks for reduced motion (for previewing).
const forceMotion = (() => {
  try {
    if (new URLSearchParams(location.search).get("motion") === "on") sessionStorage.setItem("motion", "on");
    return sessionStorage.getItem("motion") === "on";
  } catch { return false; }
})();
if (forceMotion) document.documentElement.classList.add("force-motion");

export const reducedMotion = () =>
  !forceMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export let lenis: Lenis | null = null;

export function initSmoothScroll() {
  if (reducedMotion() || lenis) return;
  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/** Split text into words. Thai and Chinese have no spaces between words, so use the browser's word segmenter. */
function words(text: string, lang: string): string[] {
  const Seg = (Intl as any).Segmenter;
  if ((lang === "th" || lang.startsWith("zh")) && Seg) {
    return Array.from(new Seg(lang, { granularity: "word" }).segment(text), (s: any) => s.segment as string);
  }
  return text.split(/(\s+)/);
}

/** Wrap every word of an element in a masked span so it can rise into view. */
function splitWords(el: HTMLElement, lang: string) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = "1";
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = words(child.textContent || "", lang);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) return frag.appendChild(document.createTextNode(" "));
          const mask = document.createElement("span");
          mask.className = "line-mask";
          mask.style.display = "inline-block";
          mask.style.verticalAlign = "top";
          const inner = document.createElement("span");
          inner.textContent = p;
          mask.appendChild(inner);
          frag.appendChild(mask);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && (child as HTMLElement).tagName !== "BR") {
        walk(child);
      }
    });
  };
  walk(el);
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_-#";
export function scramble(el: HTMLElement, duration = 0.9) {
  const final = el.dataset.text || el.textContent || "";
  el.dataset.text = final;
  const obj = { p: 0 };
  return gsap.to(obj, {
    p: 1,
    duration,
    ease: "none",
    onUpdate: () => {
      const n = Math.floor(obj.p * final.length);
      el.textContent =
        final.slice(0, n) +
        final
          .slice(n)
          .replace(/[^\s]/g, () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);
    },
    onComplete: () => { el.textContent = final; },
  });
}

/** Scans the current page for data-* motion hooks and wires them to ScrollTrigger. */
export function usePageMotion(key: string, lang: string) {
  useLayoutEffect(() => {
    if (reducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        splitWords(el, lang);
        const words = el.querySelectorAll(".line-mask > span");
        const immediate = el.dataset.split === "now";
        gsap.from(words, {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.04,
          delay: immediate ? 0.25 : 0,
          scrollTrigger: immediate ? undefined : { trigger: el, start: "top 88%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, {
          y: 40, autoAlpha: 0, duration: 1.1, ease: "power3.out",
          delay: Number(el.dataset.fade) || 0,
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.from(el.children, {
          y: 50, autoAlpha: 0, duration: 1, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-scramble]").forEach((el) => {
        ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: () => scramble(el) });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 1.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)); },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: Number(el.dataset.parallax) * -100, ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-bar]").forEach((el) => {
        gsap.fromTo(el, { width: "0%" }, {
          width: el.dataset.bar + "%", duration: 1.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 95%" },
        });
      });

      gsap.utils.toArray<SVGPathElement>("[data-draw]").forEach((el) => {
        const len = el.getTotalLength();
        gsap.fromTo(el, { strokeDasharray: len, strokeDashoffset: len }, {
          strokeDashoffset: 0, duration: 2, ease: "power2.inOut",
          scrollTrigger: { trigger: el, start: "top 95%" },
        });
      });
    });
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    return () => { clearTimeout(t); ctx.revert(); };
  }, [key]);
}
