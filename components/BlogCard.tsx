"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/types";

export default function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/blog/${post.slug}`}
        data-cursor="Read"
        className="group block overflow-hidden rounded-[1.5rem] border border-ivory/10 bg-surface transition-colors duration-300 hover:border-gold/40"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-body text-[10px] uppercase tracking-[0.15em] text-gold backdrop-blur">
            {post.category}
          </span>
        </div>
        <div className="p-6">
          <div className="font-body text-xs text-ivory/45">
            {new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}
            {" · "}
            {post.readTime}
          </div>
          <h3 className="mt-2 font-display text-xl leading-snug text-ivory">{post.title}</h3>
          <p className="mt-3 font-body text-sm leading-relaxed text-ivory/55 line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
