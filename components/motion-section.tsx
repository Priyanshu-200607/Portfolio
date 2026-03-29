"use client";

import { useEffect, useRef, useState } from "react";

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function MotionSection({
  id,
  className,
  children,
}: MotionSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0.15);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frame = 0;

    const update = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const raw =
        (viewportHeight - rect.top) / (viewportHeight + rect.height * 0.75);

      setProgress(clamp(raw, 0.15, 1));
      frame = 0;
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`motion-shell ${className ?? ""}`.trim()}
      style={
        {
          "--scroll-progress": progress,
        } as React.CSSProperties
      }
    >
      {children}
    </section>
  );
}
