"use client";

import React, { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesAndAboutSection } from "@/components/ServicesAndAboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactAndCertificationsSection } from "@/components/ContactAndCertificationsSection";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { CustomCursor } from "@/components/CustomCursor";
import { Marquee } from "@/components/Marquee";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { motion } from "framer-motion";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <ThemeProvider>
      <SmoothScroll enabled={preloaderDone}>
        {/* Custom cursor (hidden on touch/mobile via CSS) */}
        <CustomCursor />

        {/* ── Cinematic Preloader ── */}
        {!preloaderDone && (
          <Preloader onComplete={() => setPreloaderDone(true)} />
        )}

        {/* ── Main Content — fades/slides in after preloader ── */}
        <motion.div
          className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#141413] text-[#1C1917] dark:text-[#F4F2ED] transition-colors duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={
            preloaderDone
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Floating Capsule Navigation Bar */}
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />

          {/* Main Page Flow */}
          <main className="flex-1">
            <Hero />

            {/* Marquee ticker between Hero and Projects */}
            <Marquee />

            <ProjectsSection />
            <ServicesAndAboutSection />
            <SkillsSection />
            <ContactAndCertificationsSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* ATS Resume Preview & PDF Print Modal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </motion.div>
      </SmoothScroll>
    </ThemeProvider>
  );
}
