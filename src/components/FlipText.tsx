import { motion } from "framer-motion";

export function FlipText({ text, className }: { text: string; className?: string }) {
  return (
    <span
      className={`inline-flex flex-wrap align-bottom pl-[0.06em] pr-[0.06em] ${className ?? ""}`}
      style={{ perspective: 600, overflow: "visible", paddingBottom: "0.08em" }}
    >
      {text.split("").map((ch, i) => (

        <motion.span
          key={`${ch}-${i}`}
          className="inline-block origin-bottom"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ rotateX: 360 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          data-cursor-hover
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}
