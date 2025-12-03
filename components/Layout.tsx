// components/Layout.tsx

import Head from "next/head";

import Script from "next/script";

import Header from "./Header";

import Footer from "./Footer";

import { ReactNode } from "react";



type Props = {

  children: ReactNode;

};



export default function Layout({ children }: Props) {

  return (

    <>

      <Head>

        <meta charSet="utf-8" />

        <meta

          name="viewport"

          content="width=device-width, initial-scale=1"

        />

        {/* Google AdSense Verification Code */}

        <script

          async

          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8722885403333098"

          crossOrigin="anonymous"

        ></script>

      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">

        <Header />

        <main className="flex-1">

          {children}

        </main>

        <Footer />

      </div>

    </>

  );

}

