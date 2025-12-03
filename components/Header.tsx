// components/Header.tsx

import Link from "next/link";



export default function Header() {

  return (

    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl shadow-sm">

      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2.5 group">

          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">

            <span className="text-white font-black text-lg">B</span>

          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900 group-hover:text-emerald-600 transition-colors">

            <span>BioLean</span><span className="text-emerald-600">Lab</span>

          </span>

        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">

          <Link 

            href="/blog" 

            className="text-gray-600 hover:text-emerald-600 transition-colors py-2 relative group"

          >

            Blog

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>

          </Link>

          <Link 

            href="/reviews" 

            className="text-gray-600 hover:text-emerald-600 transition-colors py-2 relative group"

          >

            Reviews

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>

          </Link>

          <Link 

            href="/about" 

            className="text-gray-600 hover:text-emerald-600 transition-colors py-2 relative group"

          >

            About

            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>

          </Link>

        </div>

      </nav>

    </header>

  );

}

