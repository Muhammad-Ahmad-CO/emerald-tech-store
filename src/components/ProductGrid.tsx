import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import watch from "@/assets/product-watch.jpg";
import earbuds from "@/assets/product-earbuds.jpg";
import keyboard from "@/assets/product-keyboard.jpg";
import phone from "@/assets/product-phone.jpg";
import laptop from "@/assets/product-laptop.jpg";
import vr from "@/assets/product-vr.jpg";
import headphones from "@/assets/product-headphones.jpg";
import drone from "@/assets/product-drone.jpg";
import speaker from "@/assets/product-speaker.jpg";
import mouse from "@/assets/product-mouse.jpg";
import tablet from "@/assets/product-tablet.jpg";
import powerbank from "@/assets/product-powerbank.jpg";

const products = [
  { name: "Pulse Watch S2", price: "$299", tag: "Wearable", img: watch, specs: "AMOLED · 14-day battery · GPS" },
  { name: "Echo Buds Pro", price: "$179", tag: "Audio", img: earbuds, specs: "ANC · Spatial · 36h case" },
  { name: "Mech K1 Edge", price: "$229", tag: "Desk", img: keyboard, specs: "Hot-swap · RGB · Wireless" },
  { name: "Phantom 15", price: "$899", tag: "Mobile", img: phone, specs: "6.7\" OLED · 200MP · 5G" },
  { name: "Vector Book Air", price: "$1,499", tag: "Compute", img: laptop, specs: "M-class · 18h · 14\" Liquid" },
  { name: "Halo VR One", price: "$549", tag: "Spatial", img: vr, specs: "4K/eye · 120Hz · Untethered" },
  { name: "Sonic Max ANC", price: "$399", tag: "Audio", img: headphones, specs: "Hi-Res · 60h · Adaptive ANC" },
  { name: "Skyline D3", price: "$1,199", tag: "Aerial", img: drone, specs: "8K gimbal · 46min · Obstacle AI" },
  { name: "Orbit Sound 360", price: "$249", tag: "Audio", img: speaker, specs: "360° · Room-tune · Multi-room" },
  { name: "Glide Pro X", price: "$129", tag: "Desk", img: mouse, specs: "26K DPI · 8kHz · 90h" },
  { name: "Slate Tab 11", price: "$749", tag: "Compute", img: tablet, specs: "11\" 120Hz · Stylus · 12h" },
  { name: "Cell Core 20K", price: "$89", tag: "Power", img: powerbank, specs: "20,000mAh · 140W · GaN" },
];


export function ProductGrid() {
  return (
    <section id="tech" className="relative px-6 py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono mb-3 text-xs uppercase tracking-widest text-neon">02 · Catalogue</div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none">
              Built for the <span className="gradient-text">edge</span>.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Six categories. Zero filler. Each device hand-picked, stress-tested and obsessed over.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_30px_60px_-20px_oklch(0.82_0.25_145/0.4)]"
              data-cursor-hover
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background via-background/90 to-transparent p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="font-mono mb-2 text-[10px] uppercase tracking-widest text-neon">Specs</div>
                  <p className="text-sm text-foreground/80">{p.specs}</p>
                </div>
                <span className="font-mono absolute left-4 top-4 rounded-full border border-border bg-background/60 px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                  <div className="font-mono mt-1 text-sm text-neon">{p.price}</div>
                </div>
                <button
                  aria-label={`Add ${p.name} to cart`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-neon/40 text-neon transition hover:bg-neon hover:text-background hover:shadow-[0_0_20px_#4ade80]"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
