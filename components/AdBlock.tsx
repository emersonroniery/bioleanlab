// components/AdBlock.tsx

type Props = {

  slot?: string;

  className?: string;

};



export default function AdBlock({ slot, className = "" }: Props) {

  return (

    <div className={`my-8 w-full ${className}`}>

      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50 text-center">

        <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">

          Advertisement

        </div>

        <div className="text-sm text-gray-400">

          {/* Depois você substitui isso pelo código do AdSense */}

          Ad space {slot ? `(${slot})` : ""}

        </div>

        <div className="mt-4 text-xs text-gray-400">

          Replace with Google AdSense code

        </div>

      </div>

    </div>

  );

}

