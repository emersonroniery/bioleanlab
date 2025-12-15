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
    title: "Best Supplements of 2025 - BioLeanLab Reviews",
    description: "Top rated supplements of 2025. Expert rankings of the best weight loss, dental, and joint health products based on effectiveness and science.",
    canonical: `${SITE_URL}/reviews`,
    ogType: "website",
  });

  const topPicks = [
    {
      name: "Mitolyn",
      badge: "#1 BEST OVERALL",
      image: "https://placehold.co/150x150/png?text=Mitolyn",
      benefit: "Boosts metabolism by maximizing mitochondrial efficiency.",
      link: "https://84d5d--v6k1a8zagyq-c2h7z2w.hop.clickbank.net",
      rating: "4.9/5"
    },
    {
      name: "ProDentim",
      badge: "BEST FOR TEETH",
      image: "https://placehold.co/150x150/png?text=ProDentim",
      benefit: "Restores oral microbiome for stronger teeth and gums.",
      link: "https://00fa0y0-4kb92v5cxbs71kw7fc.hop.clickbank.net",
      rating: "4.8/5"
    },
    {
      name: "Joint Genesis",
      badge: "BEST FOR JOINTS",
      image: "https://placehold.co/150x150/png?text=Joint+Genesis",
      benefit: "Refills synovial fluid ('joint jelly') for instant mobility.",
      link: "https://a58e5ttqyt3kdsaf19xmrdqv8w.hop.clickbank.net",
      rating: "4.9/5"
    }
  ];

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

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Supplement Reviews
          </h1>
          <p className="text-xl text-slate-600">
            Expert analysis and rankings for December 2025.
          </p>
        </div>

        {/* TOP 3 RANKING TABLE */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8 flex items-center gap-3">
            <span className="text-yellow-500 text-3xl">🏆</span> Top 3 Editor's Picks for December 2025
          </h2>

          <div className="grid gap-6">
            {topPicks.map((pick) => (
              <div key={pick.name} className="flex flex-col md:flex-row items-center bg-white border border-slate-200 rounded-xl shadow-md overflow-hidden p-6 gap-6 relative hover:shadow-xl transition-shadow duration-300">

                {/* Badge */}
                <div className="absolute top-0 left-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 uppercase rounded-br-lg shadow-sm">
                  {pick.badge}
                </div>

                {/* Image */}
                <div className="w-full md:w-40 flex-shrink-0 flex justify-center pt-6 md:pt-0">
                  <img src={pick.image} alt={pick.name} className="w-40 h-40 rounded-lg object-cover shadow-sm border border-slate-100" />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pick.name}</h3>
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                    <span className="text-slate-500 text-sm ml-2 font-medium">({pick.rating})</span>
                  </div>
                  <p className="text-slate-700 font-medium text-lg leading-relaxed">{pick.benefit}</p>
                </div>

                {/* Button */}
                <div className="w-full md:w-auto flex-shrink-0">
                  <a href={pick.link} target="_blank" rel="noopener noreferrer" className="block w-full md:w-auto text-center bg-[#ff4500] hover:bg-orange-700 text-white font-black py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 uppercase tracking-wide text-sm md:text-base">
                    Check Official Price
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEED SECTION */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">More In-Depth Reviews</h2>
            <span className="text-slate-500 text-sm hidden md:inline-block">Updated Daily</span>
          </div>

          {reviews.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-3">
              {reviews.map((review, index) => (
                <ReviewCard key={review.slug} review={review} priority={false} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-600 mb-2">No reviews available yet.</p>
              <p className="text-sm text-slate-500">Check back soon for our latest supplement reviews.</p>
            </div>
          )}
        </div>

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
