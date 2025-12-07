import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type CardBaseProps = {
    title: string;
    href: string;
    date: string;
    coverImage?: string | null;
    priority?: boolean;
    description: string;
    linkText?: string;
    children?: ReactNode; // For extra content like Rating or Product Name
    beforeTitle?: ReactNode;
};

export default function CardBase({
    title,
    href,
    date,
    coverImage,
    priority,
    description,
    linkText = "Read more →",
    children,
    beforeTitle,
}: CardBaseProps) {
    return (
        <article className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px] flex flex-col h-full">
            {coverImage && (
                <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 relative h-40 w-full">
                    <Image
                        src={coverImage}
                        alt={title}
                        width={800}
                        height={400}
                        className="object-cover"
                        loading={priority ? "eager" : "lazy"}
                        priority={priority || false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            )}

            <time className="text-[0.75rem] text-slate-500 mb-1 block">
                {new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </time>

            {beforeTitle}

            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 leading-snug hover:text-emerald-600 transition-colors duration-200">
                <Link href={href}>{title}</Link>
            </h2>

            {children}

            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-3 flex-grow">
                {description}
            </p>

            <Link
                href={href}
                className="text-sm font-semibold text-emerald-700 mt-auto transition-colors duration-200"
            >
                {linkText}
            </Link>
        </article>
    );
}
