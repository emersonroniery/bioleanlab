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
          <p className="mb-6">
            Welcome to BioLeanLab, your trusted source for science-based insights on weight management, natural supplementation, and metabolic health.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            In a world filled with conflicting health advice, BioLeanLab aims to cut through the noise. We analyze the latest research and market trends to provide clear, actionable guides for those looking to optimize their health naturally.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">How We Work</h2>
          <p className="mb-6">
            Our editorial process is rigorous. We review nutritional studies, analyze supplement ingredients, and aggregate user feedback to ensure our reviews are comprehensive and unbiased. Whether you are looking to understand the science behind thermogenesis or find a supplement that actually works, we are here to help.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-900 mt-8">
            <p className="text-sm text-slate-600 font-medium">
              <strong>Disclaimer:</strong> The content on this site is for informational purposes only and is not intended to substitute professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
