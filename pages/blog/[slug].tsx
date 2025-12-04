// pages/blog/[slug].tsx

import Head from "next/head";

import Layout from "../../components/Layout";

import { GetStaticProps, GetStaticPaths } from "next";

import { getPostBySlug, getPostSlugs, PostMeta } from "../../lib/posts";

import AdBlock from "../../components/AdBlock";

import { generateSEOTags, generateArticleJSONLD, generateBreadcrumbJSONLD } from "../../lib/seo";



type Props = {

  post: {

    slug: string;

    meta: PostMeta;

    contentHtml: string;

  };

};



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";



export default function Post({ post }: Props) {

  const canonical = `${SITE_URL}/blog/${post.slug}`;

  const ogImage = post.meta.coverImage ? `${SITE_URL}${post.meta.coverImage}` : undefined;


  const seo = generateSEOTags({

    title: post.meta.title,

    description: post.meta.description,

    canonical,

    ogImage,

    ogType: "article",

    article: {

      publishedTime: new Date(post.meta.date).toISOString(),

      modifiedTime: new Date(post.meta.date).toISOString(),

      tags: post.meta.tags,

    },

  });


  const articleJSONLD = generateArticleJSONLD(post.meta);

  const breadcrumbJSONLD = generateBreadcrumbJSONLD([

    { name: "Home", url: SITE_URL },

    { name: "Blog", url: `${SITE_URL}/blog` },

    { name: post.meta.title, url: canonical },

  ]);


  return (

    <Layout>

      <Head>

        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />

        <link rel="canonical" href={seo.canonical} />


        {/* Open Graph */}

        <meta property="og:title" content={seo.openGraph.title} />

        <meta property="og:description" content={seo.openGraph.description} />

        <meta property="og:url" content={seo.openGraph.url} />

        <meta property="og:site_name" content={seo.openGraph.siteName} />

        <meta property="og:image" content={seo.openGraph.images[0].url} />

        <meta property="og:image:width" content={String(seo.openGraph.images[0].width)} />

        <meta property="og:image:height" content={String(seo.openGraph.images[0].height)} />

        <meta property="og:type" content={seo.openGraph.type} />

        {seo.openGraph.publishedTime && (

          <meta property="article:published_time" content={seo.openGraph.publishedTime} />

        )}

        {seo.openGraph.modifiedTime && (

          <meta property="article:modified_time" content={seo.openGraph.modifiedTime} />

        )}

        {seo.openGraph.tags && seo.openGraph.tags.map((tag) => (

          <meta key={tag} property="article:tag" content={tag} />

        ))}


        {/* Twitter Card */}

        <meta name="twitter:card" content={seo.twitter.card} />

        <meta name="twitter:title" content={seo.twitter.title} />

        <meta name="twitter:description" content={seo.twitter.description} />

        <meta name="twitter:image" content={seo.twitter.images[0]} />


        {/* Robots */}

        <meta name="robots" content={seo.robots.index ? "index, follow" : "noindex, nofollow"} />


        {/* JSON-LD */}

        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJSONLD) }}

        />

        <script

          type="application/ld+json"

          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJSONLD) }}

        />

      </Head>



      <div className="max-w-3xl mx-auto py-12 md:py-16 px-4">

        <article className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm">

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">

            {post.meta.title}

          </h1>

          <time className="text-xs text-slate-500 block mb-6" dateTime={post.meta.date}>

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
