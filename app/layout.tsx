import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Updated Header logo integration
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "@/components/theme-provider";
import Preloader from "./components/Preloader";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://zyvionix.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zyvionix Solutions — Premium IT Solutions from Kerala",
    template: "%s | Zyvionix Solutions",
  },
  description:
    "Zyvionix Solutions builds high-performance web apps, mobile apps, AI chatbots, SaaS platforms, and e-commerce solutions. Based in Kerala, India — delivering world-class digital products.",
  keywords: [
    "IT company Kerala",
    "web development Kerala",
    "app development India",
    "AI chatbot development",
    "SaaS development",
    "UI UX design",
    "e-commerce development",
    "Next.js development",
    "Zyvionix Solutions",
    "digital solutions Kerala",
  ],
  authors: [{ name: "Zyvionix Solutions", url: siteUrl }],
  creator: "Zyvionix Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Zyvionix Solutions",
    title: "Zyvionix Solutions — Premium IT Solutions from Kerala",
    description:
      "We engineer AI-powered solutions, scalable platforms, and digital products. From Kerala to the world.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zyvionix Solutions — Premium IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyvionix Solutions — Premium IT Solutions from Kerala",
    description:
      "We engineer AI-powered solutions, scalable platforms, and digital products.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ITCompany",
  name: "Zyvionix Solutions",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description:
    "Zyvionix Solutions builds high-performance web apps, mobile apps, AI chatbots, and digital products from Kerala, India.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-6238392582",

    contactType: "customer service",
    email: "info@zyvionix.com akshithjeevan2000@gmail.com",
  },
  sameAs: [
    "https://www.instagram.com/akshith_jeevan/",
    "https://www.linkedin.com/in/akshith-jeevan-405144213",
    "https://www.facebook.com/akshith.jeevan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system">
          <Preloader />
          <Header />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
