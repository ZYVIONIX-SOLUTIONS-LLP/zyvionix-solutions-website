'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Rocket, Home, Users, LayoutGrid, FolderKanban, Briefcase, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/WhoWeAre', label: 'Who We Are', icon: Users },
    { href: '/services', label: 'Services', icon: LayoutGrid },
    { href: '/portfolio', label: 'Portfolio', icon: FolderKanban },
    { href: '/Carrier', label: 'Carrier', icon: Briefcase },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-3 md:px-6 pt-2 md:pt-3 pb-2 transition-all duration-300">
        <div className="skeu-panel pointer-events-auto relative mx-auto flex items-center justify-between gap-3 md:gap-4 rounded-full pl-3.5 md:pl-6 pr-3.5 md:pr-7 py-1.5 md:py-2 max-w-6xl">

          {/* LOGO */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2 md:gap-2.5 group">
              <div className="relative h-7 sm:h-8 md:h-9 w-7 sm:w-8 md:w-9 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/header/Untitled - August 20, 2026 at 17.02.05.png"
                  alt="Zyvionix Logo"
                  width={36}
                  height={36}
                  style={{ height: "100%", width: "100%", objectFit: "contain" }}
                  className="transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] ml-0.5 md:ml-1">

                <span className="text-[#0284c7] dark:text-[#38bdf8] group-hover:text-[#0369a1] dark:group-hover:text-[#60a5fa] transition-colors">
                  Zyvionix
                </span>{" "}
                <span className="inline text-[#0f172a] dark:text-white group-hover:text-[#7c3aed] dark:group-hover:text-purple-300 transition-colors">
                  Solutions
                </span>

              </span>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center justify-center gap-1 text-[13px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold transition-all duration-300 ${
                    isActive
                      ? 'skeu-pressed text-[#6d28d9] dark:text-purple-300'
                      : 'text-[#64748b] dark:text-gray-300 hover:text-[#7c3aed] dark:hover:text-purple-300 hover:bg-white/50 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon size={15} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-1.5 md:gap-2.5">
            <Link
              href="/ContactUs"
              className="skeu-gem inline-flex items-center gap-1.5 rounded-full px-3 md:px-4 py-1 md:py-1.5 text-[11px] md:text-xs font-extrabold text-white"
            >
              <Rocket size={13} className="relative z-10 drop-shadow-[0_1px_1px_rgba(45,12,92,0.5)]" />
              <span className="relative z-10 hidden sm:inline">Contact Us</span>
            </Link>
            <ModeToggle />

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-purple-300 border border-primary/20 dark:border-white/10 transition-transform active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col bg-background/95 dark:bg-black/95 backdrop-blur-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4 pt-20 px-6 pb-8">
          <div className="flex flex-col h-full justify-between overflow-y-auto">
            <nav className="flex flex-col gap-2 mt-4">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-primary dark:text-purple-400 mb-2">
                Navigation
              </span>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl font-extrabold text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-primary/15 dark:bg-purple-500/20 text-primary dark:text-purple-300 border border-primary/30 dark:border-purple-500/40 shadow-sm'
                        : 'text-foreground/80 dark:text-gray-200 hover:bg-primary/5 dark:hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-primary text-white' : 'bg-muted dark:bg-white/10 text-muted-foreground dark:text-gray-300'}`}>
                        <Icon size={18} />
                      </div>
                      <span>{link.label}</span>
                    </div>
                    <ArrowRight size={16} className={`opacity-60 ${isActive ? 'text-primary dark:text-purple-300' : ''}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-8 flex flex-col gap-4 border-t border-border dark:border-white/10 pt-6">
              <Link
                href="/ContactUs"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-purple-500/25"
              >
                <Rocket size={16} />
                <span>Get Started — Contact Us</span>
              </Link>
              <p className="text-center text-xs text-muted-foreground dark:text-gray-400">
                © {new Date().getFullYear()} Zyvionix Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

