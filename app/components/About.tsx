"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Monitor,
  Smartphone,
  ShoppingCart,
  Bot,
  Cloud,
  Palette,
  BarChart3,
  PenTool,
  Cpu,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import LottieAnimation from '../../components/ui/Lottiefiles';

interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  video?: string;
  poster?: string;
  lottieSrc?: string;
}

function ServiceCard({ service }: { service: Service }) {

  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const Icon = service.icon;


  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-[2rem] bg-transparent p-px shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:scale-[1.01] border border-border/50 dark:border-white/10 glow-border overflow-hidden"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] bg-card dark:bg-black text-card-foreground dark:text-white transition-colors duration-300">
        {/* Interactive Spotlight Glows */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />
        </div>

        {/* Media Container */}
        <div className="relative aspect-video overflow-hidden bg-muted/10 dark:bg-black/40">
          {service.lottieSrc ? (
            <div className="absolute inset-0 h-full w-full transition duration-1000 ease-out group-hover:scale-110 dark:opacity-90 dark:mix-blend-screen">
              <LottieAnimation src={service.lottieSrc} bgInfo="transparent" />
            </div>
          ) : service.video ? (
            <video
              ref={videoRef}
              src={service.video}
              poster={service.poster}
              loop
              muted
              autoPlay
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-60 dark:mix-blend-screen transition duration-1000 ease-out group-hover:scale-110 group-hover:opacity-90"
            />
          ) : (
            <div className="absolute inset-0 h-full w-full transition duration-1000 ease-out group-hover:scale-110 opacity-80 dark:mix-blend-screen">
              <LottieAnimation />
            </div>
          )}

          {/* Glassy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.1),transparent_70%)]" />
        </div>

        {/* Content Area */}
        <div className="flex flex-1 flex-col p-6 pt-5">
          {/* Title Section - Below video but stylized */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 text-primary transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6">
              <Icon size={20} strokeWidth={2.5} />
            </div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors duration-500">
              {service.title}
            </h3>
          </div>

          <p className="text-sm font-light leading-relaxed text-muted-foreground dark:text-gray-400 line-clamp-2 transition-colors duration-500 group-hover:text-foreground dark:group-hover:text-gray-200">
            {service.description}
          </p>

          <div className="mt-auto pt-5 flex items-center justify-between">
            <Link
              href={`/services#${service.slug}`}
              className="group/btn relative overflow-hidden flex items-center gap-2 rounded-full border border-primary/20 dark:border-white/10 bg-primary/5 dark:bg-white/5 pl-4 pr-10 py-2 text-[10px] font-bold tracking-widest uppercase text-primary dark:text-white/70 transition-all duration-500 hover:border-primary/50 hover:bg-primary/20 hover:text-primary dark:hover:text-white"
            >
              Explore
              <div className="absolute right-1 top-1 bottom-1 w-8 flex items-center justify-center rounded-full bg-primary/10 dark:bg-white/10 group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-500">
                <ArrowRight className="h-3 w-3 transition-transform duration-500 group-hover/btn:translate-x-0.5" />
              </div>
            </Link>

            <div className="h-1 w-8 rounded-full bg-primary/20 dark:bg-white/5 overflow-hidden">
              <div className="h-full w-0 bg-primary group-hover:w-full transition-all duration-1000 ease-out" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function About() {
  const services = [
    {
      id: 1,
      icon: Monitor,
      title: "Web Development",
      slug: "web-development",
      description: "High-performance, scalable websites and progressive web apps built with the latest technologies.",
      video: "/videos/abstract-cyan-loop-1.mp4",
      poster: "/videos/about_cyan_1.png",
      lottieSrc: "https://lottie.host/0720ec64-6eb5-46f2-bd10-ba266a2efa5a/Hehr4ETsVQ.lottie"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "App Development",
      slug: "app-development",
      description: "Native and cross-platform mobile applications that deliver premium performance and user experience.",
      video: "/videos/abstract-cyan-loop-2.mp4",
      poster: "/videos/about_cyan_2.png",
      lottieSrc: "https://lottie.host/6ddc4d0c-b1f1-425f-a5ae-6240130e05ea/0ZHuI1NHxK.lottie"
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "E-Commerce",
      slug: "ecommerce-platform",
      description: "Secure and optimized online shopping platforms designed to maximize conversions and sales.",
      video: "/videos/abstract-cyan-loop-3.mp4",
      poster: "/videos/about_cyan_3.png",
      lottieSrc: "https://lottie.host/26eae896-f94f-4e43-b7ff-d6ad5d9ce4b9/BDNL1RZHds.lottie"
    },
    {
      id: 4,
      icon: Bot,
      title: "AI & Chatbots",
      slug: "ai-chatbot",
      description: "Intelligent conversational agents and machine learning models that automate business workflows.",
      video: "/videos/abstract-cyan-loop-4.mp4",
      poster: "/videos/about_cyan_4.png",
      lottieSrc: "https://lottie.host/78c243b8-411f-480b-a19c-910945ff16ea/2p6s3dYyue.lottie"
    },
    {
      id: 5,
      icon: Cloud,
      title: "SaaS Development",
      slug: "saas-development",
      description: "Cloud-native software solutions built for multi-tenancy, security, and high scalability.",
      video: "/videos/abstract-cyan-loop-1.mp4",
      poster: "/videos/about_cyan_1.png",
      lottieSrc: "https://lottie.host/017797d2-3bae-4a47-899a-4b036e425481/CneBPF9W6t.lottie"
    },
    {
      id: 6,
      icon: Palette,
      title: "UI/UX Design",
      slug: "ui-ux-design",
      description: "Crafting intuitive digital interfaces that combine stunning aesthetics with seamless usability.",
      video: "/videos/abstract-cyan-loop-2.mp4",
      poster: "/videos/about_cyan_2.png",
      lottieSrc: "https://lottie.host/0e836a88-726d-4402-8295-226d28f3f9c4/vGeCWuvkQ1.lottie"
    },
    {
      id: 7,
      icon: BarChart3,
      title: "Digital Marketing",
      slug: "digital-marketing",
      description: "Data-driven growth strategies and marketing automation to amplify your brand's digital presence.",
      video: "/videos/abstract-cyan-loop-3.mp4",
      poster: "/videos/about_cyan_3.png",
      lottieSrc: "https://lottie.host/dd04a975-b7a5-400b-a5fd-5a6b51e0a830/I3gycnioEA.lottie"
    },
    {
      id: 8,
      icon: PenTool,
      title: "Logo & Branding",
      slug: "logo-branding",
      description: "Creating unique visual identities and memorable brand stories that leave a lasting impression.",
      video: "/videos/abstract-cyan-loop-1.mp4",
      poster: "/videos/about_cyan_1.png",
      lottieSrc: "https://lottie.host/e978978f-26ea-4f93-904b-6f6933597cd4/SjygM4l49W.lottie"
    },
    {
      id: 9,
      icon: Cpu,
      title: "IoT Solutions",
      slug: "iot-solutions",
      description: "Smart connected systems and embedded software to monitor and control industrial environments.",
      video: "/videos/abstract-cyan-loop-2.mp4",
      poster: "/videos/about_cyan_2.png",
      lottieSrc: "https://lottie.host/3740aa27-e3fe-4490-ac5f-9ace3c517963/HLyJLHmv7Y.lottie"
    }
  ]

  return (
    <section className="relative w-full pt-10 pb-24 bg-background text-foreground transition-colors duration-300 overflow-hidden">

      {/* Subtle Background Grid (Dark Only) */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] dark:bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] dark:bg-purple-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-28">
        {/* Header */}
        <div style={{ paddingBottom: "30px" }} className=" text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[#0f172a] dark:text-white">
            What We Do
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"></div>
          <p className=" text-lg text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            We build modern, scalable digital solutions using cutting-edge technologies.
            From web applications to AI-powered systems, we help businesses scale faster.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
