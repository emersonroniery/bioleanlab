// pages/blog/[slug].tsx

import Head from "next/head";

import Layout from "../../components/Layout";

import { GetStaticProps, GetStaticPaths } from "next";

import { getPostBySlug, getPostSlugs, PostMeta } from "../../lib/posts";

import AdBlock from "../../components/AdBlock";



type Props = {

  post: {

    slug: string;

    meta: PostMeta;

    contentHtml: string;

  };

};



export default function Post({ post }: Props) {

  return (

    <Layout>

      <Head>

        <title>{post.meta.title} – BioLeanLab</title>

        <meta name="description" content={post.meta.description} />

      </Head>



      <article className="max-w-4xl mx-auto py-12 px-6 lg:px-8">

        <header className="mb-12 pb-8 border-b border-gray-200">

          <div className="mb-4">

            <time className="text-sm font-medium text-gray-500 uppercase tracking-wide">

              {new Date(post.meta.date).toLocaleDateString("en-US", {

                year: "numeric",

                month: "long",

                day: "numeric",

              })}

            </time>

          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">

            {post.meta.title}

          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-6">

            {post.meta.description}

          </p>

          {post.meta.tags.length > 0 && (

            <div className="flex flex-wrap gap-2">

              {post.meta.tags.map((tag) => (

                <span

                  key={tag}

                  className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200"

                >

                  {tag}

                </span>

              ))}

            </div>

          )}

        </header>



        <AdBlock slot="top" />



        <div

          className="prose prose-lg prose-emerald max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:marker:text-emerald-600"

          dangerouslySetInnerHTML={{ __html: post.contentHtml }}

        />



        <AdBlock slot="bottom" />

      </article>

    </Layout>

  );

}



export const getStaticPaths: GetStaticPaths = async () => {

  const slugs = await getPostSlugs();

  const paths = slugs.map((slug) => ({

    params: { slug: slug.replace(/\.md$/, "") },

  }));



  return {

    paths,

    fallback: false,

  };

};



export const getStaticProps: GetStaticProps = async ({ params }) => {

  const slug = params?.slug as string;

  const post = await getPostBySlug(slug);



  return {

    props: {

      post,

    },

  };

};

