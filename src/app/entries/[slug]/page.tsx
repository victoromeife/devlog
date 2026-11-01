import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEntryBySlug, getAdjacentEntries } from "@/lib/entries";
import { formatEntryDate } from "@/lib/formatDate";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: {
      title: entry.title,
      description: entry.excerpt,
      type: "article",
      publishedTime: entry.date,
    },
  };
}

export default async function EntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  const { previous, next } = getAdjacentEntries(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="entry-page">
      <Link href="/" className="back-link">
        <span aria-hidden="true">←</span> All journal entries
      </Link>

      <article>
        <header className="entry-header">
          <div className="entry-header__meta">
            <span>{entry.category}</span>
            <time dateTime={entry.date}>{formatEntryDate(entry.date)}</time>
            <span>{entry.readingTime}</span>
          </div>
          <h1>{entry.title}</h1>
          <p>{entry.excerpt}</p>
          <div className="entry-header__tags" aria-label="Entry tags">
            {entry.tags.map((tag: string) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </header>

        <div className="article-layout">
          <aside className="article-aside">
            <p className="eyebrow">Written by</p>
            <strong>Victor Omeife</strong>
            <p>Developer, builder, and student of the work.</p>
          </aside>
          <div className="prose">
            <ReactMarkdown>{entry.content}</ReactMarkdown>
          </div>
        </div>
      </article>

      {previous || next ? (
        <nav className="entry-navigation" aria-label="More journal entries">
          {previous ? (
            <Link href={`/entries/${previous.slug}`}>
              <span>← Older entry</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : null}

          {next ? (
            <Link href={`/entries/${next.slug}`} className="entry-navigation__next">
              <span>Newer entry →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : null}
        </nav>
      ) : null}
    </div>
  );
}
