"use client";

import { createElement, useEffect, useState } from "react";
import type { CSSProperties, JSX } from "react";
import { observeOnce } from "./visibilityObserver";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay": string;
};

export default function Reveal({
  as = "div",
  delay = 0,
  className = "",
  children,
}: RevealProps) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const stagger = Math.min(Math.max(delay, 0), 6) * 80;

  useEffect(() => {
    if (!node || isVisible) return;
    return observeOnce(node, () => setIsVisible(true));
  }, [node, isVisible]);

  return createElement(
    as,
    {
      ref: setNode,
      className: `reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`,
      style: { "--reveal-delay": `${stagger}ms` } satisfies RevealStyle,
    },
    children,
  );
}
