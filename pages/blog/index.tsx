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
      <section className="bg-gradient-to-br from-emerald-50 to-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto py-12 px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Science-based articles about weight loss, metabolism, and supplements 
            to help you make informed health decisions.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
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

      posts,

    },

  };

};

