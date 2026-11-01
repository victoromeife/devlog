import EntryCard from "@/components/EntryCard";
import { getAllEntries } from "@/lib/entries";
import { formatEntryDate } from "@/lib/formatDate";
import Link from "next/link";

export default function HomePage() {
  const entries = getAllEntries();
  const [latestEntry, ...archiveEntries] = entries;
  const categories = [...new Set(entries.map((entry) => entry.category))];

  return (
    <div className="home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <div className="home-intro__top">
          <p className="eyebrow">Personal developer journal / Since 2025</p>
          <p>
            {entries.length} {entries.length === 1 ? "entry" : "entries"}, and
            counting
          </p>
        </div>

        <div className="home-intro__grid">
          <h1 id="home-title">
            I write down what the <em>portfolio leaves out.</em>
          </h1>
          <div className="home-intro__copy">
            <p>
              I&apos;m Victor, a developer documenting the work behind the final
              screenshot: hard bugs, client decisions, trade-offs, and the
              lessons I do not want to learn twice.
            </p>
            <Link href="/about" className="text-link">
              More about this journal <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="home-intro__foot">
          <span>Projects</span>
          <span>Client work</span>
          <span>Lessons</span>
          <span>Experiments</span>
        </div>
      </section>

      <section className="latest-section" aria-labelledby="latest-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">On the desk</p>
            <h2 id="latest-heading">Latest entry</h2>
          </div>
          {latestEntry ? (
            <time dateTime={latestEntry.date}>
              {formatEntryDate(latestEntry.date)}
            </time>
          ) : null}
        </div>

        {latestEntry ? (
          <Link
            href={`/entries/${latestEntry.slug}`}
            className="featured-entry"
          >
            <div className="featured-entry__cover" aria-hidden="true">
              <span>Devlog / Note 01</span>
              <strong>VO</strong>
              <span>Field notes from the work</span>
            </div>

            <article className="featured-entry__body">
              <div className="featured-entry__meta">
                <span>{latestEntry.category}</span>
                <span>{latestEntry.readingTime}</span>
              </div>
              <h3>{latestEntry.title}</h3>
              <p>{latestEntry.excerpt}</p>
              <div className="featured-entry__footer">
                <div aria-label="Entry tags">
                  {latestEntry.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
                <span className="featured-entry__cta">
                  Read the note <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          </Link>
        ) : (
          <div className="empty-state">The first note is being written.</div>
        )}
      </section>

      <section className="archive-section" aria-labelledby="archive-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Earlier notes</p>
            <h2 id="archive-heading">From the archive</h2>
          </div>
          <p>
            {archiveEntries.length}{" "}
            {archiveEntries.length === 1 ? "story" : "stories"} filed
          </p>
        </div>

        <div className="archive-layout">
          <div className="entry-list">
            {archiveEntries.length > 0 ? (
              archiveEntries.map((entry, index) => (
                <EntryCard key={entry.slug} entry={entry} index={index + 2} />
              ))
            ) : (
              <div className="empty-state">More notes are on the way.</div>
            )}
          </div>

          <aside className="archive-index">
            <p className="eyebrow">Filed under</p>
            <ol>
              {categories.map((category, index) => (
                <li key={category}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {category}
                </li>
              ))}
            </ol>
            <p>
              Short, honest records from projects in progress and work already
              shipped.
            </p>
          </aside>
        </div>
      </section>

      <section className="closing-note">
        <p className="closing-note__index">/ Why write</p>
        <div>
          <h2>The finished project only tells half the story.</h2>
          <p>
            The useful part is often what happened before it worked: the wrong
            turn, the constraint, and the decision that finally moved the work
            forward. This is where I keep that part.
          </p>
          <div className="closing-note__links">
            <a
              href="https://victor-omeife.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
            >
              See the finished work <span aria-hidden="true">↗</span>
            </a>
            <Link href="/about" className="text-link">
              Read my story <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
