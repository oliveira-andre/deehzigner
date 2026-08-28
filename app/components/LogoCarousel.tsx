"use client";

import { useEffect, useRef, useState } from "react";

const logos = [
  { initials: "CA", name: "Café Aurora", from: "#b45309", to: "#451a03" },
  { initials: "VF", name: "VitaFit", from: "#65a30d", to: "#14532d" },
  { initials: "BK", name: "Barber King", from: "#a16207", to: "#1c1917" },
  { initials: "NT", name: "NuvemTech", from: "#0ea5e9", to: "#1e3a8a" },
  { initials: "DM", name: "Doce Mel", from: "#ec4899", to: "#831843" },
  { initials: "EV", name: "EcoVerde", from: "#10b981", to: "#064e3b" },
  { initials: "BZ", name: "Boteco do Zé", from: "#ea580c", to: "#7f1d1d" },
  { initials: "SL", name: "Studio Lumi", from: "#8b5cf6", to: "#312e81" },
  { initials: "MP", name: "Mundo Pet", from: "#f59e0b", to: "#78350f" },
  { initials: "FD", name: "Flor & Décor", from: "#f43f5e", to: "#4c0519" },
  { initials: "AT", name: "Alta Trilha", from: "#14b8a6", to: "#134e4a" },
  { initials: "RD", name: "Rádio Onda", from: "#6366f1", to: "#1e1b4b" },
];

export function LogoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slide = track.children[0] as HTMLElement | undefined;
      if (!slide) return;
      const step = slide.offsetWidth + 24; /* gap-6 */
      setActive(Math.min(logos.length - 1, Math.round(track.scrollLeft / step)));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const slide = track?.children[i] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {logos.map((l) => (
          <figure
            key={l.name}
            className="flex w-48 shrink-0 snap-start flex-col items-center gap-4 rounded-2xl bg-zinc-950 p-6 shadow-lg shadow-black/50 ring-1 ring-white/10"
          >
            <span
              className="flex h-24 w-24 items-center justify-center rounded-full text-2xl font-bold text-white shadow-inner"
              style={{ backgroundImage: `linear-gradient(135deg, ${l.from}, ${l.to})` }}
            >
              {l.initials}
            </span>
            <figcaption className="text-sm font-semibold text-white">
              {l.name}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Dots — one per logo, showing how many there are */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
        {logos.map((l, i) => (
          <button
            key={l.name}
            type="button"
            aria-label={`Ir para o logotipo ${l.name}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === active
                ? "w-7 bg-sky-400"
                : "w-2.5 bg-white/30 hover:bg-sky-300"
            }`}
          />
        ))}
      </div>
      <p className="mt-3 text-center text-xs font-medium text-zinc-400">
        {active + 1} / {logos.length} logotipos
      </p>
    </div>
  );
}
