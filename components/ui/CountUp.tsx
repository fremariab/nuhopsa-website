"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { observeOnce } from "./visibilityObserver";

type CountUpProps = {
  value: string;
};

function parseCount(value: string) {
  const match = value.match(/^([^\d]*)([\d,.]+)([kKmM]?)(.*)$/);
  if (!match) return null;

  const [, prefix, rawNumber, unit, ending] = match;
  const base = Number(rawNumber.replaceAll(",", ""));
  if (!Number.isFinite(base)) return null;

  const multiplier = unit.toLowerCase() === "k"
    ? 1_000
    : unit.toLowerCase() === "m"
      ? 1_000_000
      : 1;

  return {
    prefix,
    suffix: `${unit}${ending}`,
    end: base * multiplier,
    divisor: multiplier,
  };
}

export default function CountUp({ value: finalValue }: CountUpProps) {
  const count = useMemo(() => parseCount(finalValue), [finalValue]);
  const [node, setNode] = useState<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(finalValue);
  const [isReady, setIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const frame = useRef<number | null>(null);
  const isStatic = !count;

  useEffect(() => {
    if (!count || !node) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;
    return observeOnce(node, () => {
      setDisplayValue(`${count.prefix}0${count.suffix}`);
      setIsReady(true);
      setIsVisible(true);
    });
  }, [count, node]);

  useEffect(() => {
    if (!count || !isVisible) return;

    const startedAt = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startedAt) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(count.end * eased / count.divisor);
      setDisplayValue(`${count.prefix}${current.toLocaleString()}${count.suffix}`);

      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      }
    };

    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [count, isVisible]);

  return (
    <span
      ref={setNode}
      className={`count-up${isReady || isStatic ? " count-up-ready" : ""}`}
      aria-label={finalValue}
    >
      <span className="count-up-value" aria-hidden="true">
        {displayValue}
      </span>
    </span>
  );
}
