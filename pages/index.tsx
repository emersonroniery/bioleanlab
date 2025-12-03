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
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30">
        <div className="max-w-6xl mx-auto py-12 sm:py-16 px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-block mb-3">
              <span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                Science-Based Health Content
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              Smarter Weight Loss
              <span className="block text-emerald-600 mt-1">Through Science</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Evidence-informed guides, honest supplement reviews, and practical habits 
              to help you make informed decisions about your health and metabolism.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/blog"
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
              >
                Explore Articles
              </Link>
              <Link 
                href="/reviews"
                className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 transition-all shadow-md"
              >
                Read Reviews
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-sm">Evidence-Based</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Research-backed guides on metabolism and fat loss</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-sm">Honest Reviews</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Unbiased supplement reviews and comparisons</p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-sm">Practical Tips</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Actionable habits you can actually follow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">Latest Articles</h2>
            <p className="text-sm text-gray-600">Stay updated with our newest science-based content</p>
          </div>
          <Link 
            href="/blog" 
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md text-sm"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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

