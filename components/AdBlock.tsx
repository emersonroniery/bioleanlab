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

    <div className={`my-8 w-full ${className}`}>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center">

        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">

          Advertisement Placeholder

        </div>

        <div className="text-sm text-gray-400 mb-2">

          Ad space {slot ? `(${slot})` : ""}

        </div>

        <div className="mt-4 text-xs text-gray-500 space-y-1">

          <div>📋 Veja ADSENSE_SETUP.md para instruções</div>

          <div>💡 Substitua por: &lt;GoogleAdSense adSlot="..." /&gt;</div>

        </div>

      </div>

    </div>

  );

}

