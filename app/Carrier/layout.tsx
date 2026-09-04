import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Work With Us",
  description:
    "Explore career opportunities at Zyvionix Solutions. Join a team of passionate developers, designers, and innovators building cutting-edge digital products.",
  openGraph: {
    title: "Careers at Zyvionix Solutions",
    description: "Build the future of digital software and engineering with us.",
    url: "https://zyvionix.com/Carrier",
  },
  alternates: {
    canonical: "https://zyvionix.com/Carrier",
  },
};

export default function CarrierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
