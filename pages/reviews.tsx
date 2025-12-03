// pages/reviews.tsx

import Head from "next/head";

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



      <div className="max-w-3xl mx-auto py-12 px-4">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Supplement Reviews</h1>

        <div className="prose prose-lg max-w-none">

          <p className="text-gray-700 leading-relaxed mb-4">

            At BioLeanLab, we provide honest and unbiased reviews of weight loss supplements and metabolism boosters. 

            Our reviews are based on scientific research, ingredient analysis, and real-world feedback.

          </p>

          <p className="text-gray-700 leading-relaxed mb-4">

            We evaluate products based on their ingredients, scientific backing, safety profile, and value for money. 

            Our goal is to help you make informed decisions about which supplements might be right for you.

          </p>

          <p className="text-gray-700 leading-relaxed">

            Check back regularly for new reviews, or browse our blog for detailed articles about specific supplements 

            and their effects on metabolism and weight loss.

          </p>

        </div>

      </div>

    </Layout>

  );

}

