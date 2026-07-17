"use client";

import { Users } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import TeamCard from "@/components/TeamCard";
import { team } from "@/data/misc";

export default function TeamSection() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Our team" icon={Users} />
        <WordReveal
          as="h2"
          text="Work with people who know Raipur's property market"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
