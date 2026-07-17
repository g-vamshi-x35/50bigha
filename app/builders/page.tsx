"use client";

import { Building } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import BuilderCard from "@/components/BuilderCard";
import { builders } from "@/data/builders";

export default function BuildersPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Verified builders" icon={Building} />
        <WordReveal
          as="h1"
          text="Builders delivering across India"
          className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-5 max-w-xl font-body text-base text-ivory/60">
          Every builder profile is checked against company registration and delivery history
          before it carries the verified badge.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {builders.map((builder, i) => (
            <BuilderCard key={builder.id} builder={builder} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
