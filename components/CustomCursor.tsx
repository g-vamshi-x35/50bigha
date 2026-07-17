"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [label, setLabel] = useState<string | null>(null);
  const [isDown, setIsDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time env check on mount to reveal the custom cursor on non-touch devices
    setIsTouch(touch);
    if (touch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      if (target) setLabel(target.getAttribute("data-cursor"));
    };
    const out = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      if (target) setLabel(null);
    };
    const down = () => setIsDown(true);
    const up = () => setIsDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-gold bg-gold/10 backdrop-blur-[1px] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: label ? 84 : isDown ? 10 : 14,
        height: label ? 84 : isDown ? 10 : 14,
        opacity: 1,
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      {label && (
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-ivory">
          {label}
        </span>
      )}
    </motion.div>
  );
}
