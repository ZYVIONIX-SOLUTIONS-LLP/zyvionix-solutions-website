'use client';

// Force HMR refresh for logo update
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Rocket, Home, Users, LayoutGrid, FolderKanban, Briefcase, Zap } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-3 md:px-6 pt-2 md:pt-3 pb-2 transition-all duration-300">
      <div className="skeu-panel pointer-events-auto relative mx-auto flex md:grid max-w-6xl md:grid-cols-[1fr_auto_1fr] items-center justify-between gap-3 md:gap-4 rounded-full pl-4 md:pl-6 pr-4.5 md:pr-7 py-1.5 md:py-2">

        {/* LOGO */}
        <div className="justify-self-start shrink-0 ml-0 md:-ml-1">
          <Link href="/" className="flex items-center gap-2 md:gap-2.5 group">
            <Image
              src="/images/header/Untitled - August 20, 2026 at 17.02.05.png"
              alt="Zyvionix Logo"
              width={1254}
              height={1254}
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="hidden md:block text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em] ml-0.5 md:ml-1">
              <span className="text-[#0284c7] dark:text-[#38bdf8] group-hover:text-[#0369a1] dark:group-hover:text-[#60a5fa] transition-colors">
                Zyvionix
              </span>{" "}
              <span className="text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">
                Solutions
              </span>
            </span>
          </Link>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="flex items-center justify-center gap-0.5 md:gap-1 text-xs md:text-[13px]">
          {[
            { href: '/', label: 'Home', icon: Home },
            { href: '/WhoWeAre', label: 'Who We Are', icon: Users },
            { href: '/services', label: 'Services', icon: LayoutGrid },
            { href: '/portfolio', label: 'Portfolio', icon: FolderKanban },
            { href: '/Carrier', label: 'Carrier', icon: Briefcase },
          ].map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative inline-flex items-center gap-1 px-2.5 md:px-3.5 py-1 md:py-1.5 rounded-full font-bold transition-all duration-300 ${
                  isActive
                    ? 'skeu-pressed text-[#6d28d9] dark:text-purple-300'
                    : 'text-[#64748b] dark:text-gray-300 hover:text-[#7c3aed] dark:hover:text-purple-300 hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                <span className="hidden md:inline">{link.label}</span>
                <span className="inline md:hidden">
                  <Icon size={16} />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center justify-self-end gap-1.5 md:gap-2.5 mr-1 md:mr-2">
          <Link
            href="/ContactUs"
            className="skeu-gem inline-flex items-center gap-1.5 rounded-full px-3.5 md:px-4 py-1 md:py-1.5 text-[11px] md:text-xs font-extrabold text-white"
          >
            <Rocket size={13} className="relative z-10 drop-shadow-[0_1px_1px_rgba(45,12,92,0.5)]" />
            <span className="relative z-10 hidden sm:inline">Contact Us</span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
