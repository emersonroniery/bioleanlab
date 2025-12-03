// lib/posts.ts

import fs from "fs";

import path from "path";

import matter from "gray-matter";

import { remark } from "remark";

import html from "remark-html";



const postsDirectory = path.join(process.cwd(), "posts");



export type PostMeta = {

  slug: string;

  title: string;

  description: string;

  date: string;

  tags: string[];

  featured?: boolean;

};



export async function getPostSlugs() {

  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));

}



export async function getPostBySlug(slug: string) {

  const realSlug = slug.replace(/\.md$/, "");

  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");



  const { data, content } = matter(fileContents);



  const processedContent = await remark().use(html).process(content);

  const contentHtml = processedContent.toString();



  return {

    slug: realSlug,

    meta: {

      slug: realSlug,

      title: data.title ?? "",

      description: data.description ?? "",

      date: data.date ?? "",

      tags: data.tags ?? [],

      featured: data.featured ?? false,

    } as PostMeta,

    contentHtml,

  };

}



export async function getAllPosts() {

  const slugs = await getPostSlugs();



  const posts = await Promise.all(

    slugs.map(async (slug) => {

      const { meta } = await getPostBySlug(slug);

      return meta;

    })

  );



  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));

}

