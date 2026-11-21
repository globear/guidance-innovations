import { useEffect, useRef, useState, type KeyboardEvent } from "react";

type Opt = { value: string; label: string };

/** A dropdown drawn in the site's own style (the native one opens as a plain OS list).
 *  The chosen value is posted through a hidden input, so it works inside a normal <form>. */
export default function Select({ id, name, options, defaultValue }: { id: string; name: string; options: Opt[]; defaultValue: string }) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [hi, setHi] = useState(0); // highlighted option while the list is open
  const root = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  const show = () => { setHi(Math.max(0, options.indexOf(current))); setOpen(true); };
  const pick = (i: number) => { setValue(options[i].value); setOpen(false); };

  const onKey = (e: KeyboardEvent) => {
    const last = options.length - 1;
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) { e.preventDefault(); show(); }
      return;
    }
    if (e.key === "ArrowDown") { e.preventDefault(); setHi((h) => Math.min(last, h + 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setHi((h) => Math.max(0, h - 1)); }
    else if (e.key === "Home") { e.preventDefault(); setHi(0); }
    else if (e.key === "End") { e.preventDefault(); setHi(last); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(hi); }
    else if (e.key === "Escape" || e.key === "Tab") setOpen(false);
  };

  return (
    <div className={`select ${open ? "open" : ""}`} ref={root}>
      <input type="hidden" name={name} value={value} />
      <button
        id={id} type="button" className="select-btn" aria-haspopup="listbox" aria-expanded={open}
        aria-activedescendant={open ? `${id}-${hi}` : undefined}
        onClick={() => (open ? setOpen(false) : show())} onKeyDown={onKey}
      >
        <span>{current.label}</span>
        <svg viewBox="0 0 12 8" aria-hidden><path d="M1 1.5 6 6.5 11 1.5" /></svg>
      </button>
      {open && (
        <ul className="select-list" role="listbox" aria-labelledby={id} data-lenis-prevent>
          {options.map((o, i) => (
            <li
              key={o.value} id={`${id}-${i}`} role="option" aria-selected={o.value === value}
              className={i === hi ? "hi" : ""} onPointerEnter={() => setHi(i)} onPointerDown={(e) => { e.preventDefault(); pick(i); }}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
