"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";

/*
 * InteractiveRobotHero
 * ─────────────────────────────────────────────────────────────────────────────
 * Hero background image: /images/hero-section/hero-img.png
 *
 * Cursor-interaction strategy
 * ───────────────────────────
 * High-frequency animation state lives in refs — never in React state.
 * A single requestAnimationFrame loop lerps raw mouse coordinates → smooth
 * normalised values, then applies CSS transforms directly to DOM nodes via
 * refs.
 */

// ─── constants ────────────────────────────────────────────────────────────────
const LERP_SPEED   = 0.06;   // how fast the interpolated value catches the target
const MAX_SHIFT_X  = 18;     // px — max horizontal parallax of the visual wrapper
const MAX_SHIFT_Y  = 10;     // px — max vertical parallax
const BG_PARALLAX_X= 12;     // px — background layer movement
const BG_PARALLAX_Y= 8;      // px — background layer movement
const MAX_GLOW     = 0.65;   // max opacity of the proximity glow ring (0–1)
const PROX_RADIUS  = 380;    // px — distance at which proximity glow starts
const SCALE_NEAR   = 1.025;  // max scale when cursor is right on the robot

// 5 automatic headlines to cycle through
const HERO_HEADLINES = [
  {
    prefix: "Building Digital",
    accent: "Experiences",
    suffix: "That Move Businesses Forward.",
    subtext: "We design and develop modern websites, applications and digital solutions that help businesses grow."
  },
  {
    prefix: "Engineering Smart",
    accent: "Solutions",
    suffix: "Powered By Next-Gen Tech.",
    subtext: "Unlocking innovation through custom software development, cloud architectures, and intelligent systems."
  },
  {
    prefix: "Designing Modern",
    accent: "Platforms",
    suffix: "Built For Speed & Scale.",
    subtext: "Empowering enterprises with fast, reliable, and beautifully crafted Web3 and web applications."
  },
  {
    prefix: "Transforming Bold",
    accent: "Ideas",
    suffix: "Into High-Impact Products.",
    subtext: "From concept to deployment, we turn complex challenges into seamless digital realities."
  },
  {
    prefix: "Crafting Next-Gen",
    accent: "Software",
    suffix: "That Drives Business Success.",
    subtext: "Partnering with ambitious brands to create scalable digital experiences that lead industries."
  }
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// ─── component ────────────────────────────────────────────────────────────────
export default function InteractiveRobotHero() {
  // ── one-time setup flags (React state OK — only set on mount) ──
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ── text rotator state ──
  const [textIndex, setTextIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  // ── DOM refs ──
  const sectionRef = useRef<HTMLElement>(null);
  const bgWrapRef  = useRef<HTMLDivElement>(null);

  // ── raw / interpolated tracking (never triggers re-render) ──
  const rawX   = useRef(0);   // normalised -1 … +1
  const rawY   = useRef(0);
  const smX    = useRef(0);   // smoothed
  const smY    = useRef(0);
  const rafId  = useRef(0);
  const inside = useRef(false);

  // ── automatic text rotation timer ──
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % HERO_HEADLINES.length);
        setFadeState('in');
      }, 350); // duration matching CSS transition
    }, 3800); // 3.8s per headline phrase

    return () => clearInterval(interval);
  }, []);

  // ── detect capabilities ──
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);

    const checkMobile = () =>
      setIsMobile(
        window.innerWidth < 768 ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // ── rAF loop — runs only on desktop, non-reduced-motion ──
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const section = sectionRef.current;
    if (!section) return;

    // mouse handlers — update raw refs only, never setState
    const onMouseMove = (e: MouseEvent) => {
      const rect   = section.getBoundingClientRect();
      rawX.current = (e.clientX - rect.left) / rect.width  * 2 - 1;  // -1 … +1
      rawY.current = (e.clientY - rect.top)  / rect.height * 2 - 1;
      inside.current = true;
    };

    const onMouseLeave = () => { inside.current = false; };

    section.addEventListener("mousemove", onMouseMove, { passive: true });
    section.addEventListener("mouseleave", onMouseLeave, { passive: true });

    // animation loop
    const tick = () => {
      const speed = LERP_SPEED;
      smX.current = lerp(smX.current, inside.current ? rawX.current : 0, speed);
      smY.current = lerp(smY.current, inside.current ? rawY.current : 0, speed);

      const sx = smX.current;
      const sy = smY.current;

      // ── background parallax ──
      if (bgWrapRef.current) {
        const bgTx = sx * BG_PARALLAX_X;
        const bgTy = sy * BG_PARALLAX_Y;
        bgWrapRef.current.style.transform = `translate3d(${bgTx}px, ${bgTy}px, 0) scale(1.02)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);


    return () => {
      cancelAnimationFrame(rafId.current);
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [reducedMotion, isMobile]);

  const currentHeadline = HERO_HEADLINES[textIndex];

  return (
    <section
      ref={sectionRef}
      className="irh-section"
      aria-label="Zyvionix Solutions – Hero"
    >
      {/* ── full background image layer with mouse parallax ── */}
      <div className="irh-bg-container" aria-hidden="true">
        <div
          ref={bgWrapRef}
          className="irh-bg-image-layer"
        />
        <div className="irh-bg-gradient-left" />
        <div className="irh-bg-gradient-bottom" />
        <div className="irh-bg-ambient-glow" />
      </div>

      {/* ── scoped styles ── */}
      <style>{`
        /* ---------- layout ---------- */
        .irh-section {
          position: relative;
          width: 100%;
          min-height: 100svh;
          display: flex;
          align-items: center;
          background: #000;
          overflow: hidden;
        }

        /* Full width edge bleed */
        .irh-section {
          margin-left:  calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          width: 100vw;
        }

        /* ---------- background layer ---------- */
        .irh-bg-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .irh-bg-image-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/hero-section/hero-img.png');
          background-size: auto 87vh;
          background-position: right 0 bottom 0;
          background-repeat: no-repeat;
          will-change: transform;
          transform: scale(1.02);
          transform-origin: right bottom;
        }

        .irh-bg-gradient-left {
          position: absolute;
          inset: 0;
          width: 60%;
          background: linear-gradient(
            to right,
            #000000 0%,
            rgba(0, 0, 0, 0.94) 45%,
            rgba(0, 0, 0, 0.65) 75%,
            transparent 100%
          );
        }

        .irh-bg-gradient-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 25%;
          background: linear-gradient(to top, #000000 0%, transparent 100%);
        }

        .irh-bg-ambient-glow {
          position: absolute;
          top: 20%;
          left: 10%;
          width: 45%;
          height: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(124, 58, 237, 0.15) 0%,
            rgba(147, 51, 234, 0.05) 50%,
            transparent 75%
          );
          filter: blur(40px);
        }

        .irh-inner {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: clamp(5.5rem, 11vh, 8rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vh, 5rem);
          min-height: 100svh;
        }

        /* ---------- left content ---------- */
        .irh-content {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 650px;
        }

        /* Rotator transition container */
        .irh-rotator {
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .irh-rotator.fade-in {
          opacity: 1;
          transform: translateY(0);
        }

        .irh-rotator.fade-out {
          opacity: 0;
          transform: translateY(-12px);
        }

        .irh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.6rem;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #a78bfa;
        }

        .irh-eyebrow-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #a78bfa;
          animation: irhPulse 2.4s ease-in-out infinite;
          flex-shrink: 0;
        }

        .irh-headline {
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 900;
          line-height: 1.09;
          letter-spacing: -0.025em;
          color: #fff;
          margin: 0 0 1.5rem;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
          min-height: 2.2em;
        }

        .irh-headline-accent {
          background: linear-gradient(
            135deg,
            #c084fc 0%,
            #a855f7 45%,
            #e879f9 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .irh-subtext {
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          color: rgba(255, 255, 255, 0.82);
          font-weight: 300;
          line-height: 1.8;
          margin: 0 0 2.8rem;
          max-width: 550px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          min-height: 3.6em;
        }

        /* ---------- CTA buttons ---------- */
        .irh-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          align-items: center;
        }

        .irh-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 55%, #a21caf 100%);
          color: #fff;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 0 28px rgba(124, 58, 237, 0.45), 0 4px 16px rgba(0, 0, 0, 0.4);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          will-change: transform;
        }
        .irh-btn-primary:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 48px rgba(124, 58, 237, 0.7), 0 8px 28px rgba(0, 0, 0, 0.45);
        }

        .irh-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.85rem 2rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.95);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          text-decoration: none;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease;
          will-change: transform;
        }
        .irh-btn-secondary:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(167, 139, 250, 0.65);
        }

        /* ---------- keyframes ---------- */
        @keyframes irhPulse {
          0%, 100% { transform: scale(1);    opacity: 1; box-shadow: 0 0 8px #a78bfa; }
          50%       { transform: scale(1.35); opacity: 0.7; box-shadow: 0 0 18px #c026d3; }
        }

        /* ---------- entrance animations ---------- */
        .irh-animate-badge  { animation: hero-fade-in  0.55s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.05s; }
        .irh-animate-cta    { animation: hero-fade-up  0.60s cubic-bezier(0.22,1,0.36,1) both; animation-delay: 0.55s; }

        /* ---------- responsive ---------- */
        @media (max-width: 1024px) {
          .irh-bg-gradient-left {
            width: 80%;
          }
        }

        @media (max-width: 768px) {
          .irh-inner {
            text-align: center;
            justify-content: center;
            padding-top: clamp(6.5rem, 16vh, 8.5rem);
            padding-bottom: 4rem;
            min-height: unset;
          }
          .irh-bg-gradient-left {
            width: 100%;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.95) 0%,
              rgba(0, 0, 0, 0.82) 50%,
              rgba(0, 0, 0, 0.95) 100%
            );
          }
          .irh-content {
            align-items: center;
            max-width: 100%;
          }
          .irh-subtext {
            max-width: 100%;
            min-height: unset;
          }
          .irh-headline {
            min-height: unset;
          }
          .irh-cta-row {
            justify-content: center;
          }
        }
      `}</style>

      <div className="irh-inner">
        {/* ─── hero copy ─────────────────────────────────── */}
        <div className="irh-content">
          {/* eyebrow */}
          <div className="irh-eyebrow irh-animate-badge" aria-hidden="true">
            <span className="irh-eyebrow-dot" />
            Innovation&nbsp;•&nbsp;Technology&nbsp;•&nbsp;Digital
          </div>

          {/* animated rotator section */}
          <div className={`irh-rotator ${fadeState === 'in' ? 'fade-in' : 'fade-out'}`}>
            {/* headline */}
            <h1 className="irh-headline">
              {currentHeadline.prefix}{" "}
              <span className="irh-headline-accent">{currentHeadline.accent}</span>
              <br />
              {currentHeadline.suffix}
            </h1>

            {/* supporting copy */}
            <p className="irh-subtext">
              {currentHeadline.subtext}
            </p>
          </div>

          {/* CTAs */}
          <div className="irh-cta-row irh-animate-cta">
            <Link
              href="/ContactUs"
              id="hero-cta-start"
              className="irh-btn-primary"
            >
              Start a Project
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 7.5h10M8.5 3.5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/services"
              id="hero-cta-explore"
              className="irh-btn-secondary"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// TypeScript helper
interface MouseMoveWithDist {
  (e: MouseEvent): void;
  __dist: number;
}
