"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Copy,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  BlurFade,
  ClipReveal,
  CharReveal,
} from "./Animations";
import { motion } from "framer-motion";

export function ContactAndCertificationsSection() {
  const { personal, certifications } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    intent: "Job Opportunity",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare mailto link as fallback to trigger native email client
    const subject = encodeURIComponent(
      `[Portfolio Inquiry - ${formData.intent}] from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.intent}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-stone-100/60 dark:bg-[#181817]/80 backdrop-blur-xl border border-stone-200/90 dark:border-white/10 p-6 sm:p-10 md:p-12 shadow-xl dark:shadow-2xl shadow-stone-900/5 dark:shadow-black/40 relative overflow-hidden transition-all">
        {/* Ambient glow accent */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
          {/* LEFT COLUMN: Certifications & Contact Info */}
          <div className="lg:col-span-6 space-y-12">
            {/* 05: Certifications */}
            <div>
              <ScrollReveal delay={0}>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">
                  <span>05</span>
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
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 mb-6">
                  Certifications
                </h2>
              </ScrollReveal>

              <StaggerContainer className="space-y-3.5" stagger={0.09}>
                {certifications.map((cert, idx) => (
                  <StaggerItem key={idx}>
                    <motion.li
                      className="flex items-start gap-3 group list-none"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-500 dark:bg-stone-400 mt-2 shrink-0 group-hover:bg-stone-900 dark:group-hover:bg-stone-100 transition-colors" />
                      <div>
                        <span className="font-semibold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                          {cert.title}
                        </span>
                        <span className="text-xs sm:text-sm text-stone-500 dark:text-stone-400"> — {cert.issuer}</span>
                        <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                          {cert.focus}
                        </p>
                      </div>
                    </motion.li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* 06: Get In Touch */}
            <div className="pt-4 border-t border-stone-200/60 dark:border-stone-800/80">
              <ScrollReveal delay={0}>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 uppercase tracking-widest mb-2">
                  <span>06</span>
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
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                  Get In Touch
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.14} distance={18} duration={0.65}>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-1 mb-6">
                  Let's work together on your next engineering role or freelance project
                </p>
              </ScrollReveal>

              <StaggerContainer className="space-y-3" stagger={0.09}>
                {/* Phone */}
                <StaggerItem>
                  <motion.div
                    className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1918] rounded-lg border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-sm hover:border-stone-400/80 dark:hover:border-stone-600/80 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group"
                    whileHover={{ y: -2, x: 2 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-2.5 font-medium text-xs sm:text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-950 dark:group-hover:text-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
                    >
                      <Phone className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 group-hover:scale-110 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      <span>{personal.phone}</span>
                    </a>
                    <button
                      onClick={() => handleCopy(personal.phone, "phone")}
                      className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1 text-xs cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
                      title="Copy phone"
                      aria-label="Copy phone number"
                    >
                      {copiedText === "phone" ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </motion.div>
                </StaggerItem>

                {/* Email */}
                <StaggerItem>
                  <motion.div
                    className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1918] rounded-lg border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-sm hover:border-stone-400/80 dark:hover:border-stone-600/80 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group"
                    whileHover={{ y: -2, x: 2 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`mailto:${personal.email}`}
                      className="flex items-center gap-2.5 font-medium text-xs sm:text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-950 dark:group-hover:text-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
                    >
                      <Mail className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 group-hover:scale-110 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      <span>{personal.email}</span>
                    </a>
                    <button
                      onClick={() => handleCopy(personal.email, "email")}
                      className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1 text-xs cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded"
                      title="Copy email"
                      aria-label="Copy email address"
                    >
                      {copiedText === "email" ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </motion.div>
                </StaggerItem>

                {/* LinkedIn */}
                <StaggerItem>
                  <motion.div
                    className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1918] rounded-lg border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-sm hover:border-stone-400/80 dark:hover:border-stone-600/80 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group"
                    whileHover={{ y: -2, x: 2 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 font-medium text-xs sm:text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-950 dark:group-hover:text-stone-100 transition-colors truncate max-w-[90%] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
                    >
                      <LinkedinIcon className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 group-hover:scale-110 shrink-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      <span className="truncate">linkedin.com/in/swaraj-gawade-944446279</span>
                    </a>
                  </motion.div>
                </StaggerItem>

                {/* GitHub */}
                <StaggerItem>
                  <motion.div
                    className="flex items-center justify-between p-2.5 bg-white dark:bg-[#1A1918] rounded-lg border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-sm hover:border-stone-400/80 dark:hover:border-stone-600/80 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group"
                    whileHover={{ y: -2, x: 2 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2.5 font-medium text-xs sm:text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-950 dark:group-hover:text-stone-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
                    >
                      <GithubIcon className="w-4 h-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 group-hover:scale-110 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      <span>github.com/swaraj07ui</span>
                    </a>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>

          {/* RIGHT COLUMN: Functional Contact Form */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.15} direction="right" distance={40}>
              <motion.div
                className="bg-white dark:bg-[#1A1918] p-7 sm:p-8 rounded-2xl border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-stone-300 dark:hover:border-stone-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 tracking-tight mb-1">
                  Send a Message
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
                  Direct inquiry for full-time job offers, freelance projects, or consulting.
                </p>

                {submitted ? (
                  <motion.div
                    className="p-6 bg-stone-50 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 rounded-xl text-center space-y-3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-stone-900 dark:text-stone-100 mx-auto" />
                    </motion.div>
                    <div className="font-semibold text-sm text-stone-900 dark:text-stone-100">
                      Message Prepared!
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400 max-w-sm mx-auto">
                      Your email client has been opened with your inquiry pre-filled. You can also reach Swaraj directly at{" "}
                      <a
                        href={`mailto:${personal.email}`}
                        className="underline font-medium text-stone-900 dark:text-stone-100"
                      >
                        {personal.email}
                      </a>
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs font-medium text-stone-700 dark:text-stone-300 underline cursor-pointer hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Intent Selector */}
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1.5">
                        Inquiry Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                        {[
                          "Job Opportunity",
                          "Freelance Project",
                          "General Query",
                        ].map((item) => (
                          <motion.button
                            type="button"
                            key={item}
                            onClick={() =>
                              setFormData({ ...formData, intent: item })
                            }
                            whileHover={{ scale: 1.02, y: -0.5 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className={`py-2 px-2.5 rounded-lg border text-center font-medium transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 ${
                              formData.intent === item
                                ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 border-stone-900 dark:border-stone-100 shadow-xs"
                                : "bg-stone-50 dark:bg-stone-900/60 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
                            }`}
                          >
                            {item}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Your name or company"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-[#FAF9F5] dark:bg-[#141413] text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-stone-800 dark:focus:border-stone-400 focus:ring-1 focus:ring-stone-400/30 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-[#FAF9F5] dark:bg-[#141413] text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-stone-800 dark:focus:border-stone-400 focus:ring-1 focus:ring-stone-400/30 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-1">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell me about your role opening, project scope, timeline, or requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-[#FAF9F5] dark:bg-[#141413] text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:border-stone-800 dark:focus:border-stone-400 focus:ring-1 focus:ring-stone-400/30 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-950 text-xs sm:text-sm font-medium hover:bg-stone-950 dark:hover:bg-white hover:-translate-y-0.5 active:scale-[0.98] hover:shadow-md hover:shadow-stone-900/15 dark:hover:shadow-black/30 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-900 group"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </button>
                  </form>
                )}
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
