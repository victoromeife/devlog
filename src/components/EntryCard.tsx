import Link from "next/link";
import { Entry } from "@/lib/types";

export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <Link
      href={`/entries/${entry.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/60 hover:shadow-[0_60px_140px_-100px_rgba(99,102,241,0.9)] sm:p-8"
    >
      <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl transition duration-300 group-hover:bg-indigo-400/20" />
      <div className="relative flex flex-wrap items-center gap-3 text-sm text-neutral-400">
        <span>{entry.date}</span>
        <span className="text-neutral-600">•</span>
        <span>{entry.readingTime}</span>
        <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs uppercase tracking-[0.3em] text-neutral-300">
          {entry.category}
        </span>
      </div>
      <div className="relative mt-4 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {entry.title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
          {entry.excerpt}
        </p>
      </div>
      <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-neutral-400"
            >
              #{tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-sm text-indigo-200 transition group-hover:gap-3 group-hover:text-white">
          Read entry
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}