// pages/sitemap.xml.tsx

import { GetServerSideProps } from "next";

import { getAllPosts } from "../lib/posts";

import { getAllReviews } from "../lib/reviews";


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bioleanlab.com";


function generateSitemap(
  posts: Array<{ slug: string; date: string }>,
  reviews: Array<{ slug: string; date: string }>
) {

  const staticPages = [

    { url: "", priority: 1.0, changefreq: "daily" },

    { url: "/blog", priority: 0.9, changefreq: "daily" },

    { url: "/reviews", priority: 0.9, changefreq: "weekly" },

    { url: "/about", priority: 0.7, changefreq: "monthly" },

    { url: "/reviews-policy", priority: 0.6, changefreq: "monthly" },

    { url: "/privacy-policy", priority: 0.5, changefreq: "yearly" },

    { url: "/terms-of-use", priority: 0.5, changefreq: "yearly" },

    { url: "/contact", priority: 0.6, changefreq: "monthly" },

    { url: "/best/weight-loss-supplements", priority: 0.9, changefreq: "weekly" },

    { url: "/comparisons/mitolyn-vs-ikaria", priority: 0.8, changefreq: "monthly" },

  ];


  const postPages = posts.map((post) => ({

    url: `/blog/${post.slug}`,

    priority: 0.8,

    changefreq: "weekly",

    lastmod: new Date(post.date).toISOString(),

  }));


  const reviewPages = reviews.map((review) => ({

    url: `/reviews/${review.slug}`,

    priority: 0.8,

    changefreq: "weekly",

    lastmod: new Date(review.date).toISOString(),

  }));


  const allPages = [...staticPages, ...postPages, ...reviewPages];


  return `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${allPages

      .map(

        (page) => `  <url>

    <loc>${SITE_URL}${page.url}</loc>

    <lastmod>${(page as any).lastmod || new Date().toISOString()}</lastmod>

    <changefreq>${page.changefreq}</changefreq>

    <priority>${page.priority}</priority>

  </url>`

      )

      .join("\n")}

</urlset>`;

}


export default function Sitemap() {

  return null;

}


export const getServerSideProps: GetServerSideProps = async ({ res }) => {

  const posts = await getAllPosts();

  const reviews = await getAllReviews();

  const sitemap = generateSitemap(
    posts.map((p) => ({ slug: p.slug, date: p.date })),
    reviews.map((r) => ({ slug: r.slug, date: r.date }))
  );


  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);

  res.end();


  return {

    props: {},

  };

};

