// pages/privacy-policy.tsx

import Head from "next/head";

import Layout from "../components/Layout";



export default function PrivacyPolicy() {

  return (

    <Layout>

      <Head>

        <title>Privacy Policy – BioLeanLab</title>

        <meta name="description" content="Privacy Policy for BioLeanLab" />

      </Head>



      <article className="max-w-4xl mx-auto py-16 px-6 lg:px-8">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8">

          Privacy Policy

        </h1>



        <div className="prose prose-lg max-w-none">

          <p className="text-gray-600 mb-6">

            Last updated: {new Date().toLocaleDateString("en-US", {

              year: "numeric",

              month: "long",

              day: "numeric",

            })}

          </p>



          <h2>Information We Collect</h2>

          <p>

            We collect information that you provide directly to us, such as when you subscribe to our newsletter, 

            leave a comment, or contact us. This may include your name, email address, and any other information 

            you choose to provide.

          </p>



          <h2>How We Use Your Information</h2>

          <p>

            We use the information we collect to:

          </p>

          <ul>

            <li>Send you newsletters and updates</li>

            <li>Respond to your inquiries</li>

            <li>Improve our website and services</li>

            <li>Comply with legal obligations</li>

          </ul>



          <h2>Cookies and Tracking</h2>

          <p>

            We use cookies and similar tracking technologies to track activity on our website and hold certain information. 

            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.

          </p>



          <h2>Third-Party Services</h2>

          <p>

            We use third-party services such as Google AdSense and analytics tools that may collect information about 

            your use of our website. These services have their own privacy policies.

          </p>



          <h2>Affiliate Links</h2>

          <p>

            Some links on our website are affiliate links. We may earn a commission if you make a purchase through 

            these links at no extra cost to you.

          </p>



          <h2>Contact Us</h2>

          <p>

            If you have questions about this Privacy Policy, please contact us through our contact page.

          </p>

        </div>

      </article>

    </Layout>

  );

}

