// components/Footer.tsx

import Link from "next/link";



export default function Footer() {

  return (

    <footer className="border-t border-gray-100 bg-white mt-24">

      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

          <div className="space-y-3">

            <div className="flex items-center gap-2.5 mb-2">

              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">

                <span className="text-white font-black text-sm">B</span>

              </div>

              <span className="text-lg font-bold text-gray-900">

                BioLean<span className="text-emerald-600">Lab</span>

              </span>

            </div>

            <p className="text-sm text-gray-600 font-medium">

              © {new Date().getFullYear()} BioLeanLab. All rights reserved.

            </p>

            <p className="text-sm text-gray-500 leading-relaxed max-w-md">

              Science-based weight loss and supplement insights to help you make informed health decisions.

            </p>

            <p className="text-xs text-gray-500 pt-2">

              Some links are affiliate links. We may earn a commission at no extra cost to you.

            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">

            <div>

              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Legal</h4>

              <div className="flex flex-col gap-3">

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

              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Content</h4>

              <div className="flex flex-col gap-3">

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

