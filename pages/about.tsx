// pages/about.tsx

import Head from "next/head";

import Layout from "../components/Layout";



export default function About() {

  return (

    <Layout>

      <Head>

        <title>About – BioLeanLab</title>

        <meta

          name="description"

          content="Learn more about BioLeanLab and our mission to provide science-based weight loss and supplement information."

        />

      </Head>



      <div className="max-w-3xl mx-auto py-12 px-4">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">About BioLeanLab</h1>

        <div className="prose prose-lg max-w-none">

          <p className="text-gray-700 leading-relaxed mb-4">

            BioLeanLab is dedicated to providing evidence-informed content about weight loss, metabolism, 

            and supplements. Our mission is to help you make informed decisions about your health based on 

            scientific research and practical insights.

          </p>

          <p className="text-gray-700 leading-relaxed mb-4">

            We review supplements, analyze scientific studies, and share practical tips that you can actually 

            implement in your daily life. Our content is designed for readers in the United States, United Kingdom, 

            and Canada who are looking for trustworthy information about health and wellness.

          </p>

          <p className="text-gray-700 leading-relaxed">

            Thank you for visiting BioLeanLab. We hope our content helps you on your health journey.

          </p>

        </div>

      </div>

    </Layout>

  );

}

