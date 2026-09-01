"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "Web", "App", "AI", "Commerce", "SaaS", "Design", "Marketing", "Branding", "IoT"];

const PROJECTS = [
  {
    id: 1,
    title: "Enterprise SaaS Dashboard",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Fitness Tracker Mobile App",
    category: "App",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Modern E-Commerce Engine",
    category: "Commerce",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "AI Customer Intelligence",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "Corporate Brand Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 6,
    title: "Omni Electrics",
    category: "Web",
    image: "/images/portfolio-section/omni-img.png",
    link: "https://omnielectrics.in/",
  },
  {
    id: 11,
    title: "Nutmeg plantations",
    category: "Web",
    image: "/images/portfolio-section/nutmeg-img.png",
    link: "https://nutmeg-one.vercel.app/",
  },
  {
    id: 12,
    title: "FloraLux",
    category: "Web",
    image: "/images/portfolio-section/plant-img.png",
    link: "https://plant-kappa-three.vercel.app/",
  },
  {
    id: 13,
    title: "CLEANEX – Car Wash",
    category: "Web",
    image: "/images/portfolio-section/cleanex-img.png",
    link: "https://car-wash-blush-one.vercel.app/",
  },
  {
    id: 14,
    title: "Velocity Motors – Used Cars",
    category: "Web",
    image: "/images/portfolio-section/velocity-img.png",
    link: "https://car-dealer-weld.vercel.app/",
  },
  {
    id: 15,
    title: "Clean Ride Car Wash",
    category: "Web",
    image: "/images/portfolio-section/cleanride-img.png",
    link: "https://car-wash2.vercel.app/",
  },
  {
    id: 7,
    title: "Smart Home IoT Hub",
    category: "IoT",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 8,
    title: "Creative UI/UX Design System",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 9,
    title: "Digital Growth Strategy",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 10,
    title: "Healthcare Management SaaS",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
    link: "#",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = PROJECTS.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-400/20 dark:bg-purple-700/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="animate-hero-badge relative inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] mb-6">
                <span className="h-2 w-2 rounded-full bg-[#7c3aed] dark:bg-purple-300 shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse" />
                <span>Our Work</span>
              </div>
              <h1 className="animate-hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-[#0f172a] dark:text-white">
                Projects That <br />
                <span className="text-[#7c3aed] dark:text-purple-400 font-extrabold">Define Excellence</span>
              </h1>
              <div className="animate-hero-divider w-24 h-px mb-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent lg:bg-gradient-to-r lg:from-purple-500 lg:to-transparent" />
              <p className="animate-hero-body text-muted-foreground dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                A curated selection of digital products we&apos;ve built — from AI platforms to
                global commerce experiences. Each project, a story of ambition turned into reality.
              </p>
            </div>

            {/* Right Raw Image */}
            <div className="relative w-full flex justify-center lg:justify-end translate-x-0 lg:translate-x-16 xl:translate-x-24 overflow-hidden lg:overflow-visible">
              <Image
                src="/images/portfolio-section/ChatGPT Image Sep 1, 2026, 11_56_05 AM.png"
                alt="Zyvionix Portfolio Showcase"
                width={500}
                height={380}
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY FILTER BAR ── */}
      <div className="sticky top-[72px] z-40 bg-background/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/[0.06] py-4 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-2 flex-wrap">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "bg-black/[0.04] dark:bg-white/[0.04] text-muted-foreground/60 dark:text-gray-400 border border-black/5 dark:border-white/[0.08] hover:text-purple-600 dark:hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10"
                  }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PROJECT CARDS (original layout) ── */}
      <main className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="h-full flex outline-none"
            >
              <Card
                className="w-full group overflow-hidden bg-white dark:bg-card/5 border border-black/5 dark:border-transparent shadow-sm hover:shadow-xl dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 flex flex-col"
                style={{ height: "310px" }}
              >
                <CardContent className="p-0 border-b border-black/10 dark:border-white/10 flex-none" style={{ height: "220px" }}>
                  <div className="w-full h-full overflow-hidden shrink-0" style={{ height: "220px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="block w-full h-full object-fill transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ height: "220px" }}
                    />
                  </div>
                </CardContent>
                <CardFooter
                  className="relative p-5 flex items-center justify-between flex-none overflow-hidden bg-muted/30 dark:bg-muted"
                  style={{ height: "90px" }}
                >
                  <div className="flex flex-col gap-1 pr-4">
                    <h3 className="text-base font-semibold text-foreground tracking-tight line-clamp-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>
                  <div className="text-foreground transform -translate-x-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-600">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">No projects in this category yet.</p>
          </div>
        )}
      </main>

      {/* ── CTA BANNER ── */}
      <section className="border-t border-black/5 dark:border-white/5 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 dark:bg-purple-700/5 blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-500 font-bold mb-4">
            Start Your Project
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/60 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Let&apos;s Build Your Next Big Thing
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 text-lg mb-10 leading-relaxed">
            Have an idea? We&apos;ll turn it into a powerful digital product that stands out.
          </p>
          <Link
            href="/ContactUs"
            className="btn btn-outline hover-shimmer gap-2"
          >
            Start a Conversation
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
