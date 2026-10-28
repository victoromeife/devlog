import Link from "next/link";

const navItems = [
  { href: "/", label: "Entries" },
  { href: "/about", label: "About" },
  { href: "/studio", label: "Studio" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10">
              <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(129,140,248,0.9),transparent_70%)]" />
              <span className="relative text-sm font-semibold">VO</span>
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white">
                DevLog
              </span>
              <span className="text-xs text-neutral-400">Victor Omeife</span>
            </div>
          </Link>
          <span className="hidden rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-neutral-400 sm:inline-flex">
            Builder • Student • Problem Solver
          </span>
        </div>

        <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1 py-1 text-sm text-neutral-300 shadow-[0_40px_120px_-80px_rgba(99,102,241,0.9)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-1.5 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://victor-omeife.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-1.5 transition hover:bg-white/10 hover:text-white"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/victoromeife"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-1.5 transition hover:bg-white/10 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}