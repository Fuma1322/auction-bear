import Link from 'next/link';
import React from 'react'

export default function Auctions() {
  const slides = [
    [
      "/a-45.jpg", // big left
      "/a-48.jpg",
      "/a-47.jpg",
      "/a-49.jpg",
      "/a-46.jpg",
    ],
  ];

  return (
    <div className="mx-auto max-w-screen-2xl space-y-10">
      {slides.map((group, groupIndex) => {
        const isLastGroup = groupIndex === slides.length - 1;

        return (
          <div
            key={groupIndex}
            className="grid grid-cols-1 md:grid-cols-3 gap-2"
          >
            {/* BIG LEFT IMAGE */}
            <div className="md:col-span-2 h-[520px] overflow-hidden rounded-xl">
              <img
                src={group[0]}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT 4 IMAGES */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[520px]">
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

                    {/* View more CTA ONLY on last small image */}
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