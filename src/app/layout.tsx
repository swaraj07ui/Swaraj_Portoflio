import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swaraj K Gawde — Full-Stack Developer | AI Enthusiast | Data Analyst",
  description:
    "Portfolio of Swaraj K Gawde. Full-Stack Developer specializing in Next.js, AI Agent Engineering, and Data Analysis. Available for full-time engineering roles and freelance projects.",
  keywords: [
    "Swaraj K Gawde",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Data Analyst",
    "Next.js Developer",
    "React",
    "AI Agent Engineering",
    "QueryHive",
    "Freelance Web Developer",
  ],
  authors: [{ name: "Swaraj K Gawde" }],
  openGraph: {
    title: "Swaraj K Gawde — Full-Stack Developer & AI Specialist",
    description: "Turning ideas into real-world products. Full-stack web development, AI integration, and data analytics.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#E7E5E4]">
        {children}
      </body>
    </html>
  );
}
