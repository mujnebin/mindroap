"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

interface AtelierBadgeProps {
  children: React.ReactNode;
  variant?: "glass" | "solid" | "outline" | "ghost";
  className?: string;
  shimmer?: boolean;
  glow?: boolean;
}

export function AtelierBadge({ 
  children, 
  variant = "glass", 
  className = "", 
  shimmer = true,
  glow = false
}: AtelierBadgeProps) {
  const baseStyles = "relative px-5 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.6em] flex items-center justify-center overflow-hidden transition-all duration-700";
  
  const variants = {
    glass: "bg-white/[0.03] backdrop-blur-[24px] border border-white/20 text-[#111111] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.06)] hover:bg-white/[0.08] hover:border-white/40 hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.1)]",
    solid: "bg-[#1ca1f1] text-white shadow-lg shadow-[#1ca1f1]/30 hover:scale-[1.02] active:scale-[0.98]",
    outline: "border border-gray-200/50 text-gray-500 hover:border-[#1ca1f1]/40 hover:text-[#1ca1f1]",
    ghost: "bg-transparent text-gray-400 border border-transparent hover:border-gray-200/40 hover:bg-white/5"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {/* SVG Noise Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Internal Architectural Light Source (Glow) */}
      {glow && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#1ca1f1] shadow-[0_0_15px_1px_#1ca1f1] opacity-60" />
      )}

      {/* Anamorphic Sweeping Shine Effect */}
      {shimmer && (
        <motion.div
          animate={{
            left: ["-100%", "200%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1
          }}
          className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent skew-x-[35deg] blur-md pointer-events-none"
        />
      )}

      {/* Fine-Lined Architectural Border Simulation */}
      <div className="absolute inset-0 border border-white/5 rounded-full pointer-events-none" />

      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm leading-none pt-[1px]">
        {children}
      </span>
    </motion.div>
  );
}
