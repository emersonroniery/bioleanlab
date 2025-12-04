// lib/seo.ts

import { PostMeta } from "./posts";


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";

const SITE_NAME = "BioLeanLab";

const DEFAULT_DESCRIPTION = "Science-based weight loss, metabolism, and supplement information.";

// Tenta usar JPG, fallback para SVG se JPG não existir
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;


export type SEOProps = {

  title?: string;

  description?: string;

  canonical?: string;

  ogImage?: string;

  ogType?: "website" | "article";

  article?: {

    publishedTime?: string;

    modifiedTime?: string;

    authors?: string[];

    tags?: string[];

  };

  noindex?: boolean;

};


export function generateSEOTags(props: SEOProps) {

  const title = props.title ? `${props.title} – ${SITE_NAME}` : `${SITE_NAME} – Science-Based Weight Loss & Supplements`;

  const description = props.description || DEFAULT_DESCRIPTION;

  const canonical = props.canonical || SITE_URL;

  const ogImage = props.ogImage || DEFAULT_OG_IMAGE;

  const ogType = props.ogType || "website";


  return {

    title,

    description,

    canonical,

    openGraph: {

      title,

      description,

      url: canonical,

      siteName: SITE_NAME,

      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],

      type: ogType,

      ...(props.article && {

        publishedTime: props.article.publishedTime,

        modifiedTime: props.article.modifiedTime,

        authors: props.article.authors,

        tags: props.article.tags,

      }),

    },

    twitter: {

      card: "summary_large_image",

      title,

      description,

      images: [ogImage],

    },

    robots: {

      index: !props.noindex,

      follow: !props.noindex,

    },

  };

}


export function generateArticleJSONLD(post: PostMeta) {

  const url = `${SITE_URL}/blog/${post.slug}`;

  const publishedTime = new Date(post.date).toISOString();


  return {

    "@context": "https://schema.org",

    "@type": "Article",

    headline: post.title,

    description: post.description,

    image: post.coverImage ? `${SITE_URL}${post.coverImage}` : undefined,

    datePublished: publishedTime,

    dateModified: publishedTime,

    author: {

      "@type": "Organization",

      name: SITE_NAME,

      url: SITE_URL,

    },

    publisher: {

      "@type": "Organization",

      name: SITE_NAME,

      url: SITE_URL,

    },

    mainEntityOfPage: {

      "@type": "WebPage",

      "@id": url,

    },

    keywords: post.tags?.join(", "),

  };

}


export function generateWebsiteJSONLD() {

  return {

    "@context": "https://schema.org",

    "@type": "WebSite",

    name: SITE_NAME,

    url: SITE_URL,

    description: DEFAULT_DESCRIPTION,

    potentialAction: {

      "@type": "SearchAction",

      target: `${SITE_URL}/blog?q={search_term_string}`,

      "query-input": "required name=search_term_string",

    },

  };

}


export function generateBreadcrumbJSONLD(items: { name: string; url: string }[]) {

  return {

    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({

      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,

    })),

  };

}

