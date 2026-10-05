import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="mb-8 text-neutral-600">
                This entry doesn’t exist (yet).
            </p>
            <Link
                href="/"
                className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
            >
                Back to all entries
            </Link>
        </div>
    );
}