"use client";

import React, { useRef, ReactNode } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// ── Premium easing curves ────────────────────────────────────────────────────
// Natural cubic-bezier ease-out (smooth deceleration, zero spring bounce)
const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_OUT_QUART = [0.16, 1, 0.3, 1] as const;

// ── Fade + Slide Up on Scroll ───────────────────────────────────────────────
interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "down";
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  direction = "up",
  distance = 25,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [...EASE_OUT],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Word-by-word text reveal (hero headline style) ──────────────────────────
interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export function WordReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
}: WordRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: "0%", opacity: 1 } : {}}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [...EASE_OUT],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ── Character-by-character text reveal ──────────────────────────────────────
interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  tag?: "h2" | "h3" | "span" | "p";
}

export function CharReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.025,
  tag = "h2",
}: CharRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const Tag = tag;

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : {}
          }
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [...EASE_OUT],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}

// ── Animated section separator line ─────────────────────────────────────────
interface AnimatedLineProps {
  className?: string;
  delay?: number;
  vertical?: boolean;
}

export function AnimatedLine({
  className = "",
  delay = 0,
  vertical = false,
}: AnimatedLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: vertical ? 1 : 0, scaleY: vertical ? 0 : 1 }}
      animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [...EASE_OUT] }}
      style={{ transformOrigin: vertical ? "top center" : "left center" }}
      className={className}
    />
  );
}

// ── Staggered container for card lists ──────────────────────────────────────
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.09,
  delay = 0,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Individual stagger item ──────────────────────────────────────────────────
export function StaggerItem({
  children,
  className = "",
  distance = 20,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [...EASE_OUT] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Subtle scale-in reveal (for images, mockups, graphics) ───────────────────
interface ScaleRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  initialScale?: number;
}

export function ScaleReveal({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  initialScale = 0.96,
}: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: initialScale }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration,
        delay,
        ease: [...EASE_OUT],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Parallax scroll effect ──────────────────────────────────────────────────
interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function Parallax({
  children,
  offset = 30,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// ── Counter animation (animated number) ─────────────────────────────────────
interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
  duration = 1.8,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const [displayValue, setDisplayValue] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }
    if (!isInView) return;
    let frame: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayValue(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

// ── Horizontal reveal (clip-path based) ─────────────────────────────────────
interface ClipRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

export function ClipReveal({
  children,
  delay = 0,
  className = "",
  direction = "left",
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const clipPathMap = {
    left: { hidden: "inset(0 100% 0 0)", visible: "inset(0 0% 0 0)" },
    right: { hidden: "inset(0 0 0 100%)", visible: "inset(0 0 0 0%)" },
    up: { hidden: "inset(100% 0 0 0)", visible: "inset(0% 0 0 0)" },
    down: { hidden: "inset(0 0 100% 0)", visible: "inset(0 0 0% 0)" },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: clipPathMap[direction].hidden, opacity: 0 }}
      animate={
        isInView
          ? { clipPath: clipPathMap[direction].visible, opacity: 1 }
          : {}
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [...EASE_OUT_QUART],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Blur-in fade (soft reveal for text blocks) ──────────────────────────────
interface BlurFadeProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function BlurFade({
  children,
  delay = 0,
  className = "",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : {}
      }
      transition={{
        duration: 0.65,
        delay,
        ease: [...EASE_OUT],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
