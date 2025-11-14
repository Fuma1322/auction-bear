import CarouselDemo from "@/components/Frontend/Carousel";
import Footer from "@/components/Frontend/Footer";
import Hero from "@/components/Frontend/Hero";
import Stats from "@/components/Frontend/Stats";


export default function page() {
  return (
    <div className="">
        <CarouselDemo />
        <Hero />
        <Stats />
        <Footer />
    </div>
  );
}