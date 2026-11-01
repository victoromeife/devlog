import Link from "next/link";
import { Entry } from "@/lib/types";
import { formatEntryDate } from "@/lib/formatDate";

type EntryCardProps = {
  entry: Entry;
  index: number;
};

export default function EntryCard({ entry, index }: EntryCardProps) {
  return (
    <Link
      href={`/entries/${entry.slug}`}
      className="entry-row"
    >
      <span className="entry-row__number" aria-hidden="true">
        {String(index).padStart(2, "0")}
      </span>

      <article className="entry-row__body">
        <div className="entry-row__meta">
          {entry.category}
          <span aria-hidden="true">/</span>
          <time dateTime={entry.date}>{formatEntryDate(entry.date)}</time>
        </div>
        <h3>{entry.title}</h3>
        <p>{entry.excerpt}</p>
        <div className="entry-row__tags" aria-label="Entry tags">
          {entry.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </article>

      <span className="entry-row__end">
        <span>{entry.readingTime}</span>
        <span className="entry-row__arrow" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
