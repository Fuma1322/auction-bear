"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SplitCarouselProps {
  slides: string[][];
  autoplay?: boolean;
  interval?: number;
  direction?: "up" | "down";
  className?: string;
}

export const SplitCarousel = ({
  slides,
  autoplay = true,
  interval = 5000,
  direction = "up",
  className,
}: SplitCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  // Keyboard and autoplay
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrevious();
    };
    window.addEventListener("keydown", onKeyDown);

    let auto: any;
    if (autoplay) {
      auto = setInterval(() => {
        handleNext();
      }, interval);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      clearInterval(auto);
    };
  }, [autoplay, interval]);

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  const slideVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={cn(
        "w-full flex gap-4 h-[30rem] relative overflow-hidden p-12",
        className
      )}
    >
      {/* Left: Big Image */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex + "-main"}
            src={currentSlide[0]}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
            className="w-full h-full object-cover rounded-lg"
          />
        </AnimatePresence>
      </div>

      {/* Right: 2x2 Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
        {currentSlide.slice(1, 5).map((img, idx) => (
          <AnimatePresence mode="wait" key={idx}>
            <motion.img
              key={currentIndex + "-grid-" + idx}
              src={img}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
              className="w-full h-full object-cover rounded-lg"
            />
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};