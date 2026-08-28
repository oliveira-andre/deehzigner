"use client";

import { useEffect } from "react";

/**
 * Phase-aligns the striped backgrounds of consecutive sections.
 *
 * Adjacent sections use mirrored stripe angles (115° / 65°). Whether their
 * streaks meet exactly at the seam (forming clean chevrons) depends on each
 * section's height. This component measures the sections and shifts each
 * background vertically so the streak tips always land on the seams,
 * whatever the content height or viewport.
 *
 * Both gradients share a 560px period along their axis; a vertical shift of
 * V = 560 / cos(65°) px moves the pattern by exactly one period.
 */
export function StreaksAligner() {
  useEffect(() => {
    const V = 560 / Math.cos((65 * Math.PI) / 180);

    const els = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>(".bg-streaks, .bg-streaks-flip")
      );

    const mod = (n: number, m: number) => ((n % m) + m) % m;

    const align = () => {
      // phi: required pattern phase (in vertical-equivalent px) at the top
      // edge of the next section, so its streaks continue/mirror the ones
      // ending at the previous section's bottom edge.
      let phi = 0;
      for (const el of els()) {
        const h = el.offsetHeight;
        const boxH = Math.ceil(h + V + 40);
        const flip = el.classList.contains("bg-streaks-flip");
        // The 115° gradient anchors its 0px stop at the image's top-left
        // corner; the mirrored 65° gradient anchors at the bottom-left, so
        // its phase also depends on the image height (boxH).
        const delta = flip ? mod(boxH - phi, V) : mod(phi, V);
        el.style.backgroundRepeat = "no-repeat";
        el.style.backgroundSize = `100% ${boxH}px`;
        el.style.backgroundPosition = `0px ${-delta}px`;
        phi = mod(flip ? boxH - (delta + h) : delta + h, V);
      }
    };

    align();
    window.addEventListener("resize", align);
    const ro = new ResizeObserver(align);
    els().forEach((el) => ro.observe(el));
    return () => {
      window.removeEventListener("resize", align);
      ro.disconnect();
    };
  }, []);

  return null;
}
