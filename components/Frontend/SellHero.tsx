"use client";

import Link from "next/link";
import { Box, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Testimonials from "./SellTestimonials";
import HowItWorks from "./SellHIW";
import FAQ from "./SellFAQ";

export default function SellHero() {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
      <div className="text-center space-y-6">
        {/* Heading */}
        <h1 className="scroll-m-20 text-center text-7xl font-bold tracking-tight text-balance">
          Sell To
          <span className="text-brand-blue-500"> Enthusiasts. </span>{" "}
          Get What It&apos;s Worth
        </h1>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link
            href="/sell"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              py-3.5
              bg-brand-blue-500
              text-white
              font-semibold
              rounded-md
              shadow-md
              hover:bg-gray-700
              transition
            "
          >
            Sell Now
          </Link>

        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-md">
          We&apos;ll review your submission within 1 business day
        </p>

          {/* Supporting text */}
          <div className="space-y-1 text-xl sm:text-xl text-gray-600">
            <p>
              <span className="font-semibold text-gray-800">
                Big results
              </span>{" "}
              — Over 30,000 auctions and M700m in value sold
            </p>
            <p>
              <span className="font-semibold text-gray-800">
                Attract the right audience
              </span>{" "}
              — Passionate enthusiasts looking for their next car
            </p>
          </div>
        </div>
      </div>
      <div className="py-12">
        <ul className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <GridItem
                area="md:[grid-area:1/1/2/7]"
                icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Professionally Crafted Listings"
                description="Our expert team writes your listing and helps you present
                your car to achieve the best result. Once your car is accepted,
                you&apos;ll pay nothing upfront and keep 100% of the proceeds from your sale."
            />
        
            <GridItem
                area="md:[grid-area:1/7/2/13]"
                icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Need More Help?"
                description="We offer a white-glove service for special cars and 
                can craft a package to meet your needs from storage to presentation."
            />
            </ul>
      </div>
      <Testimonials />
      <HowItWorks />
        <div className="flex items-center justify-center">
            <Link
            href="/sell"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              py-3.5
              bg-brand-blue-500
              text-white
              font-semibold
              rounded-md
              shadow-md
              hover:bg-gray-700
              transition
            "
          >
            Sell Now
          </Link>
        </div>
      <FAQ />
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}
 
const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};