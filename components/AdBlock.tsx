// components/AdBlock.tsx

// INSTRUÇÕES: 
// 1. Configure seu Publisher ID em components/GoogleAdSense.tsx
// 2. Configure seus Ad Slot IDs em lib/affiliateLinks.ts
// 3. Substitua este componente por GoogleAdSense nos arquivos:
//    - pages/blog/[slug].tsx
//    - components/Sidebar.tsx
// 
// Exemplo de substituição:
// import GoogleAdSense from "./GoogleAdSense";
// import { adSenseSlots } from "../lib/affiliateLinks";
// <GoogleAdSense adSlot={adSenseSlots.contentTop} />

type Props = {

  slot?: string;

  className?: string;

};



export default function AdBlock({ slot, className = "" }: Props) {

  return (

    <div className={`my-6 w-full ${className}`}>

      <div className="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50 text-center">

        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">

          Advertisement

        </div>

        <div className="text-xs text-gray-400 mb-2">

          {slot ? `Slot: ${slot}` : "Ad space"}

        </div>

        <div className="mt-3 text-xs text-gray-500">

          See ADSENSE_SETUP.md for instructions

        </div>

      </div>

    </div>

  );

}

