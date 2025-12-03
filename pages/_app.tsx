// pages/_app.tsx

import type { AppProps } from "next/app";

import Script from "next/script";

import "../styles/globals.css";



export default function MyApp({ Component, pageProps }: AppProps) {

  return (

    <>

      {/* Google AdSense Script - Adicionado globalmente */}

      <Script

        async

        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8722885403333098"

        crossOrigin="anonymous"

        strategy="lazyOnload"

      />

      <Component {...pageProps} />

    </>

  );

}

