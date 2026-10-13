"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  // Track active section via IntersectionObserver
  React.useEffect(() => {
    const sectionIds = ["hero", "projects", "services", "skills", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setActiveSection(href.replace("#", ""));
      const globalLenis = (window as unknown as { lenis?: { scrollTo: (target: Element, options: { offset: number; duration: number }) => void } }).lenis;
      if (globalLenis) {
        globalLenis.scrollTo(target, { offset: -80, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none transition-all">
      {/* Floating Capsule Bar */}
      <div className="pointer-events-auto max-w-4xl w-full flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#FAF8F5]/85 dark:bg-[#161615]/85 backdrop-blur-xl border border-stone-200/80 dark:border-white/10 shadow-lg shadow-stone-900/5 dark:shadow-black/40 transition-all duration-300">
        {/* Monogram Logo & Avatar Branding */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-2.5 py-0.5 px-1 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:focus-visible:ring-stone-500 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          aria-label="Swaraj Keshav Gawde Home"
        >
          {/* 3D Avatar Container */}
          <div className="relative w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-full overflow-hidden border border-stone-200/90 dark:border-white/15 bg-stone-100 dark:bg-stone-800 shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <Image
              src="/memoji/avatar-navbar.png"
              alt="Swaraj Keshav Gawde Avatar"
              width={68}
              height={68}
              priority
              className="w-full h-full object-cover select-none"
            />
          </div>

          {/* SG Initials & Live Status Indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-mono text-xl font-black tracking-tighter text-stone-900 dark:text-stone-100 group-hover:text-stone-950 dark:group-hover:text-white group-hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              SG
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse group-hover:scale-125 transition-transform duration-300" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group py-1 relative transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:focus-visible:ring-stone-500 rounded-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-stone-900 dark:after:bg-stone-100 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive
                    ? "text-stone-950 dark:text-white font-semibold after:scale-x-100"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white after:scale-x-0 group-hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme Toggle & Download CV */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />
          <button
            onClick={onOpenResume}
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-stone-300/80 dark:border-stone-700 bg-white/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 text-xs font-medium hover:bg-stone-100 dark:hover:bg-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:-translate-y-0.5 active:scale-[0.98] shadow-xs hover:shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 dark:focus-visible:ring-stone-500"
          >
            <span>Download CV</span>
            <Download className="w-3 h-3 text-stone-500 dark:text-stone-400 group-hover:translate-y-0.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="flex md:hidden items-center gap-1.5">
          <ThemeToggle />
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-medium active:scale-[0.98] transition-all duration-200"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white rounded-lg transition-colors active:scale-95 duration-200"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Floating Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mt-2 max-w-sm w-full rounded-2xl border border-stone-200/80 dark:border-white/10 bg-[#FAF8F5]/95 dark:bg-[#161615]/95 backdrop-blur-2xl px-5 py-3 shadow-xl space-y-1 md:hidden"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block text-xs py-2 border-b border-stone-200/40 dark:border-stone-800/40 last:border-0 transition-colors ${
                    isActive
                      ? "text-stone-950 dark:text-white font-semibold"
                      : "text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white font-medium"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
