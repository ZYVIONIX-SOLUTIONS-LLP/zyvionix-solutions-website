"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Clock3,
  Code2,
  Compass,
  HeartHandshake,
  Layers3,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { MdTrendingUp } from "react-icons/md";

import Footer from "../components/Footer";

const openings = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Kerala / Remote",
    description:
      "Build polished, high-performance interfaces with React, Next.js, and strong product thinking.",
    responsibilities: [
      "Develop and maintain responsive web UIs using React and Next.js.",
      "Collaborate with designers to translate Figma designs into pixel-perfect interfaces.",
      "Write clean, reusable, and well-documented component code.",
      "Optimize applications for speed, SEO and core web vitals.",
      "Participate in code reviews and contribute to technical decisions.",
    ],
    requirements: [
      "1+ years of hands-on experience with React / Next.js.",
      "Solid understanding of HTML, CSS (Tailwind preferred), and JavaScript/TypeScript.",
      "Familiarity with RESTful APIs and state management patterns.",
      "Ability to work independently and communicate progress clearly.",
    ],
    niceToHave: [
      "Experience with animations (Framer Motion, GSAP).",
      "Familiarity with CMS tools (Sanity, Contentful).",
      "Portfolio or GitHub with live projects.",
    ],
  },
  {
    title: "UI / UX Designer",
    type: "Full-time",
    location: "Remote Friendly",
    description:
      "Shape flows, wireframes, and visual systems that turn complex ideas into clear experiences.",
    responsibilities: [
      "Design end-to-end user flows, wireframes, and high-fidelity prototypes in Figma.",
      "Define and maintain a consistent design system across multiple products.",
      "Conduct feedback sessions and iterate based on real user insights.",
      "Collaborate closely with developers to ensure design integrity during implementation.",
      "Contribute to brand direction and visual language decisions.",
    ],
    requirements: [
      "Strong portfolio demonstrating UI/UX work across web or mobile products.",
      "Proficiency in Figma and component-based design systems.",
      "Understanding of accessibility standards and responsive design.",
      "Clear communication skills and ability to articulate design rationale.",
    ],
    niceToHave: [
      "Experience working with development teams in an Agile environment.",
      "Knowledge of micro-interactions and motion design.",
      "Familiarity with user testing tools (Maze, Hotjar).",
    ],
  },
  {
    title: "Digital Marketing Strategist",
    type: "Full-time",
    location: "Kerala",
    description:
      "Plan campaigns, grow visibility, and help brands convert attention into measurable business results.",
    responsibilities: [
      "Plan and execute multi-channel digital marketing campaigns (SEO, SEM, social, email).",
      "Analyse performance data and produce actionable insights and reports.",
      "Manage and grow clients' social media presence and content calendars.",
      "Coordinate with design and content teams to produce campaign assets.",
      "Identify growth opportunities and run structured A/B experiments.",
    ],
    requirements: [
      "2+ years in digital marketing with proven campaign results.",
      "Hands-on experience with Google Ads, Meta Ads, and SEO tools.",
      "Strong analytical mindset with comfort reading data in GA4 or similar.",
      "Excellent written communication skills in English.",
    ],
    niceToHave: [
      "Experience with marketing automation platforms.",
      "Knowledge of personal branding and LinkedIn growth strategies.",
      "Certification in Google Analytics or similar.",
    ],
  },
  {
    title: "Product Intern",
    type: "Internship",
    location: "Hybrid",
    description:
      "Work across design, delivery, and research while learning how digital products are built end to end.",
    responsibilities: [
      "Assist in defining product requirements and user stories.",
      "Support the team with research, competitor benchmarking, and user feedback analysis.",
      "Participate in sprint planning, standups, and retrospectives.",
      "Help maintain project documentation, roadmaps, and task tracking.",
      "Contribute ideas and flag risks or observations proactively.",
    ],
    requirements: [
      "Currently enrolled in or recently graduated from a relevant program.",
      "Genuine curiosity about how digital products are built.",
      "Good written and verbal communication skills.",
      "Organized and self-driven with an ability to manage your own tasks.",
    ],
    niceToHave: [
      "Prior exposure to product, design, or tech through coursework or side projects.",
      "Familiarity with tools like Notion, Linear, or Figma.",
      "A personal project or case study you can walk us through.",
    ],
  },
];

const reasonsToJoin = [
  {
    title: "Meaningful Work",
    description: "We build products and services that solve real business problems, not filler work.",
    icon: Rocket,
  },
  {
    title: "Growth Mindset",
    description: "You get room to learn, ship, experiment, and keep leveling up with supportive teammates.",
    icon: MdTrendingUp,
  },
  {
    title: "Collaborative Culture",
    description: "Designers, developers, and strategists work closely together with clarity and mutual respect.",
    icon: Users,
  },
  {
    title: "Flexible Rhythm",
    description: "We value focus, ownership, and sustainable pace over performative hustle.",
    icon: Clock3,
  },
];

const values = [
  {
    title: "Build With Care",
    description: "We sweat the details and care about the experience behind every interaction.",
    icon: HeartHandshake,
  },
  {
    title: "Think Beyond Tasks",
    description: "We value people who connect execution to product impact and business outcomes.",
    icon: Compass,
  },
  {
    title: "Learn in Public",
    description: "Questions, feedback, and iteration are part of how we get better together.",
    icon: Layers3,
  },
  {
    title: "Ship Modern Work",
    description: "We embrace current tools, thoughtful systems, and strong engineering fundamentals.",
    icon: Code2,
  },
];

const hiringSteps = [
  "Share your resume, portfolio, or relevant work samples.",
  "Have a short intro conversation with our team.",
  "Complete a practical discussion or lightweight task if needed.",
  "Move into a final alignment round and onboarding.",
];

export default function CarrierPage() {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const toggle = (title: string) =>
    setExpandedRole((prev) => (prev === title ? null : title));

  return (
    <main className="bg-background text-foreground min-h-screen transition-colors duration-300">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-24">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-violet-400/20 dark:bg-purple-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-300/15 dark:bg-indigo-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* LEFT — Headline */}
            <div className="animate-hero-slide-left">
              <div className="animate-hero-badge relative inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[#14141c] dark:to-[#08080c] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-white/10 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] mb-6">
                <BriefcaseBusiness className="h-4 w-4 text-[#7c3aed] dark:text-purple-300 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                <span>Career Opportunities</span>
              </div>

              <h1 className="animate-hero-title text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl tracking-tight">
                <span className="text-[#0f172a] dark:text-white">
                  Build digital products
                </span>
                <br />
                <span className="text-[#7c3aed] dark:text-purple-400 font-extrabold">
                  with a team that cares.
                </span>
              </h1>

              <div className="mt-6 w-16 h-px bg-purple-500/50" />

              <p className="animate-hero-body mt-6 max-w-xl text-lg leading-8 text-muted-foreground dark:text-gray-400">
                At Zyvionix Solutions, we are looking for curious builders, designers, and strategists
                who want to create meaningful work for ambitious brands and growing businesses.
              </p>

              <div className="animate-hero-cta mt-8 flex flex-wrap gap-4">
                <Link
                  href="mailto:info@zyvionixsolutions.com?subject=Career%20Application"
                  className="inline-flex items-center gap-2.5 rounded-[1.25rem] bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(124,58,237,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-2.5px_5px_rgba(0,0,0,0.25)] border border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_24px_rgba(124,58,237,0.45)]"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2.5 rounded-[1.25rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ebff] dark:from-[#14141c] dark:via-[#0c0c12] dark:to-[#060608] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-white/10 shadow-[0_6px_16px_rgba(124,58,237,0.14),inset_0_1.5px_2px_#ffffff,inset_0_-2px_4px_rgba(124,58,237,0.12)] px-7 py-3.5 text-sm font-extrabold transition-all duration-300 hover:scale-105"
                >
                  <span>Explore Our Work</span>
                </Link>
              </div>
            </div>

            {/* RIGHT — Ultra Skeuomorphic Info Card */}
            <div className="animate-hero-card rounded-[2.8rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.15)] p-7 sm:p-9 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-gradient-to-b from-[#f3edff] to-[#e6d8fd] dark:from-[#14141c] dark:to-[#08080c] border border-[#d4c0ff]/90 dark:border-white/10 p-6 shadow-[inset_0_2.5px_4px_rgba(124,58,237,0.18),0_1.5px_2px_#ffffff,0_4px_12px_rgba(124,58,237,0.08)] dark:shadow-[inset_0_2.5px_5px_rgba(0,0,0,0.6),0_1px_1.5px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#7c3aed] dark:text-purple-300 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Team Style</p>
                  <p className="mt-3 text-xl font-extrabold text-[#0f172a] dark:text-white leading-snug">Small team,<br />high ownership</p>
                </div>
                <div className="rounded-[2rem] bg-gradient-to-b from-[#f3edff] to-[#e6d8fd] dark:from-[#14141c] dark:to-[#08080c] border border-[#d4c0ff]/90 dark:border-white/10 p-6 shadow-[inset_0_2.5px_4px_rgba(124,58,237,0.18),0_1.5px_2px_#ffffff,0_4px_12px_rgba(124,58,237,0.08)] dark:shadow-[inset_0_2.5px_5px_rgba(0,0,0,0.6),0_1px_1.5px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#7c3aed] dark:text-purple-300 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Work Model</p>
                  <p className="mt-3 text-xl font-extrabold text-[#0f172a] dark:text-white leading-snug">Flexible<br />and focused</p>
                </div>
              </div>

              <div className="mt-6 rounded-[2.2rem] border border-[#e3d5ff]/90 dark:border-white/10 bg-gradient-to-b from-[#faf7ff] to-[#f1e6ff] dark:from-[#111116] dark:to-[#08080c] p-6 sm:p-7 shadow-[inset_0_2px_5px_rgba(124,58,237,0.14),0_1.5px_2px_#ffffff] dark:shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]">
                <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#7c3aed] dark:text-purple-400 mb-6">Who thrives here</p>
                <div className="space-y-6">
                  {values.slice(0, 3).map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4 items-start group/item">
                        <div className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#ffffff] via-[#f3edff] to-[#e3d3ff] dark:from-[#0f0f14] dark:via-[#08080c] dark:to-[#030305] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff] dark:border-white/10 shadow-[0_6px_16px_-2px_rgba(124,58,237,0.28),inset_0_2px_2.5px_#ffffff,inset_0_-2.5px_5px_rgba(124,58,237,0.2)] dark:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover/item:scale-105">
                          <Icon className="h-5 w-5 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                        </div>
                        <div className="pt-0.5">
                          <p className="font-extrabold text-[#0f172a] dark:text-white text-base group-hover/item:text-[#7c3aed] transition-colors">{item.title}</p>
                          <p className="mt-1 text-xs leading-relaxed text-[#64748b] dark:text-gray-300 font-normal">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Open Roles</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-[#0f172a] dark:text-white">
              Opportunities for people who like building with intention.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {openings.map((role) => {
              const isOpen = expandedRole === role.title;
              return (
                <article
                  key={role.title}
                  className={`group relative overflow-hidden rounded-[2.8rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.15)] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-10px_rgba(124,58,237,0.3)] cursor-pointer ${
                    isOpen ? "border-[#7c3aed]/50 dark:border-purple-400/50 shadow-[0_30px_70px_-10px_rgba(124,58,237,0.3)]" : ""
                  }`}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Header row */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="rounded-full bg-gradient-to-b from-[#f3edff] to-[#e6d8fd] dark:from-[#14141c] dark:to-[#08080c] border border-[#d4c0ff]/90 dark:border-white/10 px-4 py-1.5 text-xs font-extrabold text-[#7c3aed] dark:text-purple-300 shadow-[inset_0_1.5px_2.5px_rgba(124,58,237,0.18),0_1px_1.5px_#ffffff,0_3px_8px_rgba(124,58,237,0.08)]">
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/5 border border-[#e5d8ff] dark:border-white/10 text-xs font-extrabold text-[#64748b] dark:text-gray-300 shadow-[0_3px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_#ffffff]">
                        <MapPin className="h-4 w-4 text-[#7c3aed] drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                        {role.location}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal">
                      {role.description}
                    </p>

                    {/* Skeuomorphic Toggle button */}
                    <button
                      onClick={() => toggle(role.title)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-extrabold text-[#7c3aed] dark:text-purple-200 bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ebff] dark:from-[#14141c] dark:via-[#0c0c12] dark:to-[#060608] border border-[#d8c5ff]/80 dark:border-white/10 shadow-[0_6px_14px_rgba(124,58,237,0.14),inset_0_1.5px_2px_#ffffff,inset_0_-2px_4px_rgba(124,58,237,0.12)] transition-all duration-300 hover:scale-105 w-fit cursor-pointer"
                    >
                      {isOpen ? "Close Details" : "View Full Details"}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Expandable panel */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-8 pt-8 border-t border-purple-200 dark:border-white/[0.07]" : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent"
                        }`}
                    >
                      <div className="overflow-hidden space-y-8">
                        {/* Responsibilities */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-500 mb-4">Responsibilities</p>
                          <ul className="space-y-3">
                            {role.responsibilities.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-gray-800 dark:text-gray-300">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-500 mb-4">Requirements</p>
                          <ul className="space-y-3">
                            {role.requirements.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-gray-800 dark:text-gray-300">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Nice to Have */}
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500 mb-4">Nice to Have</p>
                          <ul className="space-y-3">
                            {role.niceToHave.map((r) => (
                              <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-500">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-700" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-4 pb-2">
                          <Link
                            href={`mailto:info@zyvionixsolutions.com?subject=Application — ${encodeURIComponent(role.title)}`}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 dark:bg-purple-600 px-6 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:bg-purple-500 dark:hover:bg-purple-500 hover:shadow-[0_0_24px_rgba(168,85,247,0.4)]"
                          >
                            <span>Apply for this Role</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          
          {/* General inquiry box */}
          <div className="mt-12 rounded-[2.2rem] bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent dark:from-violet-900/20 dark:via-purple-900/10 dark:to-transparent border border-purple-200/60 dark:border-purple-500/20 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#0f172a] dark:text-white mb-2">
                Don't see a role that fits?
              </h3>
              <p className="text-sm text-purple-900/70 dark:text-gray-400 max-w-xl">
                We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to Zyvionix Solutions.
              </p>
            </div>
            <Link
              href="mailto:info@zyvionixsolutions.com?subject=General%20Career%20Inquiry"
              className="inline-flex items-center gap-2.5 rounded-[1.25rem] bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(124,58,237,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-2.5px_5px_rgba(0,0,0,0.25)] border border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_24px_rgba(124,58,237,0.45)]"
            >
              <span>Email Your Profile</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY JOIN + HIRING PROCESS ── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">

            {/* Why Join */}
            <div className="rounded-[2.8rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.15)] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7c3aed] dark:text-purple-400 font-extrabold mb-3">Why Join</p>
              <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white leading-tight">
                A place to do strong work and keep growing.
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasonsToJoin.map((item, index) => {
                  const Icon = item.icon;
                  const num = String(index + 1).padStart(2, "0");
                  return (
                    <div
                      key={item.title}
                      className="relative rounded-[2rem] bg-gradient-to-b from-[#f3edff] to-[#e6d8fd] dark:from-[#14141c] dark:to-[#08080c] border border-[#d4c0ff]/90 dark:border-white/10 p-6 shadow-[inset_0_2.5px_4px_rgba(124,58,237,0.18),0_1.5px_2px_#ffffff,0_4px_12px_rgba(124,58,237,0.08)] dark:shadow-[inset_0_2.5px_5px_rgba(0,0,0,0.6),0_1px_1.5px_rgba(255,255,255,0.12)] transition-all duration-300 group/reason overflow-hidden hover:scale-[1.02]"
                    >
                      <div className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#ffffff] via-[#f3edff] to-[#e3d3ff] dark:from-[#0f0f14] dark:via-[#08080c] dark:to-[#030305] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff] dark:border-white/10 shadow-[0_6px_16px_-2px_rgba(124,58,237,0.28),inset_0_2px_2.5px_#ffffff,inset_0_-2.5px_5px_rgba(124,58,237,0.2)] dark:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] mb-4">
                        <Icon className="h-5 w-5 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                      </div>
                      <h3 className="text-base font-extrabold text-[#0f172a] dark:text-white group-hover/reason:text-[#7c3aed] transition-colors">{item.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#64748b] dark:text-gray-300 font-normal">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Hiring Process */}
            <div className="rounded-[2.8rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.15)] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7c3aed] dark:text-purple-400 font-extrabold mb-3">Hiring Process</p>
              <h2 className="text-3xl font-extrabold text-[#0f172a] dark:text-white leading-tight">
                Clear, simple, and respectful of your time.
              </h2>

              <div className="mt-8 space-y-4">
                {hiringSteps.map((step, index) => (
                  <div
                    key={step}
                    className="group/step flex items-center gap-5 rounded-[2rem] bg-gradient-to-b from-[#f3edff] to-[#e6d8fd] dark:from-[#14141c] dark:to-[#08080c] border border-[#d4c0ff]/90 dark:border-white/10 p-5 shadow-[inset_0_2.5px_4px_rgba(124,58,237,0.18),0_1.5px_2px_#ffffff,0_4px_12px_rgba(124,58,237,0.08)] dark:shadow-[inset_0_2.5px_5px_rgba(0,0,0,0.6),0_1px_1.5px_rgba(255,255,255,0.12)] transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#ffffff] via-[#f3edff] to-[#e3d3ff] dark:from-[#0f0f14] dark:via-[#08080c] dark:to-[#030305] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff] dark:border-white/10 shadow-[0_6px_16px_-2px_rgba(124,58,237,0.28),inset_0_2px_2.5px_#ffffff,inset_0_-2.5px_5px_rgba(124,58,237,0.2)] dark:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] font-extrabold text-base">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-extrabold group-hover/step:text-[#0f172a] transition-colors">{step}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-purple-100 dark:border-white/10 py-24 text-center relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 hidden dark:block dark:bg-purple-700/5 blur-[120px] pointer-events-none animate-pulse dark:animate-none" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-bold mb-4">Let&apos;s Talk</p>
          <h2 className="text-4xl font-extrabold sm:text-5xl text-[#0f172a] dark:text-white mb-6">
            Don&apos;t see your exact role?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground dark:text-gray-400 mb-10">
            If you care about modern product work, thoughtful collaboration, and building useful
            digital experiences — send us your profile and a short note about what you want to work on.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:info@Zyvionix.com?subject=General%20Career%20Inquiry"
              className="inline-flex items-center gap-2.5 rounded-[1.25rem] bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 px-8 py-4 text-base font-extrabold text-white shadow-[0_8px_20px_rgba(124,58,237,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-2.5px_5px_rgba(0,0,0,0.25)] border border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_rgba(124,58,237,0.45)]"
            >
              <span>Email Your Profile</span>
              <ArrowRight className="h-5 w-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            </Link>
            <Link
              href="/WhoWeAre"
              className="inline-flex items-center gap-2.5 rounded-[1.25rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ebff] dark:from-[#14141c] dark:via-[#0c0c12] dark:to-[#060608] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-white/10 shadow-[0_6px_16px_rgba(124,58,237,0.14),inset_0_1.5px_2px_#ffffff,inset_0_-2px_4px_rgba(124,58,237,0.12)] px-8 py-4 text-base font-extrabold transition-all duration-300 hover:scale-105"
            >
              <span>Learn About Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
