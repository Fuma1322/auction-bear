"use client"

import React from 'react'
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {

  const footerNavs = [
        {
            label: "How It Works",
            items: [
                {
                    href: '/',
                    name: 'Buying a car'
                },
                {
                    href: '/',
                    name: 'Selling a car'
                },
                {
                    href: '/',
                    name: 'Finalizing the Sale'
                },
                {
                    href: '/',
                    name: 'FAQs'
                },
            ],
        },
        {
            label: "Sellers",
            items: [
                {
                    href: '/',
                    name: 'Submit Your Car'
                },
                {
                    href: '/',
                    name: 'Dashboard'
                },
                {
                    href: '/',
                    name: 'Certified Sellers'
                },
                {
                    href: '/',
                    name: 'Inspections'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: '/',
                    name: 'Terms'
                },
                {
                    href: '/',
                    name: 'License'
                },
                {
                    href: '/',
                    name: 'Privacy'
                },
                {
                    href: '/',
                    name: 'About US'
                },
            ]
        }
    ]

  return (
     <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                         <Image
                                 src="/logo.png"
                                 alt="logo"
                                 width={40}
                                 height={40}
                                 unoptimized
                                 />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <form 
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label className="block pt-4 pb-2">
                            Stay up to date
                        </label>
                        <div className="max-w-sm flex items-center border rounded-md p-1">
                            <input 
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-brand-blue-500 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-800 font-medium">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {new Date().getFullYear()} BidAx All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="/">
                                <Facebook className='text-blue-700' />
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="/">
                                <Instagram className='text-pink-500'/>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="/">
                                <Linkedin className='text-blue-500' />
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="/">
                                <Youtube className='text-red-500' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
  )
}
