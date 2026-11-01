import Link from "next/link";

const navItems = [
  { href: "/", label: "Journal" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="Devlog home">
          <span className="site-brand__mark" aria-hidden="true">
            V/O
          </span>
          <span className="site-brand__copy">
            <strong>Devlog</strong>
            <span>by Victor Omeife</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://victor-omeife.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Work
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/victoromeife"
            target="_blank"
            rel="noopener noreferrer"
            className="site-nav__optional"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
