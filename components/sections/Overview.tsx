"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import Button from "@/components/Button";
import StatCounter from "@/components/StatCounter";
import { stats } from "@/data/misc";

export default function Overview() {
  return (
    <section id="overview" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="Market leaders in Raipur" icon={ShieldCheck} />

        <WordReveal
          as="h2"
          text="Defining trust and transparency through verified real estate"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-base leading-relaxed text-ivory/65 sm:text-lg">
              Every listing on 50 Bigha is site-visited, document-checked, and photographed
              before it goes live. From a 2BHK near the court to farmland outside Mana, we
              apply the same standard of verification — so buyers, tenants, and investors can
              act with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/properties" variant="primary" cursorLabel="Browse">
                Browse properties
              </Button>
              <Button href="/about" variant="outline" cursorLabel="Learn">
                How we verify
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] sm:aspect-[5/4]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
              alt="Verified property interior"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10" />
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:mt-28 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
