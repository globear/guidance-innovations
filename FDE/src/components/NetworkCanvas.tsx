import { useEffect, useRef } from "react";
import { reducedMotion } from "../motion";

const SOURCES = ["ERP", "EXCEL", "LINE OA", "WECHAT", "GPS", "POS", "ACCOUNTING", "EMAIL"];
const OUTPUTS = ["COMMAND VIEW", "AI AGENT", "ALERTS"];

type Pt = { x: number; y: number };
type Particle = { path: number; t: number; speed: number; out: boolean };

/** Hero visual: scattered business data sources stream into one core, then out to decisions. */
export default function NetworkCanvas({ coreLabel }: { coreLabel: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const still = reducedMotion();
    let w = 0, h = 0, dpr = 1, raf = 0;
    let mouse: Pt = { x: 0.5, y: 0.5 };
    let src: Pt[] = [], out: Pt[] = [], core: Pt = { x: 0, y: 0 };
    let dust: { x: number; y: number; z: number }[] = [];
    let ring = 1, fontPx = 10;
    const particles: Particle[] = [];

    const layout = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const mobile = w < 760;
      let top = h * 0.17, bottom = h * 0.5;
      if (mobile) {
        // Fill the space between the status line and the headline, so there is no dead gap.
        const hero = canvas.parentElement!;
        const status = hero.querySelector<HTMLElement>(".hero-status");
        const text = hero.querySelector<HTMLElement>(".wrap");
        top = (status ? status.offsetTop + status.offsetHeight : 0) + 48;
        // Never let the source labels run into the headline; squeeze them on short phones instead.
        bottom = Math.max(top + 140, (text ? text.offsetTop : h * 0.5) - 32);
      }
      const left = w * (mobile ? 0.07 : 0.08);
      const right = w * (mobile ? 0.93 : 0.9);
      ring = mobile ? Math.min(1.6, Math.max(1, (bottom - top) / 320)) : 1;
      fontPx = mobile && w > 420 ? 11 : 10;
      core = { x: mobile ? w * 0.5 : w * 0.56, y: (top + bottom) / 2 };
      src = SOURCES.map((_, i) => ({ x: left + (i % 2) * (mobile ? 0 : w * 0.06), y: top + (i / (SOURCES.length - 1)) * (bottom - top) }));
      out = OUTPUTS.map((_, i) => ({ x: right, y: core.y + (i - 1) * (bottom - top) * 0.32 }));
      dust = Array.from({ length: mobile ? 50 : 110 }, () => ({ x: Math.random() * w, y: Math.random() * h, z: Math.random() }));
    };

    const bez = (a: Pt, b: Pt, t: number, bend: number): Pt => {
      const c = { x: (a.x + b.x) / 2, y: a.y + (b.y - a.y) * bend };
      const u = 1 - t;
      return { x: u * u * a.x + 2 * u * t * c.x + t * t * b.x, y: u * u * a.y + 2 * u * t * c.y + t * t * b.y };
    };

    const spawn = () => {
      const isOut = Math.random() < 0.3;
      particles.push({ path: Math.floor(Math.random() * (isOut ? OUTPUTS.length : SOURCES.length)), t: 0, speed: 0.0035 + Math.random() * 0.004, out: isOut });
    };

    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#ff5a1f";
    let time = 0;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);
      const mx = (mouse.x - 0.5) * 18, my = (mouse.y - 0.5) * 18;

      // background dust with parallax
      dust.forEach((d) => {
        ctx.fillStyle = `rgba(239,238,233,${0.05 + d.z * 0.12})`;
        ctx.fillRect(d.x + mx * d.z, d.y + my * d.z, 1.2, 1.2);
      });

      ctx.lineWidth = 1;
      ctx.font = `500 ${fontPx}px 'IBM Plex Mono', 'IBM Plex Sans Thai', 'PingFang SC', 'Microsoft YaHei', monospace`;
      ctx.textBaseline = "middle";

      // input curves + labels
      src.forEach((p, i) => {
        ctx.strokeStyle = "rgba(239,238,233,0.11)";
        ctx.beginPath();
        for (let t = 0; t <= 1.001; t += 0.04) {
          const q = bez(p, core, t, 0.85);
          t === 0 ? ctx.moveTo(q.x, q.y) : ctx.lineTo(q.x, q.y);
        }
        ctx.stroke();
        ctx.fillStyle = "rgba(239,238,233,0.9)";
        ctx.fillRect(p.x - 3, p.y - 3, 6, 6);
        ctx.fillStyle = "rgba(239,238,233,0.55)";
        ctx.fillText(SOURCES[i], p.x + 12, p.y);
      });

      // output curves + labels
      out.forEach((p, i) => {
        ctx.strokeStyle = "rgba(255,90,31,0.28)";
        ctx.beginPath();
        for (let t = 0; t <= 1.001; t += 0.04) {
          const q = bez(core, p, t, 0.15);
          t === 0 ? ctx.moveTo(q.x, q.y) : ctx.lineTo(q.x, q.y);
        }
        ctx.stroke();
        ctx.strokeStyle = accent;
        ctx.strokeRect(p.x - 4, p.y - 4, 8, 8);
        ctx.fillStyle = "rgba(239,238,233,0.75)";
        const label = OUTPUTS[i];
        ctx.fillText(label, p.x - 14 - ctx.measureText(label).width, p.y - 14);
      });

      // core: rotating rings
      const pulse = 1 + Math.sin(time * 0.04) * 0.06;
      ctx.save();
      ctx.translate(core.x, core.y);
      for (let r = 0; r < 3; r++) {
        ctx.rotate(time * 0.002 * (r % 2 ? -1 : 1));
        ctx.strokeStyle = r === 0 ? accent : `rgba(239,238,233,${0.25 - r * 0.06})`;
        const s = (22 + r * 18) * pulse * ring;
        ctx.strokeRect(-s, -s, s * 2, s * 2);
      }
      ctx.restore();
      ctx.fillStyle = accent;
      ctx.fillRect(core.x - 4, core.y - 4, 8, 8);
      ctx.fillStyle = "rgba(239,238,233,0.6)";
      if (w >= 760) ctx.fillText(coreLabel, core.x - ctx.measureText(coreLabel).width / 2, core.y + 86);

      // particles
      if (!still && Math.random() < 0.55) spawn();
      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.t += pt.speed;
        if (pt.t >= 1) { particles.splice(i, 1); continue; }
        const q = pt.out ? bez(core, out[pt.path], pt.t, 0.15) : bez(src[pt.path], core, pt.t, 0.85);
        ctx.fillStyle = pt.out ? accent : `rgba(239,238,233,${0.4 + pt.t * 0.6})`;
        ctx.fillRect(q.x - 1.5, q.y - 1.5, 3, 3);
      }

      if (!still) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => { mouse = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }; };
    const onResize = () => { layout(); if (still) draw(); };
    // Re-layout when the canvas or the headline block changes size (fonts, language, rotation).
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);
    const textBlock = canvas.parentElement?.querySelector(".wrap");
    if (textBlock) ro.observe(textBlock);

    layout();
    if (still) for (let i = 0; i < 60; i++) spawn();
    draw();
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [coreLabel]);

  return <canvas ref={ref} aria-hidden="true" />;
}
