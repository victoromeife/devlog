import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevLog by Victor",
  description: "A minimal public developer journal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fafafa] text-neutral-900 antialiased">
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}