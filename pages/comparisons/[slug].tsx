import Head from "next/head";
import Layout from "../../components/Layout";
import { generateSEOTags } from "../../lib/seo";
import { GetStaticPaths, GetStaticProps } from "next";
import ProductComparisonTable from "../../components/ProductComparisonTable";
import { AFFILIATE_LINKS } from "../../config/affiliates";
import PrimaryCTA from "../../components/PrimaryCTA";
import AuthorBio from "../../components/AuthorBio";

// This is a simplified static implementation. Ideally, this would be data-driven.
// For now, we scaffold the route.

const comparisons = [
    {
        slug: "mitolyn-vs-ikaria",
        productA: "Mitolyn",
        productB: "Ikaria Lean Belly Juice",
        highlightA: "Mitochondrial Support",
        highlightB: "Ceramide Control",
        winner: "Mitolyn (for faster results)",
        products: [
            { name: "Mitolyn", rating: 4.9, highlight: "Mitochondria", bestFor: "Stubborn Fat", priceLevel: "$$$", link: AFFILIATE_LINKS.mitolyn?.url || "#" },
            { name: "Ikaria", rating: 4.8, highlight: "Detox", bestFor: "General Wellness", priceLevel: "$$", link: AFFILIATE_LINKS.ikaria?.url || "#" }
        ]
    }
];

export default function ComparisonPage({ comparison }: { comparison: typeof comparisons[0] }) {
    if (!comparison) return <div>Comparison not found</div>;

    const title = `${comparison.productA} vs ${comparison.productB}: Which One Wins in 2025?`;
    const description = `Detailed comparison: ${comparison.productA} versus ${comparison.productB}. We compare ingredients, side effects, price, and results to help you decide.`;

    const seo = generateSEOTags({
        title,
        description,
        canonical: `https://bioleanlab.com/comparisons/${comparison.slug}`,
        ogType: "article",
    });

    return (
        <Layout>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>

            <div className="max-w-4xl mx-auto py-12 md:py-16 px-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-center">
                    {comparison.productA} vs {comparison.productB}
                </h1>
                <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                    Stuck between {comparison.productA} and {comparison.productB}? We put them head-to-head.
                </p>

                <ProductComparisonTable products={comparison.products} />

                <div className="prose prose-lg max-w-none mt-12">
                    <h2 className="font-bold">The Verdict</h2>
                    <p>
                        Both supplements are high-quality, but they target different mechanisms.
                    </p>
                    <p>
                        <strong>Choose {comparison.productA} if:</strong> You want {comparison.highlightA} and are focused on {comparison.winner.includes(comparison.productA) ? "fast action" : "specific results"}.
                    </p>
                    <p>
                        <strong>Choose {comparison.productB} if:</strong> You prefer {comparison.highlightB}.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 my-12">
                        <div className="flex-1">
                            <PrimaryCTA productName={comparison.productA} href={comparison.products[0].link} className="bg-emerald-50 border-emerald-200" />
                        </div>
                        <div className="flex-1">
                            <PrimaryCTA productName={comparison.productB} href={comparison.products[1].link} className="bg-blue-50 border-blue-200" />
                        </div>
                    </div>

                    <AuthorBio />
                </div>
            </div>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = comparisons.map((c) => ({
        params: { slug: c.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const comparison = comparisons.find((c) => c.slug === slug);

    return {
        props: {
            comparison,
        },
    };
};
