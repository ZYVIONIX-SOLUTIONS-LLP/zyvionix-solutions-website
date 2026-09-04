import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services — Web, Mobile App, AI & Cloud Engineering",
  description:
    "Explore our full suite of digital services: custom Next.js web apps, mobile apps, AI chatbot platforms, SaaS development, UI/UX design, and growth marketing.",
  keywords: [
    "web development services",
    "mobile app development",
    "AI chatbot integration",
    "SaaS platform engineering",
    "UI UX design agency",
    "digital marketing services",
    "Zyvionix services",
  ],
  openGraph: {
    title: "IT Services & Software Engineering — Zyvionix Solutions",
    description:
      "Custom web applications, mobile apps, AI platforms, and cloud solutions engineered for scalable growth.",
    url: "https://zyvionix.com/services",
  },
  alternates: {
    canonical: "https://zyvionix.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
