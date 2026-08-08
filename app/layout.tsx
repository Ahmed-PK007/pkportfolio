import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "http://localhost:3000"
  ),

  title: "Ahmad | Performance Marketing Strategist & Media Buyer",

  description:
    "Portfolio showcasing performance marketing strategy, media buying, business-first thinking, and real case studies.",

  icons: {
    icon: "/icon.svg",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Ahmad | Performance Marketing Strategist & Media Buyer",

    description:
      "Portfolio showcasing performance marketing strategy, media buying, business-first thinking, and real case studies.",

    url: "/",

    siteName: "Ahmad Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
         url: "/og-image.jpg",
    width: 999,
    height: 526,
    alt: "Ahmad | Performance Marketing Strategist & Media Buyer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ahmad | Performance Marketing Strategist & Media Buyer",

    description:
      "Portfolio showcasing performance marketing strategy, media buying, business-first thinking, and real case studies.",

    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}