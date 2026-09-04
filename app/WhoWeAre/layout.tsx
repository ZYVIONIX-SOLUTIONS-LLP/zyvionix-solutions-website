import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are — About Zyvionix Solutions",
  description:
    "Discover Zyvionix Solutions. Based in Kerala, India — we engineer Next-gen software, web applications, and intelligent digital products for global businesses.",
  openGraph: {
    title: "Who We Are — Zyvionix Solutions",
    description:
      "Engineers, designers, and strategists building high-impact digital experiences.",
    url: "https://zyvionix.com/WhoWeAre",
  },
  alternates: {
    canonical: "https://zyvionix.com/WhoWeAre",
  },
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
