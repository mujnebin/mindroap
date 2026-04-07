"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

export function Counter({ 
  value, 
  delay = 0, 
  duration = 2 
}: { 
  value: string, 
  delay?: number, 
  duration?: number 
}) {
  const ref = useRef<HTMLSpanElement>(null);
  
  // Extract number from string (e.g., "1,200+" -> 1200)
  const numericValue = parseInt(value.replace(/,/g, "").match(/\d+/)?.[0] || "0");
  const suffix = value.replace(/[\d,]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 60,
  });

  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        motionValue.set(numericValue);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, numericValue, delay]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Calculate velocity for blur effect
        const velocity = Math.abs(springValue.getVelocity());
        const blurAmount = Math.min(velocity / 100, 4);
        
        ref.current.style.filter = `blur(${blurAmount}px)`;
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest)) + suffix;
        
        if (latest === numericValue) {
          ref.current.style.filter = "none";
        }
      }
    });
  }, [springValue, suffix, numericValue]);

  return (
    <motion.span 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="inline-block"
    >
      0
    </motion.span>
  );
}
