"use client";

import React from "react";
import { Calendar, BookOpen, Sparkles, User, BarChart3, TrendingUp, Database, Moon, Music, MapPin, Home, Palmtree, Utensils } from "lucide-react";

interface ProjectMockupFrameProps {
  type: "course-builder" | "healthcare" | "queryhive" | "data-analysis" | "gatherings" | "avadhut";
  title: string;
}

export function ProjectMockupFrame({ type }: ProjectMockupFrameProps) {
  return (
    <div className="w-full bg-[#FAFAF8] dark:bg-[#1A1918] rounded-t-xl border-b border-stone-200/80 dark:border-stone-800/80 overflow-hidden font-sans select-none transition-colors">
      {/* Browser chrome header */}
      <div className="bg-[#F2EFE9] dark:bg-[#22211F] px-3.5 py-2.5 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E4C8C5] dark:bg-[#8A5A57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5D7B7] dark:bg-[#8A7857]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#C8DACB] dark:bg-[#577B5B]" />
        </div>
        <div className="px-3 py-0.5 bg-white/80 dark:bg-stone-900/80 rounded-md border border-stone-200/70 dark:border-stone-700/60 text-[10px] text-stone-600 dark:text-stone-300 font-mono tracking-tight max-w-[200px] truncate">
          {type === "gatherings"
            ? "gatheringsbyardra.netlify.app"
            : type === "avadhut"
            ? "avadhutniwas.netlify.app"
            : type === "queryhive"
            ? "college-chatbot-v2.vercel.app"
            : type === "healthcare"
            ? "healthcare-portal.local/schedule"
            : type === "data-analysis"
            ? "powerbi.com/reports/clinical-kpi"
            : "project.local"}
        </div>
        <div className="w-10" />
      </div>

      {/* Frame content based on project */}
      <div className="h-[210px] p-3 text-[11px] overflow-hidden bg-white/70 dark:bg-[#161514]">
        
        {type === "gatherings" && (
          <div className="bg-[#0B1912] border border-[#C5A059]/30 rounded-lg h-full p-2.5 flex flex-col justify-between text-[#ECE3D2] relative overflow-hidden font-serif">
            {/* Ambient subtle gold radial glow */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#C5A059]/15 rounded-full blur-xl pointer-events-none" />

            {/* Top Brand & Venue Bar */}
            <div className="flex items-center justify-between pb-1.5 border-b border-[#C5A059]/20 font-sans">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-[#16271E] border border-[#C5A059]/40 text-[#E8C87A] flex items-center justify-center font-bold text-[9px]">
                  ✦
                </span>
                <div className="font-semibold text-[#F3E2B8] text-[11px] tracking-wider uppercase">
                  Gatherings by Ardra
                </div>
              </div>
              <div className="flex items-center gap-1 text-[8.5px] text-[#E8C87A] bg-[#16271E]/90 px-2 py-0.5 rounded-full border border-[#C5A059]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8C87A] animate-pulse" />
                <span>Live on Netlify</span>
              </div>
            </div>

            {/* Central Event Card / Content Preview */}
            <div className="space-y-1.5 py-1">
              <div>
                <div className="flex items-center gap-1 text-[8px] font-sans tracking-widest text-[#C5A059] uppercase font-semibold">
                  <Moon className="w-2.5 h-2.5 text-[#E8C87A]" />
                  <span>Samhain 2026 • Sacred Women&apos;s Retreat</span>
                </div>
                <div className="text-[12px] font-semibold text-white tracking-wide leading-tight mt-0.5">
                  A return to what is real, raw &amp; rooted.
                </div>
                <div className="text-[8px] text-[#ECE3D2]/80 font-sans flex items-center gap-1 mt-0.5">
                  <MapPin className="w-2.5 h-2.5 text-[#C5A059]" />
                  <span>Khaama Kethna Eco Village, South Goa • Oct 30 – Nov 2</span>
                </div>
              </div>

              {/* 3 Sacred Archetypes mini-chips */}
              <div className="grid grid-cols-3 gap-1 pt-0.5 font-sans">
                <div className="bg-[#12281E]/90 border border-[#C5A059]/25 rounded p-1 text-center">
                  <div className="text-[7px] text-[#C5A059] uppercase tracking-wider font-semibold">Maiden</div>
                  <div className="text-[8px] text-white font-medium">Curiosity</div>
                </div>
                <div className="bg-[#12281E]/90 border border-[#C5A059]/25 rounded p-1 text-center">
                  <div className="text-[7px] text-[#C5A059] uppercase tracking-wider font-semibold">Mother</div>
                  <div className="text-[8px] text-white font-medium">Tenderness</div>
                </div>
                <div className="bg-[#12281E]/90 border border-[#C5A059]/25 rounded p-1 text-center">
                  <div className="text-[7px] text-[#C5A059] uppercase tracking-wider font-semibold">Crone</div>
                  <div className="text-[8px] text-white font-medium">Wisdom</div>
                </div>
              </div>
            </div>

            {/* Bottom bar: Sacred BGM status & Action */}
            <div className="flex items-center justify-between pt-1 border-t border-[#C5A059]/20 font-sans text-[8.5px]">
              <div className="flex items-center gap-1 text-[#C5A059]">
                <Music className="w-2.5 h-2.5 text-[#E8C87A] animate-pulse" />
                <span className="font-mono text-[8px] text-[#ECE3D2]">Sacred BGM • Audio Active</span>
              </div>
              <span className="bg-gradient-to-r from-[#C5A059] to-[#E8C87A] text-[#0B1912] font-semibold px-2 py-0.5 rounded text-[8.5px] shadow-xs">
                Book Sanctuary →
              </span>
            </div>
          </div>
        )}

        
        {type === "avadhut" && (
          <div className="bg-[#FAF8F5] dark:bg-[#1E1C1A] border border-amber-900/10 dark:border-amber-500/20 rounded-lg h-full p-2.5 flex flex-col justify-between text-stone-800 dark:text-stone-200 relative overflow-hidden font-sans">
            {/* Ambient warm coastal glow */}
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-amber-500/10 dark:bg-amber-600/15 rounded-full blur-xl pointer-events-none" />

            {/* Top Brand Bar */}
            <div className="flex items-center justify-between pb-1.5 border-b border-stone-200/80 dark:border-stone-800">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-[10px] border border-amber-200 dark:border-amber-800">
                  <Home className="w-3 h-3 text-amber-700 dark:text-amber-400" />
                </span>
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100 text-[11px] tracking-tight">
                    Avadhut Niwas
                  </div>
                </div>
                <span className="text-[7.5px] px-1.5 py-0.2 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded font-medium">
                  Konkan Coast
                </span>
              </div>
              <div className="flex items-center gap-1 text-[8.5px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live on Netlify</span>
              </div>
            </div>

            {/* Central Stay Preview */}
            <div className="space-y-1.5 py-1">
              <div>
                <div className="text-[8px] font-mono tracking-wider text-amber-800 dark:text-amber-400 uppercase font-semibold flex items-center gap-1">
                  <Palmtree className="w-2.5 h-2.5" />
                  <span>Rustic Luxury Homestay</span>
                </div>
                <div className="text-[12px] font-bold text-stone-900 dark:text-stone-100 tracking-tight leading-snug mt-0.5">
                  Where Tradition Meets the Coastal Breeze
                </div>
                <div className="text-[8.5px] text-stone-600 dark:text-stone-400 line-clamp-1 mt-0.5">
                  Authentic homemade Malvani delicacies &amp; serene Konkan hospitality
                </div>
              </div>

              {/* 3 Room / Experience feature pills */}
              <div className="grid grid-cols-3 gap-1 pt-0.5 text-center">
                <div className="bg-white/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 rounded p-1">
                  <div className="text-[7.5px] text-amber-700 dark:text-amber-400 font-semibold">Alpine Cottage</div>
                  <div className="text-[8.5px] text-stone-800 dark:text-stone-200 font-medium">AC Suite</div>
                </div>
                <div className="bg-white/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 rounded p-1">
                  <div className="text-[7.5px] text-amber-700 dark:text-amber-400 font-semibold">Garden Room</div>
                  <div className="text-[8.5px] text-stone-800 dark:text-stone-200 font-medium">Veranda</div>
                </div>
                <div className="bg-white/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 rounded p-1">
                  <div className="text-[7.5px] text-emerald-700 dark:text-emerald-400 font-semibold">360° Tour</div>
                  <div className="text-[8.5px] text-stone-800 dark:text-stone-200 font-medium">Interactive</div>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Cuisine & WhatsApp booking */}
            <div className="flex items-center justify-between pt-1 border-t border-stone-200/70 dark:border-stone-800 text-[8.5px]">
              <div className="flex items-center gap-1 text-stone-600 dark:text-stone-400">
                <Utensils className="w-2.5 h-2.5 text-amber-600 dark:text-amber-400" />
                <span className="text-[8px] font-medium">Farm to Table Malvani Food</span>
              </div>
              <span className="bg-emerald-600 dark:bg-emerald-500 text-white font-medium px-2 py-0.5 rounded text-[8.5px] shadow-xs flex items-center gap-1">
                WhatsApp Booking →
              </span>
            </div>
          </div>
        )}

        {type === "course-builder" && (
          <div className="grid grid-cols-12 gap-2.5 h-full">
            {/* Sidebar */}
            <div className="col-span-3 bg-[#1C1917] dark:bg-[#10100F] rounded-lg p-2 text-stone-300 flex flex-col justify-between border border-stone-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-white font-medium pb-1 border-b border-stone-800 text-[10px]">
                  <Sparkles className="w-3 h-3 text-stone-300" />
                  <span>CourseStudio</span>
                </div>
                <div className="px-1.5 py-1 rounded bg-stone-800 text-white font-medium text-[9px]">
                  + New Course
                </div>
                <div className="px-1.5 py-1 text-stone-400 text-[9px] hover:text-stone-200">
                  Curriculum
                </div>
                <div className="px-1.5 py-1 text-stone-400 text-[9px]">
                  Quizzes
                </div>
              </div>
              <div className="text-[8px] text-stone-500">v15 Next.js</div>
            </div>

            {/* Main Editor UI */}
            <div className="col-span-9 bg-white dark:bg-[#1F1E1C] border border-stone-200 dark:border-stone-800 rounded-lg p-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-100 dark:border-stone-800">
                  <div className="font-semibold text-stone-900 dark:text-stone-100 text-xs flex items-center gap-1.5">
                    <BookOpen className="w-3 h-3 text-stone-700 dark:text-stone-300" />
                    <span>Create Course Syllabus</span>
                  </div>
                  <span className="text-[9px] font-medium px-2 py-0.5 bg-stone-100 dark:bg-stone-800 rounded text-stone-700 dark:text-stone-300">
                    Gemini 1.5 Pro
                  </span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="text-[9px] text-stone-500 dark:text-stone-400 mb-0.5">Topic / Course Title</div>
                    <div className="px-2 py-1 bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded text-[10px] text-stone-800 dark:text-stone-200 font-medium truncate">
                      Full-Stack Architecture with Next.js & TypeScript
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-1.5 bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 rounded">
                      <div className="text-[8px] text-stone-500 dark:text-stone-400">Chapters Generated</div>
                      <div className="text-[11px] font-semibold text-stone-900 dark:text-stone-100">8 Modules</div>
                    </div>
                    <div className="p-1.5 bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 rounded">
                      <div className="text-[8px] text-stone-500 dark:text-stone-400">Assessment Quizzes</div>
                      <div className="text-[11px] font-semibold text-stone-900 dark:text-stone-100">24 Questions</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-1.5 pt-2">
                <span className="px-2 py-1 border border-stone-200 dark:border-stone-700 rounded text-[9px] text-stone-600 dark:text-stone-400">Draft</span>
                <span className="px-2.5 py-1 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded text-[9px] font-medium">Generate Modules</span>
              </div>
            </div>
          </div>
        )}

        {type === "healthcare" && (
          <div className="grid grid-cols-12 gap-2.5 h-full">
            {/* Sidebar */}
            <div className="col-span-3 bg-stone-900 dark:bg-[#10100F] rounded-lg p-2 text-stone-300 flex flex-col justify-between border border-stone-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-white font-medium pb-1 border-b border-stone-800 text-[10px]">
                  <Calendar className="w-3 h-3 text-stone-300" />
                  <span>CarePortal</span>
                </div>
                <div className="px-1.5 py-1 rounded bg-stone-800 text-white font-medium text-[9px]">
                  Calendar
                </div>
                <div className="px-1.5 py-1 text-stone-400 text-[9px]">Patients</div>
                <div className="px-1.5 py-1 text-stone-400 text-[9px]">AI Triage</div>
              </div>
              <div className="text-[8px] text-stone-500">MySQL • Node</div>
            </div>

            {/* Main Schedule Grid UI */}
            <div className="col-span-9 bg-white dark:bg-[#1F1E1C] border border-stone-200 dark:border-stone-800 rounded-lg p-2.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-stone-100 dark:border-stone-800">
                  <div className="font-semibold text-stone-900 dark:text-stone-100 text-xs">
                    Appointment Schedule
                  </div>
                  <span className="text-[9px] text-stone-500 dark:text-stone-400">Dr. Sharma • Cardiology</span>
                </div>

                {/* Calendar rows */}
                <div className="grid grid-cols-7 gap-1 text-center text-[8px] text-stone-400 mb-1">
                  <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[9px]">
                  <span className="p-1 rounded bg-stone-50 dark:bg-stone-900/60 text-stone-400">12</span>
                  <span className="p-1 rounded bg-stone-50 dark:bg-stone-900/60 text-stone-400">13</span>
                  <span className="p-1 rounded bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium">14</span>
                  <span className="p-1 rounded bg-stone-50 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300">15</span>
                  <span className="p-1 rounded bg-stone-50 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300">16</span>
                  <span className="p-1 rounded bg-stone-50 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300">17</span>
                  <span className="p-1 rounded bg-stone-50 dark:bg-stone-900/60 text-stone-400">18</span>
                </div>

                {/* Upcoming patient appointment row */}
                <div className="mt-2 p-1.5 bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800 rounded flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3 h-3 text-stone-600 dark:text-stone-400" />
                    <div>
                      <div className="font-medium text-stone-900 dark:text-stone-200 text-[10px]">Patient: Ananya Rao</div>
                      <div className="text-[8px] text-stone-500 dark:text-stone-400">Follow-up Consult • 10:30 AM</div>
                    </div>
                  </div>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium border border-emerald-200 dark:border-emerald-800">
                    Confirmed
                  </span>
                </div>
              </div>

              <div className="text-[8px] text-stone-500 dark:text-stone-400 flex items-center justify-between pt-1">
                <span>EHR Encrypted</span>
                <span className="font-mono text-stone-600 dark:text-stone-300">3 slots left</span>
              </div>
            </div>
          </div>
        )}

        {type === "queryhive" && (
          <div className="bg-white dark:bg-[#1F1E1C] border border-stone-200 dark:border-stone-800 rounded-lg h-full p-2.5 flex flex-col justify-between">
            {/* QueryHive Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 flex items-center justify-center font-bold text-[10px]">
                  Q
                </span>
                <div className="font-semibold text-stone-900 dark:text-stone-100 text-xs">QueryHive</div>
                <span className="text-[8px] px-1.5 py-0.2 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded">
                  ICASME 2026
                </span>
              </div>
              <div className="flex items-center gap-1 text-[9px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live on Vercel
              </div>
            </div>

            {/* Chat conversation area */}
            <div className="space-y-1.5 py-1">
              <div className="flex justify-end">
                <div className="bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-lg rounded-tr-none px-2.5 py-1 max-w-[85%] text-[9.5px]">
                  When do submissions close for the engineering term final assessment?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-stone-100 dark:bg-stone-800/90 text-stone-800 dark:text-stone-200 rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[90%] text-[9.5px] border border-stone-200/50 dark:border-stone-700/50">
                  <div className="font-medium text-stone-900 dark:text-stone-100 mb-0.5 flex items-center gap-1 text-[8.5px]">
                    <Sparkles className="w-2.5 h-2.5 text-stone-600 dark:text-stone-400" />
                    QueryHive Assistant:
                  </div>
                  Term assessment submissions for Computer Engineering close on November 28, 2026 at 5:00 PM via the student portal.
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-1.5 pt-1 border-t border-stone-100 dark:border-stone-800">
              <div className="flex-1 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded px-2 py-1 text-stone-400 text-[9px]">
                Ask any college exam, syllabus, or campus query...
              </div>
              <span className="bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-2 py-1 rounded text-[9px] font-medium">
                Send
              </span>
            </div>
          </div>
        )}

        {type === "data-analysis" && (
          <div className="bg-white dark:bg-[#1F1E1C] border border-stone-200 dark:border-stone-800 rounded-lg h-full p-2.5 flex flex-col justify-between">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-stone-100 dark:border-stone-800">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-[10px] border border-amber-500/30">
                  <BarChart3 className="w-3 h-3" />
                </span>
                <div className="font-semibold text-stone-900 dark:text-stone-100 text-xs">
                  Healthcare Operations BI
                </div>
                <span className="text-[8px] px-1.5 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded font-mono">
                  Power BI
                </span>
              </div>
              <div className="flex items-center gap-1 text-[8.5px] text-stone-500 dark:text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>50K records loaded</span>
              </div>
            </div>

            {/* KPI Cards Row */}
            <div className="grid grid-cols-3 gap-1.5 py-1">
              <div className="p-1.5 rounded bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800">
                <div className="text-[8px] text-stone-500 dark:text-stone-400">Total Patients</div>
                <div className="text-[12px] font-bold text-stone-900 dark:text-stone-100">14,820</div>
                <div className="text-[7.5px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
                  <TrendingUp className="w-2 h-2" /> +12.4% MoM
                </div>
              </div>
              <div className="p-1.5 rounded bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800">
                <div className="text-[8px] text-stone-500 dark:text-stone-400">Bed Occupancy</div>
                <div className="text-[12px] font-bold text-stone-900 dark:text-stone-100">84.6%</div>
                <div className="text-[7.5px] text-stone-500 dark:text-stone-400 font-medium">Optimal Band</div>
              </div>
              <div className="p-1.5 rounded bg-stone-50 dark:bg-stone-900/60 border border-stone-100 dark:border-stone-800">
                <div className="text-[8px] text-stone-500 dark:text-stone-400">Avg Wait Time</div>
                <div className="text-[12px] font-bold text-stone-900 dark:text-stone-100">14.2 min</div>
                <div className="text-[7.5px] text-emerald-600 dark:text-emerald-400 font-medium">
                  -18% improved
                </div>
              </div>
            </div>

            {/* Visual Charts Row: Bar Chart & Distribution */}
            <div className="grid grid-cols-12 gap-2 flex-1 items-end pt-1">
              {/* Mini Monthly Bar Chart */}
              <div className="col-span-7 bg-stone-50/70 dark:bg-stone-900/40 p-1.5 rounded border border-stone-100 dark:border-stone-800/80 flex flex-col justify-between h-[68px]">
                <div className="flex items-center justify-between text-[8px] text-stone-500 dark:text-stone-400">
                  <span>Monthly Throughput</span>
                  <span className="font-mono text-[7.5px]">Q1–Q2</span>
                </div>
                <div className="flex items-end justify-between gap-1 h-9 px-1">
                  {[
                    { m: "Jan", h: "45%" },
                    { m: "Feb", h: "60%" },
                    { m: "Mar", h: "75%" },
                    { m: "Apr", h: "70%" },
                    { m: "May", h: "90%" },
                    { m: "Jun", h: "100%" },
                  ].map((bar) => (
                    <div key={bar.m} className="flex-1 flex flex-col items-center gap-0.5">
                      <div
                        style={{ height: bar.h }}
                        className="w-full rounded-t-xs bg-stone-900 dark:bg-stone-200 transition-colors"
                      />
                      <span className="text-[6.5px] text-stone-400 font-mono">{bar.m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Department Distribution */}
              <div className="col-span-5 bg-stone-50/70 dark:bg-stone-900/40 p-1.5 rounded border border-stone-100 dark:border-stone-800/80 flex flex-col justify-between h-[68px] text-[8px]">
                <div className="text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>Department Mix</span>
                </div>
                <div className="space-y-1">
                  <div>
                    <div className="flex justify-between text-[7.5px] text-stone-700 dark:text-stone-300">
                      <span>Cardio</span>
                      <span className="font-mono font-medium">38%</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-stone-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-stone-800 dark:bg-stone-300 h-full w-[38%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[7.5px] text-stone-700 dark:text-stone-300">
                      <span>ER / Triage</span>
                      <span className="font-mono font-medium">27%</span>
                    </div>
                    <div className="w-full bg-stone-200 dark:bg-stone-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-stone-600 dark:bg-stone-400 h-full w-[27%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Pipeline Info */}
            <div className="flex items-center justify-between pt-1 border-t border-stone-100 dark:border-stone-800 text-[8px] text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1 font-mono">
                <Database className="w-2.5 h-2.5 text-stone-400" />
                ETL: SQL Aggregation + Python Pandas
              </span>
              <span className="font-medium text-stone-700 dark:text-stone-300">DAX Measures Active</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
