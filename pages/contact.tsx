// pages/contact.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { generateSEOTags } from "../lib/seo";



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function Contact() {

  const seo = generateSEOTags({

    title: "Contact",

    description: "Contact BioLeanLab for inquiries, partnerships, or general questions.",

    canonical: `${SITE_URL}/contact`,

    ogType: "website",

  });


  return (

    <Layout>

      <Head>

        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />

        <link rel="canonical" href={seo.canonical} />


        {/* Open Graph */}

        <meta property="og:title" content={seo.openGraph.title} />

        <meta property="og:description" content={seo.openGraph.description} />

        <meta property="og:url" content={seo.openGraph.url} />

        <meta property="og:site_name" content={seo.openGraph.siteName} />

        <meta property="og:image" content={seo.openGraph.images[0].url} />

        <meta property="og:type" content={seo.openGraph.type} />

      </Head>



      <div className="max-w-3xl mx-auto py-12 md:py-16 px-4">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">

          Contact Us

        </h1>



        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed">

          <p className="mb-8">

            Have a question or feedback? We'd love to hear from you.

          </p>



          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">

            <h2 className="text-2xl font-bold text-slate-900 mb-4">

              Get in Touch

            </h2>

            <p className="text-slate-600 mb-6">

              For inquiries, partnerships, or general questions, please reach out to us:

            </p>

            <div className="space-y-4">

              <div>

                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>

                <p className="text-slate-600">

                  <a href="mailto:contact@bioleanlab.com" className="text-emerald-600 hover:text-emerald-700 underline">

                    contact@bioleanlab.com

                  </a>

                </p>

              </div>

              <div>

                <h3 className="font-semibold text-slate-900 mb-1">Response Time</h3>

                <p className="text-slate-600">

                  We typically respond within 24-48 hours.

                </p>

              </div>

            </div>

          </div>



          <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">

            <h3 className="font-bold text-slate-900 mb-2">

              Media & Partnerships

            </h3>

            <p className="text-slate-700 text-sm">

              For media inquiries, guest post opportunities, or partnership proposals, 

              please include details about your request in your email.

            </p>

          </div>

        </div>

      </div>

    </Layout>

  );

}
