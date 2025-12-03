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



      <section className="max-w-5xl mx-auto py-12">

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

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

