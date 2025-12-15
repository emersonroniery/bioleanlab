import Head from "next/head";
import Layout from "../../components/Layout";
import PostCard from "../../components/PostCard";
import { getAllPosts, PostMeta } from "../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";

type Props = {
    category: string;
    posts: PostMeta[];
};

export default function CategoryPage({ category, posts }: Props) {
    // Capitalize first letter and replace hyphens
    const formattedCategory = category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <Layout>
            <Head>
                <title>{formattedCategory} - BioLeanLab</title>
                <meta
                    name="description"
                    content={`Read the latest articles and reviews in ${formattedCategory}.`}
                />
            </Head>

            <div className="max-w-6xl mx-auto py-12 md:py-16 px-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
                    Category: {formattedCategory}
                </h1>

                {posts.length > 0 ? (
                    <div className="grid gap-8 md:grid-cols-3">
                        {posts.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="text-slate-600">No articles found in this category.</p>
                )}
            </div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Define the categories we want to support
    const categories = ["weight-loss", "supplements", "nutrition"];

    const paths = categories.map((slug) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const allPosts = await getAllPosts();

    // Normalize category string for comparison (e.g., "weight-loss" -> "weight loss")
    const normalizedCategory = slug.replace(/-/g, " ");

    const filteredPosts = allPosts.filter((post) => {
        // Case-insensitive check if any tag matches the category
        return post.tags.some(
            (tag) => tag.toLowerCase() === normalizedCategory.toLowerCase()
        );
    });

    return {
        props: {
            category: slug,
            posts: filteredPosts,
        },
    };
};
