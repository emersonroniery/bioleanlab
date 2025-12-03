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
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            Our Blog
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Science-based articles about weight loss, metabolism, and supplements 
            to help you make informed health decisions.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

