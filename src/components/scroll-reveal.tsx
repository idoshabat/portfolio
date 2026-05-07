"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasRevealed = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    lastScrollY.current = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrollingDown = window.scrollY >= lastScrollY.current;
        lastScrollY.current = window.scrollY;

        if (entry.isIntersecting && (isScrollingDown || !hasRevealed.current)) {
          hasRevealed.current = true;
          setIsVisible(true);
        }
      },
      { threshold: 0.18, rootMargin: "-40px 0px -110px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
