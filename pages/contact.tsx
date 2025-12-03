// pages/contact.tsx

import Head from "next/head";

import Layout from "../components/Layout";



export default function Contact() {

  return (

    <Layout>

      <Head>

        <title>Contact – BioLeanLab</title>

        <meta name="description" content="Contact BioLeanLab" />

      </Head>



      <div className="max-w-3xl mx-auto py-12 px-4">

        <h1 className="text-4xl font-bold text-gray-900 mb-6">

          Contact Us

        </h1>



        <div className="prose prose-lg max-w-none">

          <p className="text-lg text-gray-600 mb-8">

            Have a question or feedback? We'd love to hear from you.

          </p>



          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-4">

              Get in Touch

            </h2>

            <p className="text-gray-600 mb-6">

              For inquiries, partnerships, or general questions, please reach out to us:

            </p>

            <div className="space-y-4">

              <div>

                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>

                <p className="text-gray-600">

                  contact@bioleanlab.com

                </p>

              </div>

              <div>

                <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>

                <p className="text-gray-600">

                  We typically respond within 24-48 hours.

                </p>

              </div>

            </div>

          </div>



          <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl">

            <h3 className="font-bold text-gray-900 mb-2">

              Media & Partnerships

            </h3>

            <p className="text-gray-700 text-sm">

              For media inquiries, guest post opportunities, or partnership proposals, 

              please include details about your request in your email.

            </p>

          </div>

        </div>

      </div>

    </Layout>

  );

}

