'use client'
import React from 'react';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import '@/app/css/additional-styles/theme.css';
import { Web3Button } from '@web3modal/react'
import MoneyTree from '@/public/images/moneytree-logo.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <>
      <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link href="/" className="block" >
                <Image src={MoneyTree} alt="The Money Tree Stats" />
              </Link>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:grow">
              {/* Desktop menu links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    User Info
                  </Link>
                </li>
                <li>
                  <Link href="/howItWorks" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    Tree Generator
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out">
                    Disclaimer
                  </Link>
                </li>
              </ul>

              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <Web3Button />
                </div>
              </ul>
            </nav>

            {/* Mobile menu */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
