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
    default: "Zyvionix Solutions — Premium IT Solutions & Software Engineering",
    template: "%s | Zyvionix Solutions",
  },
  description:
    "Zyvionix Solutions builds high-performance web apps, mobile apps, AI chatbots, SaaS platforms, and enterprise software. Based in Kerala, India — engineering world-class digital products.",
  keywords: [
    "IT company Kerala",
    "web development Kerala",
    "app development India",
    "AI chatbot development",
    "SaaS development",
    "UI UX design agency",
    "e-commerce development",
    "Next.js development company",
    "Zyvionix Solutions",
    "software engineering Kerala",
    "digital transformation agency",
  ],
  authors: [{ name: "Zyvionix Solutions", url: siteUrl }],
  creator: "Zyvionix Solutions",
  publisher: "Zyvionix Solutions",
  category: "Technology & Software Development",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Zyvionix Solutions",
    title: "Zyvionix Solutions — Premium IT Solutions & Software Engineering",
    description:
      "We engineer AI-powered solutions, scalable SaaS platforms, mobile applications, and high-performance digital products from Kerala to the world.",
    images: [
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "Zyvionix Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyvionix Solutions — Premium IT Solutions & Software Engineering",
    description:
      "We engineer AI-powered solutions, scalable SaaS platforms, and modern digital experiences.",
    images: ["/favicon.ico"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Zyvionix Solutions",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      image: `${siteUrl}/favicon.ico`,
      description:
        "Zyvionix Solutions builds high-performance web apps, mobile apps, AI chatbots, and custom software solutions.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Room No. 60/44, 3rd Floor, JC Chambers, Panampilly Nagar",
        addressLocality: "Ernakulam",
        addressRegion: "Kerala",
        postalCode: "682036",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-6238392582",
        contactType: "customer service",
        email: "info@zyvionixsolutions.com",
        availableLanguage: ["English", "Malayalam"],
      },
      sameAs: [
        "https://www.instagram.com/zyvionixsolutions?igsi=ZXRwZHk2dmc0OTY0",
        "https://www.facebook.com/share/196mX2JqPk/",
        "https://www.linkedin.com/company/zyvionix-solutions-llp/",
      ],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Zyvionix Solutions",
      description: "Premium IT Solutions and Software Engineering Agency",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
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
