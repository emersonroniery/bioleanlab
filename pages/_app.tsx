// pages/_app.tsx

import type { AppProps } from "next/app";

import Script from "next/script";

import { useEffect, useState } from "react";

import "../styles/globals.css";



export default function MyApp({ Component, pageProps }: AppProps) {

  const [shouldLoadAdSense, setShouldLoadAdSense] = useState(false);



  useEffect(() => {

    // Carrega AdSense apenas após 3 segundos ou quando o usuário interage

    const timer = setTimeout(() => {

      setShouldLoadAdSense(true);

    }, 3000);



    // Carrega imediatamente se o usuário interagir (scroll, click, etc.)

    const handleInteraction = () => {

      setShouldLoadAdSense(true);

      clearTimeout(timer);

    };



    window.addEventListener("scroll", handleInteraction, { once: true, passive: true });

    window.addEventListener("click", handleInteraction, { once: true });

    window.addEventListener("touchstart", handleInteraction, { once: true, passive: true });



    return () => {

      clearTimeout(timer);

      window.removeEventListener("scroll", handleInteraction);

      window.removeEventListener("click", handleInteraction);

      window.removeEventListener("touchstart", handleInteraction);

    };

  }, []);



  return (

    <>

      {/* Google AdSense Script - Carregado apenas quando necessário */}

      {shouldLoadAdSense && (

        <Script

          async

          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8722885403333098"

          crossOrigin="anonymous"

          strategy="lazyOnload"

        />

      )}

      <Component {...pageProps} />

    </>

  );

}

