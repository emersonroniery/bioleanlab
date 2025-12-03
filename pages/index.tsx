// pages/index.tsx

import Head from "next/head";

import Layout from "../components/Layout";

import { GetStaticProps } from "next";

import { getAllPosts, PostMeta } from "../lib/posts";

import PostCard from "../components/PostCard";



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



      <section className="max-w-5xl mx-auto py-12">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">

              Science-based insights for smarter weight loss.

            </h1>

            <p className="text-gray-600 mb-6">

              At BioLeanLab we break down research, habits and supplements so you

              can make informed decisions about your health and metabolism – without

              hype or miracle promises.

            </p>

            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-6">

              <li>Evidence-informed guides on metabolism and fat loss</li>

              <li>Honest supplement reviews and comparisons</li>

              <li>Practical habits you can actually follow</li>

            </ul>

          </div>

          <div className="bg-white border rounded-xl p-5 shadow-sm">

            <h2 className="text-lg font-semibold mb-3">Latest articles</h2>

            <div className="space-y-4">

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

