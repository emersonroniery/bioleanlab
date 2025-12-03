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



      {/* Header Section */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-white to-emerald-50/20"></div>
        <div className="relative max-w-7xl mx-auto py-16 sm:py-20 px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-5">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Science-based articles about weight loss, metabolism, and supplements 
            to help you make informed health decisions.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-gray-50/30 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
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

      posts,

    },

  };

};

