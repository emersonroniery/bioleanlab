// pages/privacy-policy.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { generateSEOTags } from "../lib/seo";



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function PrivacyPolicy() {

  const seo = generateSEOTags({

    title: "Privacy Policy",

    description: "Privacy Policy for BioLeanLab. Learn how we collect, use, and protect your information.",

    canonical: `${SITE_URL}/privacy-policy`,

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

          Privacy Policy

        </h1>



        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-headings:text-slate-900">

          <p className="text-slate-600 mb-6">

            Last updated: {new Date().toLocaleDateString("en-US", {

              year: "numeric",

              month: "long",

              day: "numeric",

            })}

          </p>



          <h2>Information We Collect</h2>

          <p>

            We collect information that you provide directly to us, such as when you subscribe to our newsletter, 

            leave a comment, or contact us. This may include your name, email address, and any other information 

            you choose to provide.

          </p>



          <h2>How We Use Your Information</h2>

          <p>

            We use the information we collect to:

          </p>

          <ul>

            <li>Send you newsletters and updates</li>

            <li>Respond to your inquiries</li>

            <li>Improve our website and services</li>

            <li>Comply with legal obligations</li>

          </ul>



          <h2>Cookies and Tracking</h2>

          <p>

            We use cookies and similar tracking technologies to track activity on our website and hold certain information. 

            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

          </p>



          <h2>Third-Party Services</h2>

          <p>

            We use third-party services such as Google AdSense and analytics tools that may collect information about 

            your use of our website. These services have their own privacy policies.

          </p>



          <h2>Affiliate Links</h2>

          <p>

            Some links on our website are affiliate links. We may earn a commission if you make a purchase through 

            these links at no extra cost to you.

          </p>



          <h2>Contact Us</h2>

          <p>

            If you have questions about this Privacy Policy, please contact us through our{" "}

            <a href="/contact" className="text-emerald-600 hover:text-emerald-700 underline">contact page</a>.

          </p>

        </div>

      </div>

    </Layout>

  );

}
