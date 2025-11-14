"use client"

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Navbarr() {
  const navItems = [
    {
      name: "Leaderboard",
      link: "#leaderboard",
    },
    {
      name: "Auctions",
      link: "#auctions",
    },
    {
      name: "Featured",
      link: "#featured",
    },
    {
      name: "Results",
      link: "#results",
    },
    {
        name: "About Us",
      link: "#about",
    },
    {
        name: "Results",
        link: "#results",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="hidden lg:flex items-center justify-between gap-8">
        {/* Left: logo + links */}
        <div className="flex items-center gap-6">
          <NavbarLogo />
          <NavItems items={navItems} />
        </div>

            {/* MIDDLE SECTION: Search bar */}
          <div className="hidden md:flex justify-center flex-grow max-w-md lg:max-w-lg xl:max-w-xl">
            <SearchBar />
          </div>

          {/* RIGHT SECTION: Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <NavbarButton variant="primary">Sell A Car</NavbarButton>
            <Link href="/register"><NavbarButton variant="primary">Sign Up</NavbarButton></Link>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            {/* Mobile search bar */}
            <div className="mt-1 mr-3">
              <SearchBar />
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Sell a car
              </NavbarButton>
              <Link href="/register">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Sign Up
              </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}