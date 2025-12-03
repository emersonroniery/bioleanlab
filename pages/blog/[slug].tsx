// pages/blog/[slug].tsx

import Head from "next/head";

import Layout from "../../components/Layout";

import { GetStaticProps, GetStaticPaths } from "next";

import { getPostBySlug, getPostSlugs, PostMeta } from "../../lib/posts";

import { formatDateLong } from "../../lib/dateUtils";

import AdBlock from "../../components/AdBlock";

import Sidebar from "../../components/Sidebar";

import AffiliateCTA from "../../components/AffiliateCTA";

import Disclaimer from "../../components/Disclaimer";



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



      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Main Content */}

          <article className="lg:col-span-8">

            <header className="mb-12 pb-10 border-b border-gray-100">

              <div className="mb-6">

                <time className="text-sm font-semibold text-gray-500 uppercase tracking-wider">

                  {formatDateLong(post.meta.date)}

                </time>

              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 text-balance">

                {post.meta.title}

              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-8 text-balance">

                {post.meta.description}

              </p>

              {post.meta.tags.length > 0 && (

                <div className="flex flex-wrap gap-2.5">

                  {post.meta.tags.map((tag) => (

                    <span

                      key={tag}

                      className="px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-semibold rounded-full border border-emerald-200 shadow-sm"

                    >

                      {tag}

                    </span>

                  ))}

                </div>

              )}

            </header>



            {/* AdSense Top - After Header */}

            <AdBlock slot="top" />



            {/* Disclaimer */}

            <Disclaimer />



            {/* Main Content */}

            <div

              className="prose prose-lg prose-emerald max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:marker:text-emerald-600"

              dangerouslySetInnerHTML={{ __html: post.contentHtml }}

            />



            {/* Affiliate CTA - Middle of Content (you can move this based on content) */}

            {/* Use productKey para usar configuração de lib/affiliateLinks.ts */}

            <AffiliateCTA productKey="metabolismSupplement" />



            {/* AdSense Bottom - Before Footer */}

            <AdBlock slot="bottom" />

          </article>



          {/* Sidebar */}

          <aside className="lg:col-span-4">

            <div className="sticky top-24">

              <Sidebar />

            </div>

          </aside>

        </div>

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

