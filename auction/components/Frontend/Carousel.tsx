"use client"

import React from "react";
import { SplitCarousel } from "../ui/images-slider";

export default function CarouselDemo() {
  const slides = [
    [
      "/a-45.jpg", // main
      "/a-48.jpg", // grid1
      "/a-47.jpg", // grid2
      "/a-49.jpg", // grid3
      "/a-46.jpg", // grid4
    ],
    [
      "/a-45.jpg",
      "/a-48.jpg",
      "/a-47.jpg",
      "/a-49.jpg",
      "/a-46.jpg",
    ],
    // add more slides...
  ];

  return <SplitCarousel slides={slides} autoplay interval={4000} />;
}