export function getSiteUrl(): string {
  return process.env.URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export const siteConfig = {
  name: "Performance Marketing Specialist",
  title: "Performance Marketing Specialist | Case Studies",
  description:
    "Performance marketing case studies across e-commerce campaigns in Egypt and Saudi Arabia.",
  whatsapp: "https://wa.me/201019981290",
  ogImage: "/images/profile/portrait.jpeg",
} as const;
