"use client";

import { useRef, useCallback, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { BlurReveal, FadeUp, ScaleIn } from "./animations/FadeUp";

export function EditorialLabCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  // Positions for the fluid liquid gradient effect
  const targetPos = useRef({ x: 50, y: 50 }); // Head of the brush
  const lagPos = useRef({ x: 50, y: 50 });    // Tail of the brush
  const opacityRef = useRef(0); // Smooth opacity lerp

  // Refs for the blobs
  const headBlobRef = useRef<HTMLDivElement>(null);
  const tailBlobRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  // ─── 60fps Liquid Gradient Animation ────────────────────────────────
  // Using a ref to hold the animate function avoids the ESLint no-use-before-define false positive
  const animateRef = useRef<() => void>(() => {});

  const startAnimation = useCallback(() => {
    const LERP = 0.06;
    lagPos.current.x += (targetPos.current.x - lagPos.current.x) * LERP;
    lagPos.current.y += (targetPos.current.y - lagPos.current.y) * LERP;

    const targetOpacity = isHoveredRef.current ? 1 : 0;
    opacityRef.current += (targetOpacity - opacityRef.current) * 0.1;

    const hx = targetPos.current.x;
    const hy = targetPos.current.y;
    const tx = lagPos.current.x;
    const ty = lagPos.current.y;
    const op = opacityRef.current;

    if (headBlobRef.current) {
      headBlobRef.current.style.opacity = op.toString();
      headBlobRef.current.style.background =
        `radial-gradient(circle 350px at ${hx}% ${hy}%, rgba(28,161,241,0.9) 0%, rgba(28,161,241,0.3) 40%, transparent 70%)`;
    }

    if (tailBlobRef.current) {
      tailBlobRef.current.style.opacity = op.toString();
      tailBlobRef.current.style.background =
        `radial-gradient(circle 600px at ${tx}% ${ty}%, rgba(138,43,226,0.7) 0%, rgba(28,161,241,0.3) 50%, transparent 80%)`;
    }

    rafId.current = requestAnimationFrame(animateRef.current);
  }, []);

  useEffect(() => {
    animateRef.current = startAnimation;
  }, [startAnimation]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    targetPos.current.x = ((e.clientX - rect.left) / rect.width) * 100;
    targetPos.current.y = ((e.clientY - rect.top) / rect.height) * 100;
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
    if (!rafId.current) rafId.current = requestAnimationFrame(animateRef.current);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
    lagPos.current = { ...targetPos.current };
  }, []);

  useEffect(() => () => { if (rafId.current) cancelAnimationFrame(rafId.current); }, []);

  return (
    <div id="blogs" className="mt-40 mb-20 relative px-4 max-w-7xl mx-auto">
      <ScaleIn>
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="group relative overflow-hidden rounded-[4rem] transition-all duration-1000 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.25)] cursor-default"
          style={{ background: "#060609" }} // Deep dark void base
        >
          {/* ── Under-glass animated blobs ── */}
          <div className="absolute inset-0 pointer-events-none opacity-80">
            {/* Ambient corner glow (static) */}
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_80%_20%,rgba(28,161,241,0.15),transparent_60%)]" />

            {/* Tail Blob (Lagging, Violet/Blue) */}
            <div ref={tailBlobRef} className="absolute inset-0 pointer-events-none" />

            {/* Head Blob (Instant, Cyan) */}
            <div ref={headBlobRef} className="absolute inset-0 pointer-events-none" />
          </div>

          {/* ── Ultra Premium Glassmorphism Filter ── 
               This blurs the shapes beneath it, creating a fluid, aurora-like liquid mesh gradient 
          */}
          <div className="absolute inset-0 backdrop-blur-3xl bg-black/5 pointer-events-none" />

          {/* ── Subtle top border reflection ── */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* ── Bottom fog strip (creates depth) ── */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

          {/* ── Content ── */}
          <div className="relative z-10 p-6 sm:p-12 md:p-20 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-10 md:gap-16">

            {/* Left */}
            <BlurReveal delay={0.2} className="flex flex-col gap-10 max-w-2xl flex-1 w-full items-center text-center md:items-start md:text-left">
              <div className="flex items-center gap-5">
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#1ca1f1]/60 to-transparent" />
                <AtelierLabel tracking="widest" className="text-[#1ca1f1]/60">Shared Perspectives</AtelierLabel>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-light text-white tracking-tighter leading-[0.85]">
                  The <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">Editorial</span><br />
                  Laboratory.
                </h2>
                <p className="text-lg font-light text-gray-400 italic leading-relaxed max-w-md">
                  Scaling secrets from the editing bay. Mindset shifts for the{" "}
                  <span className="text-white/90 font-medium not-italic drop-shadow-sm">ambitious creator</span>.
                </p>
              </div>

              {/* Stat Strip */}
              <div className="flex items-center gap-10 pt-6 border-t border-white/[0.08]">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-light text-white tracking-tight drop-shadow-sm">
                    48<span className="text-sm font-bold text-[#1ca1f1] ml-1 tracking-widest">+</span>
                  </span>
                  <AtelierLabel tracking="widest" className="text-gray-500">Insights Published</AtelierLabel>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-light text-white tracking-tight drop-shadow-sm">
                    12K<span className="text-sm font-bold text-[#1ca1f1] ml-1 tracking-widest">+</span>
                  </span>
                  <AtelierLabel tracking="widest" className="text-gray-500">Monthly Readers</AtelierLabel>
                </div>
              </div>
            </BlurReveal>

            {/* Right: CTA */}
            <FadeUp delay={0.5} className="flex flex-col items-center justify-center gap-8 shrink-0">
              <Link href="/blogs" className="relative group/cta flex flex-col items-center gap-8">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#1ca1f1]/30 group-hover/cta:border-[#1ca1f1]/80 transition-all duration-700 group-hover/cta:scale-110 shadow-[0_0_30px_rgba(28,161,241,0.2)] group-hover/cta:shadow-[0_0_50px_rgba(28,161,241,0.4)]" />
                  <div className="absolute inset-2 rounded-full border border-white/10 group-hover/cta:border-[#1ca1f1]/20 transition-all duration-700" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover/cta:opacity-100 transition-all duration-700 blur-2xl bg-[#1ca1f1]/20" />
                  <div className="relative w-24 h-24 rounded-full bg-white/[0.08] border border-white/30 backdrop-blur-xl flex items-center justify-center group-hover/cta:bg-white group-hover/cta:border-white transition-all duration-700 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
                    <ArrowUpRight className="w-8 h-8 text-white/90 group-hover/cta:text-[#060609] group-hover/cta:rotate-12 transition-all duration-500" />
                  </div>
                </div>
                <AtelierLabel tracking="widest" className="text-gray-500 group-hover/cta:text-white transition-colors duration-500 drop-shadow-md">
                  Enter Thought Laboratory
                </AtelierLabel>
              </Link>
            </FadeUp>
          </div>

          {/* ── Bottom architectural strip ── */}
          <div className="relative z-10 border-t border-white/[0.08] px-6 sm:px-12 md:px-20 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 bg-black/20 text-center md:text-left">
            <AtelierLabel tracking="widest" className="text-white/30">MINDROAP / EDITORIAL ATELIER / EST. 2024</AtelierLabel>
            <div className="flex gap-2 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1ca1f1] animate-pulse shadow-[0_0_10px_rgba(28,161,241,0.8)]" />
              <AtelierLabel tracking="widest" className="text-white/30">ACTIVE LABORATORY</AtelierLabel>
            </div>
          </div>
        </div>
      </ScaleIn>
    </div>
  );
}
