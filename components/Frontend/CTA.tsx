import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section className="relative w-full rounded-md overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/a-48.jpg"
          alt="CTA background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto px-4 py-24 lg:py-32 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 text-white">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-tight md:text-5xl xl:text-6xl">
            Sell To Enthusiasts. Get What It&apos;s Worth
          </h1>

          <p className="max-w-2xl mb-6 text-gray-200 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the world
            use BidAx to simplify their payment stack.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/landing"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-brand-blue-500 rounded-lg hover:bg-white/10 focus:ring-4 focus:ring-white/20"
            >
              Sell A Car
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}