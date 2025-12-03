// components/Sidebar.tsx

import AdBlock from "./AdBlock";

import { affiliateLinks } from "../lib/affiliateLinks";



export default function Sidebar() {

  return (

    <aside className="space-y-6">

      {/* AdSense Slot 1 - Sidebar Top */}

      <AdBlock slot="sidebar-top" />



      {/* Recommended Products Section */}

      <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-xl p-6">

        <h3 className="text-lg font-bold text-gray-900 mb-4">

          Recommended Products

        </h3>

        <p className="text-sm text-gray-600 mb-4">

          Products we've researched and reviewed:

        </p>

        <div className="space-y-3">

          <a

            href={affiliateLinks.metabolismSupplement.url}

            target="_blank"

            rel="noopener noreferrer"

            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all group"

          >

            <div className="flex items-start justify-between gap-2">

              <div className="flex-1">

                <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">

                  {affiliateLinks.metabolismSupplement.name}

                </div>

                <div className="text-xs text-gray-600">

                  Click to learn more →

                </div>

              </div>

              <div className="flex-shrink-0">

                <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded">

                  Top Pick

                </span>

              </div>

            </div>

          </a>



          {/* Adicione mais produtos aqui seguindo o mesmo padrão */}

          <a

            href={affiliateLinks.fatLossGuide.url}

            target="_blank"

            rel="noopener noreferrer"

            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all group"

          >

            <div className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-emerald-600 transition-colors">

              {affiliateLinks.fatLossGuide.name}

            </div>

            <div className="text-xs text-gray-600">

              Click to learn more →

            </div>

          </a>

        </div>

      </div>



      {/* AdSense Slot 2 - Sidebar Middle */}

      <AdBlock slot="sidebar-middle" />



      {/* Newsletter Signup (Optional) */}

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">

        <h3 className="text-lg font-bold text-gray-900 mb-2">

          Stay Updated

        </h3>

        <p className="text-sm text-gray-600 mb-4">

          Get the latest science-based insights delivered to your inbox.

        </p>

        <form className="space-y-3">

          <input

            type="email"

            placeholder="Your email"

            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm"

          />

          <button

            type="submit"

            className="w-full px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-sm"

          >

            Subscribe

          </button>

        </form>

        <p className="text-xs text-gray-500 mt-3 text-center">

          No spam. Unsubscribe anytime.

        </p>

      </div>



      {/* AdSense Slot 3 - Sidebar Bottom */}

      <AdBlock slot="sidebar-bottom" />

    </aside>

  );

}

