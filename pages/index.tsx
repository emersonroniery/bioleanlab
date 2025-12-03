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
      <section className="relative bg-white border-b border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-white to-white"></div>
        
        <div className="relative max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-emerald-50 border border-emerald-100 rounded-full">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span className="text-xs font-semibold text-emerald-700 tracking-wide">SCIENCE-BASED CONTENT</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-5">
              Smarter Weight Loss
              <span className="block text-emerald-600 mt-2">
                Through Science
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Evidence-informed guides, honest supplement reviews, and practical habits 
              to help you make informed decisions about your health and metabolism.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              <Link 
                href="/blog"
                className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md text-sm"
              >
                Explore Articles
              </Link>
              <Link 
                href="/reviews"
                className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg border border-emerald-600 hover:bg-emerald-50 transition-colors shadow-sm hover:shadow-md text-sm"
              >
                Read Reviews
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-16">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-emerald-300 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Evidence-Based</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Research-backed guides on metabolism and fat loss</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-emerald-300 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Honest Reviews</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Unbiased supplement reviews and comparisons</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-emerald-300 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Practical Tips</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Actionable habits you can actually follow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">Latest Articles</h2>
              <p className="text-base text-gray-600">Stay updated with our newest science-based content</p>
            </div>
            <Link 
              href="/blog" 
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

