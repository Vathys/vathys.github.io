import type { Metadata } from "next";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import { baseUrl } from "@/app/sitemap";

import "@/app/global.css";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Deep's Portfolio",
    template: "%s",
  },
  description: "Portfolio for Deep Desai.",
  openGraph: {
    title: "Deep's Portfolio",
    description: "Portfolio for Deep Desai.",
    url: baseUrl,
    siteName: "Deep's Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="antialiased">
        <main className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
