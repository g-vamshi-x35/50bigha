"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

interface AccordionRowProps {
  number?: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export default function AccordionRow({ number, title, isOpen, onToggle, children }: AccordionRowProps) {
  return (
    <div className="border-b border-ivory/10">
      <button
        onClick={onToggle}
        data-cursor={isOpen ? "Close" : "Open"}
        className="flex w-full items-center gap-6 py-7 text-left"
      >
        {number && (
          <span className="font-body text-sm text-ivory/40">{number}</span>
        )}
        <span className="flex-1 font-display text-2xl text-ivory sm:text-3xl">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold"
        >
          <Plus size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-0 sm:pl-14">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
