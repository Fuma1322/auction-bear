import Link from "next/link";
import React from "react";
import { Eye, Share2 } from "lucide-react";
import { Button } from "../ui/button";

export default function Auctions() {
  const slides = [
    [
      "/a-45.jpg",
      "/a-48.jpg",
      "/a-47.jpg",
      "/a-49.jpg",
      "/a-46.jpg",
    ],
  ];

  return (
    <div className="mx-auto max-w-screen-2xl space-y-6 p-4">
      
      {/* TOP INFO BAR */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Mercedes-AMG A45
          </h1>
          <p className="text-sm md:text-base text-neutral-600">
            ~30,000 Miles · 1 Owner · 563-hp Twin-Turbo V8 · Unmodified
          </p>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition">
            <Eye size={18} />
            Watch
          </Button>

          <Button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition">
            <Share2 size={18} />
            Share
          </Button>
        </div>
      </div>

      {/* IMAGE COLLAGE */}
      {slides.map((group, groupIndex) => {
        const isLastGroup = groupIndex === slides.length - 1;

        return (
          <div
            key={groupIndex}
            className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2"
          >
            {/* BIG LEFT IMAGE */}
            <div className="md:col-span-2 h-[400px] overflow-hidden rounded-xl">
              <img
                src={group[0]}
                alt="Mercedes AMG A45"
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT 4 IMAGES */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[400px]">
              {group.slice(1).map((src, idx) => {
                const isLastSmallImage = isLastGroup && idx === 3;

                return (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl"
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                    />

                    {/* CTA */}
                    {isLastSmallImage && (
                      <Link
                        href="/gallery"
                        className="absolute inset-0 flex items-center justify-center bg-black/40"
                      >
                        <span className="text-white text-xl font-semibold">
                          View more
                        </span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}