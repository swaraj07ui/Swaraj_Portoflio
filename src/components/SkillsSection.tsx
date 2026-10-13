"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./Animations";
import { motion } from "framer-motion";
import { TechCarousel } from "./TechCarousel";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-stone-100/60 dark:bg-[#181817]/80 backdrop-blur-xl border border-stone-200/90 dark:border-white/10 p-6 sm:p-10 md:p-12 shadow-xl dark:shadow-2xl shadow-stone-900/5 dark:shadow-black/40 relative overflow-hidden transition-all">
        {/* Ambient glow accent */}
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="mb-12">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">
              <span>04</span>
              <motion.div
                className="h-[1px] bg-stone-400 dark:bg-stone-600"
                initial={{ width: 0 }}
                whileInView={{ width: 24 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.04} distance={25} duration={0.7}>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Skills & Technologies
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14} distance={18} duration={0.65}>
            <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
              Core tech stack, frameworks, platforms, and creative tools
            </p>
          </ScrollReveal>
        </div>

        {/* ── Animated Technology Carousel ── */}
        <ScrollReveal delay={0.1}>
          <div className="relative -mx-6 sm:-mx-10 md:-mx-12 mb-10 border-t border-b border-stone-200/80 dark:border-stone-800/60 py-1">
            <TechCarousel />
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          stagger={0.09}
        >
          {skills.map((category, catIdx) => (
            <StaggerItem key={category.category}>
              <motion.div
                className="space-y-3 group"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 pb-2 border-b border-stone-200 dark:border-stone-800 group-hover:border-stone-400 dark:group-hover:border-stone-600 transition-colors">
                  {category.category}
                </h3>
                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={skill}
                      className="hover:text-stone-950 dark:hover:text-stone-100 transition-colors flex items-center gap-1.5"
                      initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: catIdx * 0.06 + i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.span
                        className="w-1 h-1 rounded-full bg-stone-300 dark:bg-stone-700"
                        whileHover={{ scale: 1.8, backgroundColor: "#78716c" }}
                      />
                      <span>{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
