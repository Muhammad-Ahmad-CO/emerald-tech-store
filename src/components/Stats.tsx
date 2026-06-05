import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export function Stats() {
  const items = [
    { v: 250000, s: "+", label: "Devices shipped" },
    { v: 98, s: "%", label: "5-star reviews" },
    { v: 120, s: "+", label: "Countries served" },
    { v: 24, s: "/7", label: "Human support" },
  ];
  return (
    <section className="relative border-y border-border bg-secondary/30 px-6 py-24 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-10 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none text-glow text-foreground">
              <Counter to={it.v} suffix={it.s} />
            </div>
            <div className="mt-3 h-px w-16 bg-neon shadow-[0_0_10px_#4ade80]" />
            <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
