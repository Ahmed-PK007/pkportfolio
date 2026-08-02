"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const springX = useSpring(x, {
    stiffness: 260,
    damping: 18,
    mass: 0.4,
  });

  const springY = useSpring(y, {
    stiffness: 260,
    damping: 18,
    mass: 0.4,
  });

  const springScale = useSpring(scale, {
    stiffness: 260,
    damping: 18,
  });

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 450);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const radius = 170;

      if (distance < radius) {
        const strength = (radius - distance) / radius;

        x.set(dx * 0.22 * strength);
        y.set(dy * 0.22 * strength);

        scale.set(1 + strength * 0.06);
      } else {
        x.set(0);
        y.set(0);
        scale.set(1);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("pointermove", onPointerMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          ref={ref}
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-cta"
          style={{
            x: springX,
            y: springY,
            scale: springScale,
          }}
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 24,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 24,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          aria-label="Start a conversation on WhatsApp"
        >
          <span className="floating-dot" />

          <span className="floating-text">
            Let's Talk
          </span>

          <ArrowUpRight
            size={18}
            className="floating-arrow"
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}