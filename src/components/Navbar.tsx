"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRegion } from "./RegionProvider";
import Image from "next/image";
import { AtelierLabel } from "./ui/Atelier/AtelierLabel";
import { AtelierCTA } from "./ui/Atelier/AtelierCTA";
import { Menu } from "lucide-react";

export function Navbar() {
  const { region, setRegion } = useRegion();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true); }, []);


  if (!mounted) return (
     <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 md:px-12 bg-[#060609]/80 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none border-b border-white/5 md:border-transparent transition-all">
      <nav className="max-w-6xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between h-16 opacity-0 animate-pulse"></nav>
     </header>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6 md:px-12 bg-[#060609]/80 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none border-b border-white/5 md:border-transparent transition-all">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="max-w-6xl mx-auto glass-panel rounded-full px-8 py-4 flex items-center justify-between shadow-[0_25px_60px_-15px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="/logo.png" 
                alt="Mindroap" 
                width={160} 
                height={40} 
                className="h-8 w-auto object-contain object-left invert grayscale"
                priority
              />
            </motion.div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: "Portfolio", href: "/portfolio" },
            { name: "Services", href: "/services" },
            { name: "Pricing", href: "/pricing" },
            { name: "Blogs", href: "/blogs", color: "#1ca1f1" }
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="group"
            >
              <AtelierLabel 
                tracking="wider"
                className={`transition-all hover:tracking-[0.4em] ${link.color ? 'text-[#1ca1f1]' : 'text-gray-700 hover:text-[#111111]'}`}
              >
                {link.name}
              </AtelierLabel>
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4 md:gap-6 text-gray-500">
          {/* Region Toggle (Architectural Sliding Glass) */}
          <div className="flex items-center bg-white/5 backdrop-blur-xl rounded-full p-1 border border-white/10 shadow-2xl relative overflow-hidden group/toggle">
            <button 
              onClick={() => setRegion("Global")}
              className="relative px-5 py-1.5 z-10 transition-all duration-500"
            >
              <AtelierLabel tracking="widest" className={`text-[8px] font-black transition-colors duration-500 ${region === 'Global' ? 'text-[#111111]' : 'text-gray-400 group-hover/toggle:text-gray-200'}`}>GL</AtelierLabel>
              {region === 'Global' && (
                <motion.div 
                  layoutId="activeRegionPremium"
                  className="absolute inset-0 bg-white/90 rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
            </button>
            <button 
              onClick={() => setRegion("BD")}
              className="relative px-5 py-1.5 z-10 transition-all duration-500"
            >
              <AtelierLabel tracking="widest" className={`text-[8px] font-black transition-colors duration-500 ${region === 'BD' ? 'text-[#111111]' : 'text-gray-400 group-hover/toggle:text-gray-200'}`}>BD</AtelierLabel>
              {region === 'BD' && (
                <motion.div 
                  layoutId="activeRegionPremium"
                  className="absolute inset-0 bg-white/90 rounded-full -z-10 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
            </button>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AtelierCTA 
              href="/#contact" 
              label="Initiate" 
              variant="solid" 
              className="hidden md:flex scale-90"
            />
          </motion.div>
          
          <button className="md:hidden text-[#111111]">
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </motion.nav>
    </header>
  );
}
