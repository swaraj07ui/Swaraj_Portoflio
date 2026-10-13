"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle2, Award, Layers } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { ProjectMockupFrame } from "./ProjectMockupFrame";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/50 dark:bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF9F5] dark:bg-[#1A1918] border border-stone-300 dark:border-stone-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-stone-900 dark:text-stone-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-200/80 dark:border-stone-800 bg-white/90 dark:bg-[#201F1D] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest">
              Case Study
            </span>
            <span className="text-stone-300 dark:text-stone-700">•</span>
            <span className="text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 hover:rotate-90 hover:scale-110 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div data-lenis-prevent className="p-6 overflow-y-auto space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              {project.title}
            </h2>
            <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Interactive UI Mockup */}
          <div className="border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-xs">
            <ProjectMockupFrame type={project.previewType} title={project.title} />
          </div>

          {/* Publication Highlight if applicable */}
          {project.publication && (
            <div className="p-3.5 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 rounded-xl text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
              <Award className="w-4 h-4 shrink-0 text-amber-700 dark:text-amber-400 mt-0.5" />
              <div>
                <span className="font-semibold">Peer-Reviewed Research: </span>
                {project.publication}
              </div>
            </div>
          )}

          {/* Problem & Solution grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-[#201F1D] border border-stone-200/80 dark:border-stone-800 rounded-xl">
              <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1.5">
                The Problem
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-[#201F1D] border border-stone-200/80 dark:border-stone-800 rounded-xl">
              <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1.5">
                The Architectural Solution
              </div>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-stone-600 dark:text-stone-400" />
              Core Capabilities & Highlights
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300 bg-white/70 dark:bg-[#201F1D] p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-stone-900 dark:text-stone-200 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack tags */}
          <div>
            <div className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-300 rounded-md border border-stone-200/80 dark:border-stone-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-100/90 dark:bg-[#161514] border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 text-xs font-medium hover:bg-black dark:hover:bg-white hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 group/live"
              >
                <span>Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover/live:scale-110 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform duration-300" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-medium hover:bg-stone-50 dark:hover:bg-stone-700 hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-xs hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 group/gh"
              >
                <GithubIcon className="w-3.5 h-3.5 group-hover/gh:scale-110 transition-transform duration-300" />
                <span>Source Code</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 px-3 py-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
