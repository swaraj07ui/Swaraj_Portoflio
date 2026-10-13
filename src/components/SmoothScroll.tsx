"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
  enabled?: boolean;
}

export function SmoothScroll({ children, enabled = true }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // If disabled (e.g. during preloader), do not initialize
    if (!enabled) return;

    // 1. Respect prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotionQuery.matches) {
      return;
    }

    // 2. Initialize Lenis with premium calibrated settings:
    //    - Desktop: smooth, silky inertia wheel scrolling
    //    - Mobile / touch: syncTouch is FALSE so touch devices retain 100% natural native momentum
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
      syncTouch: false, // Guarantees native 1:1 mobile touch scrolling
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    // Expose lenis globally for external control & backward compatibility
    if (typeof window !== "undefined") {
      (window as unknown as { lenis: Lenis }).lenis = lenis;
    }

    // 3. RequestAnimationFrame animation loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 4. Global anchor click delegation:
    //    Ensures ALL in-page links (Hero CTA buttons, Navbar, Footer, etc.)
    //    smoothly glide to their targets with proper floating navbar clearance (-80px)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      // Ensure it's an on-page ID anchor
      try {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -80,
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
          if (window.history.pushState) {
            window.history.pushState(null, "", href);
          }
        }
      } catch {
        // Fallback for non-standard selector
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // 5. Initial URL hash handling (e.g., navigated to /#projects or refreshed)
    if (window.location.hash) {
      try {
        const hashTarget = document.querySelector(window.location.hash);
        if (hashTarget) {
          setTimeout(() => {
            lenis.scrollTo(hashTarget as HTMLElement, {
              offset: -80,
              duration: 1.0,
            });
          }, 250);
        }
      } catch {
        // Ignore invalid hash selector
      }
    }

    // 6. Modal / Body scroll lock synchronization:
    //    When document.body.style.overflow is 'hidden', pause Lenis; resume when unlocked
    const bodyObserver = new MutationObserver(() => {
      const isLocked =
        document.body.style.overflow === "hidden" ||
        document.body.classList.contains("overflow-hidden") ||
        document.documentElement.classList.contains("overflow-hidden");

      if (isLocked) {
        lenis.stop();
      } else {
        lenis.start();
      }
    });

    bodyObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    // 7. Watch for runtime changes to prefers-reduced-motion
    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        lenis.destroy();
        lenisRef.current = null;
      }
    };
    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
      bodyObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        delete (window as unknown as { lenis?: Lenis }).lenis;
      }
    };
  }, [enabled]);

  return <>{children}</>;
}
