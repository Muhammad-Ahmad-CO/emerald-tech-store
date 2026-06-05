import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [p, setP] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      setP(h > 0 ? y / h : 0);
      setShow(y > 400);
    };
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const c = 2 * Math.PI * 22;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-card/80 backdrop-blur transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_#4ade80] ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="22" fill="none" stroke="oklch(1 0 0 / 0.1)" strokeWidth="2" />
        <circle
          cx="25"
          cy="25"
          r="22"
          fill="none"
          stroke="oklch(0.82 0.25 145)"
          strokeWidth="2"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - p)}
          strokeLinecap="round"
        />
      </svg>
      <ArrowUp className="h-5 w-5 text-neon" />
    </button>
  );
}
