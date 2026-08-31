"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center p-3 rounded-full bg-background/80 dark:bg-black/80 border border-border/20 dark:border-white/10 text-foreground dark:text-white shadow-xl dark:shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-purple-600/10 hover:text-primary dark:hover:text-purple-300 hover:scale-110 hover:shadow-[0_8px_32px_rgba(109,40,217,0.15)] transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>
    </div>
  );
}
