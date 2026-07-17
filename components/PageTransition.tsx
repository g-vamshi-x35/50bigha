"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} initial="initial" animate="animate" exit="exit">
        <motion.div
          variants={{
            initial: { scaleY: 1 },
            animate: {
              scaleY: 0,
              transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 },
            },
            exit: { scaleY: 1, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
          }}
          style={{ originY: 0 }}
          className="pointer-events-none fixed inset-0 z-[150] bg-ink"
        />
        <motion.div
          variants={{
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
            exit: { opacity: 0, transition: { duration: 0.3 } },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
