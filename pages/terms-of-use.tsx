// pages/terms-of-use.tsx

import Head from "next/head";

import Layout from "../components/Layout";



export default function TermsOfUse() {

  return (

    <Layout>

      <Head>

        <title>Terms of Use – BioLeanLab</title>

        <meta name="description" content="Terms of Use for BioLeanLab" />

      </Head>



      <article className="max-w-4xl mx-auto py-16 px-6 lg:px-8">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">

          Terms of Use

        </h1>



        <div className="prose prose-lg max-w-none">

          <p className="text-gray-600 mb-6">

            Last updated: {new Date().toLocaleDateString("en-US", {

              year: "numeric",

              month: "long",

              day: "numeric",

            })}

          </p>



          <h2>Acceptance of Terms</h2>

          <p>

            By accessing and using BioLeanLab, you accept and agree to be bound by the terms and provision of this agreement.

          </p>



          <h2>Medical Disclaimer</h2>

          <p>

            The content on this website is for informational purposes only and is not intended as medical advice. 

            Always consult with a healthcare professional before starting any supplement regimen or making significant 

            changes to your diet or exercise routine.

          </p>



          <h2>Affiliate Disclosure</h2>

          <p>

            Some links on this website are affiliate links. We may earn a commission if you make a purchase through 

            these links at no extra cost to you. This helps us maintain and improve our website.

          </p>



          <h2>Content Accuracy</h2>

          <p>

            While we strive to provide accurate information, we make no representations or warranties about the 

            completeness, accuracy, or reliability of any information on this website.

          </p>



          <h2>Intellectual Property</h2>

          <p>

            All content on this website, including text, graphics, logos, and images, is the property of BioLeanLab 

            and is protected by copyright laws.

          </p>



          <h2>Limitation of Liability</h2>

          <p>

            BioLeanLab shall not be liable for any indirect, incidental, special, consequential, or punitive damages 

            resulting from your use of this website.

          </p>



          <h2>Contact Us</h2>

          <p>

            If you have questions about these Terms of Use, please contact us through our contact page.

          </p>

        </div>

      </article>

    </Layout>

  );

}

