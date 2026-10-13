"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { WordReveal, ScrollReveal } from "./Animations";
import { Magnetic } from "./Magnetic";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function Hero() {
  const { personal } = portfolioData;
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Subtle mouse-follow parallax on desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    // Extremely subtle movement (+/- 4px max)
    mouseX.set(xPct * 8);
    mouseY.set(yPct * 8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Ambient background glow accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-stone-300/20 dark:bg-stone-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <ScrollReveal delay={0.0}>
                <div className="text-xs sm:text-sm font-semibold tracking-widest text-stone-500 dark:text-stone-400 uppercase">
                  HI, I'M
                </div>
              </ScrollReveal>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
                <WordReveal text={personal.name} delay={0.1} stagger={0.07} />
              </h1>

              <ScrollReveal delay={0.35}>
                <p className="text-base sm:text-lg font-medium text-stone-700 dark:text-stone-300">
                  {personal.role}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.45}>
              <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                {personal.bio}
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={0.55}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.3}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 text-sm font-medium hover:bg-stone-950 dark:hover:bg-white hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-md hover:shadow-stone-900/15 dark:hover:shadow-black/30 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-900 group cursor-pointer"
                  >
                    <span>View My Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.25}>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 rounded-lg border border-stone-300 dark:border-stone-700 bg-white/60 dark:bg-stone-900/60 text-stone-800 dark:text-stone-200 text-sm font-medium hover:bg-white dark:hover:bg-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-900 cursor-pointer"
                  >
                    Contact Me
                  </a>
                </Magnetic>
              </div>
            </ScrollReveal>

            {/* Social Links Row */}
            <ScrollReveal delay={0.65}>
              <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-stone-600 dark:text-stone-400 font-medium">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-stone-100 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm group"
                  aria-label="GitHub profile"
                >
                  <GithubIcon className="w-4 h-4 text-stone-800 dark:text-stone-300 group-hover:scale-110 group-hover:text-stone-950 dark:group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-900 dark:after:bg-stone-100 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]">
                    GitHub
                  </span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-stone-100 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm group"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-stone-800 dark:text-stone-300 group-hover:scale-110 group-hover:text-stone-950 dark:group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-900 dark:after:bg-stone-100 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 hover:text-stone-950 dark:hover:text-stone-100 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm group"
                  aria-label="Email address"
                >
                  <Mail className="w-4 h-4 text-stone-800 dark:text-stone-300 group-hover:scale-110 group-hover:text-stone-950 dark:group-hover:text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-900 dark:after:bg-stone-100 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]">
                    Email
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Transparent Portrait */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              x: shouldReduceMotion ? 0 : smoothX,
              y: shouldReduceMotion ? 0 : smoothY,
            }}
          >
            <div
              className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[460px] xl:max-w-[480px] flex items-center justify-center select-none"
              style={{
                maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
              }}
            >
              <Image
                src="/swaraj-portrait.webp"
                alt="Swaraj K Gawde — Portrait"
                width={687}
                height={1024}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 440px, 480px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
