"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ScrollReveal } from "./Animations";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 border-t border-stone-200/80 dark:border-stone-800/80 bg-[#FAF8F5] dark:bg-[#141413] text-xs text-stone-500 dark:text-stone-400 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <ScrollReveal delay={0} direction="up" distance={16}>
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-semibold text-stone-800 dark:text-stone-200">
              {portfolioData.personal.name}
            </span>
            <span className="text-stone-300 dark:text-stone-700">|</span>
            <span>Build • Learn • Create</span>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} direction="up" distance={16}>
          <div>
            © 2026 {portfolioData.personal.name}. All rights reserved.
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
