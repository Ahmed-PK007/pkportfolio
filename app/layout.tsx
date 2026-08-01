import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Performance Marketing Specialist | Case Studies",
  description: "Performance marketing case studies across e-commerce campaigns in Egypt and Saudi Arabia.",
  icons: { icon: "/icon.svg" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Performance Marketing Specialist | Case Studies",
    description: "Performance marketing case studies across e-commerce campaigns in Egypt and Saudi Arabia.",
    type: "website",
    images: [{ url: "/images/profile/portrait.jpeg", width: 893, height: 1600, alt: "Performance Marketing Specialist" }],
  },
  twitter: { card: "summary_large_image", title: "Performance Marketing Specialist | Case Studies", description: "Performance marketing case studies across e-commerce campaigns in Egypt and Saudi Arabia.", images: ["/images/profile/portrait.jpeg"] },
};

export const viewport: Viewport = { themeColor: "#08090c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
