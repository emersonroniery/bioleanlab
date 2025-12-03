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

        {/* Favicon */}

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google AdSense Script já está no _app.tsx */}

      </Head>

      <div className="min-h-screen flex flex-col bg-white">

        <Header />

        <main className="flex-1">

          {children}

        </main>

        <Footer />

      </div>

    </>

  );

}

