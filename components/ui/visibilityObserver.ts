"use client";

type VisibilityCallback = () => void;

const callbacks = new Map<Element, VisibilityCallback>();
let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const callback = callbacks.get(entry.target);
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
        callback?.();
      }

      if (callbacks.size === 0) {
        observer?.disconnect();
        observer = null;
      }
    },
    { threshold: 0.15 },
  );

  return observer;
}

export function observeOnce(
  element: Element,
  callback: VisibilityCallback,
): () => void {
  const sharedObserver = getObserver();

  if (!sharedObserver) {
    queueMicrotask(callback);
    return () => {};
  }

  callbacks.set(element, callback);
  sharedObserver.observe(element);

  return () => {
    callbacks.delete(element);
    sharedObserver?.unobserve(element);

    if (callbacks.size === 0) {
      sharedObserver.disconnect();
      observer = null;
    }
  };
}
