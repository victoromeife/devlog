import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Devlog by Victor Omeife",
    template: "%s | Devlog",
  },
  description:
    "Victor Omeife's personal developer journal about shipped work, hard problems, and lessons worth keeping.",
  metadataBase: new URL("https://devlog-amber-zeta.vercel.app"),
  openGraph: {
    title: "Devlog by Victor Omeife",
    description:
      "Notes from the work behind the work: projects, problems, and lessons from Victor Omeife.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4f0e7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="site-shell">
          <Header />
          <main id="main-content" className="site-main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
