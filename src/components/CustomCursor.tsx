import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
          transition: "width 0.2s, height 0.2s",
        }}
      >
        <div
          className="rounded-full bg-neon"
          style={{
            width: hover ? 18 : 12,
            height: hover ? 18 : 12,
            mixBlendMode: "difference",
          }}
        />
      </div>
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${pos.x - (hover ? 32 : 20)}px, ${pos.y - (hover ? 32 : 20)}px)`,
        }}
      >
        <div
          className="rounded-full border border-neon/60"
          style={{
            width: hover ? 64 : 40,
            height: hover ? 64 : 40,
            boxShadow: "0 0 20px oklch(0.82 0.25 145 / 0.4)",
          }}
        />
      </div>
    </>
  );
}
