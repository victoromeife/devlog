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
    <article className="mx-auto flex max-w-4xl flex-col gap-10">
      <div className="flex flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-sm text-neutral-400 transition hover:border-white/30 hover:text-white"
        >
          <span aria-hidden>←</span>
          Back to all entries
        </Link>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 via-white/5 to-transparent p-8 sm:p-12">
          <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-indigo-500/18 blur-[150px]" />
          <div className="pointer-events-none absolute -right-32 bottom-0 h-64 w-64 rounded-full bg-sky-400/14 blur-[140px]" />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
              <span>{entry.date}</span>
              <span className="text-neutral-600">•</span>
              <span>{entry.readingTime}</span>
              <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs uppercase tracking-[0.3em] text-neutral-300">
                {entry.category}
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {entry.title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
                {entry.excerpt}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-neutral-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="prose prose-neutral max-w-none px-6 py-10 sm:px-10 lg:px-14">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/entries/${previous.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 transition hover:-translate-y-1 hover:border-indigo-400/60"
          >
            <div className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="relative flex flex-col gap-2">
              <span className="text-sm text-neutral-500">← Previous entry</span>
              <span className="text-lg font-medium text-white">
                {previous.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/entries/${next.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-right transition hover:-translate-y-1 hover:border-indigo-400/60 sm:justify-self-end"
          >
            <div className="pointer-events-none absolute -right-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-sky-400/12 blur-3xl" />
            <div className="relative flex flex-col gap-2">
              <span className="text-sm text-neutral-500">Next entry →</span>
              <span className="text-lg font-medium text-white">
                {next.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </article>
  );
}