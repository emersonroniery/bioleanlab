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



      <div className="max-w-3xl mx-auto py-12 md:py-16 px-4">

        <article className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm">

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">

            {post.meta.title}

          </h1>

          <time className="text-xs text-slate-400 block mb-6">

            {new Date(post.meta.date).toLocaleDateString("en-US", {

              year: "numeric",

              month: "long",

              day: "numeric",

            })}

          </time>



          {/* AdBlock Top */}

          <div className="my-6">

            <AdBlock slot="top-article" />

          </div>



          {/* Main Content */}

          <div

            className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900"

            dangerouslySetInnerHTML={{ __html: post.contentHtml }}

          />



          {/* AdBlock Bottom */}

          <div className="my-6">

            <AdBlock slot="bottom-article" />

          </div>

        </article>

      </div>

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

