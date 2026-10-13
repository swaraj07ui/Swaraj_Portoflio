"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Unified icon prop — all icons accept optional `dark` for theme-aware rendering
// ─────────────────────────────────────────────────────────────────────────────
interface IconProps { dark?: boolean }

function ReactIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30" fill="none">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

function NextIcon({ dark }: IconProps) {
  const c = dark ? "#fff" : "#000";
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill={c}>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.052.54-.052.479 0 .558.019.683.155.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0z" />
    </svg>
  );
}

function TypeScriptIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <rect width="24" height="24" rx="3" fill="#3178C6" />
      <path d="M13.5 11.2h2.8v1.4h-1.5v6.3h-1.3v-6.3h-1.5V11.2h1.5zm-3.8 1.4h-1.3v3.7c0 .7.3 1.1.9 1.1.3 0 .5-.1.7-.2l.4 1c-.3.2-.7.3-1.2.3-1.2 0-2-.7-2-2V12.6H6v-1.4h1.2v-1.7h1.5v1.7z" fill="#fff" />
    </svg>
  );
}

function JavaScriptIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <rect width="24" height="24" rx="3" fill="#F7DF1E" />
      <path d="M7.5 17.5c.4.7 1 1.2 2 1.2s1.8-.5 1.8-1.6V12h-1.5v5c0 .5-.2.8-.6.8s-.7-.3-.9-.6l-1 .8zm6.5-.5c.5.8 1.3 1.3 2.4 1.3 1.3 0 2.1-.7 2.1-1.7 0-.9-.5-1.4-1.5-1.8l-.5-.2c-.5-.2-.7-.4-.7-.7 0-.3.2-.5.5-.5.3 0 .6.2.8.5l.9-.8c-.4-.7-1-.9-1.7-.9-1.1 0-1.9.7-1.9 1.7 0 .9.5 1.4 1.4 1.7l.5.2c.6.2.8.4.8.8s-.3.6-.8.6c-.5 0-.9-.3-1.1-.7l-1.2.6z" fill="#000" />
    </svg>
  );
}

function PythonIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path d="M11.9 2C7.2 2 7.5 4 7.5 4v2h4.5v.5h-6S3 6.2 3 11c0 4.8 2.7 4.6 2.7 4.6h1.6v-2.2S7.2 11 9.5 11h4.3s2.1 0 2.1-2V6s.3-4-4-4z" fill="#3776AB" />
      <path d="M12.1 22c4.7 0 4.4-2 4.4-2v-2h-4.5v-.5h6s3 .3 3-4.5c0-4.8-2.7-4.6-2.7-4.6h-1.6v2.2S16.8 13 14.5 13h-4.3s-2.1 0-2.1 2v3s-.3 4 4 4z" fill="#FFD43B" />
      <circle cx="10" cy="5.5" r="1" fill="#fff" />
      <circle cx="14" cy="18.5" r="1" fill="#fff" />
    </svg>
  );
}

function JavaIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path d="M8.85 17.35s-.9.5.6.68c1.8.22 2.74.19 4.73-.2 0 0 .53.33 1.26.62-4.47 1.9-10.12-.1-6.6-.9z" fill="#E76F00"/>
      <path d="M8.3 14.9s-1 .75.54.91c2.03.2 3.62.22 6.38-.3 0 0 .36.37.94.57-5.65 1.65-11.94.13-7.86-.9z" fill="#E76F00"/>
      <path d="M13.4 10.38c1.15 1.32-.3 2.5-.3 2.5s2.92-1.5 1.58-3.37c-1.26-1.76-2.23-2.63 3-5.64 0 0-8.2 2.06-4.28 6.5z" fill="#E76F00"/>
      <path d="M18.84 18.6s.66.55-.73.97c-2.66.8-11.07 1.05-13.4.03-.84-.37.73-.87 1.23-.98.52-.11.82-.09.82-.09-1.9-.6-6.7 1.44-2.88 2.07 10.43 1.69 19.02-.76 14.96-2z" fill="#E76F00"/>
      <path d="M9.33 12.38s-3.08.73-1.09.99c.85.1 2.55.08 4.12.04 1.29-.03 2.59-.1 2.59-.1s-.46.2-.79.42c-3.18.84-9.32.45-7.55-.4 1.5-.73 2.72-.95 2.72-.95z" fill="#5382A1"/>
      <path d="M17.4 15.82c3.24-1.68 1.74-3.3.69-3.08-.25.05-.37.1-.37.1s.1-.15.28-.22c2.09-.74 3.7 2.17-.66 3.32 0 0 .05-.04.06-.12z" fill="#5382A1"/>
      <path d="M15.1 3s1.77 1.77-1.67 4.48c-2.75 2.17-.63 3.41 0 4.82-1.6-1.44-2.78-2.72-2-3.9.99-1.5 2.63-2.28 1.87-4.04z" fill="#5382A1"/>
      <path d="M9.64 21.03c3.1.2 7.87-.11 7.98-1.6 0 0-.22.55-2.57 1-.9.18-2.08.26-3.3.24-2.15-.03-4.1-.58-4.1-.58s.63.52 2 .94z" fill="#5382A1"/>
    </svg>
  );
}

function NodeIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2z" fill="#339933"/>
      <text x="12" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#fff" fontFamily="sans-serif">JS</text>
    </svg>
  );
}

function HtmlIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z" fill="#E44D26"/>
      <path d="M12 3.5v17l5.2-1.6 1.4-15.4H12z" fill="#F16529"/>
      <path d="M8.5 9.5h3.5V8H7L7.7 16l4.3 1.2V15.7l-3.1-.9-.2-2.3H12V11H8.3l-.2-2H12V9.5H8.5z" fill="#fff"/>
      <path d="M12 9.5v2h2.8l-.3 3.3-2.5.7v1.5l4.3-1.2.8-9H12v3z" fill="#ebebeb"/>
    </svg>
  );
}

function CssIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path d="M4 2l1.6 18L12 22l6.4-2L20 2H4z" fill="#1572B6"/>
      <path d="M12 3.5v17l5.2-1.6 1.4-15.4H12z" fill="#33A9DC"/>
      <path d="M8 9h4V7.5H6.2l.7 9 5.1 1.4V16.3l-3.5-1-.2-2.8H12V11H8.3L8 9z" fill="#fff"/>
      <path d="M12 9v2h3.3l-.3 3.3-3 .8v1.6l4.3-1.2.8-9H12v2.5z" fill="#ebebeb"/>
    </svg>
  );
}

function PhpIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 28 16" width="36" height="20">
      <rect width="28" height="16" rx="8" fill="#777BB4"/>
      <text x="14" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff" fontFamily="monospace">PHP</text>
    </svg>
  );
}

function PostgresIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="#336791"/>
      <path d="M3 5v5c0 1.66 4.03 3 9 3s9-1.34 9-3V5c-2 1.56-5.16 2-9 2S5 6.56 3 5z" fill="#336791" opacity=".9"/>
      <path d="M3 10v5c0 1.66 4.03 3 9 3s9-1.34 9-3v-5c-2 1.56-5.16 2-9 2S5 11.56 3 10z" fill="#336791" opacity=".75"/>
      <path d="M3 15v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4c-2 1.56-5.16 2-9 2S5 16.56 3 15z" fill="#336791" opacity=".6"/>
    </svg>
  );
}

function MySqlIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 50 30" width="42" height="26">
      <text x="25" y="22" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#4479A1" fontFamily="sans-serif">MySQL</text>
    </svg>
  );
}

function GitIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <path d="M23.7 10.9L13.1.3a1.06 1.06 0 0 0-1.5 0l-2.1 2.1 2.6 2.6a1.26 1.26 0 0 1 1.6 1.6l2.5 2.5a1.26 1.26 0 1 1-.8.8l-2.3-2.3v6a1.25 1.25 0 1 1-1 0V7.4a1.25 1.25 0 0 1-.7-1.6L8.9 3.3.3 11.9a1.06 1.06 0 0 0 0 1.5l10.6 10.6a1.06 1.06 0 0 0 1.5 0l11.3-11.3a1.06 1.06 0 0 0 0-1.5z" fill="#F05032"/>
    </svg>
  );
}

function GitHubIcon({ dark }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill={dark ? "#fff" : "#181717"}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function FirebaseIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28">
      <path d="M5.3 15.2L8 2.3l4 7.6L5.3 15.2z" fill="#FFC400"/>
      <path d="M5.3 15.2L11.7 8l.3 1.9 5 9.1-11.7-3.8z" fill="#FF8F00"/>
      <path d="M17 19L5.3 15.2l7.4 4.1L17 19z" fill="#F57F17"/>
      <path d="M12 2l4.7 7.6-4.7 8.4V2z" fill="#FFCA28"/>
      <path d="M12 18l5 1-5-9.4V18z" fill="#FFA000"/>
    </svg>
  );
}

function VercelIcon({ dark }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill={dark ? "#fff" : "#000"}>
      <path d="M24 22.525H0l12-21.05 12 21.05z"/>
    </svg>
  );
}

function VsCodeIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28">
      <path d="M23.1 4.2L17.9 1.5c-.5-.3-1.1-.2-1.5.2L.5 15.4c-.4.4-.4 1 0 1.3l1.5 1.4c.3.3.8.3 1.2.1L21.5 7.8v10.7L7.8 13.8 5 16.3l8.7 5.9c.4.3 1 .3 1.4 0l7.8-4.7c.7-.4 1.1-1.1 1.1-1.9V5.9c0-.7-.4-1.4-.9-1.7z" fill="#007ACC"/>
    </svg>
  );
}

function PostmanIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28">
      <circle cx="12" cy="12" r="12" fill="#FF6C37"/>
      <path d="M13.2 8.3l-4.5 4.5c-.3.3-.3.8 0 1.1l.8.8c.3.3.8.3 1.1 0l4.5-4.5c.8.4 1.8.3 2.4-.4.8-.8.8-2.1 0-2.9-.8-.8-2.1-.8-2.9 0-.5.5-.6 1.1-.4 1.4zm-5.5 7.2l.9-.9.9.9-.9.9-.9-.9z" fill="#fff"/>
    </svg>
  );
}

function StreamlitIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28">
      <path d="M12 2L2 20h8.5L12 16.5 13.5 20H22L12 2z" fill="#FF4B4B"/>
      <path d="M12 8l-3.5 8h7L12 8z" fill="#7D353B" opacity=".55"/>
    </svg>
  );
}

function PowerBIIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28">
      <rect x="2"   y="6"  width="5" height="14" rx="1.5" fill="#F2C811"/>
      <rect x="9.5" y="9"  width="5" height="11" rx="1.5" fill="#F2C811" opacity=".8"/>
      <rect x="17"  y="3"  width="5" height="17" rx="1.5" fill="#F2C811" opacity=".6"/>
    </svg>
  );
}

function AdobeAEIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28">
      <rect width="24" height="24" rx="5" fill="#1a0040"/>
      <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#9999FF" fontFamily="sans-serif">Ae</text>
    </svg>
  );
}

function SqlIcon(_: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28">
      <ellipse cx="12" cy="5.5" rx="9" ry="3" fill="#336791"/>
      <path d="M3 5.5v4c0 1.66 4 3 9 3s9-1.34 9-3v-4c-2 1.5-5 2-9 2s-7-.5-9-2z" fill="#336791" opacity=".85"/>
      <path d="M3 9.5v5c0 1.66 4 3 9 3s9-1.34 9-3v-5c-2 1.5-5 2-9 2s-7-.5-9-2z" fill="#336791" opacity=".65"/>
      <path d="M3 14.5v4c0 1.66 4 3 9 3s9-1.34 9-3v-4c-2 1.5-5 2-9 2s-7-.5-9-2z" fill="#336791" opacity=".5"/>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Tech registry
// ─────────────────────────────────────────────────────────────────────────────
const TECHS: { name: string; Icon: React.FC<IconProps>; bg: string; darkBg: string }[] = [
  { name: "React",      Icon: ReactIcon,      bg: "#e8f9ff", darkBg: "#0d2130" },
  { name: "Next.js",    Icon: NextIcon,       bg: "#f0f0f0", darkBg: "#222"    },
  { name: "TypeScript", Icon: TypeScriptIcon, bg: "#e8f0fb", darkBg: "#0d1a2e" },
  { name: "JavaScript", Icon: JavaScriptIcon, bg: "#fffbe8", darkBg: "#1f1e00" },
  { name: "Python",     Icon: PythonIcon,     bg: "#eef3fb", darkBg: "#0d1621" },
  { name: "Java",       Icon: JavaIcon,       bg: "#fff2ec", darkBg: "#1f100a" },
  { name: "Node.js",    Icon: NodeIcon,       bg: "#eaf5ea", darkBg: "#0c1f0c" },
  { name: "HTML",       Icon: HtmlIcon,       bg: "#fdeee9", darkBg: "#1f0d08" },
  { name: "CSS",        Icon: CssIcon,        bg: "#e8f0fb", darkBg: "#0c1826" },
  { name: "PHP",        Icon: PhpIcon,        bg: "#f0eefa", darkBg: "#160e28" },
  { name: "PostgreSQL", Icon: PostgresIcon,   bg: "#e8f0f8", darkBg: "#0c1924" },
  { name: "MySQL",      Icon: MySqlIcon,      bg: "#e8f0f8", darkBg: "#0c1924" },
  { name: "Git",        Icon: GitIcon,        bg: "#fdeee9", darkBg: "#200d08" },
  { name: "GitHub",     Icon: GitHubIcon,     bg: "#f0f0f0", darkBg: "#1a1a1a" },
  { name: "Firebase",   Icon: FirebaseIcon,   bg: "#fffbe8", darkBg: "#211e00" },
  { name: "Vercel",     Icon: VercelIcon,     bg: "#f0f0f0", darkBg: "#1a1a1a" },
  { name: "VS Code",    Icon: VsCodeIcon,     bg: "#e8f5fb", darkBg: "#001a2a" },
  { name: "Postman",    Icon: PostmanIcon,    bg: "#fff0ea", darkBg: "#1f0f08" },
  { name: "Streamlit",  Icon: StreamlitIcon,  bg: "#fde8e8", darkBg: "#1f0808" },
  { name: "Power BI",   Icon: PowerBIIcon,    bg: "#fffbe5", darkBg: "#1a1700" },
  { name: "Adobe AE",   Icon: AdobeAEIcon,    bg: "#eeeefc", darkBg: "#10102a" },
  { name: "SQL",        Icon: SqlIcon,        bg: "#e8f0f8", darkBg: "#001520" },
];



// ─────────────────────────────────────────────────────────────────────────────
// TechPill — Circular White Container & Label
// ─────────────────────────────────────────────────────────────────────────────
function TechPill({
  name,
  Icon,
  isDark,
}: {
  name: string;
  Icon: React.FC<IconProps>;
  isDark: boolean;
}) {
  return (
    <motion.div
      title={name}
      whileHover={{ scale: 1.1, y: -4 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="tech-pill-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        flexShrink: 0,
        cursor: "default",
        userSelect: "none",
        minWidth: 70,
      }}
    >
      {/* Circular white container (68px desktop, 50px mobile via CSS) */}
      <div
        className="tech-circle-pill"
        style={{
          width: 68,
          height: 68,
          borderRadius: "50%",
          background: isDark ? "#1c1c1a" : "#ffffff",
          border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.09)" : "rgba(0, 0, 0, 0.08)"}`,
          boxShadow: isDark
            ? "0 4px 18px rgba(0, 0, 0, 0.4), 0 1px 4px rgba(0, 0, 0, 0.25)"
            : "0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon dark={isDark} />
      </div>
      {/* Minimal label underneath */}
      <span
        style={{
          fontSize: "0.58rem",
          fontWeight: 500,
          letterSpacing: "0.03em",
          color: isDark ? "#a19f99" : "#78716c",
          whiteSpace: "nowrap",
          fontFamily: "inherit",
        }}
      >
        {name}
      </span>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main export: TechCarousel
// ─────────────────────────────────────────────────────────────────────────────
export function TechCarousel() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();
    const obs = new MutationObserver(checkDark);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const fadeBg = isDark ? "#181817" : "#f4f2ec";

  return (
    <div
      className="tech-carousel-container"
      aria-label="Technology stack carousel"
      style={{
        position: "relative",
        width: "100%",
        height: 144,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <style>{`
        @keyframes tech-carousel-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .tech-carousel-track {
          animation: tech-carousel-scroll 25s linear infinite;
          will-change: transform;
        }
        @media (hover: hover) and (pointer: fine) {
          .tech-carousel-container:hover .tech-carousel-track {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-carousel-track {
            animation-play-state: paused !important;
          }
        }
        @media (max-width: 640px) {
          .tech-carousel-container {
            height: 120px !important;
          }
          .tech-carousel-group {
            gap: 16px !important;
            padding-right: 16px !important;
          }
          .tech-carousel-track {
            animation-duration: 22s;
          }
          .tech-circle-pill {
            width: 50px !important;
            height: 50px !important;
          }
          .tech-circle-pill svg {
            width: 22px !important;
            height: 22px !important;
          }
        }
      `}</style>

      {/* Left gradient fade mask */}
      <div
        aria-hidden="true"
        className="tech-fade-left"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 110,
          zIndex: 4,
          pointerEvents: "none",
          background: `linear-gradient(to right, ${fadeBg} 0%, transparent 100%)`,
        }}
      />

      {/* Right gradient fade mask */}
      <div
        aria-hidden="true"
        className="tech-fade-right"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 110,
          zIndex: 4,
          pointerEvents: "none",
          background: `linear-gradient(to left, ${fadeBg} 0%, transparent 100%)`,
        }}
      />



      {/* Scrolling track: single horizontal row, 2 identical groups with matched padding for seamless -50% loop */}
      <div
        className="tech-carousel-track"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "max-content",
          flexShrink: 0,
        }}
      >
        {/* Group A */}
        <div
          className="tech-carousel-group"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            paddingRight: 24,
            flexShrink: 0,
          }}
        >
          {TECHS.map((t) => (
            <TechPill key={`a-${t.name}`} name={t.name} Icon={t.Icon} isDark={isDark} />
          ))}
        </div>
        {/* Group B — identical duplicate */}
        <div
          className="tech-carousel-group"
          aria-hidden="true"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            paddingRight: 24,
            flexShrink: 0,
          }}
        >
          {TECHS.map((t) => (
            <TechPill key={`b-${t.name}`} name={t.name} Icon={t.Icon} isDark={isDark} />
          ))}
        </div>
      </div>
    </div>
  );
}
