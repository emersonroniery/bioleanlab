// pages/about.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { generateSEOTags } from "../lib/seo";



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function About() {

  const seo = generateSEOTags({

    title: "About",

    description: "Learn more about BioLeanLab and our mission to provide science-based weight loss and supplement information.",

    canonical: `${SITE_URL}/about`,

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

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">About BioLeanLab</h1>

        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed">

          <p className="mb-4">

            BioLeanLab is an independent editorial platform dedicated to providing evidence-informed content 

            about weight loss, metabolism, and supplements. Our mission is to help you make informed decisions 

            about your health based on scientific research, transparent analysis, and practical insights.

          </p>

          <p className="mb-4">

            We believe in science, not hype. Our editorial team reviews supplements with a critical eye, 

            analyzes peer-reviewed studies, and shares actionable tips grounded in real evidence. We don't 

            promise miracles—we provide honest, no-nonsense guidance for sustainable results.

          </p>

          <p>

            Our content is designed for readers in the United States, United Kingdom, and Canada who value 

            transparency and evidence-based information. We maintain editorial independence and clearly disclose 

            affiliate relationships when they exist.

          </p>

        </div>

      </div>

    </Layout>

  );

}
