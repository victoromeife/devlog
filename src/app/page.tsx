import EntryCard from "@/components/EntryCard";
import { getAllEntries } from "@/lib/entries";

export default function HomePage() {
  const entries = getAllEntries();

  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <p className="mb-3 text-sm text-neutral-500">
          ● Currently crafting: Async SQLite sync engine
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Building in public
        </h1>
        <p className="max-w-2xl text-lg text-neutral-600">
          A minimal journal documenting what I build, edge cases I battle,
          architecture decisions, and lessons learned 
          shipping code every week.
        </p>
      </div>

      {/* Entries list */}
      <div className="space-y-6">
        {entries.length === 0 ? (
          <p className="text-neutral-500">No entries yet.</p>
        ) : (
          entries.map((entry) => <EntryCard key={entry.slug} entry={entry} />)
        )}
      </div>
    </div>
  );
}