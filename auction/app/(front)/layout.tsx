"use client"

import Navbarr from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default async function Layout({children}: {children:ReactNode}) {
  return (
     <div className='space-y-2.5 '>
        <Navbarr />
       {children}
       {/* <Footer /> */}
    </div>
  )
}