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

        <div className="max-w-2xl mx-auto py-14 md:py-20 px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">

            Smarter Weight Loss

            <span className="block mt-2">Through Science.</span>

          </h1>

          <p className="text-[1.05rem] text-slate-600 max-w-2xl mx-auto mt-3 leading-relaxed">

            Evidence-informed guides, honest supplement reviews, and practical habits 

            to help you make informed decisions about your health and metabolism.

          </p>

          <Link

            href="/blog"

            className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-200 shadow-lg hover:shadow-xl"

          >

            Read Latest Articles

          </Link>

        </div>

      </section>



      {/* Latest Articles Section */}

      <section className="max-w-6xl mx-auto py-16 px-4">

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight">Latest Articles</h2>

        <div className="grid md:grid-cols-3 gap-8">

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

