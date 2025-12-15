// pages/_app.tsx

import type { AppProps } from "next/app";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {





  return (

    <>
      <GoogleTagManager gtmId="GTM-T6PG7DWP" />

      <Component {...pageProps} />

    </>

  );

}

