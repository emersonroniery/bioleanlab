import Link from 'next/link';
import { ReviewMeta } from '../lib/reviews';

interface RelatedPostsProps {
    posts: ReviewMeta[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <div className="mt-16 mb-8 border-t border-slate-200 pt-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/reviews/${post.slug}`} className="group block h-full">
                        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                            {/* Image Placeholder - ideally use next/image with post.coverImage */}
                            <div className="h-40 bg-slate-100 flex items-center justify-center text-slate-400">
                                {post.coverImage ? (
                                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                                ) : (
                                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                )}
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2 line-clamp-2">
                                    {post.title}
                                </h4>
                                <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1">
                                    {post.summary}
                                </p>
                                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                                    Read Review &rarr;
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
