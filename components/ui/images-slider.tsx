"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
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
  className,
}: SplitCarouselProps) => {
  const [currentIndex] = useState(0);

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
        "w-full flex flex-col md:flex-row gap-4 h-auto md:h-[30rem] relative overflow-hidden p-4 md:p-8",
        className
      )}
    >
      {/* Left / Top: Big Image */}
      <div className="w-full md:w-1/2 h-[18rem] md:h-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex + "-main"}
            src={currentSlide[0]}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideVariants}
            className="w-full h-full object-cover rounded-xl"
          />
        </AnimatePresence>
      </div>

      {/* Right / Bottom: 2x2 Grid */}
      <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 mt-4 md:mt-0">
        {currentSlide.slice(1, 5).map((img, idx) => (
          <AnimatePresence mode="wait" key={idx}>
            <motion.img
              key={currentIndex + "-grid-" + idx}
              src={img}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.6 },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: { duration: 0.5 },
              }}
              className="w-full h-[8rem] md:h-full object-cover rounded-xl"
            />
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};