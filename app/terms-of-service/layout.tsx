import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Zyvionix Solutions",
  description:
    "Read the terms and conditions governing the use of Zyvionix Solutions services, website, and digital products.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zyvionix.com/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
