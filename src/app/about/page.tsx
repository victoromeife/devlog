export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 via-white/5 to-transparent p-8 sm:p-12">
        <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-indigo-500/18 blur-[160px]" />
        <div className="pointer-events-none absolute -right-28 -top-36 h-72 w-72 rounded-full bg-sky-400/16 blur-[150px]" />
        <div className="relative flex flex-col gap-6">
          <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
            About the log
          </p>
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              I'm Victor Omeife — tracking my coding journey in public.
            </h1>
            <p className="text-lg leading-relaxed text-neutral-300">
              This DevLog is a personal tracker of my experience in coding. I use
              it to document projects, challenges, client work, wins, failures
              and the lessons I want to actually keep.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <a
              href="https://victor-omeife.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 transition hover:border-white/30 hover:text-white"
            >
              Portfolio
              <span aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/victoromeife"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 transition hover:border-white/30 hover:text-white"
            >
              GitHub
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="relative flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">Why this exists</h2>
            <p className="leading-relaxed text-neutral-300">
              Building in silence hides the thinking. By writing in public, I
              force clarity, stay accountable, and leave a trail I can actually
              learn from later.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="relative flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-white">What I log</h2>
            <p className="leading-relaxed text-neutral-300">
              Shipping projects, debugging marathons, client work, system design
              experiments, tools I try, and honest reflections from the journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}