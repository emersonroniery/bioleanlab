// pages/index.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { GetStaticProps } from "next";

import { getAllPosts, PostMeta } from "../lib/posts";

import PostCard from "../components/PostCard";

import Link from "next/link";

import { generateSEOTags, generateWebsiteJSONLD } from "../lib/seo";



type Props = {

  latestPosts: PostMeta[];

};



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function Home({ latestPosts }: Props) {

  const seo = generateSEOTags({

    title: "Science-Based Weight Loss & Supplements",

    description: "BioLeanLab brings evidence-informed content on weight loss, metabolism and supplements for people who want sustainable results.",

    canonical: SITE_URL,

    ogType: "website",

  });


  const websiteJSONLD = generateWebsiteJSONLD();


  return (

    <Layout>

      <Head>

        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />

        <link rel="canonical" href={seo.canonical} />


        {/* CSS Crítico Inline para Hero - Reduz LCP delay - Otimizado */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-section{background:#fff;border-bottom:1px solid #e2e8f0}
            .hero-container{max-width:56rem;margin:0 auto;padding:3rem 1rem;text-align:center}
            .hero-title{font-size:2.25rem;font-weight:800;color:#0f172a;margin-bottom:1.5rem;line-height:1.2;letter-spacing:-.025em}
            .hero-title span{display:block;margin-top:.5rem}
            .hero-subtitle{margin-top:1rem;font-size:1.05rem;color:#475569;max-width:42rem;margin-left:auto;margin-right:auto;line-height:1.625}
            @media (min-width:768px){.hero-container{padding:5rem 1rem}.hero-title{font-size:3rem}}
          `
        }} />


        {/* Open Graph */}

        <meta property="og:title" content={seo.openGraph.title} />

        <meta property="og:description" content={seo.openGraph.description} />

        <meta property="og:url" content={seo.openGraph.url} />

        <meta property="og:site_name" content={seo.openGraph.siteName} />

        <meta property="og:image" content={seo.openGraph.images[0].url} />

        <meta property="og:image:width" content={String(seo.openGraph.images[0].width)} />

        <meta property="og:image:height" content={String(seo.openGraph.images[0].height)} />

        <meta property="og:type" content={seo.openGraph.type} />


        {/* Twitter Card */}

        <meta name="twitter:card" content={seo.twitter.card} />

        <meta name="twitter:title" content={seo.twitter.title} />

        <meta name="twitter:description" content={seo.twitter.description} />

        <meta name="twitter:image" content={seo.twitter.images[0]} />


        {/* Robots */}

        <meta name="robots" content={seo.robots.index ? "index, follow" : "noindex, nofollow"} />


        {/* JSON-LD */}

        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJSONLD) }}

        />

      </Head>



      {/* Hero Section - Otimizado para LCP */}

      <section className="hero-section">

        <div className="hero-container">

          <h1 className="hero-title">

            Smarter Weight Loss

            <span style={{ display: "block", marginTop: "0.5rem" }}>Through Science.</span>

          </h1>

          <p className="hero-subtitle">

            Evidence-informed guides, honest supplement reviews, and practical habits 

            to help you make informed decisions about your health and metabolism.

          </p>

          <p className="text-xs uppercase tracking-wide text-emerald-700 mt-4">

            Trusted, no-nonsense guidance for sustainable weight loss, metabolism support and honest supplement reviews.

          </p>

          <Link

            href="/blog"

            className="mt-8 inline-flex items-center justify-center px-7 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-200"

          >

            Read Latest Articles

          </Link>

        </div>

      </section>



      {/* Latest Articles Section */}

      <section className="max-w-6xl mx-auto py-12 md:py-16 px-4">

        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">Latest Articles</h2>

        <p className="text-sm text-slate-500 mb-8">

          Recently published guides and reviews from the BioLeanLab editors.

        </p>

        <div className="grid gap-8 md:grid-cols-3">

          {latestPosts.map((post) => (

            <PostCard key={post.slug} post={post} />

          ))}

        </div>

      </section>

    </Layout>

  );

}



export const getStaticProps: GetStaticProps = async () => {

  const posts = await getAllPosts();

  return {

    props: {

      latestPosts: posts.slice(0, 3),

    },

  };

};
