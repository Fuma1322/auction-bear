"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function Hero() {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const cars = [
    {
      id: "1",
      location: "Nissan Navara Pro 4X",
      price: "850,000",
      image: "/n5.jpg",
      landlord: { name: "John", email: "", role: "" },
    },
    {
      id: "2",
      location: "Mercedes A45",
      price: "920,000",
      image: "/a-48.jpg",
      landlord: { name: "Sam", email: "", role: "" },
    },
    {
      id: "3",
      location: "Golf GTI 8.5",
      price: "390,000",
      image: "/gti.jpg",
      landlord: { name: "Peter", email: "", role: "" },
    },
    {
      id: "4",
      location: "Audi RS3",
      price: "780,000",
      image: "/RS.jpg",
      landlord: { name: "Musa", email: "", role: "" },
    },
    {
      id: "5",
      location: "Ford Mustang GT",
      price: "650,000",
      image: "/gt.jpg",
      landlord: { name: "Kyle", email: "", role: "" },
    },
    {
      id: "6",
      location: "Land Rover Defender",
      price: "970,000",
      image: "/defender.png",
      landlord: { name: "Neo", email: "", role: "" },
    },
  ];

  const totalPages = Math.ceil(cars.length / itemsPerPage);
  const currentItems = cars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="space-y-10 p-4">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4">

        <div className="space-y-3 w-full md:w-auto">
          <h2 className="text-3xl font-bold text-brand-blue-500">Auctions</h2>

          <div className="flex gap-4 flex-wrap">
            {/* YEAR */}
            <Select>
              <SelectTrigger className="w-32">Year</SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>

            {/* Transmission */}
            <Select>
              <SelectTrigger className="w-40">Transmission</SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Automatic</SelectItem>
                <SelectItem value="manual">Manual</SelectItem>
              </SelectContent>
            </Select>

            {/* Body Style */}
            <Select>
              <SelectTrigger className="w-40">Body Style</SelectTrigger>
              <SelectContent>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="coupe">Coupe</SelectItem>
                <SelectItem value="hatchback">Hatchback</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* RIGHT SIDE — TABS */}
        <Tabs defaultValue="ending">
          <TabsList className="flex flex-wrap md:flex-nowrap gap-2">
            <TabsTrigger value="ending">Ending Soon</TabsTrigger>
            <TabsTrigger value="near">Close to Me</TabsTrigger>
            <TabsTrigger value="popular">Most Popular</TabsTrigger>
            <TabsTrigger value="new">Newest</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {currentItems.map((car) => (
            <Card
            key={car.id}
            className="w-full overflow-hidden rounded-lg shadow-md p-0"
            >

            {/* IMAGE */}
            <div className="relative w-full aspect-[16/9] !p-0 !m-0">
                <Image
                src={car.image}
                alt={car.location}
                fill
                className="object-cover"
                />
            </div>

            {/* CONTENT */}
            <CardContent className="px-3 pb-3 pt-2 space-y-2">
                <h3 className="font-semibold text-lg">{car.location}</h3>
                <p className="text-gray-600">Price: M{car.price}</p>
                <p className="text-gray-500">Seller: {car.landlord?.name}</p>
            </CardContent>

            </Card>
        ))}
        </div>

      {/* PAGINATION */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => goToPage(currentPage - 1)} />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                onClick={() => goToPage(i + 1)}
                isActive={currentPage === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext href="#" onClick={() => goToPage(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

    </section>
  );
}