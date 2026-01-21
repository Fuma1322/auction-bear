import Hero from "@/components/Frontend/Hero";
import Stats from "@/components/Frontend/Stats";
import CarouselDemo from "@/components/Frontend/Carousel";


export default function page() {
  return (
    <div>
        <CarouselDemo />
        <Hero />
        <Stats />
    </div>
  );
}