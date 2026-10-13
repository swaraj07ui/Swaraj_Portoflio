"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Smooth spring physics for the dot
  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const dotX = useSpring(cursorX, springConfig);
  const dotY = useSpring(cursorY, springConfig);

  // Slower ring that trails behind
  const ringConfig = { damping: 20, stiffness: 120, mass: 1 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    setMounted(true);
    document.documentElement.classList.add("custom-cursor-enabled");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "hover"
      ) {
        setIsHoveringLink(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHoveringLink(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [cursorX, cursorY, shouldReduceMotion]);

  // Hide on touch/mobile devices or if reduced motion is requested
  if (!mounted || shouldReduceMotion) return null;

  return (
    <>
      {/* Small fast dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHoveringLink ? 8 : 5,
            height: isHoveringLink ? 8 : 5,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Larger slow ring that trails */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border border-white"
          animate={{
            width: isHoveringLink ? 44 : 28,
            height: isHoveringLink ? 44 : 28,
            opacity: isHoveringLink ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>
    </>
  );
}
