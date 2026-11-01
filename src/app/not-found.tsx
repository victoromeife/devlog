import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="eyebrow">Error / 404</p>
      <h1>This page missed the log.</h1>
      <p>The entry may have moved, or it has not been written yet.</p>
      <Link href="/" className="button-link">
        Back to the journal <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
