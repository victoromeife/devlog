export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-neutral-500 sm:flex-row sm:justify-between sm:text-left sm:px-8 lg:px-10">
        <p>© {year} Victor Omeife — building in public, shipping with intent.</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://victor-omeife.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-200"
          >
            Portfolio
          </a>
          <a
            href="https://devlog-amber-zeta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-200"
          >
            DevLog
          </a>
          <a
            href="https://github.com/victoromeife"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-neutral-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}