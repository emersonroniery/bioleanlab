import React from 'react';

interface ScoreCriteria {
    label: string;
    score: number; // 0 to 10
}

interface ProductScorecardProps {
    productName: string;
    overallRating: number;
    criteria?: ScoreCriteria[];
}

export default function ProductScorecard({ productName, overallRating, criteria = [] }: ProductScorecardProps) {
    // Default criteria if none provided
    const displayCriteria = criteria.length > 0 ? criteria : [
        { label: "Ingredients Quality", score: 9.5 },
        { label: "Safety Profile", score: 9.0 },
        { label: "Cost Analysis", score: 8.5 },
        { label: "User Feedback", score: 9.2 },
    ];

    return (
        <div className="my-8 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded mr-3 uppercase tracking-wider">Analysis</span>
                {productName} Scorecard
            </h3>

            <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Overall Score Circle */}
                <div className="flex-shrink-0 text-center">
                    <div className="w-32 h-32 rounded-full border-8 border-emerald-500 flex items-center justify-center bg-white shadow-sm">
                        <div className="text-center">
                            <span className="block text-4xl font-extrabold text-slate-900">{overallRating}</span>
                            <span className="block text-xs text-slate-500 uppercase font-bold mt-1">out of 5</span>
                        </div>
                    </div>
                </div>

                {/* Criteria Bars */}
                <div className="flex-1 w-full space-y-3">
                    {displayCriteria.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between text-sm font-medium text-slate-700 mb-1">
                                <span>{item.label}</span>
                                <span>{item.score}/10</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2.5">
                                <div
                                    className="bg-emerald-500 h-2.5 rounded-full"
                                    style={{ width: `${(item.score / 10) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
