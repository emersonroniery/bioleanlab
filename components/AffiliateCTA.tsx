// components/AffiliateCTA.tsx

type Props = {

  title?: string;

  description?: string;

  ctaText?: string;

  affiliateUrl?: string;

  productName?: string;

};



export default function AffiliateCTA({

  title = "Recommended Product",

  description = "This product has been researched and reviewed by our team.",

  ctaText = "Check Price & Details",

  affiliateUrl = "https://SEU-LINK-AFILIADO-CLICKBANK-AQUI",

  productName = "Product Name",

}: Props) {

  return (

    <div className="my-8 p-6 bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 rounded-xl shadow-lg">

      <div className="flex items-start gap-4">

        <div className="flex-shrink-0">

          <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">

            <span className="text-white font-bold text-xl">✓</span>

          </div>

        </div>

        <div className="flex-1">

          <div className="mb-2">

            <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded mb-2">

              Recommended

            </span>

          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">

            {productName || title}

          </h3>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">

            {description}

          </p>

          <a

            href={affiliateUrl}

            target="_blank"

            rel="noopener noreferrer"

            className="inline-block px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"

          >

            {ctaText} →

          </a>

          <p className="text-xs text-gray-500 mt-3">

            * This is an affiliate link. We may earn a commission at no extra cost to you.

          </p>

        </div>

      </div>

    </div>

  );

}

