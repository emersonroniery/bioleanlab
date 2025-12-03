// components/Header.tsx

import Link from "next/link";

import { useState } from "react";



export default function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  return (

    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">

      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">

          <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200">

            <span className="text-white font-black text-base">B</span>

          </div>

          <span className="text-lg font-bold tracking-tight text-gray-900 group-hover:text-emerald-600 transition-colors duration-200">

            <span>BioLean</span><span className="text-emerald-600">Lab</span>

          </span>

        </Link>



        {/* Desktop Navigation */}

        <div className="hidden md:flex items-center gap-1">

          <Link 

            href="/blog" 

            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"

          >

            Blog

          </Link>

          <Link 

            href="/reviews" 

            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"

          >

            Reviews

          </Link>

          <Link 

            href="/about" 

            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"

          >

            About

          </Link>

        </div>



        {/* Mobile Menu Button */}

        <button

          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"

          aria-label="Toggle menu"

        >

          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

            {mobileMenuOpen ? (

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

            ) : (

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

            )}

          </svg>

        </button>

      </nav>



      {/* Mobile Menu */}

      {mobileMenuOpen && (

        <div className="md:hidden border-t border-gray-200 bg-white">

          <div className="px-4 py-3 space-y-1">

            <Link 

              href="/blog" 

              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"

              onClick={() => setMobileMenuOpen(false)}

            >

              Blog

            </Link>

            <Link 

              href="/reviews" 

              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"

              onClick={() => setMobileMenuOpen(false)}

            >

              Reviews

            </Link>

            <Link 

              href="/about" 

              className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"

              onClick={() => setMobileMenuOpen(false)}

            >

              About

            </Link>

          </div>

        </div>

      )}

    </header>

  );

}

