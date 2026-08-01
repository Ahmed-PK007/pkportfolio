"use client";

import { useInView } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

type MetricProps = {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
};

function MetricComponent({ value, prefix, suffix, label }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = performance.now();
    const duration = 1200;
    let animationFrame = 0;

    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setShown(value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) animationFrame = requestAnimationFrame(frame);
    };

    animationFrame = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, value]);

  const formatted =
    value % 1 !== 0
      ? shown.toLocaleString("en-US", { maximumFractionDigits: 2 })
      : Math.round(shown).toLocaleString("en-US");

  return (
    <div ref={ref} className="metric">
      <strong>
        {prefix}
        {formatted}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export const Metric = memo(MetricComponent);
