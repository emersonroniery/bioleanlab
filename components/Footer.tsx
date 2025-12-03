// components/Footer.tsx

import Link from "next/link";



export default function Footer() {

  return (

    <footer className="border-t border-gray-200 bg-white mt-20">

      <div className="max-w-6xl mx-auto py-10 px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          <div>

            <p className="text-sm text-gray-600 font-medium mb-1">

              © {new Date().getFullYear()} BioLeanLab. All rights reserved.

            </p>

            <p className="text-xs text-gray-500 mb-2">

              Science-based weight loss and supplement insights.

            </p>

            <p className="text-xs text-gray-500">

              Some links are affiliate links. We may earn a commission at no extra cost to you.

            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-sm">

            <Link 

              href="/privacy-policy" 

              className="text-gray-600 hover:text-emerald-600 transition-colors"

            >

              Privacy Policy

            </Link>

            <Link 

              href="/terms-of-use" 

              className="text-gray-600 hover:text-emerald-600 transition-colors"

            >

              Terms of Use

            </Link>

            <Link 

              href="/contact" 

              className="text-gray-600 hover:text-emerald-600 transition-colors"

            >

              Contact

            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}

