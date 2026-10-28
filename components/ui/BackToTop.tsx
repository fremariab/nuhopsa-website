"use client";

import { useEffect, useState } from "react";
import SiteIcon from "@/components/ui/SiteIcon";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateVisibility = () => {
      frame = 0;
      setIsVisible(window.scrollY > 600);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top${isVisible ? " back-to-top-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
    >
      <SiteIcon name="arrowUp" />
    </button>
  );
}
