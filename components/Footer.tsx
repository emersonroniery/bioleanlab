// components/Footer.tsx

import Link from "next/link";



export default function Footer() {

  return (

    <footer className="border-t border-gray-200 bg-white">

      <div className="max-w-6xl mx-auto py-8 px-4">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <p className="text-sm text-gray-600">

            © {new Date().getFullYear()} BioLeanLab. All rights reserved.

          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600">

            <Link href="/privacy-policy" className="hover:text-emerald-600 transition-colors">

              Privacy Policy

            </Link>

            <Link href="/terms-of-use" className="hover:text-emerald-600 transition-colors">

              Terms of Use

            </Link>

            <Link href="/contact" className="hover:text-emerald-600 transition-colors">

              Contact

            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}

