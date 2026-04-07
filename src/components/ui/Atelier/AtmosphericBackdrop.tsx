"use client";

import React from "react";
import { motion } from "framer-motion";

export function AtmosphericBackdrop() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#F5F7FA]">
      
      {/* 🏺 Layer 1: The Blueprint Grid (Always Visible, Aesthetic Masking) */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111111 1px, transparent 1px),
            linear-gradient(to bottom, #111111 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, black 40%, rgba(0,0,0,0.3) 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, rgba(0,0,0,0.3) 100%)'
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #111111 1px, transparent 1px),
            linear-gradient(to bottom, #111111 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
        }}
      />

      {/* 🏺 Layer 2: Atmospheric Fog (Moving Gaussian Blurs) */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/2 -left-1/4 w-[100vw] h-[100vh] bg-[#1ca1f1]/5 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/2 -right-1/4 w-[100vw] h-[100vh] bg-zinc-400/5 blur-[150px] rounded-full"
      />

      {/* 🏺 Layer 3: Global Noise Grain (Tangible Texture) */}
      <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="globalNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#globalNoise)" />
        </svg>
      </div>

      {/* 🏺 Layer 4: Vignette & Surface Light Refinement */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 pointer-events-none" />
    </div>
  );
}
