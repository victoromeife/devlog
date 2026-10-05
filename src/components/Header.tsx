import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="text-lg font-semibold tracking-tight">
                        DevLog
                    </Link>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs text-neutral-500">
                        by Victor
                    </span>
                </div>

                <nav className="flex items-center gap-6 text-sm text-neutral-600">
                    <Link href="/" className="hover:text-black">
                        Entries
                    </Link>
                    <Link href="/about" className="hover:text-black">
                        About
                    </Link>
                    <a
                        href="https://github.com/victoromeife"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black"
                    >
                        GitHub
                    </a>
                </nav>
            </div>
        </header>
    );
}