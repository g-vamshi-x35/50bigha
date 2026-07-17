"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function StatCounter({ value, label, prefix = "", suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);
  const spring = useSpring(count, { damping: 32, stiffness: 60 });

  useEffect(() => {
    if (isInView) count.set(value);
  }, [isInView, count, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
    });
    return unsub;
  }, [spring, prefix, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2 rounded-[2rem] border border-ivory/10 bg-surface/60 px-6 py-10 text-center sm:items-start sm:text-left"
    >
      <span ref={ref} className="font-display text-4xl text-gold sm:text-5xl">
        {prefix}0{suffix}
      </span>
      <span className="font-body text-xs uppercase tracking-[0.2em] text-ivory/60">{label}</span>
    </motion.div>
  );
}
