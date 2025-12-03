// components/Header.tsx

import Link from "next/link";



export default function Header() {

  return (

    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/98 backdrop-blur-md shadow-md">

      <nav className="max-w-6xl mx-auto flex items-center justify-between py-5 px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2 group">

          <span className="text-2xl font-bold tracking-tight text-gray-900 group-hover:text-emerald-600 transition-colors">

            BioLean<span className="text-emerald-600">Lab</span>

          </span>

        </Link>

        <div className="flex gap-6 text-sm font-medium">

          <Link 

            href="/blog" 

            className="text-gray-700 hover:text-emerald-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all"

          >

            Blog

          </Link>

          <Link 

            href="/reviews" 

            className="text-gray-700 hover:text-emerald-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all"

          >

            Reviews

          </Link>

          <Link 

            href="/about" 

            className="text-gray-700 hover:text-emerald-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all"

          >

            About

          </Link>

        </div>

      </nav>

    </header>

  );

}

