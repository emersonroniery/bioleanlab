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



      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Main Content */}

          <article className="lg:col-span-8">

            <header className="mb-8 pb-8 border-b border-gray-200">

              <div className="mb-4">

                <time className="text-xs font-medium text-gray-500 uppercase tracking-wide">

                  {formatDateLong(post.meta.date)}

                </time>

              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">

                {post.meta.title}

              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">

                {post.meta.description}

              </p>

              {post.meta.tags.length > 0 && (

                <div className="flex flex-wrap gap-2">

                  {post.meta.tags.map((tag) => (

                    <span

                      key={tag}

                      className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded border border-emerald-200"

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

              className="prose prose-base sm:prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:marker:text-emerald-600 prose-li:my-2 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3"

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

            <div className="sticky top-20">

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

