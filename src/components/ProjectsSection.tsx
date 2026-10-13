"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { ProjectMockupFrame } from "./ProjectMockupFrame";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { ScrollReveal } from "./Animations";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "AI & Chatbot", "Full-Stack", "Data Analysis"];

  const filteredProjects =
    filter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (p) => p.category === filter || (filter === "Data Analysis" && p.category === "Data")
        );

  const updateScrollState = useCallback(() => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);

    const firstCard = sliderRef.current.firstElementChild as HTMLElement;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveSlideIndex(Math.min(filteredProjects.length - 1, Math.max(0, newIndex)));
    }
  }, [filteredProjects.length]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // When filter changes, reset scroll to start
  useEffect(() => {
    setActiveSlideIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    const timer = setTimeout(updateScrollState, 200);
    return () => clearTimeout(timer);
  }, [filter, updateScrollState]);

  const slideNext = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement;
    const step = firstCard ? firstCard.offsetWidth + 24 : 380;
    sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
  };

  const slidePrev = () => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.firstElementChild as HTMLElement;
    const step = firstCard ? firstCard.offsetWidth + 24 : 380;
    sliderRef.current.scrollBy({ left: -step, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-stone-100/60 dark:bg-[#181817]/80 backdrop-blur-xl border border-stone-200/90 dark:border-white/10 p-6 sm:p-10 md:p-12 shadow-xl dark:shadow-2xl shadow-stone-900/5 dark:shadow-black/40 relative overflow-hidden transition-all">
        {/* Subtle ambient corner glow */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-5">
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">
                <span>01</span>
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
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                Featured Projects
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Filter pills */}
              <div className="flex items-center bg-stone-200/60 dark:bg-stone-900 border border-transparent dark:border-stone-800 p-1 rounded-lg text-xs font-medium text-stone-600 dark:text-stone-400">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    whileHover={{ scale: 1.02, y: -0.5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className={`px-3 py-1 rounded-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${
                      filter === cat
                        ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-white shadow-xs"
                        : "hover:text-stone-900 dark:hover:text-white"
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>

              {/* Slider Arrows & Counter in Header */}
              <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-stone-200 dark:border-stone-800">
                <span className="text-xs font-mono text-stone-500 dark:text-stone-400 mr-1 select-none">
                  {String(activeSlideIndex + 1).padStart(2, "0")} / {String(filteredProjects.length).padStart(2, "0")}
                </span>
                <button
                  onClick={slidePrev}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-lg border border-stone-200/80 dark:border-stone-800 transition-all cursor-pointer ${
                    canScrollLeft
                      ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700 shadow-xs active:scale-95"
                      : "bg-transparent text-stone-400 dark:text-stone-600 opacity-40 cursor-not-allowed"
                  }`}
                  aria-label="Previous project slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={slideNext}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-lg border border-stone-200/80 dark:border-stone-800 transition-all cursor-pointer ${
                    canScrollRight
                      ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-700 shadow-xs active:scale-95"
                      : "bg-transparent text-stone-400 dark:text-stone-600 opacity-40 cursor-not-allowed"
                  }`}
                  aria-label="Next project slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 dark:text-stone-400 hover:text-stone-950 dark:hover:text-white hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm group/all"
              >
                <span>GitHub</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Horizontal Slider Track */}
        <div className="relative">
          <div
            ref={sliderRef}
            data-lenis-prevent
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-1 -mx-1"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="snap-start shrink-0 w-[86vw] sm:w-[350px] md:w-[360px] lg:w-[370px] xl:w-[380px] flex flex-col"
              >
                <div className="group bg-white dark:bg-[#1A1918] rounded-2xl border border-stone-200/80 dark:border-stone-800/80 overflow-hidden shadow-xs hover:shadow-xl hover:shadow-stone-900/8 dark:hover:shadow-black/50 hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between h-full hover:-translate-y-1.5">
                  {/* Project UI Mockup Frame with subtle zoom container */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer overflow-hidden border-b border-stone-100 dark:border-stone-800/60"
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${project.title}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                  >
                    <div className="transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]">
                      <ProjectMockupFrame
                        type={project.previewType}
                        title={project.title}
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-stone-950 dark:group-hover:text-white transition-colors duration-250">
                        {project.title}
                      </h3>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 p-1.5 rounded-md hover:bg-stone-100 dark:hover:bg-stone-800/80 transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
                          title="Open live link"
                          aria-label={`Open live link for ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4 line-clamp-3 flex-1">
                      {project.shortDescription}
                    </p>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 rounded border border-stone-200/60 dark:border-stone-700/60 transition-colors duration-200 group-hover:border-stone-300 dark:group-hover:border-stone-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 dark:text-stone-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm w-fit"
                    >
                      <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-stone-900 dark:after:bg-stone-100 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)]">
                        View Project
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Slider Bottom Controls: Pagination Dots & Navigation */}
        <div className="mt-8 pt-4 border-t border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {filteredProjects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}: ${proj.title}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlideIndex === idx
                    ? "w-8 bg-stone-900 dark:bg-stone-100"
                    : "w-2 bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-500"
                }`}
              />
            ))}
          </div>

          {/* Slide hint / Mobile controls */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400 hidden md:inline">
              Slide or swipe to explore ({filteredProjects.length} projects)
            </span>

            {/* Mobile Prev / Next arrows */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={slidePrev}
                disabled={!canScrollLeft}
                className={`p-1.5 rounded-md border border-stone-200 dark:border-stone-800 ${
                  canScrollLeft
                    ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                    : "opacity-40 cursor-not-allowed text-stone-400"
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={slideNext}
                disabled={!canScrollRight}
                className={`p-1.5 rounded-md border border-stone-200 dark:border-stone-800 ${
                  canScrollRight
                    ? "bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100"
                    : "opacity-40 cursor-not-allowed text-stone-400"
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
