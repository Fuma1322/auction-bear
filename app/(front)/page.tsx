import Hero from "@/components/Frontend/Hero";
import Stats from "@/components/Frontend/Stats";
import CarouselDemo from "@/components/Frontend/Carousel";
import CTA from "@/components/Frontend/CTA";


export default function page() {
  return (
    <div>
        <CarouselDemo />
        <Hero />
        <CTA />
        <Stats />
    </div>
  );
}