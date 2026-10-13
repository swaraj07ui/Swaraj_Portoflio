"use client";

import React, { useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { X, Printer, Mail, Phone, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 dark:bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-white dark:bg-[#1A1918] border border-stone-300 dark:border-stone-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-stone-900 dark:text-stone-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Top toolbar */}
        <div className="px-6 py-3.5 border-b border-stone-200 dark:border-stone-800 bg-[#FAF9F5] dark:bg-[#201F1D] flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400">
              Curriculum Vitae Preview
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono">
              ATS-Standard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-950 text-xs font-medium hover:bg-black dark:hover:bg-white hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-xs transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 group/print"
            >
              <Printer className="w-3.5 h-3.5 group-hover/print:scale-110 transition-transform duration-200" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-800 hover:rotate-90 hover:scale-110 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div
          data-lenis-prevent
          className="p-8 sm:p-10 overflow-y-auto space-y-6 bg-white dark:bg-[#1C1B19] print:bg-white font-sans text-stone-900 dark:text-stone-100 print:text-black print:p-0"
        >
          {/* Header */}
          <div className="text-center pb-5 border-b border-stone-200 dark:border-stone-800">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-950 dark:text-stone-50 print:text-black">
              {portfolioData.personal.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-stone-600 dark:text-stone-400 print:text-stone-600 font-mono">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-stone-500" />
                {portfolioData.personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-stone-500" />
                {portfolioData.personal.email}
              </span>
              <span>•</span>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 print:text-black border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
              Summary
            </h2>
            <p className="text-xs text-stone-700 dark:text-stone-300 print:text-black leading-relaxed">
              Computer Engineering professional with a strong foundation in full-stack web development and AI integration. Adept at leveraging modern frameworks like Next.js and React, alongside emerging AI tools, to build scalable, user-centric applications. Seeking to apply technical expertise, research experience, and practical problem-solving skills to drive impactful software solutions within a forward-thinking engineering team.
            </p>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 print:text-black border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
              Key Skills
            </h2>
            <div className="grid gap-1.5 text-xs">
              <div>
                <span className="font-semibold text-stone-900 dark:text-stone-100 print:text-black">Programming: </span>
                <span className="text-stone-700 dark:text-stone-300 print:text-black">Java, Python, HTML, CSS, JavaScript, PHP, Node.js</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900 dark:text-stone-100 print:text-black">Frameworks & AI: </span>
                <span className="text-stone-700 dark:text-stone-300 print:text-black">React, Next.js, Streamlit, Agent Development Kit (ADK), AI Agent Engineering</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900 dark:text-stone-100 print:text-black">Databases & Data Tools: </span>
                <span className="text-stone-700 dark:text-stone-300 print:text-black">SQL, MySQL, PostgreSQL, Excel, Power BI</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900 dark:text-stone-100 print:text-black">Tools & Platforms: </span>
                <span className="text-stone-700 dark:text-stone-300 print:text-black">API Integration, Git, GitHub, Vercel, Postman, VS Code, Firebase</span>
              </div>
              <div>
                <span className="font-semibold text-stone-900 dark:text-stone-100 print:text-black">Video & Motion Design: </span>
                <span className="text-stone-700 dark:text-stone-300 print:text-black">Adobe After Effects, CapCut, Hypic, VN Editor, AI Editing</span>
              </div>
            </div>
          </div>

          {/* Projects & Publications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 print:text-black border-b border-stone-200 dark:border-stone-800 pb-1 mb-2.5">
              Projects & Research
            </h2>
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-xs text-stone-900 dark:text-stone-100 print:text-black">
                    QueryHive Assistant Platform
                  </div>
                  <a
                    href="https://college-chatbot-v2-three.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-stone-600 dark:text-stone-400 print:text-stone-600 font-mono hover:underline inline-flex items-center gap-1"
                  >
                    college-chatbot-v2-three.vercel.app
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 print:text-black mt-1">
                  Developed an interactive AI assistant platform using Next.js, featuring responsive landing pages and modern UI elements with interactive animations.
                </p>
              </div>

              <div>
                <div className="font-semibold text-xs text-stone-900 dark:text-stone-100 print:text-black">
                  Healthcare System
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 print:text-black mt-1">
                  Designed and developed a comprehensive web-based healthcare management application using Next.js, Node.js, and MySQL. Features include secure patient record management, streamlined appointment scheduling, and an AI-driven chatbot for general medical inquiries and system navigation.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-xs text-stone-900 dark:text-stone-100 print:text-black">
                    Research Publication (ICASME 2026)
                  </div>
                  <span className="text-[11px] text-stone-500 font-mono">2026</span>
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 print:text-black mt-1">
                  Co-authored and presented a research paper titled <em className="text-stone-900 dark:text-stone-100 print:text-black font-medium">“AI Chatbot for College Queries with Enhanced Features”</em> in the Computer Science & IT track.
                </p>
              </div>
            </div>
          </div>

          {/* Education History */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 print:text-black border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
              Education History
            </h2>
            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100 print:text-black">
                    Bachelor Of Engineering (Computer Engineering)
                  </div>
                  <div className="text-stone-600 dark:text-stone-400 print:text-stone-600">
                    Metropolitan Institute Of Technology And Management, Sindhudurg
                  </div>
                </div>
                <div className="text-right font-mono text-[11px]">
                  <div className="text-stone-900 dark:text-stone-100 print:text-black font-medium">2023 – 2026</div>
                  <div className="text-stone-600 dark:text-stone-400 print:text-stone-600">CGPA: 6.41</div>
                </div>
              </div>

              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100 print:text-black">
                    Diploma (Computer Engineering)
                  </div>
                  <div className="text-stone-600 dark:text-stone-400 print:text-stone-600">
                    Government Polytechnic, Sindhudurg
                  </div>
                </div>
                <div className="text-right font-mono text-[11px]">
                  <div className="text-stone-900 dark:text-stone-100 print:text-black font-medium">2023</div>
                  <div className="text-stone-600 dark:text-stone-400 print:text-stone-600">64%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 print:text-black border-b border-stone-200 dark:border-stone-800 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="grid sm:grid-cols-2 gap-1.5 text-xs text-stone-700 dark:text-stone-300 print:text-black list-disc list-inside">
              <li>Software Engineering Job Simulation – JPMorgan Chase & Co.</li>
              <li>Data Science & Analytics – HP LIFE</li>
              <li>Engineer AI Agents with Agent Development Kit (ADK) – Google</li>
              <li>Data Analytics – Coursera</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
