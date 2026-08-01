"use client";

import { motion, useReducedMotion } from "framer-motion";
import { memo } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

function RevealComponent({ children, className = "" }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={
        prefersReducedMotion ? {} : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export const Reveal = memo(RevealComponent);