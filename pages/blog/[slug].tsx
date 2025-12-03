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



      <article className="max-w-3xl mx-auto py-12">

        <header className="mb-8">

          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">

            {post.meta.title}

          </h1>

          <p className="text-xs text-gray-400 mb-2">

            {new Date(post.meta.date).toLocaleDateString("en-US", {

              year: "numeric",

              month: "long",

              day: "numeric",

            })}

          </p>

          {post.meta.tags.length > 0 && (

            <div className="flex flex-wrap gap-2 mt-4">

              {post.meta.tags.map((tag) => (

                <span

                  key={tag}

                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"

                >

                  {tag}

                </span>

              ))}

            </div>

          )}

        </header>



        <AdBlock slot="top" />



        <div

          className="prose prose-sm max-w-none"

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

