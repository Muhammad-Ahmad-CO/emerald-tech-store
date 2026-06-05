import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { q: "The sound staging is unreal. I retired three other pairs the day this arrived.", a: "Mira K.", r: "Composer, Berlin" },
  { q: "Build feels like a precision tool. Everything snaps. Nothing creaks.", a: "Jonas P.", r: "Industrial designer" },
  { q: "Battery genuinely lasts the workweek. The software is the best part.", a: "Adaeze O.", r: "Product lead" },
];

function Card({ q, a, r }: { q: string; a: string; r: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current!.getBoundingClientRect();
        ref.current!.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        ref.current!.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
      style={{
        backgroundImage:
          "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), oklch(0.82 0.25 145 / 0.15), transparent 60%)",
      }}
      data-cursor-hover
    >
      <Quote className="mb-6 h-8 w-8 text-neon" />
      <p className="font-display text-xl leading-snug">"{q}"</p>
      <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon to-neon-dark" />
        <div>
          <div className="font-semibold">{a}</div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{r}</div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="journal" className="px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono mb-3 text-xs uppercase tracking-widest text-neon">04 · Word on the wire</div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none">
              Loved by people <br />who <span className="gradient-text">care.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.a}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card {...it} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
