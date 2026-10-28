"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (!progress) return;

    const isArticle = /^\/news\/[^/]+\/?$/.test(pathname);
    const article = isArticle ? document.querySelector<HTMLElement>(".post-body") : null;
    let frame = 0;

    const updateProgress = () => {
      frame = 0;
      const scrollY = window.scrollY;
      let ratio: number;

      if (article) {
        const articleTop = article.getBoundingClientRect().top + scrollY;
        const scrollableHeight = Math.max(1, article.offsetHeight - window.innerHeight);
        ratio = (scrollY - articleTop) / scrollableHeight;
      } else {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        ratio = scrollableHeight > 0 ? scrollY / scrollableHeight : 0;
      }

      progress.style.setProperty("--scroll-progress", String(Math.min(1, Math.max(0, ratio))));
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    const resizeObserver = article && typeof ResizeObserver !== "undefined"
      ? new ResizeObserver(scheduleUpdate)
      : null;
    if (article) resizeObserver?.observe(article);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
