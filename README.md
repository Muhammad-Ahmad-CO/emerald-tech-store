# Emerald Tech Showcase

Product Requirement Document (PRD)
Green Tech Store – Awwwards Style Landing Page
Replica of promo-tech-store.vercel.app/awwwards with Green Theme

1. Project Overview
Goal:
Build a visually stunning, highly interactive landing page for a premium tech store, identical in structure and animation to the referenced website but with the primary accent colour changed from orange to green. The design must follow a sleek, modern, “Awwwards-worthy” aesthetic with dark background, smooth scrolling, 3D product showcases, and rich micro‑interactions.

Theme Swap:
All instances of orange (#FF5500, #FF6B00, etc.) must be replaced with vibrant green tones. Suggested palette:

Primary Green: #00E676 (or #4ADE80)

Darker Green (hover/glow): #00C853

Neon Green (accents): #39FF14

Background Dark: #0A0A0A or #0C0C0C

Text White/Off‑white: #FFFFFF, #E0E0E0

Secondary Dark: #1A1A1A

All glow effects, borders, buttons, underlines, and scroll progress indicators should use the green palette.

2. Global Design System
2.1 Typography
Headings: Clash Display or Montserrat – bold, wide spacing.

Body: Inter or Manrope – clean, readable.

Special accents: Space Grotesk for price tags.

Font sizes scale with viewport, using clamp() values.

2.2 Spacing & Grid
12‑column grid, max‑width 1440px, consistent 80px section padding.

Cards and elements follow an 8px/16px modular scale.

2.3 Colours (Green Theme)
text
--bg-primary: #0A0A0A;
--bg-secondary: #111111;
--text-primary: #FFFFFF;
--text-secondary: #B0B0B0;
--accent-green: #00E676;
--accent-green-dark: #00C853;
--accent-green-glow: #39FF14;
--border-subtle: rgba(255,255,255,0.08);
--card-bg: #161616;
2.4 Iconography
Use Lucide or Phosphor icons, styled with green fills/strokes.

3. Page Sections & Layout (Top to Bottom)
3.1 Preloader / Loading Screen
Full‑screen black overlay with a glowing green progress bar or animated logo.

Fades out after all assets load.

3.2 Header / Navigation
Sticky, glass‑morphism navbar.

Logo on the left, menu links centre/right, cart icon with a green dot badge.

On scroll, background becomes more opaque (backdrop‑blur intensifies).

Green underline animation on hover for links (sliding from left).

3.3 Hero Section
Full‑viewport hero with a large 3D rotating product (headphones / phone / gadget).

Large heading “Experience the Future” with a gradient text effect (green‑to‑white).

CTA button (“Shop Now”) with green neon border, hover expand.

Mouse‑reactive parallax on the 3D model.

Floating particles (small green dots) that react to mouse movement.

3.4 Featured Products Carousel
Horizontal scrollable carousel with card tilt on hover.

Each card shows product image, name, price, and a “Add to Cart” icon.

Green glow border appears on hover.

Infinite loop or “drag to scroll” interaction.

3.5 Product Grid with 3D Hover
Three‑column grid of tech products.

Each card flips/reveals on hover (3D rotation on Y‑axis) to show backside with specs.

Background of card lifts and casts a green shadow.

Smooth spring animation on hover.

3.6 Animated Stats Counter
Green‑themed section with large numbers counting up when scrolled into view.

Glowing green line under each stat.

3.7 Video / Laptop Showcase
A tilted 3D laptop screen with a video playing inside.

Scrubbing the video as you scroll (scroll‑linked video playback).

Green neon border around the screen.

3.8 Testimonials / Reviews
Cards with a subtle green gradient border.

A green “glow” follows the mouse cursor inside the card.

3.9 Newsletter / CTA Section
Large centred text “Stay Ahead” with an input field that has an animated green underline.

Submit button with a green ripple effect.

3.10 Footer
Dark background, green‑highlighted links, social icons with green hover.

Scroll‑to‑top button with a green circular progress indicator.

4. Global Interactions & Animations (Detailed Prompts)
Every animation below is described as a developer/animator prompt so it can be implemented with GSAP, Framer Motion, or vanilla JS. Timing, easing, and trigger logic are specified.

4.1 Smooth Scrolling & Scroll‑Linked Effects
Prompt:

Implement smooth scroll with Lenis or native scroll-behavior: smooth. All scroll‑triggered animations must use GSAP ScrollTrigger. Enable scroller proxy for Lenis.

Easing: easeInOutCubic for scroll‑triggered reveals.

Parallax multipliers: 0.5 for background elements, 0.2 for foreground.

4.2 Preloader Animation
Prompt:

Preloader: a full‑screen #0A0A0A overlay with a centred progress bar (height: 2px, width: 0% → 100%). The bar colour is #00E676 with a filter: drop-shadow(0 0 8px #39FF14). Once the page loads, animate bar to 100%, then fade out overlay (opacity 1 → 0, duration 0.5s, delay 0.2s) and remove from DOM.

4.3 Cursor Effect
Prompt:

Custom cursor: hide default, create a .cursor div (diameter 20px, background #00E676 with mix-blend-mode: difference), and a larger .cursor-follower (40px, border 1px #00E676, opacity 0.5). Both follow mouse with transform: translate() using GSAP quickTo for performance. On hover over interactive elements (buttons, cards, links), scale cursor to 1.5x and follower to 1.8x, change background to #39FF14 with blur.

4.4 Header Interactions
Prompt:

Sticky header: Apply backdrop-filter: blur(10px) after scrolling more than 50px. Use a IntersectionObserver or ScrollTrigger to toggle class header-scrolled. On menu link hover, animate a green underline (width from 0% to 100%) using ::after pseudo‑element with transition: width 0.3s cubic-bezier(0.25, 0.8, 0.25, 1.2). Cart icon: show a green dot badge (#00E676) that scales up with elastic ease when items are added.

4.5 Hero 3D Model & Text
Prompt (Hero section):

3D Model: Use Three.js to render a GLTF model of a tech gadget. Auto‑rotate slowly (0.3 rad/s) and follow mouse movement: map mouse X/Y to rotateY/rotateX with limits ±15° using gsap.to with smoothing. On mobile, replace with a still image that tilts based on device gyroscope.

Text Animation: Heading text appears with a staggered fade‑up and letter‑by‑letter green glow using CSS @keyframes or GSAP SplitText. Each letter scales from 0.8 to 1 and opacity 0 to 1 over 0.6s, stagger 0.05s.

CTA Button: Green outline button. On hover, fill with gradient linear-gradient(135deg, #00E676, #00C853), box‑shadow 0 0 20px #00E676. A ripple effect from the click point (CSS pseudo‑element scale animation).

Floating Particles: Canvas‑based particles (green, size 2‑4px) that float upward and react to mouse position (attract within 200px radius). Use requestAnimationFrame and low‑opacity connections.

4.6 Product Carousel
Prompt:

Horizontal carousel: Use a div with display:flex, overflow‑x: auto, snap‑type: mandatory. Cards have scroll-snap-align: center. On hover, apply a subtle 3D tilt: transform: perspective(1000px) rotateY(${tiltX}deg) rotateX(${tiltY}deg) using mousemove relative to card centre. Green border glow (box-shadow: 0 0 15px #00E676) appears on hover, transition 0.3s. Dragging (pointer events) moves the carousel with momentum deceleration. Optionally, infinite loop by cloning cards.

4.7 Product Grid – 3D Card Flip
Prompt:

Each product card is a container with perspective: 1000px. Inner div has two faces (front, back) using transform-style: preserve-3d. On mouseenter, animate rotateY(180deg) over 0.6s with cubic-bezier(0.4, 0, 0.2, 1). On mouseleave, reverse. Add a green box shadow during flip: box-shadow: 0 10px 30px rgba(0, 230, 118, 0.3). Back face shows specs, green‑highlighted text.

4.8 Stats Counter Animation
Prompt:

Use IntersectionObserver to trigger counting when the section is in view. Numbers animate from 0 to target using a Counter function with Math.round and easeOutExpo interpolation over 2 seconds. Each stat number is displayed with a green glow (text-shadow: 0 0 10px #39FF14). The underline is a 2px green bar that stretches from 0 to 100% width simultaneously.

4.9 Scroll‑Linked Video Playback
Prompt:

Embed a video with muted, playsinline. Using ScrollTrigger, scrub the video’s currentTime based on scroll position within a pin‑spacer section. The start triggers when the section enters the viewport, end when it leaves. Duration mapped to scroll distance (e.g., 1000px). Use a requestAnimationFrame loop to set video.currentTime = progress * video.duration. Green neon border around the video container (box-shadow: 0 0 25px #00E676).

4.10 Testimonials – Mouse‑Following Glow
Prompt:

For each testimonial card, track mousemove and update CSS custom properties --mouse-x and --mouse-y. Apply a radial gradient overlay (radial-gradient(400px at var(--mouse-x) var(--mouse-y), rgba(0,230,118,0.15), transparent 80%)) that moves with the cursor. Border becomes a glowing green gradient (linear-gradient with border-image).

4.11 Newsletter Input Animation
Prompt:

Input field has a bottom border 1px solid rgba(255,255,255,0.2). On focus, the border transforms into a 2px green line that expands from the centre: use ::after with transform: scaleX(0) to scaleX(1) with transition. Submit button: green background with a CSS ripple (circle that scales from click point) using a keyframes animation.

4.12 Scroll‑to‑Top Button & Progress Indicator
Prompt:

A fixed button at bottom‑right appears after scrolling 300px. The button is a circle (50px) with a green SVG ring that shows scroll progress (stroke‑dasharray and stroke‑dashoffset animated with ScrollTrigger). Inner arrow icon green. On hover, scale to 1.1 with a green glow.

4.13 Page Transition / Internal Link Animations
Prompt:

When navigating between pages (if SPA), use a wipe transition: a green curtain slides from left to right (width 100% to 0) while the new page reveals. Implement with GSAP timeline: to('.wipe', {width: '100%', duration: 0.4, ease: 'power2.in'}) then set new page and animate width: '0%'. The curtain colour #00E676.

4.14 Lazy Loading & Fade‑in Effects
Prompt:

All images and cards have a fade‑in and slight translate‑Y (20px → 0) when scrolled into view. Use gsap.from with ScrollTrigger: opacity 0 to 1, duration 0.8, ease power2.out. Stagger for grids (0.1s). Green border glow intensifies after reveal.

4.15 Micro‑interactions (Buttons, Icons, Tags)
Prompt:

Buttons: On hover, text colour changes from white to black, background fills with green #00E676 via clip-path animation or simple background-color transition 0.25s. Add box-shadow: 0 0 15px #00E676.

Icon hover: green stroke glows, transform scale 1.15 with transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) (spring back).

Tags: tiny green gradient pill background, when hovered, border glows.

5. Technical Implementation Suggestions
Framework: Next.js (or plain React with Vite) for performance and SSR.

Animation Libraries: GSAP (ScrollTrigger, SplitText, Draggable), Three.js (for 3D model), Framer Motion (optional for UI transitions).

Smooth scroll: @studio-freight/lenis.

Custom cursor: Vanilla JS + GSAP quickTo.

Video scrubbing: scroll-video or custom ScrollTrigger.

Deployment: Vercel.

6. Green Theme Asset Checklist
Replace all orange‑coloured SVGs, icons, and illustrations with green variants.

Product images may remain as is, but any orange UI elements in product mockups (e.g., buttons on screen) should be edited to green.

Provide a style guide with exact green hex codes, gradients, and shadow values.

7. Quality Assurance & Fidelity
Pixel‑perfect replication of layout (margins, font sizes, image placements) based on the referenced site.

All animations must have the same timing, easing, and interaction triggers.

Responsive: the site must adapt smoothly down to 375px width, with touch‑friendly interactions. On mobile, replace cursor effects with tap‑based ripple, 3D tilts with gyroscope (optional), and simplify particle density.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://emerald-tech-store.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/34de7a25-534a-49fc-983d-bf1edcf2a71b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
