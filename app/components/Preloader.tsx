"use client";

import { useEffect, useState } from "react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Total load time ~1.8 seconds for a sleek, fast feel
    const totalTime = 1800;
    const intervalTime = totalTime / 100;
    
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          // Wait for exit animation (800ms) before unmounting
          setTimeout(() => setHide(true), 800);
        }, 300); // Hold briefly at 100%
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (hide) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground transition-all duration-700 ease-in-out px-4 text-center ${
        loading ? "opacity-100" : "opacity-0 -translate-y-8"
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center gap-6 w-full max-w-xs sm:max-w-md mx-auto">
        {/* Company Name */}
        <span className={`text-sm xs:text-base sm:text-xl md:text-xl font-extrabold tracking-wider sm:tracking-widest uppercase drop-shadow-lg text-center flex items-center justify-center gap-1.5 whitespace-nowrap ${syne.className}`}>
          <span className="text-[#0284c7] dark:text-[#38bdf8]">zyvionix</span>{" "}
          <span className="text-foreground">solutions</span>
        </span>
        
        {/* Simple minimal progress bar */}
        <div className="w-44 sm:w-56 md:w-64 h-[2px] bg-foreground/10 overflow-hidden rounded-full mx-auto">
          <div 
            className="h-full bg-foreground transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
