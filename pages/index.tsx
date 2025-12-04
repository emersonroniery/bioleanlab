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



      {/* Hero Section */}

      <section className="bg-white border-b border-slate-200">

        <div className="max-w-4xl mx-auto py-12 md:py-20 px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">

            Smarter Weight Loss

            <span className="block mt-2">Through Science.</span>

          </h1>

          <p className="mt-4 text-[1.05rem] text-slate-600 max-w-2xl mx-auto leading-relaxed">

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
