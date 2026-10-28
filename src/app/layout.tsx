import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevLog | Victor Omeife",
  description:
    "A personal tracker of my coding journey — projects, challenges, lessons and build-in-public notes.",
  metadataBase: new URL("https://devlog-amber-zeta.vercel.app"),
  openGraph: {
    title: "DevLog | Victor Omeife",
    description:
      "A personal tracker of my coding journey — projects, challenges, lessons and build-in-public notes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0a0a0a] text-neutral-100 antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.22),transparent_70%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.16),transparent_65%)]" />
          <Header />
          <main className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-8 lg:px-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}