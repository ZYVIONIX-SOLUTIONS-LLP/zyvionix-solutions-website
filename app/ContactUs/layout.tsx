import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch",
  description:
    "Ready to transform your digital presence? Contact Zyvionix Solutions to discuss your project, request a custom quote, or schedule a consultation.",
  openGraph: {
    title: "Contact Zyvionix Solutions",
    description:
      "Get in touch with our team for custom web, mobile, and AI development solutions.",
    url: "https://zyvionix.com/ContactUs",
  },
  alternates: {
    canonical: "https://zyvionix.com/ContactUs",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
