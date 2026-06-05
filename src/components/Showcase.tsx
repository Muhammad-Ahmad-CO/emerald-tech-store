import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import laptop from "@/assets/product-laptop.jpg";

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]);

  return (
    <section ref={ref} id="collections" className="relative overflow-hidden px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="font-mono mb-3 text-xs uppercase tracking-widest text-neon">03 · Cinema mode</div>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05]">
            A canvas for <span className="gradient-text">your craft.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            14-inch Liquid display. Studio-grade color. Silent thermal architecture. Designed to disappear so your work won't.
          </p>
        </div>

        <motion.div
          style={{ rotateX: rotate, scale, transformPerspective: 1400 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-neon/30 neon-glow">
            <img
              src={laptop}
              alt="Vector Book Air laptop"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -inset-12 -z-10 rounded-full bg-neon/10 blur-[120px]" />
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            ["M-class", "Silicon"],
            ["18 hrs", "Battery"],
            ["1.1 kg", "Featherweight"],
          ].map(([k, v]) => (
            <div key={k} className="text-center">
              <div className="font-display text-2xl text-neon">{k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
