import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/src/content/site";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.metaDescription,
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    url: siteConfig.domain,
    siteName: siteConfig.title,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.title} Open Graph image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.metaDescription,
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base text-deep`}>
        <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(88,129,87,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(58,90,64,0.18),transparent_45%)]">
          <Navigation />
          <main className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
