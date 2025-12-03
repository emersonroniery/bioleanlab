// components/AffiliateCTA.tsx

import { affiliateLinks } from "../lib/affiliateLinks";



type Props = {

  title?: string;

  description?: string;

  ctaText?: string;

  affiliateUrl?: string;

  productName?: string;

  productKey?: keyof typeof affiliateLinks;

};



export default function AffiliateCTA({

  title,

  description,

  ctaText,

  affiliateUrl,

  productName,

  productKey,

}: Props) {

  // Se productKey for fornecido, usa os dados do arquivo de configuração

  const product = productKey ? affiliateLinks[productKey] : null;



  const finalProductName = productName || product?.name || title || "Recommended Product";

  const finalDescription = description || product?.description || "This product has been researched and reviewed by our team.";

  const finalCtaText = ctaText || product?.ctaText || "Check Price & Details";

  const finalAffiliateUrl = affiliateUrl || product?.url || "https://SEU-LINK-AFILIADO-CLICKBANK-AQUI";

  return (

    <div className="my-10 p-5 bg-white border border-emerald-200 rounded-lg shadow-sm">

      <div className="flex items-start gap-4">

        <div className="flex-shrink-0">

          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center border border-emerald-200">

            <span className="text-emerald-600 font-bold text-lg">✓</span>

          </div>

        </div>

        <div className="flex-1">

          <div className="mb-2">

            <span className="inline-block px-2 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded border border-emerald-200">

              Recommended

            </span>

          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">

            {finalProductName}

          </h3>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">

            {finalDescription}

          </p>

          <a

            href={finalAffiliateUrl}

            target="_blank"

            rel="noopener noreferrer sponsored"

            className="inline-block px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors text-sm shadow-sm hover:shadow-md"

          >

            {finalCtaText} →

          </a>

          <p className="text-xs text-gray-500 mt-3">

            * This is an affiliate link. We may earn a commission at no extra cost to you.

          </p>

        </div>

      </div>

    </div>

  );

}

