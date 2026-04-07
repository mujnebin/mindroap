"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';

}

export function StaggerContainer({ 
  children, 
  delay = 0, 
  stagger = 0.1, 
  className = "" 
}: { 
  children: ReactNode, 
  delay?: number, 
  stagger?: number, 
  className?: string 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: stagger
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({ children, delay = 0, className = "", direction = 'up' }: Props) {
  const yOffset = direction === 'up' ? 20 : direction === 'down' ? -20 : 0;
  const xOffset = direction === 'left' ? 20 : direction === 'right' ? -20 : 0;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, x: xOffset },
        visible: { opacity: 1, y: 0, x: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Custom Cinematic Ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Float({ children, delay = 0, className = "", yOffset = 15, duration = 4 }: { children: ReactNode, delay?: number, className?: string, yOffset?: number, duration?: number }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -yOffset, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration, 
        ease: "easeInOut",
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
