// components/Footer.tsx

import Link from "next/link";



export default function Footer() {

  return (

    <footer className="border-t border-gray-200 bg-white mt-16 sm:mt-20">

      <div className="max-w-7xl mx-auto py-10 sm:py-12 px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

          <div className="space-y-3 max-w-md">

            <div className="flex items-center gap-2.5">

              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">

                <span className="text-white font-black text-sm">B</span>

              </div>

              <span className="text-base font-bold text-gray-900">

                BioLean<span className="text-emerald-600">Lab</span>

              </span>

            </div>

            <p className="text-sm text-gray-600">

              Science-based weight loss and supplement insights to help you make informed health decisions.

            </p>

            <p className="text-xs text-gray-500 pt-2">

              © {new Date().getFullYear()} BioLeanLab. All rights reserved. Some links are affiliate links.

            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">

            <div>

              <h4 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wide">Legal</h4>

              <div className="flex flex-col gap-2">

                <Link 

                  href="/privacy-policy" 

                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"

                >

                  Privacy Policy

                </Link>

                <Link 

                  href="/terms-of-use" 

                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"

                >

                  Terms of Use

                </Link>

                <Link 

                  href="/contact" 

                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"

                >

                  Contact

                </Link>

              </div>

            </div>

            <div>

              <h4 className="font-semibold text-gray-900 mb-3 text-xs uppercase tracking-wide">Content</h4>

              <div className="flex flex-col gap-2">

                <Link 

                  href="/blog" 

                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"

                >

                  Blog

                </Link>

                <Link 

                  href="/reviews" 

                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"

                >

                  Reviews

                </Link>

                <Link 

                  href="/about" 

                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"

                >

                  About

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>

  );

}

