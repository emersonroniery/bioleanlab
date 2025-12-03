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

  // Substitua pelo seu Publisher ID do AdSense

  const publisherId = "ca-pub-XXXXXXXXXXXXXXXX";



  return (

    <>

      {/* AdSense Script - Adicione apenas uma vez no _app.tsx */}

      <Script

        async

        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}

        crossOrigin="anonymous"

        strategy="lazyOnload"

      />



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

        <Script id={`adsense-${adSlot}`} strategy="afterInteractive">

          {`(adsbygoogle = window.adsbygoogle || []).push({});`}

        </Script>

      </div>

    </>

  );

}

