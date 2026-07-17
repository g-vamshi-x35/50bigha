"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface EyebrowBadgeProps {
  label: string;
  icon?: LucideIcon;
  light?: boolean;
}

export default function EyebrowBadge({ label, icon: Icon, light = false }: EyebrowBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${
        light
          ? "border-ink/15 bg-ink/5 text-ink"
          : "border-gold/30 bg-gold/5 text-gold-light"
      }`}
    >
      {Icon && <Icon size={13} className="text-gold" strokeWidth={1.75} />}
      <span className="font-body text-[11px] font-medium uppercase tracking-[0.25em]">
        {label}
      </span>
    </motion.div>
  );
}
