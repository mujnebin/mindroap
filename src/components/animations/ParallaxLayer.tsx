"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  offset?: number;
  className?: string;
  direction?: "up" | "down";
}

export function ParallaxLayer({ 
  children, 
  offset = 50, 
  className = "", 
  direction = "up" 
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const range = direction === "up" ? [-offset, offset] : [offset, -offset];
  const y = useTransform(scrollYProgress, [0, 1], range);
  const springY = useSpring(y, { damping: 20, stiffness: 100 });

  return (
    <motion.div
      ref={ref}
      style={{ y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
