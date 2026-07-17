"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "@/types";

export default function TeamCard({ member, index = 0 }: { member: TeamMember; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, 45vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      </div>
      <h4 className="mt-4 font-display text-xl text-ivory">{member.name}</h4>
      <p className="font-body text-xs uppercase tracking-[0.12em] text-gold">{member.role}</p>
    </motion.div>
  );
}
