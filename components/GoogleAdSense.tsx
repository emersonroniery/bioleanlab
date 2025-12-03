// components/GoogleAdSense.tsx

import Script from "next/script";



type Props = {

  adSlot: string;

  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";

  style?: React.CSSProperties;

  className?: string;

};



export default function GoogleAdSense({

  adSlot,

  adFormat = "auto",

  style,

  className = "",

}: Props) {

  // Publisher ID do AdSense

  const publisherId = "ca-pub-8722885403333098";



  return (

    <>

      {/* AdSense Script já está no Layout.tsx - não precisa duplicar */}



      {/* Ad Unit */}

      <div className={`my-8 ${className}`} style={style}>

        <ins

          className="adsbygoogle"

          style={{ display: "block", ...style }}

          data-ad-client={publisherId}

          data-ad-slot={adSlot}

          data-ad-format={adFormat}

          data-full-width-responsive="true"

        />

        <Script id={`adsense-${adSlot}`} strategy="lazyOnload">

          {`(adsbygoogle = window.adsbygoogle || []).push({});`}

        </Script>

      </div>

    </>

  );

}

