// components/Layout.tsx

import Head from "next/head";

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

      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50">

        <Header />

        <main className="flex-1 px-4 sm:px-6 lg:px-0">

          {children}

        </main>

        <Footer />

      </div>

    </>

  );

}

