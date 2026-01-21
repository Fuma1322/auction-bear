"use client";

import * as React from "react";
import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Category = "all" | "exterior" | "interior" | "mechanical" | "docs";

interface Artwork {
  src: string;
  category: Category;
  label?: string;
}

const images: Artwork[] = [
  { src: "/a-45.jpg", category: "exterior" },
  { src: "/a-46.jpg", category: "exterior" },
  { src: "/a-47.jpg", category: "interior" },
  { src: "/a-48.jpg", category: "interior" },
  { src: "/a-49.jpg", category: "mechanical" },
  { src: "/n5.jpg", category: "docs" },
];

const GalleryContent = ({ category }: { category: Category }) => {
  const filtered =
    category === "all"
      ? images
      : images.filter((img) => img.category === category);

  if (!filtered.length) {
    return (
      <p className="text-sm text-muted-foreground">
        No photos available.
      </p>
    );
  }

  return (
    <>
      {/* 📱 MOBILE — CAROUSEL */}
      <div className="block md:hidden">
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {filtered.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={img.src}
                    alt={img.category}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {filtered.length > 1 && (
            <>
            </>
          )}
        </Carousel>
      </div>

      {/* 🖥 DESKTOP — HORIZONTAL SCROLL */}
      <div className="hidden md:block">
        <ScrollArea className="w-full rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {filtered.map((img, idx) => (
              <figure key={idx} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={img.src}
                    alt={img.category}
                    width={300}
                    height={400}
                    className="
                      aspect-[3/4]
                      object-cover
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                  />
                </div>
              </figure>
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default function CarGallery() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 py-6 sm:py-8">
      <Tabs defaultValue="all" className="w-full">
        {/* Tabs */}
        <TabsList
          className="
            mb-4
            flex w-full
            justify-start
            overflow-x-auto
            whitespace-nowrap
          "
        >
          <TabsTrigger value="all" className="shrink-0">
            All photos
          </TabsTrigger>
          <TabsTrigger value="exterior" className="shrink-0">
            Exterior
          </TabsTrigger>
          <TabsTrigger value="interior" className="shrink-0">
            Interior
          </TabsTrigger>
          <TabsTrigger value="mechanical" className="shrink-0">
            Mechanical
          </TabsTrigger>
          <TabsTrigger value="docs" className="shrink-0">
            Docs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <GalleryContent category="all" />
        </TabsContent>
        <TabsContent value="exterior">
          <GalleryContent category="exterior" />
        </TabsContent>
        <TabsContent value="interior">
          <GalleryContent category="interior" />
        </TabsContent>
        <TabsContent value="mechanical">
          <GalleryContent category="mechanical" />
        </TabsContent>
        <TabsContent value="docs">
          <GalleryContent category="docs" />
        </TabsContent>
      </Tabs>
    </div>
  );
}