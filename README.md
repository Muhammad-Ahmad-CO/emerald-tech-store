# Volt — Premium Tech Store

> A brutalist, high-performance e-commerce landing page for premium tech products. Built with cutting-edge web technologies, advanced animations, and a neon-green aesthetic inspired by Awwwards design standards. Designed for users who push the edge.

[![Built with React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-black?style=for-the-badge)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Overview

**Volt** is a premium tech store interface that demonstrates modern web design principles through an immersive, interactive experience. The landing page combines brutalist design language with cutting-edge animation techniques to create a showcase for high-end consumer electronics.

Every interaction—from the preloader to parallax effects, scroll-linked animations, and 3D product transitions—is meticulously crafted to engage visitors and drive product discovery and conversion. The neon-green colour scheme against a dark background creates visual urgency and sophistication.

**Key Features:**
- 🎬 **Advanced Animations** — Framer Motion, parallax, scroll triggers, and 3D transformations
- 🎨 **Neon Brutalism** — High-contrast green on dark with glowing effects and grid backgrounds
- 📱 **Responsive Design** — Mobile-first layout using Tailwind CSS with fluid typography
- ⚡ **Performance** — Server-side rendering with TanStack Start, optimized assets, smooth 60fps interactions
- 🛒 **12-Product Showcase** — Curated tech catalogue with hover reveals and add-to-cart interactions
- 🎯 **Conversion Optimized** — Hero section, stats counter, testimonials, newsletter signup, and scroll-to-top button

## Technology Stack

- **React 19** with **TypeScript 5.8**
- **TanStack Start** for full-stack rendering and server integration
- **TanStack Router** for file-based routing and metadata
- **Vite 7** for blazingly fast development and builds
- **Tailwind CSS 4** with custom design system tokens
- **Framer Motion 12** for sophisticated motion and animation
- **Lucide React** for crisp, scalable SVG icons
- **Radix UI** primitives for accessible components
- **Bun** for package management and lockfile

## Design System

### Colour Palette

The neon-green theme is defined in `src/styles.css` using modern OKLCH colour space:

```typescript
--neon: oklch(0.82 0.25 145);           // Primary accent green
--neon-dark: oklch(0.7 0.24 145);       // Hover, reduced glow
--neon-bright: oklch(0.9 0.3 140);      // Highlights, maximum impact
--background: oklch(0.08 0 0);          // Deep black
--card: oklch(0.12 0 0);                // Slightly lighter blacks
--foreground: oklch(0.98 0 0);          // Off-white text
```

All animations, borders, shadows, and glows use these tokens to maintain visual cohesion.

### Typography

- **Display:** `Syne` and `Space Grotesk` — bold, wide-tracked headings
- **Body:** `Inter` — clean, readable paragraph and UI text
- **Mono:** `Space Grotesk` — price tags, specs, data

### Key Utilities

Custom Tailwind utilities defined in `styles.css`:

- `text-glow` — text-shadow with green radiance
- `neon-border` — 1px border with glowing shadow inset
- `neon-glow` — intense drop shadow for cards
- `grid-bg` — subtle CSS grid background pattern
- `gradient-text` — white-to-green gradient text effect
- `animate-marquee` — looping scrolling text
- `animate-pulse-glow` — pulsing neon box-shadow

## Page Structure

```text
src/
├── assets/                  Product images (12 products) and hero headphones
├── components/
│   ├── Preloader.tsx        Loading screen with animated progress bar
│   ├── CustomCursor.tsx     Hidden cursor with neon trailing dots
│   ├── SiteHeader.tsx       Sticky nav with logo, links, cart, search
│   ├── Hero.tsx             3D headphones, text reveal, CTA, parallax
│   ├── Marquee.tsx          Looping text animation
│   ├── ProductGrid.tsx      12-product catalogue with 3D flip on hover
│   ├── Stats.tsx            Counting stats with scroll trigger
│   ├── Showcase.tsx         Tilted laptop screen with scroll-synced video
│   ├── Testimonials.tsx     Cards with mouse-following radial glow
│   ├── Newsletter.tsx       Email signup with animated border underline
│   ├── SiteFooter.tsx       Footer with social links and copyright
│   ├── ScrollToTop.tsx      Fixed button with progress ring
│   ├── Particles.tsx        Canvas-based floating particles
│   ├── FlipText.tsx         Staggered character reveal animation
│   └── ui/                  Radix + shadcn UI primitives
├── routes/
│   ├── __root.tsx           App shell, metadata, error boundaries
│   ├── index.tsx            Home page composition
│   └── README.md            TanStack file-based routing conventions
├── lib/                     Error capture, Lovable reporting, utilities
├── styles.css               Global styles, design tokens, animations
├── router.tsx               Router with QueryClient context
├── server.ts                Server entry (TanStack Start)
└── start.ts                 CSRF and error middleware

```

## Component Highlights

### Hero.tsx

The hero section features:
- **3D Parallax Model** — Headphones image responds to mouse position with `useMotionValue` and `useSpring`
- **Animated Text** — "Experience the Future" with `FlipText` character-by-character reveal
- **Floating Particles** — Canvas-based particles that attract toward mouse cursor
- **CTA Button** — Neon border, hover fill animation with ripple effect
- **Specs Badge** — Price and model info with glassmorphism

### ProductGrid.tsx

12 curated products displayed in a 3-column grid:
- **Lazy Loading** — Images load on scroll with `whileInView`
- **Hover States** — Image zoom, specs overlay slide up, button glow
- **Price Display** — Each product shows name, price in neon green, specs
- **Add to Cart** — Plus button with neon border and glow shadow
- **Responsive** — Adapts from 1 column mobile to 3 columns desktop

### Stats.tsx

Scroll-triggered counting animation:
- **IntersectionObserver** — Starts animation when section enters viewport
- **Counter Logic** — Uses GSAP or Framer Motion with easeOutExpo timing
- **Animated Line** — Green glow underline beneath each stat
- **Real Numbers** — "48+ Countries", "2yr Warranty", "120+ Products"

### Showcase.tsx

Tilted 3D laptop screen:
- **Scroll-Linked Video** — Video playback scrubbed by scroll position
- **Perspective Transform** — 3D tilt and rotation on mouse movement
- **Neon Border** — Box shadow and border-glow effect

### Testimonials.tsx

Customer review cards:
- **Mouse-Following Glow** — Radial gradient follows cursor inside card
- **CSS Custom Properties** — `--mouse-x` and `--mouse-y` updated on mousemove
- **Glassmorphism** — Subtle backdrop blur and semi-transparent background

### Newsletter.tsx

Email signup form:
- **Animated Underline** — Bottom border expands from centre on focus
- **Ripple Effect** — Submit button creates expanding circle on click
- **Input Styling** — Neon green focus state with glow

## Interactions & Animations

### Preloader

- Full-screen overlay with animated progress bar
- Progress fills from 0–100% over ~2 seconds with random increments
- Fades out once progress reaches 100%
- Branded with "VOLT/STORE" logo

### Custom Cursor

- Hidden default cursor
- Neon dot (20px) follows mouse with slight lag
- Larger ring (40px) with lower opacity trails behind
- Mix-blend-mode creates interactive effect

### Scroll Behaviors

- **Smooth Scroll** — Native `scroll-behavior: smooth` on HTML
- **Scroll Reveals** — Sections fade up as they enter viewport using Framer Motion
- **Parallax** — Background elements move slower than foreground (0.5 multiplier)
- **Fixed Elements** — Header becomes opaque after 30px scroll, nav underlines animate on hover

### Hover Effects

- **Product Cards** — Image zooms 1.1x, specs overlay slides up, button glows
- **Buttons** — Background fills from left to right, text colour transitions
- **Nav Links** — Underline animates from left to right on hover
- **Icons** — Colour transitions to neon green with glow shadow

## Setup & Installation

### Prerequisites

- Node.js 18+ and npm, or Bun
- Modern browser with ES2020+ support

### Install Dependencies

```bash
git clone https://github.com/Muhammad-Ahmad-CO/emerald-tech-store.git
cd emerald-tech-store
npm install
# or
bun install
```

### Development Server

```bash
npm run dev
```

Vite will start a local server (typically `http://localhost:5173`). Hot module replacement (HMR) enables instant updates as you save files.

### Production Build

```bash
npm run build
```

Generates optimized, minified bundles in the `dist/` directory. Suitable for deployment to Vercel, Netlify, or any Node.js host.

### Preview Build Locally

```bash
npm run preview
```

Serves the production build locally to verify optimization and performance.

### Quality Checks

```bash
npm run lint          # Run ESLint
npm run format        # Format with Prettier
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production (Cloudflare Workers) |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Serve production build locally |
| `npm run lint` | Check code quality with ESLint |
| `npm run format` | Format code with Prettier |

## Customization

### Change Product Catalogue

Edit the `products` array in `src/components/ProductGrid.tsx`:

```typescript
const products = [
  { name: "...", price: "$...", tag: "...", img: ..., specs: "..." },
  // ... add more products
];
```

Add new images to `src/assets/product-*.jpg` and import them.

### Update Colours

Modify the OKLCH tokens in `src/styles.css`:

```css
:root {
  --neon: oklch(0.82 0.25 145);           /* Change hue (145) or lightness (0.82) */
  --neon-dark: oklch(0.7 0.24 145);
  --neon-bright: oklch(0.9 0.3 140);
}
```

All components automatically inherit the new palette.

### Adjust Typography

Update font imports and Tailwind theme in `src/styles.css`:

```css
@theme inline {
  --font-display: "Your Font", sans-serif;
  --font-sans: "Another Font", system-ui, sans-serif;
}
```

### Add New Sections

1. Create a new component in `src/components/YourSection.tsx`
2. Import it in `src/routes/index.tsx`
3. Add it to the JSX within the `<main>` tag

Example:

```tsx
// src/components/YourSection.tsx
export function YourSection() {
  return <section className="px-6 py-32">...</section>;
}

// src/routes/index.tsx
import { YourSection } from "@/components/YourSection";

function Index() {
  return (
    <>
      {/* ... existing components ... */}
      <YourSection />
      {/* ... */}
    </>
  );
}
```

### Modify Animations

Framer Motion animations are defined inline in components using `motion.*` elements and the `animate`, `initial`, `whileHover`, and `whileInView` props. Adjust:

- `duration` — Animation length in seconds
- `delay` — Stagger multiple elements
- `easing` — Choose `easeInOut`, `easeIn`, `easeOut`, or custom cubic-bezier
- `spring` — Use `type: "spring"` with `stiffness` and `damping`

Example:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
>
  Content
</motion.div>
```

## Performance Optimization

- **Image Optimization** — Use next-gen formats (WebP) and lazy loading
- **Code Splitting** — TanStack Router automatically code-splits routes
- **Caching Headers** — Configure Cloudflare Worker headers for asset caching
- **60fps Animations** — Prefer `transform` and `opacity` over layout-changing properties
- **Reduced Motion** — Respect `prefers-reduced-motion` media query for accessibility

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All evergreen browsers with ES2020+ and CSS Grid support.

## Lovable Integration

This project is built and maintained with [Lovable](https://lovable.dev). The `.lovable/project.json` file contains metadata for the project. Changes synced through Lovable's editor are committed to this repository.

To continue development:
1. Visit [Lovable Editor](https://lovable.dev)
2. Import this repository or open an existing project
3. Make changes in the visual editor
4. Changes auto-commit to the `main` branch

## Deployment

### Vercel

```bash
vercel deploy
```

Automatically detects TanStack Start and deploys with serverless functions.

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Cloudflare Workers

TanStack Start is preconfigured for Cloudflare. Deploy with:

```bash
npm run build
wrangler deploy
```

## License

This project is currently unlicensed. For distribution or reuse, please add an appropriate open-source or commercial license.

## Support & Contribution

For questions, issues, or feature requests, please open a GitHub issue or start a discussion. Pull requests are welcome.

---

**Built with ❤️ and cutting-edge web tech for users who push the edge.**
