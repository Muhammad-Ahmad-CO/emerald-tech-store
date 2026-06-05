export function SiteFooter() {
  const cols = [
    { t: "Shop", l: ["Audio", "Wearables", "Compute", "Mobile", "Spatial"] },
    { t: "Company", l: ["About", "Journal", "Careers", "Press", "Sustainability"] },
    { t: "Help", l: ["Support", "Shipping", "Returns", "Warranty", "Contact"] },
  ];
  return (
    <footer className="border-t border-border bg-secondary/30 px-6 pb-10 pt-20 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">
          <div className="col-span-2">
            <div className="font-display text-2xl font-bold tracking-[0.3em]">
              VOLT<span className="text-neon">/</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Premium consumer tech, designed in Stockholm. Built for the people who push.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="mb-5 text-xs uppercase tracking-widest text-neon">{c.t}</div>
              <ul className="space-y-3">
                {c.l.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/70 transition hover:text-neon">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Volt Industries. All circuits reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neon">Privacy</a>
            <a href="#" className="hover:text-neon">Terms</a>
            <a href="#" className="hover:text-neon">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
