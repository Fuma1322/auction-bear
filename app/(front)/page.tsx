import Hero from "@/components/Frontend/Hero";
import Stats from "@/components/Frontend/Stats";
import Footer from "@/components/Frontend/Footer";
import CarouselDemo from "@/components/Frontend/Carousel";


export default function page() {
  return (
    <div>
        <CarouselDemo />
        <Hero />
        <Stats />
        <Footer />
    </div>
  );
}