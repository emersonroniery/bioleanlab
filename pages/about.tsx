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



      <div className="max-w-3xl mx-auto py-12 md:py-16 px-4">

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">About BioLeanLab</h1>

        <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-p:leading-relaxed">

          <p className="mb-4">

            BioLeanLab is an independent editorial platform dedicated to providing evidence-informed content 

            about weight loss, metabolism, and supplements. Our mission is to help you make informed decisions 

            about your health based on scientific research, transparent analysis, and practical insights.

          </p>

          <p className="mb-4">

            We believe in science, not hype. Our editorial team reviews supplements with a critical eye, 

            analyzes peer-reviewed studies, and shares actionable tips grounded in real evidence. We don't 

            promise miracles—we provide honest, no-nonsense guidance for sustainable results.

          </p>

          <p>

            Our content is designed for readers in the United States, United Kingdom, and Canada who value 

            transparency and evidence-based information. We maintain editorial independence and clearly disclose 

            affiliate relationships when they exist.

          </p>

        </div>

      </div>

    </Layout>

  );

}

