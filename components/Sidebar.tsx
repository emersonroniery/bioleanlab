// components/Sidebar.tsx

import AdBlock from "./AdBlock";



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

            href="#"

            className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all"

          >

            <div className="font-semibold text-gray-900 text-sm mb-1">

              Top Metabolism Supplement

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

            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"

          />

          <button

            type="submit"

            className="w-full px-4 py-2 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"

          >

            Subscribe

          </button>

        </form>

      </div>



      {/* AdSense Slot 3 - Sidebar Bottom */}

      <AdBlock slot="sidebar-bottom" />

    </aside>

  );

}

