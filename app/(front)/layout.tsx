"use client"

import React, { ReactNode } from 'react'
import Navbarr from '@/components/Frontend/Navbar'

export default function Layout({children}: {children:ReactNode}) {
  return (
     <div className='space-y-2.5 '>
        <Navbarr />
       {children}
    </div>
  )
}