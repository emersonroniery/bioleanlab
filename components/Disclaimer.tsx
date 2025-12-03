// components/Disclaimer.tsx

export default function Disclaimer() {

  return (

    <div className="my-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">

      <div className="flex items-start gap-3">

        <div className="flex-shrink-0">

          <svg

            className="w-5 h-5 text-amber-600 mt-0.5"

            fill="none"

            stroke="currentColor"

            viewBox="0 0 24 24"

          >

            <path

              strokeLinecap="round"

              strokeLinejoin="round"

              strokeWidth={2}

              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"

            />

          </svg>

        </div>

        <div className="flex-1">

          <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">Disclaimer</h4>

          <p className="text-xs text-gray-700 leading-relaxed">

            This content is for informational purposes only and is not intended as medical advice. 

            Always consult with a healthcare professional before starting any supplement regimen or 

            making significant changes to your diet or exercise routine. Some links on this site are 

            affiliate links, and we may earn a commission at no extra cost to you.

          </p>

        </div>

      </div>

    </div>

  );

}

