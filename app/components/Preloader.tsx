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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground transition-all duration-700 ease-in-out ${
        loading ? "opacity-100" : "opacity-0 -translate-y-8"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Company Name */}
        <span className={`text-xl md:text-xl font-bold tracking-normal uppercase bg-gradient-to-r from-foreground/80 to-foreground bg-clip-text text-transparent drop-shadow-lg ${syne.className}`}>
          zyvionix solutions
        </span>
        
        {/* Simple minimal progress bar */}
        <div className="w-48 md:w-64 h-[2px] bg-foreground/10 overflow-hidden rounded-full">
          <div 
            className="h-full bg-foreground transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
