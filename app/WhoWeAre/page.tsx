import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Building2,
  Cpu,
  Globe,
  GraduationCap,
  Handshake,
  Headphones,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

import Footer from "../components/Footer";
import StarBorder from "../components/StarBorder";

const highlights = [
  { value: "25+", label: "Projects Delivered" },
  { value: "2+", label: "Years Experience" },
  { value: "100%", label: "Client Satisfaction" },
];

const values = ["Innovation", "Growth", "Technology"];

const storyPoints = [
  {
    title: "Based in Kerala",
    description:
      "Rooted in a region known for talent, creativity, and a strong spirit of innovation.",
    icon: Building2,
  },
  {
    title: "Trusted Partner",
    description:
      "Working closely with startups, SMEs, and enterprises as a long-term digital ally.",
    icon: Handshake,
  },
  {
    title: "Global Reach",
    description:
      "Helping businesses across industries turn local ambition into global impact.",
    icon: Globe,
  },
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description:
      "Experienced professionals with deep expertise in digital solutions and technology.",
    icon: Users,
  },
  {
    title: "Fast Delivery",
    description:
      "Quick turnaround times without compromising on quality and attention to detail.",
    icon: Rocket,
  },
  {
    title: "Quality Assured",
    description:
      "Rigorous quality control processes ensure your project meets the highest standards.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    description:
      "Ongoing support and maintenance to keep your digital solutions running smoothly.",
    icon: Headphones,
  },
];

const missionVision = [
  {
    number: "01",
    title: "Our Mission",
    description:
      "To build impactful digital products by identifying real-world pain points and delivering technology-driven solutions that create measurable value for businesses and communities.",
    pillars: ["Identify Pain Points", "Deliver Solutions", "Create Value"],
    icon: Target,
  },
  {
    number: "02",
    title: "Our Vision",
    description:
      "To empower students, professionals, and entrepreneurs by providing them with sufficient skills and digital services helping them innovate, grow, and succeed while showcasing the best of Kerala to the world.",
    pillars: ["Empower Growth", "Foster Innovation", "Global Impact"],
    icon: Lightbulb,
  },
];

const founderStats = [
  { value: "100+", label: "Happy Clients" },
  { value: "25+", label: "Projects Completed" },
  { value: "2+", label: "Years Experience" },
];

const partnerGroups = [
  {
    title: "Academic Partners",
    description:
      "Collaborating with educational institutions for research and innovation.",
    icon: GraduationCap,
  },
  {
    title: "Industry Partners",
    description:
      "Strategic partnerships across multiple business sectors.",
    icon: Handshake,
  },
  {
    title: "Technology Partners",
    description:
      "Working with leading tech companies for cutting-edge solutions.",
    icon: Cpu,
  },
  {
    title: "Community Partners",
    description:
      "Supporting local communities and entrepreneurial ecosystems.",
    icon: Building2,
  },
];

const recognitions = [
  {
    title: "Industry Excellence",
    description:
      "Recognized for outstanding digital solutions and innovation.",
    icon: Award,
  },
  {
    title: "Quality Standards",
    description: "Maintaining high standards in all our deliverables.",
    icon: ShieldCheck,
  },
  {
    title: "Client Satisfaction",
    description: "Consistently high ratings from our valued clients.",
    icon: Users,
  },
  {
    title: "Innovation Awards",
    description: "Celebrated for breakthrough digital innovations.",
    icon: TrendingUp,
  },
];

export default function WhoWeArePage() {
  return (
    <div className="relative isolate">
      <section className="relative overflow-hidden bg-background dark:bg-background text-foreground transition-colors duration-300 isolate">
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] md:bg-[size:72px_72px] bg-center [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.4),transparent_85%)] opacity-20 -z-10" />

        {/* Light Mode Specific Glow (Services style) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-400/20 blur-[100px] rounded-full pointer-events-none dark:hidden" />

        {/* Dark Mode Specific Glows */}
        <div className="absolute inset-x-0 top-0 h-96 dark:bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.25),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.18),transparent_45%)] pointer-events-none" />
        <div className="absolute left-8 top-32 h-80 w-80 rounded-full dark:bg-purple-600/[0.28] blur-[140px] pointer-events-none" />
        <div className="absolute right-8 top-24 h-72 w-72 rounded-full dark:bg-indigo-500/[0.20] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center z-10 relative">
            <div className="animate-hero-slide-left text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="animate-hero-badge relative inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[rgba(45,28,80,0.95)] dark:to-[rgba(25,14,48,0.95)] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-purple-500/30 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.6),inset_0_1.5px_2px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.5)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] mb-6">
                <span className="h-2 w-2 rounded-full bg-[#7c3aed] dark:bg-purple-300 shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse" />
                <span>Who We Are</span>
              </div>

              <h1 className="animate-hero-title relative mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl pb-2 text-[#0f172a] dark:text-white drop-shadow-sm">
                At Zyvionix Solutions, we believe innovation begins with the right foundation.
              </h1>
              <p className="animate-hero-body mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Established with a vision to empower businesses of every scale,
                we specialize in delivering technology-driven digital solutions
                that bridge creativity, innovation, and strategy.
              </p>

              <div className="animate-hero-cta mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                {values.map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-black/10 dark:border-white/10 bg-background dark:bg-black/50 px-4 py-2 text-sm font-medium shadow-sm transition hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-full flex items-center justify-center lg:justify-end lg:scale-125 transition-transform duration-500 overflow-hidden lg:overflow-visible">
              <Image
                src="/images/about-section/ChatGPT Image Sep 1, 2026, 11_28_58 AM.png"
                alt="Zyvionix Solutions Team & Vision"
                width={1200}
                height={900}
                className="w-full max-w-sm sm:max-w-md lg:max-w-none h-auto object-contain mx-auto lg:mx-0 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2 transition-colors duration-300">
              Our Story
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl text-[#0f172a] dark:text-white pb-2 transition-colors duration-300">
              Building digital momentum with strategy, creativity, and care.
            </h2>
            <div className="mt-6 space-y-6 text-base leading-8 text-muted-foreground dark:text-gray-400 sm:text-lg transition-colors duration-300">
              <p>
                Our approach is rooted in understanding your unique challenges
                and crafting solutions that enable growth, efficiency, and
                long-term success.
              </p>
              <p>
                Headquartered in Kerala, we take pride in carrying forward the
                region&apos;s spirit of innovation and talent to the global
                stage. Over the years, we&apos;ve partnered with startups, SMEs,
                and enterprises across industries such as education, food,
                fashion, sustainability, and technology.
              </p>
            </div>
          </div>

          <div className="rounded-[2.8rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 divide-y divide-[#e3d5ff]/70 dark:divide-white/10">
            {storyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.title}
                  className="relative p-8 transition-all duration-300 group hover:bg-[#faf7ff]/80 dark:hover:bg-[#111116] cursor-pointer"
                >
                  <div className="flex items-start gap-5 relative z-10">
                    {/* Elevated 3D Gem Socket Badge */}
                    <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.35rem] bg-gradient-to-b from-[#ffffff] via-[#f3edff] to-[#e3d3ff] dark:from-[#0f0f14] dark:via-[#08080c] dark:to-[#030305] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff] dark:border-white/10 shadow-[0_6px_16px_-2px_rgba(124,58,237,0.28),inset_0_2px_2.5px_#ffffff,inset_0_-2.5px_5px_rgba(124,58,237,0.2)] dark:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-xl font-extrabold tracking-tight text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748b] dark:text-gray-300 sm:text-base font-normal">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2 transition-colors duration-300">
              Why Choose Zyvionix Solutions?
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl text-[#0f172a] dark:text-white pb-2 transition-colors duration-300">
              We&apos;re not just another digital agency, we&apos;re your strategic
              partner in growth.
            </h2>
          </div>

          <div className="mt-10 rounded-[2.8rem] bg-white dark:bg-[#050507] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.9),inset_0_1.5px_2px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500">
            <div className="grid gap-px md:grid-cols-2 xl:grid-cols-4 bg-[#e3d5ff]/70 dark:bg-white/10">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="relative bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] p-8 group transition-all duration-300 hover:bg-[#faf7ff]/80 dark:hover:bg-[#111116] cursor-pointer"
                  >
                    {/* Elevated 3D Gem Socket Badge */}
                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.35rem] bg-gradient-to-b from-[#ffffff] via-[#f3edff] to-[#e3d3ff] dark:from-[#0f0f14] dark:via-[#08080c] dark:to-[#030305] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff] dark:border-white/10 shadow-[0_6px_16px_-2px_rgba(124,58,237,0.28),inset_0_2px_2.5px_#ffffff,inset_0_-2.5px_5px_rgba(124,58,237,0.2)] dark:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold tracking-tight text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal transition-colors duration-300">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300 relative border-t border-border dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2 transition-colors duration-300">
              Our Mission &amp; Vision
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl text-[#0f172a] dark:text-white pb-2 transition-colors duration-300">
              Driving innovation and empowering growth through technology.
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground dark:text-gray-400 sm:text-lg transition-colors duration-300">
              We believe in creating digital solutions that not only solve
              today&apos;s challenges but also pave the way for tomorrow&apos;s
              innovations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {missionVision.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="relative overflow-hidden rounded-[2.8rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.15)] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-10px_rgba(124,58,237,0.3)] cursor-pointer"
                >
                  {/* Header / Skeuomorphic Icon socket */}
                  <div className="flex items-start justify-end">
                    {/* Elevated 3D Circle Gem Socket Badge */}
                    <div className="relative inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#ffffff] via-[#f3edff] to-[#e3d3ff] dark:from-[#0f0f14] dark:via-[#08080c] dark:to-[#030305] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff] dark:border-white/10 shadow-[0_6px_16px_-2px_rgba(124,58,237,0.28),inset_0_2px_2.5px_#ffffff,inset_0_-2.5px_5px_rgba(124,58,237,0.2)] dark:shadow-[0_6px_16px_-2px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover:scale-105">
                      <Icon className="h-7 w-7 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-[#64748b] dark:text-gray-300 font-normal">
                    {item.description}
                  </p>

                  {/* Sunk-In 3D Pillar Badges */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    {item.pillars.map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded-full bg-gradient-to-b from-[#f3edff] to-[#e6d8fd] dark:from-[#181822] dark:to-[#0d0d14] border border-[#d4c0ff]/90 dark:border-white/10 px-5 py-2 text-xs font-extrabold text-[#7c3aed] dark:text-purple-300 shadow-[inset_0_1.5px_2.5px_rgba(124,58,237,0.18),0_1px_1.5px_#ffffff,0_3px_8px_rgba(124,58,237,0.08)] transition-all duration-300 group-hover:scale-105"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div className="rounded-[2rem] border border-border dark:border-purple-500/28 bg-white/85 dark:bg-[rgba(12,7,26,0.90)] p-8 shadow-sm dark:shadow-[0_8px_48px_rgba(109,40,217,0.18),inset_0_1px_0_rgba(139,92,246,0.08)] transition-all duration-300 relative overflow-hidden" style={{ background: 'linear-gradient(160deg,rgba(255,255,255,0.92),rgba(237,233,254,0.6)),radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_45%)' }}>
            <div className="dark:hidden absolute inset-0 rounded-[2rem] pointer-events-none" style={{ background: 'linear-gradient(160deg,rgba(255,255,255,0.92),rgba(237,233,254,0.6)),radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_45%)' }} />
            <p className="text-sm uppercase tracking-[0.4em] text-purple-600 dark:text-purple-500 font-bold tracking-widest mb-2">
              Founder &amp; CEO
            </p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl bg-gradient-to-br from-purple-950 to-purple-800 dark:from-white dark:to-gray-500 bg-clip-text text-transparent pb-2 transition-colors duration-300">Founder&apos;s Note</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {founderStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.02] p-5 group/stat hover:border-purple-500/50 dark:hover:bg-purple-500/[0.03] hover:shadow-[0_0_20px_rgba(168,85,247,0.05)] dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.08)] transition-all duration-300 cursor-default"
                >
                  <p className="text-3xl font-bold text-foreground dark:text-white group-hover/stat:text-purple-600 dark:group-hover/stat:text-purple-200 transition-colors duration-300">{item.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground dark:text-gray-400 group-hover/stat:text-foreground/70 dark:group-hover/stat:text-gray-300 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <article className="rounded-[2rem] border border-black/5 dark:border-purple-500/22 bg-black/[0.02] dark:bg-[rgba(12,7,26,0.75)] p-8 shadow-sm dark:shadow-[0_8px_40px_rgba(109,40,217,0.16),inset_0_1px_0_rgba(139,92,246,0.08)] sm:p-10 relative overflow-hidden group/founder transition-all duration-300 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 dark:border-purple-500/30 bg-purple-600/5 dark:bg-purple-900/10 px-4 py-2 text-sm text-purple-600 dark:text-purple-300 relative z-10 transition duration-300 group-hover/founder:border-purple-500/50">
              <SparkBadge />
              Building the Future Together
            </div>
            <blockquote
              className="mt-8 leading-9 text-foreground/80 dark:text-gray-300 relative z-10 italic"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "1.2rem",
                letterSpacing: "0.01em",
                lineHeight: "1.9",
              }}
            >
              &ldquo;At Zyvionix Solutions, we believe that every idea has the potential to become something meaningful when driven by innovation and technology. Our goal is to create digital solutions that address real-world problems and help businesses grow. We are committed to empowering students, professionals, and entrepreneurs by providing them with the skills and services needed to succeed. Together, we aim to build a future where innovation from Kerala makes a global impact.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4 relative z-10">
              <div className="h-px w-8 bg-purple-500/60" />
              <div>
                <p className="text-base font-semibold tracking-wide text-foreground dark:text-white" style={{ fontFamily: "'Georgia', serif" }}>Akshith Jeevan</p>
                <p className="mt-0.5 text-sm tracking-widest uppercase text-purple-600 dark:text-purple-400" style={{ letterSpacing: "0.12em" }}>
                  Founder &amp; CEO, Zyvionix Solutions
                </p>
              </div>
            </div>
          </article>
        </div>
      </section> */}

      <section className="bg-background dark:bg-background py-20 text-foreground transition-colors duration-300 border-t border-border dark:border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-600 dark:text-purple-500 font-semibold tracking-widest">
                Our Partners &amp; Supporters
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl text-foreground dark:text-white">
                We collaborate with leading organizations and institutions to
                deliver exceptional value.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {partnerGroups.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-[2.2rem] bg-white dark:bg-[#0a0a0d] border border-purple-100/80 dark:border-white/10 shadow-[0_16px_40px_-8px_rgba(124,58,237,0.12),0_4px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] p-8 transition-all duration-300 group/partner hover:-translate-y-1 hover:shadow-[0_22px_48px_-8px_rgba(124,58,237,0.22)] cursor-pointer"
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header: Icon + Title */}
                      <div className="flex items-center gap-5 mb-5">
                        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#f3edff] to-[#e3d3ff] dark:from-[#0f0f14] dark:via-[#08080c] dark:to-[#030305] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-white/10 shadow-[0_6px_14px_-2px_rgba(124,58,237,0.22),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-2px_4px_rgba(124,58,237,0.15)] dark:shadow-[0_6px_14px_-2px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.1)] transition-all duration-300 group-hover/partner:scale-105">
                          <Icon className="h-6 w-6 relative z-10 drop-shadow-[0_1px_1px_rgba(124,58,237,0.3)]" />
                        </div>
                        <h3 className="text-xl font-extrabold tracking-tight text-[#0f172a] dark:text-white group-hover/partner:text-[#7c3aed] dark:group-hover/partner:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-[#64748b] dark:text-gray-300 font-normal flex-grow">
                        {item.description}
                      </p>

                      {/* Tech Dots */}
                      <div className="mt-8 flex gap-2 opacity-50 group-hover/partner:opacity-100 transition-opacity duration-300">
                        <div className="h-2 w-2 rounded-full bg-[#7c3aed] dark:bg-purple-400 shadow-[0_1px_3px_rgba(124,58,237,0.4)]" />
                        <div className="h-2 w-2 rounded-full bg-[#7c3aed]/50 dark:bg-purple-400/50" />
                        <div className="h-2 w-2 rounded-full bg-[#7c3aed]/25 dark:bg-purple-400/25" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 text-foreground transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.8rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ecff] dark:from-[#0a0a0d] dark:via-[#050507] dark:to-[#0a0a0d] border border-[#e5d8ff]/90 dark:border-white/10 shadow-[0_24px_60px_-12px_rgba(124,58,237,0.22),0_6px_16px_rgba(0,0,0,0.03),inset_0_2px_3px_#ffffff,inset_0_-4px_10px_rgba(124,58,237,0.1)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8),inset_0_1.5px_2px_rgba(255,255,255,0.15)] p-8 sm:p-10 lg:p-12 transition-all duration-500">
            {/* Soft Ambient Corner Radial Glows */}
            <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-purple-400/15 dark:bg-purple-600/10 blur-3xl pointer-events-none" />
            <div className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-indigo-400/15 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <p className="text-xs uppercase tracking-[0.4em] text-[#7c3aed] dark:text-purple-400 font-extrabold mb-3">
                Ready to Transform Your Business?
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl leading-tight text-[#0f172a] dark:text-white">
                Join the growing number of businesses that trust Zyvionix Solutions to
                deliver innovative digital solutions.
              </h2>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 relative z-10">
              <Link href="/ContactUs" className="inline-flex">
                <span className="inline-flex items-center gap-2.5 rounded-[1.25rem] bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_16px_rgba(124,58,237,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.4),inset_0_-2.5px_5px_rgba(0,0,0,0.25)] border border-purple-400/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_24px_rgba(124,58,237,0.45)] cursor-pointer">
                  <span>Get Started Today</span>
                  <ArrowRight className="h-4 w-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
                </span>
              </Link>
              <Link href="/services" className="inline-flex">
                <span className="inline-flex items-center justify-center rounded-[1.25rem] bg-gradient-to-b from-[#ffffff] via-[#faf7ff] to-[#f3ebff] dark:from-[#14141c] dark:via-[#0c0c12] dark:to-[#060608] text-[#7c3aed] dark:text-purple-300 border border-[#d8c5ff]/80 dark:border-white/10 shadow-[0_6px_16px_rgba(124,58,237,0.14),inset_0_1.5px_2px_#ffffff,inset_0_-2px_4px_rgba(124,58,237,0.12)] px-7 py-3.5 text-sm font-extrabold transition-all duration-300 hover:scale-105 cursor-pointer">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SparkBadge() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-foreground dark:bg-white text-background dark:text-black group-hover:bg-purple-600 dark:group-hover:bg-purple-600 group-hover:text-white transition duration-300">
      <Rocket className="h-3.5 w-3.5" />
    </span>
  );
}
