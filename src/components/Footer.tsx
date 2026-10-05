import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-neutral-200 bg-white">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm text-neutral-500">
                <p>© 2026 DevLog. Built in public by Victor</p>
                <div className="flex gap-6">
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
                </div>
            </div>
        </footer>
    );
}