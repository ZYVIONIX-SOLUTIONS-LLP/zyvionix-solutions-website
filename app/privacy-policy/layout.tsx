import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zyvionix Solutions",
  description:
    "Learn about how Zyvionix Solutions handles and protects your personal data, privacy, and compliance.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zyvionix.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
