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
                    href: 'javascript:void()',
                    name: 'Buying a car'
                },
                {
                    href: 'javascript:void()',
                    name: 'Selling a car'
                },
                {
                    href: 'javascript:void()',
                    name: 'Finalizing the Sale'
                },
                {
                    href: 'javascript:void()',
                    name: 'FAQs'
                },
            ],
        },
        {
            label: "Sellers",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Submit Your Car'
                },
                {
                    href: 'javascript:void()',
                    name: 'Dashboard'
                },
                {
                    href: 'javascript:void()',
                    name: 'Certified Sellers'
                },
                {
                    href: 'javascript:void()',
                    name: 'Inspections'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ]

  return (
     <footer className="text-neutral-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="flex justify-start">
                        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance text-brand-blue-500 dark:text-white mb-1">BidAx</h1>
                    </div>
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
                            <a href="javascript:void()">
                                <Facebook className='text-blue-700' />
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                                <Instagram className='text-pink-500'/>
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                                <Linkedin className='text-blue-500' />
                            </a>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
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
