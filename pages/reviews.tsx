// pages/reviews.tsx

import Head from "next/head";

import Link from "next/link";

import Layout from "../components/Layout";

import { GetStaticProps } from "next";

import { getAllReviews, ReviewMeta } from "../lib/reviews";

import ReviewCard from "../components/ReviewCard";

import { generateSEOTags } from "../lib/seo";



type Props = {

  reviews: ReviewMeta[];

};



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function Reviews({ reviews }: Props) {

  const seo = generateSEOTags({

    title: "Supplement Reviews",

    description: "Honest and unbiased supplement reviews from BioLeanLab. Evidence-based analysis of weight loss supplements and metabolism boosters.",

    canonical: `${SITE_URL}/reviews`,

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


        {/* Twitter Card */}

        <meta name="twitter:card" content={seo.twitter.card} />

        <meta name="twitter:title" content={seo.twitter.title} />

        <meta name="twitter:description" content={seo.twitter.description} />

        <meta name="twitter:image" content={seo.twitter.images[0]} />


        {/* Robots */}

        <meta name="robots" content={seo.robots.index ? "index, follow" : "noindex, nofollow"} />

      </Head>



      <div className="max-w-6xl mx-auto py-12 md:py-16 px-4">

        {/* Header Section - Texto Institucional */}

        <div className="max-w-3xl mb-12">

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Supplement Reviews</h1>

          <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed">

            <p className="mb-4">

              At BioLeanLab, we provide honest, evidence-based reviews of weight loss supplements and metabolism boosters. 

              Our review process is rigorous: we analyze ingredient lists, examine scientific literature, assess safety profiles, 

              and evaluate value for money. We don't make unrealistic promises—we tell you what the science actually says.

            </p>

            <p className="mb-4">

              Every review follows our editorial standards: transparency about methodology, clear disclosure of potential 

              conflicts of interest, and honest assessment of both benefits and limitations. We evaluate products based on 

              their ingredients, scientific backing, safety profile, and real-world value.

            </p>

            <p className="mb-4">

              Our goal is simple: help you make informed decisions about which supplements might be right for you, 

              without the marketing fluff. Check back regularly for new reviews, or browse our blog for detailed articles 

              about specific supplements and their effects on metabolism and weight loss.

            </p>

            <p>

              For more details about our review methodology, editorial standards, and affiliate disclosure, please read our{" "}

              <Link href="/reviews-policy" className="text-emerald-600 hover:text-emerald-700 underline">

                Reviews Policy

              </Link>.

            </p>

          </div>

        </div>



        {/* Latest Reviews Section */}

        {reviews.length > 0 ? (

          <div className="mt-12">

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-2">Latest Reviews</h2>

            <p className="text-sm text-slate-500 mb-8">

              Browse our complete collection of science-based supplement reviews.

            </p>



            <div className="grid gap-8 md:grid-cols-3">

              {reviews.map((review, index) => (

                <ReviewCard key={review.slug} review={review} priority={index === 0} />

              ))}

            </div>

          </div>

        ) : (

          <div className="mt-12 text-center py-12 bg-slate-50 rounded-xl border border-slate-200">

            <p className="text-slate-600 mb-2">No reviews available yet.</p>

            <p className="text-sm text-slate-500">

              Check back soon for our latest supplement reviews.

            </p>

          </div>

        )}

      </div>

    </Layout>

  );

}



export const getStaticProps: GetStaticProps = async () => {

  const reviews = await getAllReviews();

  return {

    props: {

      reviews,

    },

  };

};
