import React from 'react';

type ProductRow = {
    name: string;
    rating: number;
    highlight: string;
    bestFor: string;
    priceLevel: string;
    link: string;
    imageSrc?: string;
};

interface ProductComparisonTableProps {
    products: ProductRow[];
}

export default function ProductComparisonTable({ products }: ProductComparisonTableProps) {
    return (
        <div className="overflow-x-auto my-12 rounded-xl border border-slate-200 shadow-md">
            <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                    <tr>
                        <th className="px-6 py-4 font-extrabold text-slate-900">Top Product</th>
                        <th className="px-6 py-4 text-center">Rating</th>
                        <th className="px-6 py-4">Key Benefit</th>
                        <th className="px-6 py-4">Best For</th>
                        <th className="px-6 py-4 text-center">Price</th>
                        <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-bold text-slate-900 text-base">
                                <div className="flex items-center gap-4">
                                    {product.imageSrc && (
                                        <div className="flex-shrink-0 w-16 h-16 bg-slate-100 rounded-lg p-1 flex items-center justify-center">
                                            <img src={product.imageSrc} alt={product.name} className="max-h-full max-w-full object-contain" />
                                        </div>
                                    )}
                                    <span>{index + 1}. {product.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-center">
                                <div className="flex items-center justify-center text-yellow-500 font-bold">
                                    {product.rating}/5
                                    <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </td>
                            <td className="px-6 py-4 font-medium text-emerald-700">
                                {product.highlight}
                            </td>
                            <td className="px-6 py-4">
                                {product.bestFor}
                            </td>
                            <td className="px-6 py-4 text-center text-xs font-bold text-slate-500">
                                {product.priceLevel}
                            </td>
                            <td className="px-6 py-4 text-center">
                                <a
                                    href={product.link}
                                    target="_blank"
                                    rel="sponsored noopener noreferrer"
                                    className="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition shadow-sm text-xs whitespace-nowrap"
                                >
                                    Check Price
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
