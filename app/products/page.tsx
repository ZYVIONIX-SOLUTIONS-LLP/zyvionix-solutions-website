"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import {
  Download,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Smartphone,
  Printer,
  BarChart3,
  Layers,
  Store,
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  X,
  Laptop,
  Check,
  Headphones,
  FileSpreadsheet,
  QrCode,
  Tag,
  Radio,
  Clock,
  Flame,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  badge: string;
  category: "restaurant" | "retail" | "saas" | "all";
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  mobileMockup: string;
  version: string;
  size: string;
  platform: string[];
  downloadUrl: string;
  suitableFor: string[];
  features: {
    icon: any;
    title: string;
    desc: string;
  }[];
  pricing: {
    monthly: { starter: number; pro: number; enterprise: string };
    yearly: { starter: number; pro: number; enterprise: string };
  };
  metrics: { label: string; value: string }[];
}

const PRODUCTS: Product[] = [
  {
    id: "smart-pos-mobile-billing",
    name: "Zyvionix Smart POS & Mobile Billing Software",
    badge: "Official Release • v1.0.0",
    category: "restaurant",
    tagline: "Bill Smarter, Grow Faster. A simple & powerful POS app for modern food businesses.",
    shortDesc:
      "All-in-one mobile point-of-sale built specifically for food courts, cafes, quick-service counters, and fine-dining restaurants. Generate bills in 2 taps, manage items, sync offline & cloud, and connect thermal printers effortlessly.",
    fullDesc:
      "Engineered from the ground up for high-traffic food courts and bustling dining spaces. Zyvionix Smart POS eliminates long queues with rapid-fire order entry, Bluetooth/WiFi thermal receipt printing, live table & token tracking, multi-user shifts, and real-time revenue analytics accessible directly on your smartphone or tablet.",
    image: "/images/products/mobile-pos-showcase.jpg",
    mobileMockup: "/images/products/mobile-billing-pos.jpg",
    version: "v1.0.0",
    size: "24.6 MB",
    platform: ["Android APK", "Windows Desktop", "Cloud Web Hub", "iOS (Beta)"],
    downloadUrl: "https://github.com/ZYVIONIX-SOLUTIONS-LLP/zyvionix_pos/releases/download/v1.0.0/app-release.apk",
    suitableFor: [
      "Food Courts & Fast Food Stalls",
      "Cafés & Coffee Shops",
      "Dine-in Restaurants & Bistros",
      "Bakeries & Dessert Parlours",
      "Juice Bars & Takeaway Kiosks",
      "Retail & Grocery Stores",
    ],
    features: [
      {
        icon: Zap,
        title: "Quick Billing in Seconds",
        desc: "Designed for high-speed ordering. Punch items, apply custom discounts, add modifiers, and print tokens in under 3 seconds.",
      },
      {
        icon: BarChart3,
        title: "Live Sales & Revenue Insights",
        desc: "Monitor hourly sales, top-performing food items, payment mode breakdowns (UPI, Cash, Card), and tax summaries in real-time.",
      },
      {
        icon: Layers,
        title: "Dynamic Menu & Item Catalog",
        desc: "Organize items with visual thumbnails, category tabs, price variations (Regular/Large), and real-time stock availability toggles.",
      },
      {
        icon: ShieldCheck,
        title: "Offline First + Cloud Sync",
        desc: "Never stop billing even if the internet drops. The app works 100% offline and automatically syncs to cloud servers upon reconnection.",
      },
      {
        icon: Printer,
        title: "Thermal & Bluetooth Printing",
        desc: "Instant integration with standard 58mm and 80mm ESC/POS Bluetooth, USB, and WiFi thermal receipt and KOT kitchen printers.",
      },
      {
        icon: Smartphone,
        title: "Multi-User & Cashier Roles",
        desc: "Owner dashboard with PIN-protected employee/cashier accounts, shift closing reports, and anti-theft cancellation audits.",
      },
    ],
    pricing: {
      monthly: { starter: 499, pro: 999, enterprise: "Custom" },
      yearly: { starter: 399, pro: 799, enterprise: "Custom" },
    },
    metrics: [
      { label: "Billing Speed", value: "< 3s per bill" },
      { label: "Hardware Support", value: "Any Android / PC" },
      { label: "Offline Mode", value: "100% Functional" },
      { label: "Cloud Backup", value: "Instant Encrypted" },
    ],
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"features" | "pricing" | "specs" | "guide">("features");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainProduct = PRODUCTS[0];

  const handleDownloadClick = (product: Product) => {
    setSelectedProduct(product);
    setShowDownloadModal(true);
    setDownloadSuccess(false);
  };

  const executeDownload = () => {
    setDownloadSuccess(true);
    // Direct window location / anchor trigger to GitHub Release APK
    const link = document.createElement("a");
    link.href = mainProduct.downloadUrl;
    link.download = "zyvionix-pos-v1.0.0.apk";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden pt-36 pb-16 lg:pb-24">
        {/* Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-purple-500/15 dark:bg-purple-600/10 blur-[130px] rounded-full" />
          <div className="absolute top-48 right-10 w-[400px] h-[300px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <div className="animate-hero-badge relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22)] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] mb-6">
              <Layers size={14} className="text-purple-600 dark:text-purple-300" />
              <span>Zyvionix Software Suite • SaaS</span>
            </div>

            {/* Title */}
            <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6 text-[#0f172a] dark:text-white">
              Ready-to-Deploy <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent">
                Software as a Service
              </span>
            </h1>

            {/* Divider */}
            <div className="animate-hero-divider w-24 h-1 mb-6 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full" />

            {/* Description */}
            <p className="animate-hero-body text-muted-foreground dark:text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              Powerful, cloud-synchronized business applications built for seamless daily operations.
              Subscribe on flexible monthly plans, install instantly on your devices, and scale without friction.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleDownloadClick(mainProduct)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm sm:text-base hover:from-purple-500 hover:to-indigo-500 shadow-[0_10px_30px_rgba(124,58,237,0.35)] hover:shadow-[0_15px_40px_rgba(124,58,237,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download size={18} />
                <span>Download Smart POS App</span>
              </button>
              <a
                href="#featured-product"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground font-semibold text-sm sm:text-base hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
              >
                <span>Explore Features & Pricing</span>
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY PILLS BAR ── */}
      <section className="sticky top-[72px] z-40 bg-background/85 dark:bg-black/85 backdrop-blur-xl border-y border-black/5 dark:border-white/[0.08] py-3.5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {[
              { id: "all", label: "All Software" },
              { id: "restaurant", label: "Food Courts & Restaurants" },
              { id: "retail", label: "Retail & Stores" },
              { id: "saas", label: "Cloud SaaS Platforms" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-black/[0.04] dark:bg-white/[0.04] text-muted-foreground dark:text-gray-400 border border-black/5 dark:border-white/[0.08] hover:text-purple-600 dark:hover:text-white hover:border-purple-500/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-300">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>1 Production Software Live</span>
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP PRODUCT SHOWCASE ── */}
      <section id="featured-product" className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Container with Glassmorphic Card */}
        <div className="rounded-[2.5rem] bg-gradient-to-b from-white to-purple-50/40 dark:from-white/[0.04] dark:to-white/[0.01] border border-purple-500/20 dark:border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Mesh */}
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Header info */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-black/5 dark:border-white/10 pb-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3.5 py-1 rounded-full bg-purple-600 text-white text-xs font-extrabold tracking-wide uppercase shadow-sm">
                ⭐ Featured Software
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20 flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Active Subscription Ready
              </span>
              <span className="text-xs text-muted-foreground dark:text-gray-400 font-mono">
                Version: 1.4.2 (Latest Release)
              </span>
            </div>

            <button
              onClick={() => handleDownloadClick(mainProduct)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-purple-500/30 transition-all duration-200"
            >
              <Download size={16} />
              <span>Download APK / Client</span>
            </button>
          </div>

          {/* Main Grid: Headline + Visual Banner */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground dark:text-white leading-[1.2] mb-4">
                Zyvionix Smart POS & <br />
                <span className="text-[#7c3aed] dark:text-purple-400">Mobile Billing Software</span>
              </h2>

              <p className="text-lg font-medium text-purple-600 dark:text-purple-300 mb-4">
                {mainProduct.tagline}
              </p>

              <p className="text-muted-foreground dark:text-gray-300 text-base leading-relaxed mb-6">
                {mainProduct.shortDesc}
              </p>

              {/* Target Audience Badges */}
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70 dark:text-gray-400 mb-3">
                  Tailored For:
                </p>
                <div className="flex flex-wrap gap-2">
                  {mainProduct.suitableFor.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 text-foreground/80 dark:text-gray-200 flex items-center gap-1.5"
                    >
                      <Check size={12} className="text-purple-600 dark:text-purple-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 mb-8">
                {mainProduct.metrics.map((m) => (
                  <div key={m.label} className="text-center p-2">
                    <div className="text-sm sm:text-base font-extrabold text-foreground dark:text-white">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-muted-foreground dark:text-gray-400 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => handleDownloadClick(mainProduct)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Download size={18} />
                  <span>Free Download & Trial</span>
                </button>

                <Link
                  href="/ContactUs"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-purple-500 text-foreground font-bold text-sm transition-all duration-200"
                >
                  <span>Request Custom Demo</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Graphic Banner Column */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-purple-500/20 dark:border-white/10 shadow-2xl bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
                
                {/* Visual Graphic Provided by User */}
                <Image
                  src={mainProduct.image}
                  alt="Zyvionix Smart POS Mobile Billing Software UI showcase"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Quick Action Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-purple-600/80 text-white">
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">Android & Touch Screen Ready</p>
                      <p className="text-[10px] text-gray-300">Quick 2-Tap Billing Experience</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDownloadClick(mainProduct)}
                    className="px-3.5 py-1.5 rounded-lg bg-white text-purple-950 font-extrabold text-xs hover:bg-gray-100 transition-colors"
                  >
                    Get APK
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── INTERACTIVE PRODUCT TABS ── */}
          <div className="mt-14 pt-10 border-t border-black/5 dark:border-white/10">
            {/* Tabs Navigation */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
              {[
                { id: "features", label: "Core Features", icon: Zap },
                { id: "pricing", label: "Subscription Pricing", icon: Tag },
                { id: "specs", label: "Technical Specs", icon: Layers },
                { id: "guide", label: "3-Step Setup Guide", icon: CheckCircle2 },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-purple-600 text-white shadow-md shadow-purple-500/30"
                        : "bg-black/[0.03] dark:bg-white/[0.04] text-muted-foreground dark:text-gray-400 border border-black/5 dark:border-white/10 hover:text-purple-600 dark:hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Core Features */}
            {activeTab === "features" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
                {mainProduct.features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 hover:border-purple-500/40 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all duration-300 group"
                    >
                      <div className="h-12 w-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Subscription Pricing */}
            {activeTab === "pricing" && (
              <div className="animate-in fade-in duration-300 flex flex-col items-center">
                {/* Billing Cycle Switch */}
                <div className="flex items-center gap-3 p-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/5 dark:border-white/10 mb-10">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                      billingCycle === "monthly"
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-muted-foreground dark:text-gray-400"
                    }`}
                  >
                    Monthly Billing
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                      billingCycle === "yearly"
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-muted-foreground dark:text-gray-400"
                    }`}
                  >
                    <span>Annual Billing</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500 text-[10px] text-white font-extrabold">
                      Save 20%
                    </span>
                  </button>
                </div>

                {/* 3 Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
                  {/* Starter Plan */}
                  <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col justify-between hover:shadow-xl transition-all">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                        Starter Plan
                      </span>
                      <h4 className="text-xl font-bold text-foreground dark:text-white mt-1 mb-2">
                        Food Stall & Single Counter
                      </h4>
                      <p className="text-xs text-muted-foreground dark:text-gray-400 mb-6">
                        Ideal for tea stalls, kiosks, juice counters & small takeaway shops.
                      </p>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-extrabold text-foreground dark:text-white">
                          ₹{mainProduct.pricing[billingCycle].starter}
                        </span>
                        <span className="text-xs text-muted-foreground dark:text-gray-400">/ month</span>
                      </div>

                      <ul className="space-y-3 text-xs text-muted-foreground dark:text-gray-300 mb-8">
                        {[
                          "1 POS Terminal Device",
                          "Unlimited Invoices & Tokens",
                          "Bluetooth Thermal Printer Support",
                          "Daily Sales Summary Reports",
                          "Offline Data Storage",
                          "WhatsApp & Email Support",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5">
                            <Check size={14} className="text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/ContactUs?subject=POS_Starter_Plan"
                      className="w-full py-3 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] hover:bg-purple-600 hover:text-white text-foreground font-bold text-xs text-center transition-all duration-200"
                    >
                      Subscribe Starter
                    </Link>
                  </div>

                  {/* Pro Plan (Highlighted) */}
                  <div className="p-8 rounded-3xl bg-gradient-to-b from-purple-900/10 to-indigo-900/10 dark:from-purple-950/40 dark:to-indigo-950/20 border-2 border-purple-600 relative flex flex-col justify-between shadow-2xl shadow-purple-500/15">
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
                      <Flame size={12} /> Most Popular
                    </div>

                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                        Pro Business Plan
                      </span>
                      <h4 className="text-xl font-bold text-foreground dark:text-white mt-1 mb-2">
                        Food Courts & Restaurants
                      </h4>
                      <p className="text-xs text-muted-foreground dark:text-gray-400 mb-6">
                        Complete operations engine with table management & kitchen display.
                      </p>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-extrabold text-foreground dark:text-white">
                          ₹{mainProduct.pricing[billingCycle].pro}
                        </span>
                        <span className="text-xs text-muted-foreground dark:text-gray-400">/ month</span>
                      </div>

                      <ul className="space-y-3 text-xs text-foreground/90 dark:text-gray-200 mb-8">
                        {[
                          "Up to 3 Terminals (Billing + KDS)",
                          "Unlimited Invoices & KOT Orders",
                          "Table & Order Status Tracking",
                          "Real-Time Cloud Synchronization",
                          "Multi-User PIN Cashier Access",
                          "Item-wise Profitability Analytics",
                          "Custom Logo on Printed Receipts",
                          "24/7 Priority Phone Support",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5">
                            <Check size={14} className="text-purple-600 dark:text-purple-400 shrink-0 font-bold" />
                            <span className="font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/ContactUs?subject=POS_Pro_Plan"
                      className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs text-center shadow-lg shadow-purple-500/30 transition-all duration-200"
                    >
                      Subscribe Pro Plan
                    </Link>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col justify-between hover:shadow-xl transition-all">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                        Enterprise Plan
                      </span>
                      <h4 className="text-xl font-bold text-foreground dark:text-white mt-1 mb-2">
                        Franchises & Chains
                      </h4>
                      <p className="text-xs text-muted-foreground dark:text-gray-400 mb-6">
                        For multi-outlet food court chains & franchise restaurant groups.
                      </p>

                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-3xl font-extrabold text-foreground dark:text-white">
                          Custom Pricing
                        </span>
                      </div>

                      <ul className="space-y-3 text-xs text-muted-foreground dark:text-gray-300 mb-8">
                        {[
                          "Unlimited Branches & Outlets",
                          "Central Franchise Control Hub",
                          "Live Centralized Inventory Sync",
                          "Custom ERP / Accounting Integration",
                          "Dedicated Account Manager",
                          "Custom Feature Development",
                          "Onsite Staff Training",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5">
                            <Check size={14} className="text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/ContactUs?subject=POS_Enterprise_Plan"
                      className="w-full py-3 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] hover:bg-purple-600 hover:text-white text-foreground font-bold text-xs text-center transition-all duration-200"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Technical Specs */}
            {activeTab === "specs" && (
              <div className="max-w-4xl mx-auto rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 p-6 sm:p-8 animate-in fade-in duration-300">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      System Requirements & Hardware
                    </h4>
                    <ul className="space-y-2.5 text-xs text-muted-foreground dark:text-gray-300">
                      <li>• <strong>Supported OS:</strong> Android 7.0+ / Windows 10/11</li>
                      <li>• <strong>Device Form Factor:</strong> Smartphone, Tablet, All-in-One Touch POS, PC</li>
                      <li>• <strong>RAM Requirement:</strong> 2 GB minimum (4 GB recommended)</li>
                      <li>• <strong>Storage:</strong> Less than 50 MB application size</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Printer & Connectivity
                    </h4>
                    <ul className="space-y-2.5 text-xs text-muted-foreground dark:text-gray-300">
                      <li>• <strong>Printer Protocol:</strong> ESC/POS Standard commands</li>
                      <li>• <strong>Paper Width:</strong> 58mm (2-inch) and 80mm (3-inch)</li>
                      <li>• <strong>Connection Modes:</strong> Bluetooth 4.0/5.0, WiFi LAN, USB OTG</li>
                      <li>• <strong>Data Security:</strong> AES-256 Cloud Encryption & Offline SQLite</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: 3-Step Setup Guide */}
            {activeTab === "guide" && (
              <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 animate-in fade-in duration-300">
                {[
                  {
                    step: "01",
                    title: "Download & Install",
                    desc: "Click the download button to grab the APK file onto your Android mobile or tablet. Installation takes under 30 seconds.",
                  },
                  {
                    step: "02",
                    title: "Setup Your Menu",
                    desc: "Add your food categories, prices, items, and taxes with our intuitive quick-setup wizard.",
                  },
                  {
                    step: "03",
                    title: "Pair Printer & Bill",
                    desc: "Connect your Bluetooth or USB thermal receipt printer and start printing bills and tokens instantly.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-black/5 dark:border-white/10 relative overflow-hidden"
                  >
                    <span className="text-4xl font-black text-purple-600/20 dark:text-purple-400/20 mb-3 block">
                      {s.step}
                    </span>
                    <h4 className="text-base font-bold text-foreground dark:text-white mb-2">
                      {s.title}
                    </h4>
                    <p className="text-xs text-muted-foreground dark:text-gray-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── UPCOMING SOFTWARE PIPELINE ── */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-black/5 dark:border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">
            Roadmap & Pipeline
          </span>
          <h2 className="text-3xl font-extrabold text-foreground dark:text-white mt-1 mb-3">
            More SaaS Products Coming Soon
          </h2>
          <p className="text-sm text-muted-foreground dark:text-gray-400">
            We are continuously building and expanding our catalog of enterprise and retail software products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-black/15 dark:border-white/15 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold mb-4">
                <Clock size={12} /> In Active Beta Development
              </div>
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                Zyvionix Multi-Branch Inventory & Supply Hub
              </h3>
              <p className="text-xs text-muted-foreground dark:text-gray-400 leading-relaxed mb-6">
                Cloud inventory tracking software designed for restaurant chains and warehouses.
                Automates ingredient stock deduction per recipe, low stock alerts, supplier purchase orders, and waste reduction.
              </p>
            </div>
            <Link
              href="/ContactUs?subject=Join_Beta_Inventory"
              className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              <span>Join Early Access Beta</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-black/15 dark:border-white/15 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">
                <Clock size={12} /> Planned Q4 Release
              </div>
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">
                Zyvionix AI Customer Support & WhatsApp CRM
              </h3>
              <p className="text-xs text-muted-foreground dark:text-gray-400 leading-relaxed mb-6">
                Turn WhatsApp into an automated order taking and customer support terminal.
                Powered by custom LLM workflows to handle food reservations, menu inquiries, and promotional broadcasts.
              </p>
            </div>
            <Link
              href="/ContactUs?subject=Join_Beta_WhatsAppCRM"
              className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              <span>Join Early Access Beta</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-foreground dark:text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Can I use the Smart POS app on my existing smartphone or tablet?",
              a: "Yes! Zyvionix Smart POS is designed to run seamlessly on any Android smartphone, tablet, or dedicated Android POS terminal (such as Sunmi, iMin, or handheld billing machines). You don't need to purchase expensive proprietary hardware.",
            },
            {
              q: "How does the subscription model work?",
              a: "We offer flexible monthly and annual subscriptions with zero locked-in long-term contracts. Your subscription includes all software updates, cloud data backups, continuous security patches, and direct phone/WhatsApp technical support.",
            },
            {
              q: "What happens if our internet connection disconnects during a busy shift?",
              a: "Our app is built with an Offline-First architecture. You can continue creating bills, printing receipts, and managing orders without any interruption. As soon as your internet reconnects, all sales data will safely sync to your cloud dashboard.",
            },
            {
              q: "Can you customize features specifically for our restaurant or food court?",
              a: "Absolutely. In addition to our subscription software, Zyvionix Solutions specializes in custom engineering. We can tailor menu structures, loyalty programs, payment integrations, or franchise dashboards according to your exact business requirements.",
            },
          ].map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-foreground dark:text-white"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp size={18} className="text-purple-600 shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-muted-foreground dark:text-gray-300 leading-relaxed border-t border-black/5 dark:border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="border-t border-black/5 dark:border-white/5 bg-background dark:bg-black py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-500/10 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-600 dark:text-purple-400 font-extrabold mb-3">
            Start Your Free Trial
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-foreground dark:text-white">
            Upgrade Your Business Operations Today
          </h2>
          <p className="text-muted-foreground dark:text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
            Experience lightning fast mobile billing designed to handle your peak rush hours with zero hiccups.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleDownloadClick(mainProduct)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-purple-600 text-white font-bold text-base hover:bg-purple-500 shadow-xl shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download size={18} />
              <span>Download Software</span>
            </button>
            <Link
              href="/ContactUs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-foreground font-bold text-base hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
            >
              <span>Schedule Live Demo</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD MODAL ── */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-background dark:bg-slate-900 border border-purple-500/30 shadow-2xl p-6 sm:p-8 overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-black/5 dark:bg-white/10 text-foreground hover:text-purple-600 transition-colors"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-purple-600 text-white shadow-md">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white">
                  Download Zyvionix Smart POS
                </h3>
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Version 1.4.2 • Android APK Package (24.6 MB)
                </p>
              </div>
            </div>

            {downloadSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center my-4 animate-in zoom-in-95">
                <CheckCircle2 size={40} className="text-emerald-500 mx-auto mb-2" />
                <h4 className="text-base font-bold text-foreground dark:text-white">
                  Download Initiated!
                </h4>
                <p className="text-xs text-muted-foreground dark:text-gray-300 mt-1">
                  Your download has started. Open the downloaded APK file on your Android device to install.
                </p>
              </div>
            ) : (
              <div className="space-y-4 my-6">
                <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
                  <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-2">
                    Package Details:
                  </p>
                  <ul className="text-xs text-muted-foreground dark:text-gray-300 space-y-1.5">
                    <li>• <strong>Application:</strong> Food Court & Restaurant POS Client</li>
                    <li>• <strong>Compatibility:</strong> Android 7.0 & above (Phones & Tablets)</li>
                    <li>• <strong>License:</strong> 14-Day Free Evaluation Trial Included</li>
                  </ul>
                </div>

                {/* Direct Download Button */}
                <button
                  onClick={executeDownload}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-purple-500/30 hover:from-purple-500 hover:to-indigo-500 transition-all duration-200"
                >
                  <Download size={18} />
                  <span>Start Instant APK Download</span>
                </button>
              </div>
            )}

            <div className="pt-4 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs text-muted-foreground dark:text-gray-400">
              <span>Need setup assistance?</span>
              <Link
                href="https://wa.me/916238392582?text=Hi%20Zyvionix%20team,%20I%20want%20to%20set%20up%20the%20Smart%20POS%20Mobile%20Billing%20Software"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 font-bold hover:underline"
              >
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
