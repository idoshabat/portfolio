"use client";

import { useRef, useState } from "react";

type CapabilityMarqueeProps = {
  items: string[];
};

export function CapabilityMarquee({ items }: CapabilityMarqueeProps) {
  const railRef = useRef<HTMLElement | null>(null);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    const rail = railRef.current;

    if (!rail) return;

    setIsDragging(true);
    dragStartX.current = event.clientX;
    scrollStartX.current = rail.scrollLeft;
    rail.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rail = railRef.current;

    if (!rail || !isDragging) return;

    event.preventDefault();
    const dragDistance = event.clientX - dragStartX.current;
    rail.scrollLeft = scrollStartX.current - dragDistance;
  }

  function stopDragging(event: React.PointerEvent<HTMLElement>) {
    const rail = railRef.current;

    setIsDragging(false);

    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <section
      ref={railRef}
      className={`capability-rail border-b border-[var(--line)] bg-[var(--ink)] py-5 text-white ${
        isDragging ? "is-dragging" : ""
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onPointerLeave={(event) => {
        if (isDragging) stopDragging(event);
      }}
    >
      <div className="marquee flex w-max min-w-max gap-6 whitespace-nowrap px-4 text-2xl font-black uppercase tracking-[0.08em]">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-6 select-none">
            {item}
            <span className="text-[var(--coral)]">+</span>
          </span>
        ))}
      </div>
    </section>
  );
}
