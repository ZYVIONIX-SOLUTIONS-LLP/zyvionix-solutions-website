import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Products & SaaS Solutions — Zyvionix Solutions",
  description:
    "Discover ready-to-deploy, subscription-based business software built by Zyvionix. Featuring our Smart Mobile POS & Billing Software for Food Courts, Cafés, and Restaurants with instant download and cloud sync.",
  keywords: [
    "mobile billing software",
    "food court billing app",
    "restaurant POS software",
    "cafe billing system",
    "smart POS solution",
    "SaaS products",
    "Zyvionix products",
    "subscription business software",
    "download POS app",
  ],
  openGraph: {
    title: "Software Products & SaaS Subscriptions — Zyvionix Solutions",
    description:
      "Empower your business with smart mobile billing POS for restaurants, food courts, and retail stores. Download now or subscribe with zero setup friction.",
    url: "https://zyvionix.com/products",
  },
  alternates: {
    canonical: "https://zyvionix.com/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
