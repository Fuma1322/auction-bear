import Link from "next/link";
import React from "react";
import { Badge, Clock, Eye, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { IconTrendingUp } from "@tabler/icons-react";

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
          <h1 className="text-2xl md:text-2xl font-bold">
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
            <span className="font-bold">Watch</span>
          </Button>

          <Button className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition">
            <Share2 size={18} />
            <span className="font-bold">Share</span>
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
      {/* BID TIME & BUTTON */}
        <div className="flex items-center gap-4">

        {/* INFO BLOCK */}
        <div className="flex items-center gap-8 rounded-xl bg-gray-200 px-8 py-3 w-[750px]">
          
          {/* TIME LEFT */}
          <div className="flex items-center gap-2 text-md">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Time Left:</span>
            <span className="font-semibold">3 Days</span>
          </div>

          {/* HIGH BID */}
          <div className="flex items-center gap-2 text-md">
            <span className="text-muted-foreground">High Bid:</span>
            <span className="font-semibold">M160,000</span>
          </div>

          {/* BIDS */}
          <div className="flex items-center gap-2 text-md">
            <span className="text-muted-foreground">Bids:</span>
            <span className="font-semibold">10</span>
          </div>

          {/* Ending */}
          <div className="flex items-center gap-2 text-md">
            <span className="text-muted-foreground">Ending:</span>
            <span className="font-semibold">Jan 20th 1:30 PM EST</span>
          </div>

        </div>

        {/* BID BUTTON */}
        <Button className="h-[44px] px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl">
          Place Bid
        </Button>
      </div>
    </div>
  );
}