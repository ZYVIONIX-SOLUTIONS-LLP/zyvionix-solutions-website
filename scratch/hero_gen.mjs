import fs from "fs";
import path from "path";

const out = "d:/coding/Projects/zyvionix solutions/app/components/HeroSection.tsx";

const code = String.raw`"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  radius: number; alpha: number; color: string;
}
interface HeroSlide {
  eyebrow: string;
  titleParts: { text: string; highlight?: boolean }[];
  subtitle: string;
}

const SLIDES: HeroSlide[] = [
  { eyebrow: "Next-Gen Digital Solutions", titleParts: [{ text: "We Build " }, { text: "Intelligent", highlight: true }, { text: " Digital Experiences" }], subtitle: "From AI-powered platforms to stunning web applications. We engineer scalable, future-ready technology that drives real business growth." },
  { eyebrow: "Scalable Cloud Platforms", titleParts: [{ text: "We Architect " }, { text: "High-Performance", highlight: true }, { text: " Cloud Systems" }], subtitle: "Engineered for rock-solid security, lightning-fast response times, and seamless global scalability for enterprises." },
  { eyebrow: "Creative UI/UX Experience", titleParts: [{ text: "We Craft " }, { text: "Immersive", highlight: true }, { text: " User Interfaces" }], subtitle: "Stunning designs combining futuristic aesthetics, fluid micro-interactions, and frictionless usability." },
  { eyebrow: "AI and Smart Automation", titleParts: [{ text: "We Power " }, { text: "Autonomous", highlight: true }, { text: " AI Ecosystems" }], subtitle: "Empowering modern businesses with custom machine learning models, intelligent chatbots, and automated workflows." },
];

const STATS = [
  { value: "500+", label: "Projects" }, { value: "50+", label: "Clients" },
  { value: "99%", label: "Success Rate" }, { value: "5 Star", label: "Rated" },
];

const PC = ["rgba(167,139,250,", "rgba(139,92,246,", "rgba(192,38,211,", "rgba(56,189,248,", "rgba(99,102,241,"];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const spotlightRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window || navigator.maxTouchPoints > 0);
    check(); window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const initParticles = useCallback((w: number, h: number) => {
    const count = Math.min(Math.floor((w * h) / 8000), 120);
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.2 + 0.6, alpha: Math.random() * 0.6 + 0.2,
      color: PC[Math.floor(Math.random() * PC.length)],
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initParticles(canvas.width, canvas.height); };
    resize(); window.addEventListener("resize", resize);
    const MD = 120; const MR = 180;
    const draw = () => {
      const w = canvas.width; const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const ps = particlesRef.current;
      const mx = mouseRef.current.x; const my = mouseRef.current.y;
      for (const p of ps) {
        const dx = p.x - mx; const dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < MR && d > 0) { const f = (1 - d / MR) * 2; p.vx += (dx / d) * f * 0.06; p.vy += (dy / d) * f * 0.06; }
        p.vx *= 0.98; p.vy *= 0.98; p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0; if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")"; ctx.fill();
      }
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const a = ps[i]; const b = ps[j];
          const dx = a.x - b.x; const dy = a.y - b.y; const d = Math.sqrt(dx*dx+dy*dy);
          if (d < MD) { ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle="rgba(139,92,246,"+(1-d/MD)*0.28+")"; ctx.lineWidth=0.8; ctx.stroke(); }
        }
      }
      for (const p of ps) {
        const dx=p.x-mx; const dy=p.y-my; const d=Math.sqrt(dx*dx+dy*dy);
        if (d<MR*0.7) { ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(mx,my); ctx.strokeStyle="rgba(192,38,211,"+(1-d/(MR*0.7))*0.5+")"; ctx.lineWidth=0.5; ctx.stroke(); }
      }
      animRef.current = requestAnimationFrame(draw);
    };
    animRef.current = requestAnimationFrame(draw);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animRef.current); };
  }, [initParticles]);

  useEffect(() => {
    if (isMobile) return;
    let rid=0; let tx=-200; let ty=-200; let cx=-200; let cy=-200;
    const onMove = (e: MouseEvent) => {
      tx=e.clientX; ty=e.clientY; mouseRef.current={x:e.clientX,y:e.clientY};
      if (dotRef.current) { dotRef.current.style.left=e.clientX+"px"; dotRef.current.style.top=e.clientY+"px"; }
      if (spotlightRef.current) { spotlightRef.current.style.background="radial-gradient(600px circle at "+e.clientX+"px "+e.clientY+"px,rgba(124,58,237,0.14),rgba(139,92,246,0.05) 40%,transparent 70%)"; }
    };
    const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
    const animate=()=>{ cx=lerp(cx,tx,0.1); cy=lerp(cy,ty,0.1); setCursorPos({x:cx,y:cy}); rid=requestAnimationFrame(animate); };
    window.addEventListener("mousemove",onMove,{passive:true}); rid=requestAnimationFrame(animate);
    return ()=>{ window.removeEventListener("mousemove",onMove); cancelAnimationFrame(rid); };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const onE=(e:MouseEvent)=>{ if((e.target as HTMLElement).closest("a,button")) setCursorActive(true); };
    const onL=(e:MouseEvent)=>{ if((e.target as HTMLElement).closest("a,button")) setCursorActive(false); };
    const onD=()=>setCursorActive(true); const onU=()=>setCursorActive(false);
    window.addEventListener("mouseover",onE); window.addEventListener("mouseout",onL);
    window.addEventListener("mousedown",onD); window.addEventListener("mouseup",onU);
    return ()=>{ window.removeEventListener("mouseover",onE); window.removeEventListener("mouseout",onL); window.removeEventListener("mousedown",onD); window.removeEventListener("mouseup",onU); };
  }, [isMobile]);

  useEffect(() => {
    const iv=setInterval(()=>{ setTextVisible(false); setTimeout(()=>{ setSlide(p=>(p+1)%SLIDES.length); setTextVisible(true); },350); },4500);
    return ()=>clearInterval(iv);
  }, []);

  const cur = SLIDES[slide];

  return (
    <>
      <style>{\`
        .hz * { box-sizing:border-box; }
        @media (pointer:fine) { .hz { cursor:none!important; } .hz * { cursor:none!important; } }
        @keyframes hzP { 0%,100%{box-shadow:0 0 8px rgba(167,139,250,.8);transform:scale(1)} 50%{box-shadow:0 0 22px rgba(192,38,211,1);transform:scale(1.3)} }
        @keyframes hzF1 { 0%,100%{transform:translateY(0) translateX(0)} 33%{transform:translateY(-30px) translateX(15px)} 66%{transform:translateY(20px) translateX(-10px)} }
        @keyframes hzF2 { 0%,100%{transform:translateY(0) translateX(0)} 33%{transform:translateY(25px) translateX(-20px)} 66%{transform:translateY(-15px) translateX(12px)} }
        @keyframes hzF3 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-20px) rotate(180deg)} }
        @keyframes hzG { 0%{transform:translateY(0)} 100%{transform:translateY(50px)} }
        @keyframes hzFU { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
        @keyframes hzS { 0%{top:0%} 100%{top:100%} }
        @keyframes hzSh { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes hzBP { 0%{opacity:0;transform:scale(0.85) translateY(8px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
        .hzte { opacity:1; transform:translateY(0); transition:opacity 0.35s ease,transform 0.35s ease; }
        .hztx { opacity:0; transform:translateY(-14px); transition:opacity 0.35s ease,transform 0.35s ease; }
        .hzp:hover { transform:translateY(-3px) scale(1.03); box-shadow:0 0 50px rgba(124,58,237,.75),0 8px 32px rgba(0,0,0,.45)!important; }
        .hzs:hover { transform:translateY(-3px); background:rgba(255,255,255,0.12)!important; border-color:rgba(167,139,250,0.7)!important; }
        .hzst:hover { transform:translateY(-5px) scale(1.05); border-color:rgba(167,139,250,0.65)!important; background:rgba(124,58,237,0.18)!important; }
        .hzd:hover { transform:scaleX(1.6); }
        .hzsh { background:linear-gradient(90deg,#a78bfa 0%,#e879f9 30%,#a78bfa 60%,#7c3aed 80%,#c026d3 100%); background-size:200% auto; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:hzSh 3s linear infinite; }
        .hzp { display:inline-flex; align-items:center; gap:0.5rem; padding:0.9rem 2.1rem; border-radius:9999px; background:linear-gradient(135deg,#7c3aed 0%,#9333ea 50%,#a21caf 100%); color:#fff; font-weight:800; font-size:0.82rem; letter-spacing:0.09em; text-transform:uppercase; text-decoration:none; box-shadow:0 0 30px rgba(124,58,237,.5),0 4px 20px rgba(0,0,0,.4); transition:transform 0.25s ease,box-shadow 0.25s ease; }
        .hzs { display:inline-flex; align-items:center; gap:0.5rem; padding:0.9rem 2.1rem; border-radius:9999px; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.22); color:#fff; font-weight:700; font-size:0.82rem; letter-spacing:0.09em; text-transform:uppercase; text-decoration:none; -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px); transition:transform 0.25s ease,background 0.25s ease,border-color 0.25s ease; }
      \`}</style>

      {!isMobile && (
        <>
          <div style={{ position:"fixed",left:cursorPos.x,top:cursorPos.y,width:cursorActive?52:38,height:cursorActive?52:38,border:"1.5px solid rgba(167,139,250,"+(cursorActive?"0.95":"0.7")+")",borderRadius:"50%",pointerEvents:"none",zIndex:99999,transform:"translate(-50%,-50%)",transition:"width 0.2s ease,height 0.2s ease,border-color 0.2s ease",boxShadow:cursorActive?"0 0 24px rgba(192,38,211,0.7)":"0 0 14px rgba(167,139,250,0.35)" }} />
          <div ref={dotRef} style={{ position:"fixed",left:-200,top:-200,width:6,height:6,borderRadius:"50%",background:cursorActive?"#e879f9":"#a78bfa",pointerEvents:"none",zIndex:99999,transform:"translate(-50%,-50%)",boxShadow:"0 0 10px rgba(167,139,250,0.9)",transition:"background 0.2s ease" }} />
        </>
      )}

      <section className="hz" aria-label="Zyvionix Hero" style={{ position:"relative",width:"100vw",height:"100svh",minHeight:600,overflow:"hidden",marginLeft:"calc(50% - 50vw)",marginRight:"calc(50% - 50vw)",background:"#0d0814",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
        <canvas ref={canvasRef} aria-hidden="true" style={{ position:"absolute",inset:0,width:"100%",height:"100%",zIndex:1 }} />
        <div ref={spotlightRef} aria-hidden="true" style={{ position:"absolute",inset:0,zIndex:2,pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute",inset:0,zIndex:1,backgroundImage:"linear-gradient(rgba(139,92,246,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,0.04) 1px,transparent 1px)",backgroundSize:"50px 50px",animation:"hzG 10s linear infinite alternate",pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute",top:"8%",left:"4%",width:360,height:360,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,58,237,0.24) 0%,transparent 70%)",filter:"blur(65px)",animation:"hzF1 14s ease-in-out infinite",zIndex:1,pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute",bottom:"12%",right:"5%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(192,38,211,0.2) 0%,transparent 70%)",filter:"blur(55px)",animation:"hzF2 17s ease-in-out infinite",zIndex:1,pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute",top:"40%",right:"12%",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 70%)",filter:"blur(42px)",animation:"hzF3 11s ease-in-out infinite",zIndex:1,pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute",left:0,right:0,height:1,background:"linear-gradient(90deg,transparent 0%,rgba(167,139,250,0.3) 50%,transparent 100%)",animation:"hzS 6s ease-in-out infinite",zIndex:2,pointerEvents:"none" }} />
        <div aria-hidden="true" style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 100% 100% at 50% 50%,transparent 38%,rgba(0,0,0,0.75) 100%)",zIndex:2,pointerEvents:"none" }} />

        <div style={{ position:"relative",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0 clamp(1.25rem,6vw,5rem)",paddingTop:"clamp(64px,10vh,100px)",maxWidth:920,width:"100%" }}>
          <div key={"b"+slide} style={{ display:"inline-flex",alignItems:"center",gap:"0.55rem",marginBottom:"1.8rem",padding:"0.45rem 1.1rem",borderRadius:9999,border:"1px solid rgba(139,92,246,0.42)",background:"rgba(124,58,237,0.1)",backdropFilter:"blur(14px)",animation:"hzBP 0.4s cubic-bezier(0.34,1.56,0.64,1) both" }}>
            <span style={{ display:"inline-block",width:8,height:8,borderRadius:"50%",background:"#a78bfa",animation:"hzP 2s ease-in-out infinite",flexShrink:0 }} />
            <span style={{ fontSize:"0.64rem",fontWeight:800,letterSpacing:"0.24em",textTransform:"uppercase",color:"#c4b5fd",whiteSpace:"nowrap" }}>{cur.eyebrow}</span>
          </div>
          <h1 className={"hz-h1 "+(textVisible?"hzte":"hztx")} style={{ fontSize:"clamp(2.4rem,6.5vw,5.2rem)",fontWeight:900,lineHeight:1.08,color:"#ffffff",margin:"0 0 1.5rem",letterSpacing:"-0.02em" }}>
            {cur.titleParts.map((p,i)=>p.highlight?<span key={i} className="hzsh">{p.text}</span>:<span key={i}>{p.text}</span>)}
          </h1>
          <p className={textVisible?"hzte":"hztx"} style={{ fontSize:"clamp(1rem,1.8vw,1.2rem)",color:"rgba(255,255,255,0.62)",fontWeight:300,lineHeight:1.8,marginBottom:"2.8rem",maxWidth:680,transitionDelay:"0.05s" }}>{cur.subtitle}</p>
          <div style={{ display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center",alignItems:"center",marginBottom:"2.5rem" }}>
            <Link href="/services" id="hero-cta-services" className="hzp">
              Explore Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/ContactUs" id="hero-cta-contact" className="hzs">Contact Us</Link>
          </div>
          <div style={{ display:"flex",gap:"0.4rem",alignItems:"center",marginBottom:"2.5rem" }}>
            {SLIDES.map((_,i)=>(
              <button key={i} aria-label={"Slide "+(i+1)} className="hzd" onClick={()=>{ setTextVisible(false); setTimeout(()=>{ setSlide(i); setTextVisible(true); },350); }} style={{ height:4,width:slide===i?32:10,borderRadius:9999,background:slide===i?"#a78bfa":"rgba(255,255,255,0.2)",border:"none",padding:0,transition:"width 0.35s cubic-bezier(0.4,0,0.2,1),background 0.35s ease,transform 0.2s ease",boxShadow:slide===i?"0 0 10px rgba(167,139,250,0.6)":"none" }} />
            ))}
          </div>
        </div>

        <div style={{ position:"absolute",bottom:0,left:0,right:0,zIndex:10,display:"flex",justifyContent:"center",gap:"clamp(0.5rem,2vw,1.5rem)",flexWrap:"wrap",padding:"clamp(1rem,2.5vw,1.4rem) clamp(1rem,4vw,3rem)",borderTop:"1px solid rgba(139,92,246,0.12)",background:"linear-gradient(0deg,rgba(13,8,20,0.96) 0%,transparent 100%)" }}>
          {STATS.map((s,i)=>(
            <div key={s.label} className="hzst" style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:"0.2rem",padding:"0.7rem 1.5rem",borderRadius:14,border:"1px solid rgba(139,92,246,0.2)",background:"rgba(124,58,237,0.07)",backdropFilter:"blur(12px)",transition:"transform 0.25s ease,border-color 0.25s ease,background 0.25s ease",animation:"hzFU 0.6s ease both",animationDelay:(0.1+i*0.08)+"s",minWidth:88 }}>
              <span style={{ fontSize:"clamp(1.1rem,2.5vw,1.6rem)",fontWeight:900,background:"linear-gradient(135deg,#a78bfa,#c026d3)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1 }}>{s.value}</span>
              <span style={{ fontSize:"0.63rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.45)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
`;

fs.writeFileSync(out, code, "utf8");
console.log("Done! Lines:", code.split("\n").length);