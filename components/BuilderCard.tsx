"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, MapPin } from "lucide-react";
import { Builder } from "@/types";

export default function BuilderCard({ builder, index = 0 }: { builder: Builder; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/builders/${builder.id}`}
        data-cursor="View"
        className="group block overflow-hidden rounded-[1.5rem] border border-ivory/10 bg-surface transition-colors duration-300 hover:border-gold/40"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={builder.coverImage}
            alt={builder.name}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <div className="absolute bottom-4 left-5 flex items-center gap-2">
            <span className="relative h-9 w-9 overflow-hidden rounded-full border border-ivory/20">
              <Image src={builder.logo} alt="" fill sizes="36px" className="object-cover" />
            </span>
            <span className="font-display text-lg text-ivory">{builder.name}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-1.5 font-body text-xs text-ivory/45">
            <MapPin size={12} className="text-gold" />
            {builder.city} · Since {builder.since}
          </div>
          <p className="mt-3 font-body text-sm leading-relaxed text-ivory/60 line-clamp-2">
            {builder.description}
          </p>
          <div className="mt-4 flex items-center justify-between border-t border-ivory/10 pt-4">
            <span className="font-body text-xs text-ivory/50">{builder.projectsCount} projects</span>
            {builder.verified && (
              <span className="flex items-center gap-1.5 font-body text-xs text-gold">
                <BadgeCheck size={14} /> Verified
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
