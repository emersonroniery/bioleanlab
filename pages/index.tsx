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



      <section className="max-w-6xl mx-auto py-16 px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div className="space-y-6">

            <div className="space-y-4">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">

                Science-based insights for smarter weight loss.

              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">

                At BioLeanLab we break down research, habits and supplements so you

                can make informed decisions about your health and metabolism – without

                hype or miracle promises.

              </p>

            </div>

            <ul className="space-y-3 pt-4">

              <li className="flex items-start gap-3">

                <span className="mt-1.5 flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full"></span>

                <span className="text-base text-gray-700">Evidence-informed guides on metabolism and fat loss</span>

              </li>

              <li className="flex items-start gap-3">

                <span className="mt-1.5 flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full"></span>

                <span className="text-base text-gray-700">Honest supplement reviews and comparisons</span>

              </li>

              <li className="flex items-start gap-3">

                <span className="mt-1.5 flex-shrink-0 w-2 h-2 bg-emerald-600 rounded-full"></span>

                <span className="text-base text-gray-700">Practical habits you can actually follow</span>

              </li>

            </ul>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-lg">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-bold text-gray-900">Latest articles</h2>

              <Link 

                href="/blog" 

                className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"

              >

                View all →

              </Link>

            </div>

            <div className="space-y-5">

              {latestPosts.map((post) => (

                <PostCard key={post.slug} post={post} />

              ))}

            </div>

          </div>

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

