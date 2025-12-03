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

      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 bg-slate-50 text-center">

        <p className="text-xs text-slate-500">

          Ad space {slot ? `(${slot})` : ""}

        </p>

      </div>

    </div>

  );

}

