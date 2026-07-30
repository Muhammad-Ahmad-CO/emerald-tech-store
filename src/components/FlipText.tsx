import { motion } from "framer-motion";

export function FlipText({
  text,
  className,
  charClassName,
}: {
  text: string;
  className?: string;
  charClassName?: string;
}) {
  return (
    <span
      className={`inline-flex align-bottom ${className ?? ""}`}
      style={{ perspective: 600, paddingBottom: "0.08em", paddingLeft: "0.04em", paddingRight: "0.04em" }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className={`inline-block origin-bottom ${charClassName ?? ""}`}
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
