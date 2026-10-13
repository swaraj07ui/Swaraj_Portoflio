"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-full border border-stone-200 dark:border-stone-800 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-900/80 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white hover:border-stone-400 dark:hover:border-stone-600 shadow-xs transition-all cursor-pointer ${className}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45 text-amber-400" />
      )}
    </button>
  );
}
