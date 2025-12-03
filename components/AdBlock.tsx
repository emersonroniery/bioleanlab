// components/AdBlock.tsx

type Props = {

  slot?: string;

};



export default function AdBlock({ slot }: Props) {

  return (

    <div className="my-6 w-full border border-dashed border-gray-300 rounded-md p-4 text-center text-xs text-gray-500">

      {/* Depois você substitui isso pelo código do AdSense */}

      Ad space {slot ? `(${slot})` : ""}

    </div>

  );

}

