// components/Header.tsx

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 md:py-5 px-4">
        <Link href="/" className="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors duration-200 tracking-tight">
          <span>BioLean</span><span className="text-emerald-600">Lab</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm md:text-base font-medium text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition-colors duration-200">
            Home
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/category/weight-loss" className="hover:text-emerald-600 transition-colors duration-200">
            Weight Loss
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/category/supplements" className="hover:text-emerald-600 transition-colors duration-200">
            Supplements
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/category/nutrition" className="hover:text-emerald-600 transition-colors duration-200">
            Nutrition
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/reviews" className="hover:text-emerald-600 transition-colors duration-200">
            Reviews
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
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/category/weight-loss"
              className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Weight Loss
            </Link>
            <Link
              href="/category/supplements"
              className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Supplements
            </Link>
            <Link
              href="/reviews"
              className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors duration-200"
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
