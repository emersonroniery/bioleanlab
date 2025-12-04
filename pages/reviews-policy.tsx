// pages/reviews-policy.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { generateSEOTags } from "../lib/seo";



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function ReviewsPolicy() {

  const seo = generateSEOTags({

    title: "Reviews Policy",

    description: "Learn about BioLeanLab's editorial standards, review methodology, and affiliate disclosure policy.",

    canonical: `${SITE_URL}/reviews-policy`,

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

          Reviews Policy – BioLeanLab

        </h1>



        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-headings:text-slate-900 prose-headings:tracking-tight">

          <p className="mb-6">

            At BioLeanLab, our goal is to provide clear, honest, evidence-informed information about nutrition, metabolism, supplements and healthy weight management.

          </p>



          <p className="mb-6">

            We do not publish "sensational" or exaggerated reviews.  

            Every review follows these principles:

          </p>



          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">

            1. Evidence-Informed Analysis

          </h2>

          <p className="mb-6">

            When discussing ingredients, we reference publicly available scientific information, clinical studies, and established nutritional research.

          </p>



          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">

            2. No Medical Claims

          </h2>

          <p className="mb-6">

            We do not claim that any supplement cures diseases, replaces medications, or produces guaranteed results.  

            All content is for informational purposes only.

          </p>



          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">

            3. Fair Pros and Cons

          </h2>

          <p className="mb-6">

            Every supplement review includes:

          </p>

          <ul className="mb-6 list-disc pl-6 space-y-2">

            <li>advantages</li>

            <li>limitations</li>

            <li>who may benefit</li>

            <li>who should avoid it</li>

          </ul>



          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">

            4. Affiliate Disclosure

          </h2>

          <p className="mb-6">

            Some of our articles contain affiliate links.  

            If you purchase a product through these links, we may receive a small commission at no additional cost to you.  

            This helps support the maintenance of BioLeanLab.

          </p>



          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">

            5. User Safety First

          </h2>

          <p className="mb-6">

            Readers should consult a healthcare professional before starting any supplement, especially if they have medical conditions, take medications or are pregnant/breastfeeding.

          </p>



          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">

            6. Independence and Integrity

          </h2>

          <p className="mb-6">

            We do not accept payments for positive reviews.  

            Our editorial decisions are guided by transparency, honesty, and user interest.

          </p>



          <hr className="my-8 border-slate-200" />



          <p className="mb-4">

            If you have questions about our review process, contact us at:

          </p>

          <p className="font-semibold text-emerald-700">

            <a href="mailto:contact@bioleanlab.com" className="text-emerald-700 hover:text-emerald-800 underline">

              contact@bioleanlab.com

            </a>

          </p>

        </div>

      </div>

    </Layout>

  );

}
