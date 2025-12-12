import React from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

interface FAQSectionProps {
    faqs: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    if (!faqs || faqs.length === 0) {
        return null;
    }

    return (
        <div className="my-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors">
                                <span>{faq.question}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div className="text-slate-600 p-4 border-t border-slate-200 bg-white leading-relaxed">
                                {faq.answer}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
        </div>
    );
}
