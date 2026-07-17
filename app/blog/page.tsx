"use client";

import { Newspaper } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Insights" icon={Newspaper} />
        <WordReveal
          as="h1"
          text="Guides and market insights"
          className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-5 max-w-xl font-body text-base text-ivory/60">
          Verification standards, buying and selling guides, and market trends from the 50 Bigha
          team.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
