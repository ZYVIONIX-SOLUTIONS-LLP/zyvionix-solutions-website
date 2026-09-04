import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Portfolio & Digital Case Studies",
  description:
    "A showcase of high-performance web applications, mobile apps, AI solutions, e-commerce stores, and SaaS platforms built by Zyvionix Solutions.",
  keywords: [
    "Zyvionix portfolio",
    "web development case studies",
    "app development projects",
    "SaaS client projects",
  ],
  openGraph: {
    title: "Portfolio & Case Studies — Zyvionix Solutions",
    description:
      "A curated selection of digital products and web solutions built for excellence.",
    url: "https://zyvionix.com/portfolio",
  },
  alternates: {
    canonical: "https://zyvionix.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
