// components/Footer.tsx

import Link from "next/link";



export default function Footer() {

  return (

    <footer className="border-t bg-white mt-10">

      <div className="max-w-5xl mx-auto py-6 px-4 text-xs text-gray-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

        <p>© {new Date().getFullYear()} BioLeanLab. All rights reserved.</p>

        <div className="flex gap-4">

          <Link href="/privacy-policy">Privacy Policy</Link>

          <Link href="/terms-of-use">Terms of Use</Link>

          <Link href="/contact">Contact</Link>

        </div>

      </div>

    </footer>

  );

}

