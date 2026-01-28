"use client"

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { CarFront, Clipboard, Flag, House, LayoutGrid, Zap } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  // Sidebar links for ADMIN
  const sideBarLinks = [
    {title:"Home", path:"/", icon: House},
    {title:"Dashboard", path:"/", icon: LayoutGrid},
    {title:"In Progress", path:"/dashboard/progress", icon: Clipboard},
    {title:"Live Auctions", path:"/dashboard/live", icon: Zap},
    {title:"Past Listings", path:"/dashboard/past", icon: Flag},
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* Header section with logo and notifications button */}
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <CarFront className="text-brand-blue-500 h-7 w-7" />
            <span>BidAx</span>
          </Link>
        </div>

        {/* Main navigation section */}
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {/* Map through sidebar links and render each */}
            {sideBarLinks.map((item, i) => {
              const Icon = item.icon; // Icon component
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.path ? "bg-muted text-primary" : "" 
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  )
}