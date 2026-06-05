import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18);
      setProgress(p);
      if (p >= 100) {
        clearInterval(id);
        setTimeout(() => setLoaded(true), 300);
      }
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-display mb-8 text-2xl tracking-[0.4em] text-foreground/80">
            VOLT<span className="text-neon">/</span>STORE
          </div>
          <div className="h-[2px] w-64 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-neon"
              style={{
                width: `${progress}%`,
                boxShadow: "0 0 12px #4ade80",
              }}
            />
          </div>
          <div className="font-mono mt-3 text-xs text-muted-foreground">
            {Math.floor(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
