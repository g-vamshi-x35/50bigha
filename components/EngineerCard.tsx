"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Engineer } from "@/types";
import Button from "./Button";

export default function EngineerCard({ engineer, index = 0 }: { engineer: Engineer; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-[1.5rem] border border-ivory/10 bg-surface p-6"
    >
      <div className="flex items-center gap-4">
        <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
          <Image src={engineer.photo} alt={engineer.name} fill sizes="64px" className="object-cover" />
        </span>
        <div>
          <h3 className="font-display text-xl text-ivory">{engineer.name}</h3>
          <p className="font-body text-xs uppercase tracking-[0.12em] text-gold">
            {engineer.specialization}
          </p>
        </div>
      </div>
      <p className="mt-4 font-body text-sm leading-relaxed text-ivory/60">{engineer.bio}</p>
      <div className="mt-5 flex items-center justify-between border-t border-ivory/10 pt-4">
        <span className="font-body text-xs text-ivory/50">
          {engineer.experienceYears} yrs · {engineer.city}
        </span>
        <Button href="/contact" variant="ghost" cursorLabel="Contact" className="!p-0 text-gold">
          <Phone size={13} className="mr-1.5 inline" />
          Get in touch
        </Button>
      </div>
    </motion.div>
  );
}
