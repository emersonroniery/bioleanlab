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



      <div className="max-w-6xl mx-auto py-12 px-4">

        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h1>

        <div className="grid md:grid-cols-3 gap-6">

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

