"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplitCarouselProps {
  slides: string[][];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

export const SplitCarousel = ({
  slides,
  autoplay = false,
  interval = 4000,
  className,
}: SplitCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, slides.length]);

  if (!slides?.length) return null;

  const currentSlide = slides[currentIndex];

  const slideVariants = {
    initial: { opacity: 0, scale: 0.96, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      y: -20,
      transition: { duration: 0.4, },
    },
  };

  return (
    <div
      className={cn(
        "w-full flex flex-col md:flex-row gap-4 h-auto md:h-[30rem] overflow-hidden p-4 md:p-8",
        className
      )}
    >
      {/* BIG IMAGE */}
      <div className="w-full md:w-1/2 h-[18rem] md:h-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentSlide[0]}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-cover rounded-xl"
            draggable={false}
          />
        </AnimatePresence>
      </div>

      {/* GRID IMAGES */}
      <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
        <AnimatePresence mode="wait">
          {currentSlide.slice(1, 5).map((img, idx) => (
            <motion.img
              key={`${currentIndex}-${idx}`}
              src={img}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="w-full h-[8rem] md:h-full object-cover rounded-xl"
              draggable={false}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};