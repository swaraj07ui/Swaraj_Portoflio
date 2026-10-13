"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
  name?: string;
  tagline?: string;
}

export function Preloader({
  onComplete,
  name = "Swaraj K Gawde",
  tagline = "Full-Stack Developer · AI Enthusiast · Data Analyst",
}: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "exit">("loading");
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Accessibility:
  // - Respect prefers-reduced-motion instantly
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        onComplete();
      }
    }
  }, [onComplete]);

  // Allow clicking anywhere or pressing Escape / Space / Enter to skip
  useEffect(() => {
    const handleSkip = (e: KeyboardEvent | MouseEvent) => {
      if (phase === "loading") {
        setProgress(100);
        setPhase("reveal");
      } else if (phase === "reveal") {
        setPhase("exit");
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (["Escape", " ", "Enter"].includes(e.key)) {
        handleSkip(e);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  // Slower, smooth video playback rate (0.75x speed)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  // Ensure animation stops when preloader transitions out or unmounts
  useEffect(() => {
    if (phase !== "loading" && videoRef.current) {
      videoRef.current.pause();
    }
  }, [phase]);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  // Smooth, slower progress counter (~3.0s total load for relaxed memoji showcase)
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 3000; // slower loading phase ms

    const easedProgress = (t: number) => {
      if (t < 0.35) {
        return 0.15 * Math.pow(t / 0.35, 1.5);
      } else if (t < 0.82) {
        return 0.15 + 0.65 * ((t - 0.35) / 0.47);
      } else {
        const remaining = (t - 0.82) / 0.18;
        return 0.8 + 0.2 * Math.pow(remaining, 1.4);
      }
    };

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(elapsed / duration, 1);
      const value = Math.round(easedProgress(t) * 100);
      setProgress(value);

      if (t < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setTimeout(() => setPhase("reveal"), 350);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // After reveal phase, trigger exit (~1.3s reveal)
  useEffect(() => {
    if (phase === "reveal") {
      const timer = setTimeout(() => setPhase("exit"), 1300);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleExitComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  const nameLetters = name.split("");

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {phase !== "exit" && (
        <motion.div
          key="preloader"
          className="preloader-wrapper"
          exit={{
            clipPath: "inset(0 0 100% 0)",
          }}
          transition={{
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "#0A0A0A",
          }}
        >
          {/* Subtle animated grain texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.035,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              pointerEvents: "none",
            }}
          />

          {/* Radial glow behind content */}
          <motion.div
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ── Main preloader content ── */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              width: "100%",
              maxWidth: "90vw",
            }}
          >
            {/* "PORTFOLIO" label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.4em",
                color: "rgba(255,255,255,0.18)",
                fontFamily: "var(--font-geist-mono), monospace",
                textTransform: "uppercase",
              }}
            >
              PORTFOLIO
            </motion.div>

            {/* ── Memoji animation (loading phase) ── */}
            <AnimatePresence mode="wait">
              {phase === "loading" && (
                <motion.div
                  key="memoji-loader"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  {/* 3D Avatar Animation Frame */}
                  <div
                    style={{
                      width: "clamp(140px, 22vw, 220px)",
                      height: "clamp(140px, 22vw, 220px)",
                      borderRadius: "50%",
                      overflow: "hidden",
                      position: "relative",
                      backgroundColor: "#1F1F1F",
                      boxShadow:
                        "0 0 60px rgba(255,255,255,0.06), 0 0 120px rgba(255,255,255,0.03)",
                    }}
                  >
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      onLoadedMetadata={(e) => {
                        e.currentTarget.playbackRate = 0.75;
                      }}
                      poster="/memoji/avatar-poster.jpg"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      aria-label="3D Avatar Animation"
                    >
                      <source src="/memoji/avatar.webm" type="video/webm" />
                      <source src="/memoji/avatar.mp4" type="video/mp4" />
                      {/* Fallback image */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/memoji/avatar-poster.jpg"
                        alt="3D Avatar"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </video>
                  </div>

                  {/* Progress counter below memoji */}
                  <div
                    style={{
                      fontFamily: "var(--font-geist-mono), monospace",
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.25)",
                      letterSpacing: "0.15em",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(progress).padStart(3, "0")}%
                  </div>

                  {/* Thin progress bar */}
                  <div
                    style={{
                      width: "clamp(120px, 25vw, 200px)",
                      height: "1px",
                      background: "rgba(255,255,255,0.08)",
                      borderRadius: "1px",
                      overflow: "hidden",
                      marginTop: "-0.75rem",
                    }}
                  >
                    <motion.div
                      style={{
                        height: "100%",
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.65))",
                        borderRadius: "1px",
                        transformOrigin: "left",
                      }}
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.15, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}

              {/* ── Name + tagline reveal (reveal phase) ── */}
              {phase === "reveal" && (
                <motion.div
                  key="name-reveal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                  }}
                >
                  {/* Name — letter-by-letter stagger */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      overflow: "hidden",
                      padding: "0.15em 0",
                    }}
                  >
                    {nameLetters.map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                          duration: 0.65,
                          delay: i * 0.035,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          display: "inline-block",
                          fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                          fontWeight: 800,
                          color: "#FAFAFA",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.15,
                          fontFamily:
                            "var(--font-geist-sans), -apple-system, sans-serif",
                          width: letter === " " ? "0.3em" : "auto",
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      width: "60px",
                      height: "1px",
                      background: "rgba(255,255,255,0.25)",
                      transformOrigin: "center",
                    }}
                  />

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.55,
                      ease: "easeOut",
                    }}
                    style={{
                      fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      fontFamily: "var(--font-geist-mono), monospace",
                      textAlign: "center",
                    }}
                  >
                    {tagline}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Decorative corner markers */}
          <div className="preloader-corner preloader-corner-tl" />
          <div className="preloader-corner preloader-corner-tr" />
          <div className="preloader-corner preloader-corner-bl" />
          <div className="preloader-corner preloader-corner-br" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
