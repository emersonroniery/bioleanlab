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
        
        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-h2:text-slate-900 prose-h2:mt-10 prose-h2:mb-4">
          <p className="lead text-xl text-slate-600 mb-8">
            Welcome to BioLeanLab, an independent resource dedicated to analyzing weight management supplements and metabolic health strategies through a science-first lens.
          </p>

          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p>
            BioLeanLab is led by a team of independent health researchers and supplement analysts. We are not doctors, but we are passionate data nerds who believe that health decisions should be based on evidence, not marketing hype.
          </p>
          <p>
            Our lead analyst is a dedicated <strong>Health Research Analyst</strong> with years of experience navigating the complex world of nutritional supplements. Our goal is to translate dense scientific studies into clear, actionable advice for your wellness journey.
          </p>

          <h2 className="text-2xl font-bold">Our Methodology: Evidence-Informed Analysis</h2>
          <p>
            We take a rigorous approach to every review. We don't just read the label; we analyze it. Our process includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Ingredient Audits:</strong> We verify if dosages match clinical trials.</li>
            <li><strong>Safety Checks:</strong> We flag potential allergens, proprietary blends, and manufacturing standards (GMP, FDA-registered facilities).</li>
            <li><strong>Real User Feedback:</strong> We aggregate verified customer reviews to identify common side effects and success rates.</li>
            <li><strong>Scientific Backing:</strong> We cite peer-reviewed studies to validate (or debunk) health claims.</li>
          </ul>

          <h2 className="text-2xl font-bold">Transparency & Affiliate Disclosure</h2>
          <p>
            Integrity is our currency. To keep this site free and accessible, BioLeanLab is reader-supported. This means:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>We may earn an affiliate commission if you purchase a product through our links, at no extra cost to you.</li>
            <li><strong>We never accept payment to write positive reviews.</strong> If a product doesn't work, we say so.</li>
            <li>Our editorial content is entirely independent of our affiliate partnerships.</li>
          </ul>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mt-8 mb-8">
            <h3 className="text-lg font-bold text-blue-900 m-0 mb-2">Our Promise</h3>
            <p className="text-blue-800 m-0">
              We do not promise miracle cures. We promise honest, critical analysis to help you make informed choices for your body.
            </p>
          </div>

          <h2 className="text-2xl font-bold">Medical Disclaimer</h2>
          <p>
            The content on BioLeanLab is for informational purposes only. It is not intended to substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition or a new supplement regimen.
          </p>
        </div>
      </div>
    </Layout>
  );
}
