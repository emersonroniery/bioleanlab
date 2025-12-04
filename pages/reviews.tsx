// pages/reviews.tsx

import Head from "next/head";

import Link from "next/link";

import Layout from "../components/Layout";



export default function Reviews() {

  return (

    <Layout>

      <Head>

        <title>Reviews – BioLeanLab</title>

        <meta

          name="description"

          content="Honest and unbiased supplement reviews from BioLeanLab."

        />

      </Head>



      <div className="max-w-3xl mx-auto py-12 md:py-16 px-4">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">Supplement Reviews</h1>

        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed">

          <p className="mb-4">

            At BioLeanLab, we provide honest, evidence-based reviews of weight loss supplements and metabolism boosters. 

            Our review process is rigorous: we analyze ingredient lists, examine scientific literature, assess safety profiles, 

            and evaluate value for money. We don't make unrealistic promises—we tell you what the science actually says.

          </p>

          <p className="mb-4">

            Every review follows our editorial standards: transparency about methodology, clear disclosure of potential 

            conflicts of interest, and honest assessment of both benefits and limitations. We evaluate products based on 

            their ingredients, scientific backing, safety profile, and real-world value.

          </p>

          <p className="mb-4">

            Our goal is simple: help you make informed decisions about which supplements might be right for you, 

            without the marketing fluff. Check back regularly for new reviews, or browse our blog for detailed articles 

            about specific supplements and their effects on metabolism and weight loss.

          </p>

          <p>

            For more details about our review methodology, editorial standards, and affiliate disclosure, please read our{" "}

            <Link href="/reviews-policy" className="text-emerald-600 hover:text-emerald-700 underline">

              Reviews Policy

            </Link>.

          </p>

        </div>

      </div>

    </Layout>

  );

}
