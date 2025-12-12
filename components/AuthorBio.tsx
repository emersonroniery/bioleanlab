import Image from 'next/image';

interface AuthorBioProps {
    authorName?: string;
    authorTitle?: string;
    authorImage?: string;
}

export default function AuthorBio({
    authorName = "BioLeanLab Research Team",
    authorTitle = "Independent Health Researchers & Analysts",
    authorImage = "/images/author-placeholder.jpg" // Ensure this image exists or use a generic one
}: AuthorBioProps) {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 mt-12 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                    {/* Using a placeholder SVG if image fails or is not provided, but ideally use next/image */}
                    <div className="bg-slate-300 w-full h-full flex items-center justify-center text-slate-500 font-bold text-2xl">
                        {authorName.charAt(0)}
                    </div>
                </div>
            </div>

            <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Written by {authorName}</h3>
                <p className="text-sm font-medium text-emerald-700 uppercase tracking-wide mb-3">
                    {authorTitle}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Our team analyzes the latest clinical studies and market trends to provide unbiased reviews.
                    We believe in transparent, evidence-informed health guidance to help you make safe choices.
                    We analyze ingredients, safety data, and real user experiences.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                    <span className="text-xs text-slate-500 font-medium italic">
                        Commitment to Impartiality: We do not accept sponsorship fees for positive reviews.
                    </span>
                </div>
            </div>
        </div>
    );
}
