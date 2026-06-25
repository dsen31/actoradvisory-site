import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "aCTOr Advisory | Technology Advisory & AI Training",
  description:
    "aCTOr Advisory connects growing businesses with pre-vetted technology vendors and provides practical AI training for teams. Technology strategy, cybersecurity, telecom audits, and more.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "aCTOr Advisory",
    description:
      "Technology advisory and AI training for growing businesses.",
    url: "https://actoradvisory.com",
    siteName: "aCTOr Advisory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-[var(--font-geist)] antialiased">{children}</body>
    </html>
  );
}
