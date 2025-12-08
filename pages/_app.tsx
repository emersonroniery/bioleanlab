// pages/_app.tsx

import type { AppProps } from "next/app";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {

  const [shouldLoadAdSense, setShouldLoadAdSense] = useState(false);

  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {

    // Detecta se é mobile ou desktop

    const checkMobile = () => {

      // Usa window.innerWidth para detectar mobile (mais confiável que userAgent)

      const isMobileDevice = window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      setIsMobile(isMobileDevice);

      return isMobileDevice;

    };



    const mobile = checkMobile();



    if (mobile) {

      // MOBILE: Carrega AdSense após 2 segundos ou interação (otimizado para performance)

      const timer = setTimeout(() => {

        setShouldLoadAdSense(true);

      }, 2000); // Reduzido para 2s no mobile



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

    } else {

      // DESKTOP: Carrega AdSense imediatamente (desktop tem mais recursos)

      setShouldLoadAdSense(true);

    }

  }, []);



  return (

    <>
      <GoogleTagManager gtmId="GTM-T6PG7DWP" />

      {/* Google AdSense Script - Estratégia adaptativa: mobile delay, desktop imediato */}

      {shouldLoadAdSense && (

        <Script

          async

          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8722885403333098"

          crossOrigin="anonymous"

          strategy={isMobile ? "lazyOnload" : "afterInteractive"}

        />

      )}

      <Component {...pageProps} />

    </>

  );

}

