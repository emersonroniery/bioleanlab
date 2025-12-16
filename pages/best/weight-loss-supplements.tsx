import Head from "next/head";
import Layout from "../../components/Layout";
import { generateSEOTags } from "../../lib/seo";
import ProductComparisonTable from "../../components/ProductComparisonTable";
import { AFFILIATE_LINKS } from "../../config/affiliates";
import Link from "next/link";
import PrimaryCTA from "../../components/PrimaryCTA";

const products = [
    {
        name: "Mitolyn",
        rating: 4.9,
        highlight: "Metabolic Boost",
        bestFor: "Stubborn Fat",
        priceLevel: "$$$",
        link: AFFILIATE_LINKS.mitolyn?.url || "#",
        imageSrc: "/images/mitolyn.png",
    },
    {
        name: "ProDentim",
        rating: 4.8,
        highlight: "Oral Microbiome",
        bestFor: "Gum Health + Detox",
        priceLevel: "$$",
        link: AFFILIATE_LINKS.prodentim?.url || "#",
        imageSrc: "/images/prodentim.jpg",
    },
    {
        name: "Joint Genesis",
        rating: 4.7,
        highlight: "Synovial Fluid",
        bestFor: "Joint Pain & Mobility",
        priceLevel: "$$",
        link: AFFILIATE_LINKS["joint-genesis"]?.url || "#",
        imageSrc: "/images/joint-genesis.png",
    },
    {
        name: "Ikaria Lean Belly Juice",
        rating: 4.6,
        highlight: "Uric Acid Control",
        bestFor: "Overall Health",
        priceLevel: "$$",
        link: AFFILIATE_LINKS.ikaria?.url || "#",
        // imageSrc: "/images/ikaria.png", // Add if available
    },
];

export default function BestSupplements() {
    const seo = generateSEOTags({
        title: "Best Weight Loss Supplements 2025: Evidence-Based Ranking",
        description: "Looking for the best natural weight loss pills of 2025? We analyzed ingredients, safety, and customer reviews to rank the top effective supplements.",
        canonical: "https://bioleanlab.com/best/weight-loss-supplements",
        ogType: "article",
    });

    return (
        <Layout>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="canonical" href={seo.canonical} />
                {/* Helper Open Graph Tags could be added here if not fully handled by Layout/App */}
            </Head>

            <div className="max-w-4xl mx-auto py-12 md:py-16 px-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 text-center">
                    The 4 Best Natural Weight Loss Supplements of 2025
                </h1>
                <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                    Our research team analyzed dozens of formulas to find the few that truly support metabolic health. Here is our definitive ranking for 2025.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Comparison</h2>
                    <ProductComparisonTable products={products} />
                </section>

                <div className="prose prose-lg max-w-none prose-p:text-slate-700">
                    <p>
                        Choosing a supplement can be overwhelming. The market is flooded with ineffective pills and exaggerated claims. At BioLeanLab, we cut through the noise. We selected these products based on:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li><strong>Ingredient Transparency:</strong> No hidden proprietary blends.</li>
                        <li><strong>Scientific Evidence:</strong> Ingredients backed by clinical trials.</li>
                        <li><strong>Manufacturing Safety:</strong> FDA-registered, GMP-certified facilities.</li>
                    </ul>

                    <hr className="my-12 border-slate-200" />

                    {/* Product Breakdowns */}
                    <div className="space-y-16">
                        <div id="mitolyn">
                            <h3 className="text-2xl font-bold text-slate-900">1. Mitolyn</h3>
                            <div className="flex flex-col md:flex-row gap-6 mt-4">
                                <div className="flex-1">
                                    <p>
                                        Mitolyn takes the top spot for 2025 thanks to its focus on mitochondria function. Emerging research suggests that mitochondrial efficiency is a key factor in unexplained weight gain.
                                    </p>
                                    <p>
                                        <strong>Why we like it:</strong> It combines proven thermogenic ingredients with cellular support. It's not just a stimulant; it's a metabolic optimizer.
                                    </p>
                                    <div className="mt-4">
                                        <Link href="/reviews/mitolyn-review-2025" className="text-emerald-600 font-bold hover:underline">
                                            Read Full Mitolyn Review &rarr;
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:w-64 flex-shrink-0">
                                    <PrimaryCTA productName="Mitolyn" href={AFFILIATE_LINKS.mitolyn.url} discountText="Save $300 today" imageSrc="/images/mitolyn.png" />
                                </div>
                            </div>
                        </div>

                        <div id="prodentim">
                            <h3 className="text-2xl font-bold text-slate-900">2. ProDentim</h3>
                            <div className="flex flex-col md:flex-row gap-6 mt-4">
                                <div className="flex-1">
                                    <p>
                                        ProDentim offers a unique approach by focusing on oral health. It repopulates your mouth with beneficial bacteria, which can have surprising downstream effects on digestion and weight management.
                                    </p>
                                    <div className="mt-4">
                                        <Link href="/reviews/prodentim-review-2025" className="text-emerald-600 font-bold hover:underline">
                                            Read Full ProDentim Review &rarr;
                                        </Link>
                                    </div>
                                </div>
                                <div className="md:w-64 flex-shrink-0">
                                    <PrimaryCTA productName="ProDentim" href={AFFILIATE_LINKS.prodentim.url} discountText="50% OFF Today" imageSrc="/images/prodentim.jpg" />
                                </div>
                            </div>
                        </div>

                        <div id="joint-genesis">
                            <h3 className="text-2xl font-bold text-slate-900">3. Joint Genesis</h3>
                            <div className="flex flex-col md:flex-row gap-6 mt-4">
                                <div className="flex-1">
                                    <p>
                                        Joint pain can be a major barrier to exercise. Joint Genesis targets synovial fluid production, making it easier to stay active and burn calories.
                                    </p>
                                </div>
                                <div className="md:w-64 flex-shrink-0">
                                    <PrimaryCTA productName="Joint Genesis" href={AFFILIATE_LINKS["joint-genesis"].url} discountText="Restore Mobility" imageSrc="/images/joint-genesis.png" />
                                </div>
                            </div>
                        </div>

                        <div id="ikaria">
                            <h3 className="text-2xl font-bold text-slate-900">4. Ikaria Lean Belly Juice</h3>
                            <p>
                                A unique powdered supplement that targets ceramides—toxic lipid molecules that can block metabolism. It's distinct from pill-based burners and offers a comprehensive nutrient blend.
                            </p>
                            <div className="mt-4">
                                <Link href="/reviews/ikaria-lean-belly-juice-review-2025" className="text-emerald-600 font-bold hover:underline">
                                    Read Full Ikaria Review &rarr;
                                </Link>
                            </div>
                            <div className="max-w-xs mt-4">
                                <PrimaryCTA productName="Ikaria Juice" href={AFFILIATE_LINKS.ikaria.url} className="p-4 my-2 text-sm" />
                            </div>
                        </div>

                        {/* Add more sections as needed */}
                    </div>

                </div >
            </div >
        </Layout >
    );
}
