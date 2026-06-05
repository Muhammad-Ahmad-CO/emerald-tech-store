import { useEffect, useState } from "react";
import { ShoppingBag, Search, Menu } from "lucide-react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = ["Shop", "Collections", "Tech", "Journal", "Support"];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/60 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#" className="font-display text-lg font-bold tracking-[0.3em]">
          VOLT<span className="text-neon">/</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="group relative text-sm font-medium uppercase tracking-wider text-foreground/70 transition hover:text-foreground"
            >
              {l}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <button className="hidden text-foreground/70 hover:text-neon md:block" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative text-foreground/70 hover:text-neon" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-neon shadow-[0_0_8px_#4ade80]" />
          </button>
          <button className="md:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
