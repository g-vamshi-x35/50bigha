"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);
  const spring = useSpring(count, { damping: 30, stiffness: 60 });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time env check on mount, must skip the animation before first paint
      setDisplay(100);
      setDone(true);
      return;
    }

    count.set(100);
    const unsub = spring.on("change", (v) => setDisplay(Math.round(v)));
    const timer = setTimeout(() => setDone(true), 1900);
    return () => {
      unsub();
      clearTimeout(timer);
    };
  }, [count, spring]);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="grain" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 h-16 w-16 overflow-hidden rounded-full ring-1 ring-gold/40"
          >
            <Image
              src="/brand/icon.png"
              alt="50 Bigha"
              fill
              sizes="64px"
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="font-display text-[15vw] leading-none text-ivory sm:text-[6rem]">
            {display}
            <span className="text-gold">%</span>
          </div>
          <p className="mt-4 font-body text-xs uppercase tracking-[0.3em] text-ivory/50">
            50 Bigha Real Estate
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
