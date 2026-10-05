import Link from "next/link";
import { Entry } from "@/lib/types";

export default function EntryCard({ entry }: { entry: Entry }) {
    return (
        <article className="rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-300">
            <div className="mb-3 flex items-center justify-between text-sm text-neutral-500">
                <span>
                    {entry.date} · {entry.readingTime}
                </span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs">
                    {entry.category}
                </span>
            </div>

            <h2 className="mb-2 text-xl font-semibold tracking-tight">
                <Link href={`/entries/${entry.slug}`} className="hover:underline">
                    {entry.title}
                </Link>
            </h2>

            <p className="mb-4 text-neutral-600 line-clamp-2">{entry.excerpt}</p>

            <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/entries/${entry.slug}`}
                    className="text-sm font-medium text-neutral-900 hover:underline"
                >
                    Read log →
                </Link>
            </div>
        </article>
    );
}