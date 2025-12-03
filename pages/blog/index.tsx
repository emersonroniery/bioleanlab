// pages/blog/index.tsx

import Head from "next/head";

import Layout from "../../components/Layout";

import { GetStaticProps } from "next";

import { getAllPosts, PostMeta } from "../../lib/posts";

import PostCard from "../../components/PostCard";



type Props = {

  posts: PostMeta[];

};



export default function Blog({ posts }: Props) {

  return (

    <Layout>

      <Head>

        <title>Blog – BioLeanLab</title>

        <meta

          name="description"

          content="All articles about weight loss, metabolism, and supplements from BioLeanLab."

        />

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

