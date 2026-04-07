"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { motion, useSpring } from 'framer-motion';

interface AtelierCTAProps {
  href: string;
  label: string;
  variant?: 'solid' | 'outline' | 'minimal';
  icon?: LucideIcon;
  className?: string;
  shine?: boolean;
}

export function AtelierCTA({ 
  href, 
  label, 
  variant = 'solid', 
  icon: Icon = ArrowRight, 
  className = '',
  shine = true
}: AtelierCTAProps) {
  const ref = useRef<HTMLAnchorElement | HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const { x, y } = position;

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const baseClasses = "group relative flex items-center justify-between gap-10 rounded-full transition-all duration-700 active:scale-95 cursor-pointer";
  
  const variantClasses = {
    solid: "bg-[#111111] text-white hover:bg-[#1ca1f1] pl-10 pr-2 py-2 shadow-2xl shadow-gray-200/50",
    outline: "border border-gray-200 text-[#111111] hover:border-[#1ca1f1] hover:text-[#1ca1f1] pl-10 pr-2 py-2",
    minimal: "text-gray-500 hover:text-[#1ca1f1] gap-6"
  };

  const iconContainerClasses = {
    solid: "w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#111111] group-hover:rotate-45 transition-transform duration-700",
    outline: "w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#1ca1f1] group-hover:border-[#1ca1f1] group-hover:rotate-45 transition-all duration-700",
    minimal: "w-10 h-10 rounded-full border border-gray-50 flex items-center justify-center text-gray-200 group-hover:rotate-45 transition-all duration-700"
  };

  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${shine && variant === 'solid' ? 'animate-shine' : ''} ${className}`;

  const content = (
    <motion.div 
      style={{ x: springX, y: springY }}
      className="flex items-center justify-between w-full gap-10"
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.4em] whitespace-nowrap">{label}</span>
      <div className={iconContainerClasses[variant]}>
        <Icon className="w-5 h-5 shrink-0" />
      </div>
    </motion.div>
  );

  const sharedProps = {
    className: finalClassName,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
  };

  if (href.startsWith('#')) {
    return (
      <a 
        {...sharedProps}
        ref={ref as React.RefObject<HTMLAnchorElement>} 
        href={href} 
      >
        {content}
      </a>
    );
  }

  return (
    <Link 
      {...sharedProps}
      ref={ref as React.RefObject<HTMLAnchorElement>} 
      href={href} 
      className={finalClassName}
    >
      {content}
    </Link>
  );
}
