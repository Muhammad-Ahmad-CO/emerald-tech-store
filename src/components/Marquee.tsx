export function Marquee() {
  const items = ["Free shipping over $200", "★", "2-year warranty", "★", "30-day returns", "★", "Carbon neutral", "★", "Built to last", "★"];
  return (
    <div className="border-y border-border bg-background py-5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className={`font-display mx-8 text-xl uppercase tracking-widest ${t === "★" ? "text-neon" : "text-foreground/70"}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
