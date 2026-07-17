"use client";

import { Building2 } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import Button from "@/components/Button";
import StickyPropertyStack from "@/components/StickyPropertyStack";
import { properties } from "@/data/properties";

export default function PropertiesSection() {
  return (
    <section id="properties" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Investment opportunities" icon={Building2} />
        <WordReveal
          as="h2"
          text="Verified listings across Raipur, ready to view"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ivory/60 sm:text-lg">
          A hand-picked selection of the properties currently live on 50 Bigha — scroll through
          to see how each listing is presented, verified, and priced.
        </p>
        <div className="mt-8">
          <Button href="/properties" variant="outline" cursorLabel="View all">
            View all properties
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <StickyPropertyStack properties={properties} />
      </div>
    </section>
  );
}
