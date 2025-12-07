import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center md:py-20">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight md:text-5xl">
          Smarter Weight Loss
          <span className="block mt-2">Through Science.</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Evidence-informed guides, honest supplement reviews, and practical habits 
          to help you make informed decisions about your health and metabolism.
        </p>
        <p className="text-xs uppercase tracking-wide text-emerald-700 mt-4">
          Trusted, no-nonsense guidance for sustainable weight loss, metabolism support and honest supplement reviews.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center justify-center px-7 py-3 rounded-lg bg-emerald-700 text-white font-semibold shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-200"
        >
          Read Latest Articles
        </Link>
      </div>
    </section>
  );
}
