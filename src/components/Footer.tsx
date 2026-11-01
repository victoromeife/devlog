import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__lead">
          <p className="eyebrow">Victor Omeife / Devlog</p>
          <p>A public record of what I build, break, and learn.</p>
        </div>

        <div className="site-footer__links">
          <div>
            <span>Read</span>
            <Link href="/">Journal</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <span>Elsewhere</span>
            <a
              href="https://victor-omeife.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio ↗
            </a>
            <a
              href="https://github.com/victoromeife"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__base">
        <p>© {year} Victor Omeife</p>
        <p>Written in Markdown. Built with Next.js.</p>
      </div>
    </footer>
  );
}
