// components/Layout.tsx

import Head from "next/head";

import dynamic from "next/dynamic";

import Header from "./Header";

import { ReactNode } from "react";



// Lazy load Footer para reduzir JavaScript inicial

const Footer = dynamic(() => import("./Footer"), {

  loading: () => null, // Footer não precisa de loading state

});



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

        <link rel="alternate icon" href="/favicon.svg" />

        {/* Google AdSense Script já está no _app.tsx */}

      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50 antialiased">

        <Header />

        <main className="flex-1 pt-16">

          {children}

        </main>

        <Footer />

      </div>

    </>

  );

}

