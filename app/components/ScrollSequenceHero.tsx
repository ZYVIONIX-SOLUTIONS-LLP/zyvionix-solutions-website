"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface HeroSlide {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: "Next-Gen Digital Solutions",
    titlePrefix: "We Build ",
    titleHighlight: "Intelligent",
    titleSuffix: "Digital Experiences",
    subtitle:
      "From AI-powered platforms to stunning web applications — we engineer scalable, future-ready technology that drives real business growth.",
  },
  {
    eyebrow: "Scalable Cloud Platforms",
    titlePrefix: "We Architect ",
    titleHighlight: "High-Performance",
    titleSuffix: "Cloud Systems",
    subtitle:
      "Engineered for rock-solid security, lightning-fast response times, and seamless global scalability for enterprises.",
  },
  {
    eyebrow: "Creative UI/UX Experience",
    titlePrefix: "We Craft ",
    titleHighlight: "Immersive",
    titleSuffix: "User Interfaces",
    subtitle:
      "Stunning designs combining futuristic aesthetics, fluid micro-interactions, and frictionless usability.",
  },
  {
    eyebrow: "AI & Smart Automation",
    titlePrefix: "We Power ",
    titleHighlight: "Autonomous",
    titleSuffix: "AI Ecosystems",
    subtitle:
      "Empowering modern businesses with custom machine learning models, intelligent chatbots, and automated workflows.",
  },
];

type RobotDirection = "straight" | "left" | "right" | "up" | "down";

const VIDEO_SOURCES: Record<RobotDirection, string> = {
  straight: "/videos/Idle looking straight.mp4",
  left: "/videos/Looking left.mp4",
  right: "/videos/Looking right.mp4",
  up: "/videos/Looking up.mp4",
  down: "/videos/Looking down.mp4",
};

const DIRECTIONS: RobotDirection[] = ["straight", "left", "right", "up", "down"];

export default function VideoHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Record<RobotDirection, HTMLVideoElement | null>>({
    straight: null,
    left: null,
    right: null,
    up: null,
    down: null,
  });

  const [activeDirection, setActiveDirection] = useState<RobotDirection>("straight");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Auto-rotating text state
  const [activeSlide, setActiveSlide] = useState(0);
  const [textFade, setTextFade] = useState(true);

  // Detect mobile & reduced motion
  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mqMotion.matches);
    const motionHandler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mqMotion.addEventListener("change", motionHandler);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mqMotion.removeEventListener("change", motionHandler);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Ensure all videos play continuously and synchronously
  useEffect(() => {
    DIRECTIONS.forEach((dir) => {
      const v = videoRefs.current[dir];
      if (v) {
        v.muted = true;
        v.playsInline = true;
        v.loop = true;
        v.play().catch(() => {});
      }
    });
  }, []);

  // Sync video currentTimes periodically
  useEffect(() => {
    const syncInterval = setInterval(() => {
      const mainVid = videoRefs.current[activeDirection] || videoRefs.current.straight;
      if (!mainVid) return;
      const targetTime = mainVid.currentTime;

      DIRECTIONS.forEach((dir) => {
        if (dir !== activeDirection) {
          const v = videoRefs.current[dir];
          if (v && Math.abs(v.currentTime - targetTime) > 0.15) {
            v.currentTime = targetTime;
          }
        }
      });
    }, 1500);

    return () => clearInterval(syncInterval);
  }, [activeDirection]);

  // Cursor tracking relative to container with center dead-zone
  useEffect(() => {
    if (isMobile || reducedMotion) {
      setActiveDirection("straight");
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (e.clientY - rect.top) / rect.height - 0.5;

      const deadZone = 0.12;
      const absX = Math.abs(relativeX);
      const absY = Math.abs(relativeY);

      if (absX < deadZone && absY < deadZone) {
        setActiveDirection("straight");
      } else if (absX > absY) {
        setActiveDirection(relativeX < 0 ? "left" : "right");
      } else {
        setActiveDirection(relativeY < 0 ? "up" : "down");
      }
    };

    const handleMouseLeave = () => {
      setActiveDirection("straight");
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, reducedMotion]);

  // Auto rotate text slide
  useEffect(() => {
    const interval = setInterval(() => {
      setTextFade(false);
      setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        setTextFade(true);
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <>
      <style jsx global>{`
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(167,139,250,.7); }
          50%       { box-shadow: 0 0 16px rgba(167,139,250,1); }
        }
        .video-hero-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          height: 100svh;
          overflow: hidden;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
        }
        .rotate-text-transition {
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .rotate-text-visible { opacity: 1; transform: translateY(0); }
        .rotate-text-hidden { opacity: 0; transform: translateY(12px); }
      `}</style>

      <section
        ref={containerRef}
        className="video-hero-section"
        aria-label="Hero – We Build Intelligent Digital Experiences"
      >
        {DIRECTIONS.map((dir) => {
          const isActive = activeDirection === dir;
          // Scale & offset alignment matrix to match straight reference model
          const transforms: Record<RobotDirection, string> = {
            straight: "scale(1)",
            left: "scale(1.046) translateY(0.5%)",
            right: "scale(0.993) translateY(-0.3%)",
            up: "scale(1.014) translateY(-0.2%)",
            down: "scale(1.084) translateY(1.2%)",
          };

          return (
            <video
              key={dir}
              ref={(el) => { videoRefs.current[dir] = el; }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                zIndex: isActive ? 2 : 1,
                opacity: isActive ? 1 : 0,
                transform: `${transforms[dir]} translateZ(0)`,
                transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "opacity, transform",
              }}
            >
              <source src={VIDEO_SOURCES[dir]} type="video/mp4" />
            </video>
          );
        })}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.65) 100%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(1.25rem, 6vw, 7rem)",
            paddingTop: "clamp(64px, 10vh, 100px)",
            pointerEvents: "none",
          }}
        >
          <div style={{ maxWidth: "680px", width: "100%", pointerEvents: "auto" }}>
            <div
              className={`rotate-text-transition ${textFade ? "rotate-text-visible" : "rotate-text-hidden"}`}
              style={{ minHeight: "clamp(260px, 35vh, 320px)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
            >
              <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "0.5rem", marginBottom: "1.4rem", padding: "0.35rem 0.85rem", borderRadius: "9999px", border: "1px solid rgba(139,92,246,0.35)", backgroundColor: "rgba(139,92,246,0.12)", backdropFilter: "blur(10px)" }}>
                <span aria-hidden="true" style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", backgroundColor: "#a78bfa", animation: "heroPulse 2s ease-in-out infinite" }} />
                <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#c4b5fd" }}>{slide.eyebrow}</span>
              </div>
              <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, color: "#ffffff", marginBottom: "1.2rem", textShadow: "0 2px 1px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.7)" }}>
                {slide.titlePrefix}<span style={{ backgroundImage: "linear-gradient(135deg,#a78bfa 0%,#7c3aed 50%,#c026d3 100%)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>{slide.titleHighlight}</span><br />{slide.titleSuffix}
              </h1>
              <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "rgba(255,255,255,0.72)", fontWeight: 300, lineHeight: 1.75, marginBottom: "2.4rem" }}>{slide.subtitle}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem", alignItems: "center" }}>
              <Link
                href="/services"
                id="hero-cta-services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.82rem 1.9rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg,#7c3aed 0%,#a21caf 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 0 28px rgba(124,58,237,.5), 0 4px 18px rgba(0,0,0,.4)",
                  transition: "transform .2s ease, box-shadow .2s ease",
                }}
              >
                Explore Services
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/ContactUs"
                id="hero-cta-contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.82rem 1.9rem",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  transition: "transform .2s ease, background .2s ease, border-color .2s ease",
                }}
              >
                Contact Us
              </Link>
            </div>
            <div style={{ display: "flex", gap: "0.4rem", marginTop: "2.2rem", alignItems: "center" }}>
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setTextFade(false);
                    setTimeout(() => {
                      setActiveSlide(index);
                      setTextFade(true);
                    }, 300);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    height: "4px",
                    borderRadius: "9999px",
                    width: activeSlide === index ? "28px" : "8px",
                    backgroundColor: activeSlide === index ? "#a78bfa" : "rgba(255,255,255,0.25)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
