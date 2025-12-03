// components/Header.tsx

import Link from "next/link";



export default function Header() {

  return (

    <header className="border-b bg-white">

      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">

        <Link href="/" className="flex items-center gap-2">

          <span className="text-xl font-bold tracking-tight">

            BioLean<span className="text-emerald-600">Lab</span>

          </span>

        </Link>

        <div className="flex gap-4 text-sm font-medium">

          <Link href="/blog">Blog</Link>

          <Link href="/reviews">Reviews</Link>

          <Link href="/about">About</Link>

        </div>

      </nav>

    </header>

  );

}

