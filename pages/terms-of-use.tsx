// pages/terms-of-use.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { generateSEOTags } from "../lib/seo";



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function TermsOfUse() {

  const seo = generateSEOTags({

    title: "Terms of Use",

    description: "Terms of Use for BioLeanLab. Read our terms and conditions for using our website.",

    canonical: `${SITE_URL}/terms-of-use`,

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

          Terms of Use

        </h1>



        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-headings:text-slate-900">

          <p className="text-slate-600 mb-6">

            Last updated: {new Date().toLocaleDateString("en-US", {

              year: "numeric",

              month: "long",

              day: "numeric",

            })}

          </p>



          <h2>Acceptance of Terms</h2>

          <p>

            By accessing and using BioLeanLab, you accept and agree to be bound by the terms and provision of this agreement.

          </p>



          <h2>Medical Disclaimer</h2>

          <p>

            The content on this website is for informational purposes only and is not intended as medical advice. 

            Always consult with a healthcare professional before starting any supplement regimen or making significant 

            changes to your diet or exercise routine.

          </p>



          <h2>Affiliate Disclosure</h2>

          <p>

            Some links on this website are affiliate links. We may earn a commission if you make a purchase through 

            these links at no extra cost to you. This helps us maintain and improve our website.

          </p>



          <h2>Content Accuracy</h2>

          <p>

            While we strive to provide accurate information, we make no representations or warranties about the 

            completeness, accuracy, or reliability of any information on this website.

          </p>



          <h2>Intellectual Property</h2>

          <p>

            All content on this website, including text, graphics, logos, and images, is the property of BioLeanLab 

            and is protected by copyright laws.

          </p>



          <h2>Limitation of Liability</h2>

          <p>

            BioLeanLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages 

            resulting from your use of this website.

          </p>



          <h2>Contact Us</h2>

          <p>

            If you have questions about these Terms of Use, please contact us through our{" "}

            <a href="/contact" className="text-emerald-600 hover:text-emerald-700 underline">contact page</a>.

          </p>

        </div>

      </div>

    </Layout>

  );

}
