"use client";

import { HardHat } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import EngineerCard from "@/components/EngineerCard";
import { engineers } from "@/data/engineers";

export default function EngineersPage() {
  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Build with confidence" icon={HardHat} />
        <WordReveal
          as="h1"
          text="Engineers and architects for your build"
          className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-5 max-w-xl font-body text-base text-ivory/60">
          Structural engineers, architects, and site supervisors — vetted professionals to help
          you plan, design, and build on your own land.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {engineers.map((engineer, i) => (
            <EngineerCard key={engineer.id} engineer={engineer} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
