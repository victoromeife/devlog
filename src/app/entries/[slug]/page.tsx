import Link from "next/link";
import { notFound } from "next/navigation";
import { getEntryBySlug, getAdjacentEntries } from "@/lib/entries";
import ReactMarkdown from "react-markdown";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function EntryPage({ params }: Props) {
    const { slug } = await params;
    const entry = getEntryBySlug(slug);
    const { previous, next } = getAdjacentEntries(slug);

    if (!entry) {
        notFound();
    }

    return (
        <article className="max-w-3xl">
            {/* Back button */}
            <Link
                href="/"
                className="mb-8 inline-flex items-center text-sm text-neutral-500 hover:text-black"
            >
                ← Back to all entries
            </Link>

            {/* Meta */}
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                <span>{entry.date}</span>
                <span>·</span>
                <span>{entry.readingTime}</span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs">
                    {entry.category}
                </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                {entry.title}
            </h1>

            {/* Excerpt */}
            <p className="mb-10 text-lg text-neutral-600 leading-relaxed">
                {entry.excerpt}
            </p>

            {/* Full content from Markdown */}
            <div className="prose prose-neutral max-w-none">
                <ReactMarkdown>{entry.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-10 flex flex-wrap gap-2 border-t border-neutral-200 pt-6">
                {entry.tags.map((tag: string) => (
                    <span
                        key={tag}
                        className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {/* Previous / Next */}
            <div className="mt-16 grid gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-2">
                {previous ? (
                    <Link
                        href={`/entries/${previous.slug}`}
                        className="rounded-xl border border-neutral-200 bg-white p-5 transition hover:border-neutral-300"
                    >
                        <p className="mb-1 text-sm text-neutral-500">← Previous</p>
                        <p className="font-medium text-neutral-900">{previous.title}</p>
                    </Link>
                ) : (
                    <div />
                )}

                {next ? (
                    <Link
                        href={`/entries/${next.slug}`}
                        className="rounded-xl border border-neutral-200 bg-white p-5 text-right transition hover:border-neutral-300"
                    >
                        <p className="mb-1 text-sm text-neutral-500">Next →</p>
                        <p className="font-medium text-neutral-900">{next.title}</p>
                    </Link>
                ) : (
                    <div />
                )}
            </div>
        </article>
    );
}