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
      <section className="relative overflow-hidden bg-white">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-emerald-50/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto py-20 sm:py-28 px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-emerald-700">Science-Based Health Content</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6 text-balance">
              Smarter Weight Loss
              <span className="block bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mt-2">
                Through Science
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 text-balance">
              Evidence-informed guides, honest supplement reviews, and practical habits 
              to help you make informed decisions about your health and metabolism.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/blog"
                className="group px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Explore Articles
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link 
                href="/reviews"
                className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl border-2 border-emerald-600 hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl text-base"
              >
                Read Reviews
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Evidence-Based</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Research-backed guides on metabolism and fat loss</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Honest Reviews</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Unbiased supplement reviews and comparisons</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Practical Tips</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Actionable habits you can actually follow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="relative bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3">Latest Articles</h2>
              <p className="text-lg text-gray-600">Stay updated with our newest science-based content</p>
            </div>
            <Link 
              href="/blog" 
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 font-bold rounded-xl border-2 border-emerald-600 hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg"
            >
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
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

