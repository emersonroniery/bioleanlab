// pages/index.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { GetStaticProps } from "next";

import { getAllPosts, PostMeta } from "../lib/posts";

import PostCard from "../components/PostCard";

import Link from "next/link";



type Props = {

  latestPosts: PostMeta[];

};



export default function Home({ latestPosts }: Props) {

  return (

    <Layout>

      <Head>

        <title>BioLeanLab – Science-Based Weight Loss & Supplements</title>

        <meta

          name="description"

          content="BioLeanLab brings evidence-informed content on weight loss, metabolism and supplements for people who want sustainable results."

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

