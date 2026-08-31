"use client";

import LogoLoop from '../../components/ui/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiFigma, SiGithub, SiJavascript, SiFirebase, SiPrisma, SiHtml5, SiApple } from 'react-icons/si';

const commonClasses = "w-12 h-12 text-muted-foreground dark:text-white/50 transition-all duration-500 group-hover:text-primary dark:group-hover:text-purple-400 drop-shadow-none group-hover:drop-shadow-[0_0_15px_rgba(109,40,217,0.2)]";

const techLogos = [
  { node: <SiReact className={commonClasses} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className={commonClasses} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className={commonClasses} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className={commonClasses} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiVercel className={commonClasses} />, title: "Vercel" },
  { node: <SiPrisma className={commonClasses} />, title: "Prisma", href: "https://prisma.io" },
  { node: <SiJavascript className={commonClasses} />, title: "JavaScript" },
  { node: <SiFirebase className={commonClasses} />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiHtml5 className={commonClasses} />, title: "HTML5" },
  { node: <SiApple className={commonClasses} />, title: "iOS" },
  { node: <SiFigma className={commonClasses} />, title: "Figma" },
  { node: <SiGithub className={commonClasses} />, title: "GitHub" },
];

export default function TechStack() {
  return (
    <section className="py-16 bg-background relative z-20 transition-colors duration-300">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 tracking-tight text-[#0f172a] dark:text-white">
        Technologies We Use
      </h2>

      <div className="h-[120px] overflow-hidden flex justify-center items-center">
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={50}
          gap={80}
          hoverSpeed={0}
          scaleOnHover={false}
          fadeOut={true}
          fadeOutColor="var(--background)"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}