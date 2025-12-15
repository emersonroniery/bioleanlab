import React from 'react';

interface PrimaryCTAProps {
    productName: string;
    href: string;
    discountText?: string;
    className?: string;
}

export default function PrimaryCTA({ productName, href, discountText, className = "" }: PrimaryCTAProps) {
    return (
        <div className={`my-8 text-center p-6 bg-slate-50 border-2 border-dashed border-emerald-500 rounded-xl ${className}`}>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
                Ready to try {productName}?
            </h3>

            {discountText && (
                <p className="text-red-600 font-bold uppercase tracking-wide text-sm mb-4 animate-pulse">
                    🔥 {discountText}
                </p>
            )}

            <a
                href={href}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-red-600 rounded-lg hover:bg-red-700 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto group"
            >
                Check Availability & Discount
                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </a>

            <p className="mt-3 text-xs text-slate-500">
                100% Money-Back Guarantee • Secure Checkout
            </p>
        </div>
    );
}
