import EntryCard from "@/components/EntryCard";
import { getAllEntries } from "@/lib/entries";

export default function HomePage() {
  const entries = getAllEntries();

  return (
    <div className="flex flex-col gap-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 via-white/5 to-transparent p-8 sm:p-12">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[160px]" />
        <div className="pointer-events-none absolute -right-32 -top-40 h-72 w-72 rounded-full bg-sky-400/16 blur-[140px]" />
        <div className="relative flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.08)]" />
              Tracking code, challenges & wins
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-neutral-400">
              Victor Omeife • Portfolio: victor-omeife.vercel.app
            </span>
          </div>
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The log of a builder figuring things out in public.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-300 sm:text-xl">
              A personal tracker of my experience in coding — the projects I ship,
              the bugs that humble me, client work, system design notes and the
              lessons I refuse to forget.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
              <span className="text-white">{entries.length}</span> logged entries
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5">
              Build in public • Learn in public
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            Field notes
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Recent entries
            </h2>
            <p className="text-sm text-neutral-400">
              Captured as Markdown, rendered for the web.
            </p>
          </div>
        </div>
        <div className="grid gap-6">
          {entries.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-neutral-400">
              No entries yet. The next log is on the way.
            </div>
          ) : (
            entries.map((entry) => <EntryCard key={entry.slug} entry={entry} />)
          )}
        </div>
      </section>
    </div>
  );
}