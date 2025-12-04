// pages/blog/index.tsx

import Head from "next/head";

import Layout from "../../components/Layout";

import { GetStaticProps } from "next";

import { getAllPosts, PostMeta } from "../../lib/posts";

import PostCard from "../../components/PostCard";

import { generateSEOTags } from "../../lib/seo";



type Props = {

  posts: PostMeta[];

};



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function Blog({ posts }: Props) {

  const seo = generateSEOTags({

    title: "Blog",

    description: "All articles about weight loss, metabolism, and supplements from BioLeanLab.",

    canonical: `${SITE_URL}/blog`,

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

      </Head>



      <div className="max-w-6xl mx-auto py-12 md:py-16 px-4">

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">All Articles</h1>

        <p className="text-sm text-slate-500 mb-8">

          Browse our complete collection of science-based articles on weight loss, metabolism, and supplements.

        </p>



        {/* Categories Bar */}

        <div className="flex flex-wrap gap-3 mb-8">

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-emerald-500 hover:text-emerald-700 cursor-default transition-colors">

            Metabolism

          </span>

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-emerald-500 hover:text-emerald-700 cursor-default transition-colors">

            Nutrition

          </span>

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-emerald-500 hover:text-emerald-700 cursor-default transition-colors">

            Supplement Reviews

          </span>

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-emerald-500 hover:text-emerald-700 cursor-default transition-colors">

            Workouts

          </span>

          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-emerald-500 hover:text-emerald-700 cursor-default transition-colors">

            Fat Loss

          </span>

        </div>



        <div className="grid gap-8 md:grid-cols-3">

          {posts.map((post) => (

            <PostCard key={post.slug} post={post} />

          ))}

        </div>

      </div>

    </Layout>

  );

}



export const getStaticProps: GetStaticProps = async () => {

  const posts = await getAllPosts();

  return {

    props: {

      posts,

    },

  };

};
