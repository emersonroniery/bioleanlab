// pages/reviews/[slug].tsx
// Página individual de review (baseada em pages/blog/[slug].tsx)

import Head from "next/head";
import Layout from "../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getReviewBySlug, getReviewSlugs, ReviewMeta } from "../../lib/reviews";

import ReviewSummaryBox from "../../components/ReviewSummaryBox";
import { generateSEOTags, generateBreadcrumbJSONLD } from "../../lib/seo";

type Props = {
  review: {
    slug: string;
    meta: ReviewMeta;
    contentHtml: string;
  };
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";

export default function Review({ review }: Props) {
  const canonical = `${SITE_URL}/reviews/${review.slug}`;
  const ogImage = review.meta.coverImage ? `${SITE_URL}${review.meta.coverImage}` : undefined;

  const seo = generateSEOTags({
    title: review.meta.title,
    description: review.meta.description || review.meta.summary,
    canonical,
    ogImage,
    ogType: "article",
    article: {
      publishedTime: new Date(review.meta.date).toISOString(),
      modifiedTime: new Date(review.meta.date).toISOString(),
      tags: review.meta.tags,
    },
  });

  const breadcrumbJSONLD = generateBreadcrumbJSONLD([
    { name: "Home", url: SITE_URL },
    { name: "Reviews", url: `${SITE_URL}/reviews` },
    { name: review.meta.title, url: canonical },
  ]);

  // JSON-LD para Review (Schema.org)
  const reviewJSONLD = {
    "@context": "https://schema.org",
    "@type": "Review",
    headline: review.meta.title,
    description: review.meta.description || review.meta.summary,
    image: review.meta.coverImage ? `${SITE_URL}${review.meta.coverImage}` : undefined,
    datePublished: new Date(review.meta.date).toISOString(),
    author: {
      "@type": "Organization",
      name: "BioLeanLab",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "BioLeanLab",
      url: SITE_URL,
    },
    itemReviewed: review.meta.productName ? {
      "@type": "Product",
      name: review.meta.productName,
    } : undefined,
    reviewRating: review.meta.rating !== null && review.meta.rating !== undefined ? {
      "@type": "Rating",
      ratingValue: review.meta.rating,
      bestRating: 5,
      worstRating: 0,
    } : undefined,
  };

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJSONLD) }}
        />
      </Head>

      <div className="max-w-3xl mx-auto py-12 md:py-16 px-4">
        <article className="bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            {review.meta.title}
          </h1>

          {/* Review Summary Box */}
          <ReviewSummaryBox review={review.meta} />

          <div className="bg-gray-100 p-4 rounded-md mb-6 text-sm text-gray-600 border-l-4 border-blue-500">
            <p>
              <strong>Transparency Disclosure:</strong> This content is reader-supported.
              When you buy through links on our site, we may earn an affiliate commission at no extra cost to you.
              We only recommend products based on scientific evidence and our rigorous analysis.
            </p>
          </div>



          {/* Main Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:tracking-tight prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: review.contentHtml }}
          />


        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getReviewSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const review = await getReviewBySlug(slug);

  return {
    props: {
      review,
    },
  };
};

