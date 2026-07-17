"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Testimonial } from "@/types";

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5">
        <ShieldCheck size={14} className="text-gold" />
        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-gold-light">
          Rated 4.8/5 by verified users
        </span>
      </div>

      <div className="relative min-h-[220px] sm:min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-2xl italic leading-relaxed text-ivory sm:text-3xl">
              &ldquo;{active.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image src={active.avatar} alt={active.name} fill sizes="44px" className="object-cover" />
              </span>
              <div className="text-left">
                <p className="font-body text-sm text-ivory">{active.name}</p>
                <p className="font-body text-xs text-ivory/50">{active.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          data-cursor="Prev"
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold" : "w-1.5 bg-ivory/20"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          data-cursor="Next"
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
