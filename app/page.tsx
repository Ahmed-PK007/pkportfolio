import Portfolio from "@/components/portfolio";

export default function Page() {
  const siteUrl = process.env.URL ?? process.env.NEXT_PUBLIC_SITE_URL;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Performance Marketing Specialist",
    description: "Performance marketing case studies across e-commerce campaigns in Egypt and Saudi Arabia.",
    ...(siteUrl ? { url: siteUrl } : {}),
  };

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Portfolio /></>;
}
