"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Code, Cpu, BarChart3, Palette, GraduationCap, Award } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BlurFade,
  ScaleReveal,
  ClipReveal,
} from "./Animations";
import { motion } from "framer-motion";

export function ServicesAndAboutSection() {
  const { services, education, personal, research } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5 text-stone-800 dark:text-stone-200" />,
    Cpu: <Cpu className="w-5 h-5 text-stone-800 dark:text-stone-200" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-stone-800 dark:text-stone-200" />,
    Palette: <Palette className="w-5 h-5 text-stone-800 dark:text-stone-200" />,
  };

  return (
    <section id="services" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-stone-100/60 dark:bg-[#181817]/80 backdrop-blur-xl border border-stone-200/90 dark:border-white/10 p-6 sm:p-10 md:p-12 shadow-xl dark:shadow-2xl shadow-stone-900/5 dark:shadow-black/40 relative overflow-hidden transition-all">
        {/* Ambient glow accent */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-stone-300/20 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
          {/* SECTION 02: SERVICES */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-8">
              <div>
                <ScrollReveal delay={0}>
                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">
                    <span>02</span>
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
                    Services
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.14} distance={18} duration={0.65}>
                  <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                    What I can do for you & your product
                  </p>
                </ScrollReveal>
              </div>

              {/* 2x2 Services Grid */}
              <StaggerContainer className="grid sm:grid-cols-2 gap-5" stagger={0.09}>
                {services.map((svc) => (
                  <StaggerItem key={svc.id}>
                    <motion.div
                      className="p-5 bg-white dark:bg-[#1A1918] rounded-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-lg hover:shadow-stone-900/5 dark:hover:shadow-black/40 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between h-full group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200/80 dark:group-hover:bg-stone-700/80 flex items-center justify-center mb-3.5 group-hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
                          {iconMap[svc.icon]}
                        </div>
                        <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-1.5 group-hover:text-stone-950 dark:group-hover:text-white transition-colors duration-250">
                          {svc.title}
                        </h3>
                        <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-3">
                          {svc.description}
                        </p>
                      </div>
                      <ul className="space-y-1 text-[11px] text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                        {svc.deliverables.slice(0, 2).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-600 group-hover:bg-stone-600 dark:group-hover:bg-stone-300 transition-colors" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* SECTION 03: ABOUT ME */}
          <div id="about" className="lg:col-span-6 space-y-8">
            <div>
              <ScrollReveal delay={0.05}>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">
                  <span>03</span>
                  <motion.div
                    className="h-[1px] bg-stone-400 dark:bg-stone-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: 24 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.09} distance={25} duration={0.7}>
                <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  About Me
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.18} distance={18} duration={0.65}>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
                  My background, journey and engineering philosophy
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.22} distance={18} duration={0.65}>
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {personal.longBio}
              </p>
            </ScrollReveal>

            {/* Education */}
            <div className="space-y-4 pt-2">
              <ScrollReveal delay={0.26}>
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                  <span>Education History</span>
                </div>
              </ScrollReveal>

              <StaggerContainer className="space-y-3" stagger={0.09}>
                {education.map((item, idx) => (
                  <StaggerItem key={idx}>
                    <motion.div
                      className="p-4 bg-white dark:bg-[#1A1918] rounded-xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-sm hover:border-stone-400/80 dark:hover:border-stone-600/80 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-start justify-between gap-4 group cursor-default"
                      whileHover={{ y: -2, x: 2 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100 group-hover:text-stone-950 dark:group-hover:text-white transition-colors">
                          {item.degree}
                        </div>
                        <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                          {item.institution}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-mono font-medium text-stone-800 dark:text-stone-200">
                          {item.period}
                        </div>
                        <div className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                          {item.score}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Research highlight */}
            <ScaleReveal delay={0.3}>
              <motion.div
                className="p-4 bg-[#F2EFE9]/70 dark:bg-[#1F1E1C] border border-stone-300/80 dark:border-stone-800 rounded-xl flex items-start gap-3 hover:shadow-sm hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-default"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Award className="w-5 h-5 text-stone-800 dark:text-stone-300 shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <div className="text-xs text-stone-700 dark:text-stone-300 space-y-1">
                  <div className="font-semibold text-stone-900 dark:text-stone-100">
                    {research.conference} Conference Presentation
                  </div>
                  <div className="italic text-stone-800 dark:text-stone-200">
                    &quot;{research.title}&quot;
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 pt-0.5">
                    Presented in Computer Science & IT track with real-world collegiate evaluation.
                  </p>
                </div>
              </motion.div>
            </ScaleReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
