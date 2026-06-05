import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProductGrid } from "@/components/ProductGrid";
import { Stats } from "@/components/Stats";
import { Showcase } from "@/components/Showcase";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Volt — Premium Tech, Engineered for the Edge" },
      { name: "description", content: "Premium audio, wearables, compute and spatial devices. Designed for people who push." },
      { property: "og:title", content: "Volt — Premium Tech Store" },
      { property: "og:description", content: "A new generation of devices built for those who push the edge." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid />
        <Stats />
        <Showcase />
        <Testimonials />
        <Newsletter />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </>
  );
}
