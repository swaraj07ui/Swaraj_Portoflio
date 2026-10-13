"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items?: string[];
  speed?: number; // seconds for one full pass
  className?: string;
}

const DEFAULT_ITEMS = [
  "Full-Stack Development",
  "AI Agent Engineering",
  "Data Analytics",
  "Next.js & React",
  "Open to Work",
  "Freelance Available",
  "Research Published · ICASME 2026",
  "UI/UX Design",
];

export function Marquee({
  items = DEFAULT_ITEMS,
  speed = 28,
  className = "",
}: MarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden w-full border-y border-stone-200 dark:border-stone-800 bg-[#F4F1E9] dark:bg-[#1A1918] py-3.5 select-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="flex items-center whitespace-nowrap gap-0"
        animate={shouldReduceMotion ? { x: "0%" } : { x: ["0%", "-50%"] }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }
        }
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 shrink-0">
            <span className="text-xs font-semibold tracking-widest uppercase text-stone-600 dark:text-stone-400 px-6">
              {item}
            </span>
            <span className="text-stone-300 dark:text-stone-700 font-light text-base leading-none">
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
