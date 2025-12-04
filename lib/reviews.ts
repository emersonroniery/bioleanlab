// lib/reviews.ts
// Sistema de reviews reutilizando a infraestrutura de posts
// Filtra posts que têm tag "reviews" ou "review" no frontmatter

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { processExternalLinks } from "./htmlUtils";

const postsDirectory = path.join(process.cwd(), "posts");

export type ReviewMeta = {
  slug: string;
  title: string;
  summary?: string;
  description?: string; // Fallback para summary
  date: string;
  productName?: string | null;
  rating?: number | null;
  affiliateLink?: string | null;
  tags: string[];
  featured?: boolean;
  coverImage?: string | null;
};

/**
 * Verifica se um post é um review baseado nas tags
 */
function isReview(tags: string[]): boolean {
  if (!tags || !Array.isArray(tags)) return false;
  return tags.some(tag => 
    tag.toLowerCase() === "reviews" || 
    tag.toLowerCase() === "review"
  );
}

/**
 * Gera um resumo/excerpt a partir do conteúdo
 */
function generateExcerpt(content: string, maxLength: number = 150): string {
  // Remove markdown syntax básico
  const plainText = content
    .replace(/^#+\s+/gm, "") // Remove headers
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.*?)\*/g, "$1") // Remove italic
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Remove links
    .replace(/---/g, "") // Remove separadores
    .trim();
  
  if (plainText.length <= maxLength) return plainText;
  
  // Corta no último espaço antes do limite
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + "..."
    : truncated + "...";
}

/**
 * Obtém todos os reviews (posts com tag "reviews" ou "review")
 */
export async function getAllReviews(): Promise<ReviewMeta[]> {
  const allFiles = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
  
  const reviews = await Promise.all(
    allFiles.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      
      // Verifica se é um review
      const tags = data.tags || [];
      if (!isReview(tags)) {
        return null;
      }
      
      const slug = filename.replace(/\.md$/, "");
      
      // Gera summary se não existir
      let summary = data.summary || data.description || "";
      if (!summary) {
        const { content } = matter(fileContents);
        summary = generateExcerpt(content);
      }
      
      return {
        slug,
        title: data.title ?? "",
        summary,
        description: data.description || summary,
        date: data.date ?? "",
        productName: data.productName || null,
        rating: data.rating !== undefined ? Number(data.rating) : null,
        affiliateLink: data.affiliateLink || null,
        tags,
        featured: data.featured ?? false,
        coverImage: data.coverImage ?? null,
      } as ReviewMeta;
    })
  );
  
  // Filtra nulls e ordena por data (mais recente primeiro)
  return reviews
    .filter((review): review is ReviewMeta => review !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Obtém um review específico por slug
 */
export async function getReviewBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Review not found: ${slug}`);
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  // Verifica se é um review
  const tags = data.tags || [];
  if (!isReview(tags)) {
    throw new Error(`File ${slug} is not a review (missing "reviews" tag)`);
  }
  
  // Processa conteúdo Markdown para HTML
  const processedContent = await remark().use(html).process(content);
  let contentHtml = processedContent.toString();
  
  // Processa links externos (adiciona rel="noopener noreferrer" e rel="sponsored" para afiliados)
  contentHtml = processExternalLinks(contentHtml);
  
  // Gera summary se não existir
  let summary = data.summary || data.description || "";
  if (!summary) {
    summary = generateExcerpt(content);
  }
  
  return {
    slug: realSlug,
    meta: {
      slug: realSlug,
      title: data.title ?? "",
      summary,
      description: data.description || summary,
      date: data.date ?? "",
      productName: data.productName || null,
      rating: data.rating !== undefined ? Number(data.rating) : null,
      affiliateLink: data.affiliateLink || null,
      tags,
      featured: data.featured ?? false,
      coverImage: data.coverImage ?? null,
    } as ReviewMeta,
    contentHtml,
  };
}

/**
 * Obtém todos os slugs de reviews (para getStaticPaths)
 */
export async function getReviewSlugs(): Promise<string[]> {
  const allFiles = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
  
  const reviewSlugs = await Promise.all(
    allFiles.map(async (filename) => {
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      
      const tags = data.tags || [];
      if (!isReview(tags)) {
        return null;
      }
      
      return filename.replace(/\.md$/, "");
    })
  );
  
  return reviewSlugs.filter((slug): slug is string => slug !== null);
}

