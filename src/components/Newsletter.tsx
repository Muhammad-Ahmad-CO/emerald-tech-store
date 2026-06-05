import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section id="support" className="relative overflow-hidden px-6 py-40 lg:px-12">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.82 0.25 145 / 0.25), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="font-mono mb-4 text-xs uppercase tracking-widest text-neon">05 · The signal</div>
        <h2 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95]">
          Stay <span className="gradient-text">ahead.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          Early drops, deep dives, no spam. Our weekly dispatch for people who get excited about silicon.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mx-auto mt-12 flex max-w-xl items-center gap-3 border-b border-border pb-3 focus-within:border-neon transition-colors"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@frequency.io"
            className="flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground/60"
          />
          <button
            type="submit"
            className="group flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold uppercase tracking-wider text-background transition hover:bg-neon-bright hover:shadow-[0_0_25px_#4ade80]"
          >
            {sent ? "Tuned in" : "Subscribe"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}
