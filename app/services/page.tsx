"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "../components/Footer"
import About from "../components/About"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Web Development",
    id: "web-development",
    tag: "01",
    image: "/images/web-development-v4.jpg",
    description:
      "We engineer high-performance, custom web solutions that serve as the digital backbone of your business. From complex enterprise applications to sleek marketing sites, we leverage modern frameworks like Next.js and React to deliver lightning-fast, SEO-optimized experiences that drive real business growth.",
    highlights: ["Next.js & React", "Cloud Infrastructure", "SEO Optimized"],
  },
  {
    title: "App Development",
    id: "app-development",
    tag: "02",
    image: "/images/app-development-v4.jpg",
    description:
      "Our team builds powerful, intuitive mobile and web applications tailored to your specific business needs. We specialize in creating seamless cross-platform experiences for iOS and Android, focusing on high-performance architecture, user-centric design, and robust scalability to ensure your app can grow alongside your user base.",
    highlights: ["Cross-Platform", "Scalable Architecture", "Seamless UX"],
  },
  {
    title: "E-Commerce Platform",
    id: "ecommerce-platform",
    tag: "03",
    image: "/images/ecommerce-v2.jpg",
    description:
      "We develop comprehensive e-commerce ecosystems designed to maximize conversions and simplify management. Our platforms feature secure, frictionless payment integrations, advanced inventory tracking, and beautiful, high-converting user interfaces that transform visitors into loyal, long-term customers.",
    highlights: ["Secure Payments", "Inventory Management", "Modern UI"],
  },
  {
    title: "AI Chatbot Platform",
    id: "ai-chatbot",
    tag: "04",
    image: "/images/chatbot-platform-v2.png",
    description:
      "Leverage the power of artificial intelligence to transform your customer service and engagement. We build custom LLM-powered chatbots that provide 24/7 intelligent support, automate complex workflows, and learn from user interactions to deliver increasingly personalized and effective experiences.",
    highlights: ["LLM Powered", "24/7 Automation", "Cost Reduction"],
  },
  {
    title: "SaaS Development",
    id: "saas-development",
    tag: "05",
    image: "/images/saas-development-v2.png",
    description:
      "We specialize in building robust Software-as-a-Service platforms from the ground up. Our solutions feature secure multitenancy, advanced analytics dashboards, and scalable cloud architectures designed to handle complex subscription models and heavy data loads while maintaining peak performance.",
    highlights: ["Auth Systems", "Analytics Dashboards", "Subscription Ready"],
  },
  {
    title: "UI / UX Design",
    id: "ui-ux-design",
    tag: "06",
    image: "/images/ui-ux-design-v3.png",
    description:
      "Our design philosophy centers on creating deep emotional connections between your brand and your users. Through rigorous user research, meticulous wireframing, and world-class visual design, we build intuitive interfaces and seamless experiences that are as functional as they are beautiful.",
    highlights: ["Design Systems", "User Research", "Prototyping"],
  },
  {
    title: "Digital Marketing",
    id: "digital-marketing",
    tag: "07",
    image: "/images/digital-marketing-v6.jpg",
    description:
      "We craft data-driven digital marketing strategies that amplify your brand voice and deliver measurable results. From advanced SEO and high-impact social media campaigns to conversion rate optimization, we focus on driving high-quality traffic and turning that traffic into sustainable revenue.",
    highlights: ["SEO & SEM", "Social Media", "Growth Strategy"],
  },
  {
    title: "Logo & Branding",
    id: "logo-branding",
    tag: "08",
    image: "/images/logo-branding-v6.png",
    description:
      "Your brand is more than just a logo—it's your story. We create comprehensive visual identities and brand frameworks that resonate with your target audience, establishing a powerful, consistent presence that builds trust and sets you apart in even the most competitive markets.",
    highlights: ["Brand Identity", "Logo Design", "Visual Storytelling"],
  },
  {
    title: "IoT Solutions",
    id: "iot-solutions",
    tag: "09",
    image: "/images/iot-solutions-v3.jpg",
    description:
      "We bridge the gap between the physical and digital worlds with custom IoT solutions. Our team develops smart, connected systems and embedded software that provide real-time monitoring, data-driven insights, and automated control for both industrial and consumer-facing environments.",
    highlights: ["Smart Connectivity", "Embedded Systems", "Real-time Monitoring"],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-24 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-400/20 dark:bg-purple-700/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="animate-hero-badge relative inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] mb-6">
            <span className="h-2 w-2 rounded-full bg-[#7c3aed] dark:bg-purple-300 shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse" />
            <span>What We Offer</span>
          </div>
          <h1 className="animate-hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8 text-[#0f172a] dark:text-white">
            Digital Solutions Built for the <br />
            <span className="text-[#7c3aed] dark:text-purple-400 font-extrabold">Modern World</span>
          </h1>
          <div className="animate-hero-divider w-24 h-px mx-auto mb-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <p className="animate-hero-body text-muted-foreground dark:text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            At Zyvionix Solutions, we craft technology-powered solutions that help businesses,
            startups, and entrepreneurs grow, scale, and thrive in today&apos;s
            fast-moving digital landscape.
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO GRID (About component) ── */}
      <About />

      {/* ── DETAILED SERVICE SECTIONS ── */}
      <section className="max-w-6xl mx-auto px-6 pb-32 space-y-36 pt-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`scroll-mt-32 grid md:grid-cols-2 gap-16 items-center group`}
            >
              {/* TEXT — alternates sides */}
              <div className={isEven ? "md:order-1" : "md:order-2"}>
                {/* Number tag */}
                <span className="text-xs font-bold tracking-[0.3em] text-purple-500/60 uppercase mb-4 block">
                  {service.tag} / {String(services.length).padStart(2, "0")}
                </span>

                <h2 className="text-4xl font-extrabold tracking-tight mb-5 text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h2>

                {/* Animated underline */}
                <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6 group-hover:w-24 dark:h-px dark:bg-none dark:bg-purple-500/50 dark:group-hover:bg-purple-500 dark:rounded-none transition-all duration-700 ease-out" />

                <p className="text-muted-foreground dark:text-gray-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 text-muted-foreground dark:text-gray-300 bg-white dark:bg-white/[0.03] shadow-[0_2px_10px_rgba(0,0,0,0.03)] dark:shadow-none group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:shadow-[0_5px_15px_rgba(168,85,247,0.15)] dark:group-hover:shadow-none transition-all duration-300 group-hover:-translate-y-1 dark:group-hover:translate-y-0"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href="/ContactUs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1 dark:hover:translate-y-0"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* IMAGE */}
              <div className={`relative ${isEven ? "md:order-2" : "md:order-1"}`}>
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-purple-400/40 dark:bg-purple-600/10 blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative h-80 rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/[0.07] group-hover:border-purple-500/30 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] group-hover:-translate-y-3 dark:group-hover:translate-y-0 group-hover:shadow-[0_40px_80px_rgba(168,85,247,0.15)] dark:group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-90 dark:opacity-75 group-hover:opacity-100 group-hover:scale-[1.08] dark:group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  />
                  {/* Theme-aware vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent dark:from-black/70 dark:via-black/20" />
                  {/* Purple tint on hover */}
                  <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply dark:mix-blend-color-dodge" />
                  {/* Watermark number */}
                  <span className="absolute bottom-4 right-5 text-7xl font-black text-black/5 dark:text-white/5 select-none pointer-events-none leading-none group-hover:-translate-y-2 dark:group-hover:translate-y-0 transition-transform duration-700">
                    {service.tag}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── CTA BANNER ── */}
      <section className="border-t border-black/5 dark:border-white/5 bg-background dark:bg-black py-24 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-purple-400/10 dark:bg-purple-700/5 blur-[120px] pointer-events-none animate-pulse dark:animate-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold mb-4">Let&apos;s Work Together</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/60 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 text-lg mb-10 leading-relaxed">
            Tell us your idea and we&apos;ll turn it into a powerful digital product that drives results.
          </p>
          <Link
            href="/ContactUs"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-purple-600 text-white font-bold text-lg hover:bg-purple-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
