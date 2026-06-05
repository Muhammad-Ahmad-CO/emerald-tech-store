import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Particles } from "./Particles";
import headphones from "@/assets/hero-headphones.png";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 80, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), { stiffness: 80, damping: 14 });

  return (
    <section
      id="shop"
      className="relative min-h-screen overflow-hidden pt-32"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0">
        <Particles />
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.25 145 / 0.4), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 pb-20 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs uppercase tracking-widest text-neon"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
            New Drop · Vol. 04
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight"
          >
            <span className="block gradient-text">Experience</span>
            <span className="block">the <em className="not-italic text-neon text-glow">Future</em></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Engineered sound. Brutalist hardware. A new generation of devices built for those who push the edge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#tech"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-neon bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-neon transition hover:text-background"
            >
              <span className="absolute inset-0 -translate-x-full bg-neon transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Shop now</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#tech" className="text-sm uppercase tracking-wider text-foreground/60 hover:text-neon">
              Watch film →
            </a>
          </motion.div>

          <div className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
            {[
              ["48h", "Free ship"],
              ["2yr", "Warranty"],
              ["120+", "Countries"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-display text-2xl text-neon">{k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
            className="relative mx-auto aspect-square max-w-xl"
          >
            <div className="absolute inset-10 rounded-full bg-neon/20 blur-3xl animate-pulse-glow" />
            <motion.img
              src={headphones}
              alt="Premium wireless headphones"
              width={1024}
              height={1024}
              className="relative h-full w-full object-contain drop-shadow-[0_0_60px_rgba(74,222,128,0.4)]"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="absolute -left-4 top-1/4 hidden rounded border border-border bg-card/50 px-3 py-2 backdrop-blur lg:block">
            <div className="font-mono text-[10px] uppercase text-muted-foreground">Model</div>
            <div className="font-display text-sm">VLT-X1 Pro</div>
          </div>
          <div className="absolute -right-2 bottom-1/4 hidden rounded border border-neon/40 bg-card/50 px-3 py-2 backdrop-blur lg:block">
            <div className="font-mono text-[10px] uppercase text-neon">Price</div>
            <div className="font-display text-sm">$389</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
