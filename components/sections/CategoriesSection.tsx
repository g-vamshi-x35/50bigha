"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import Button from "@/components/Button";
import AccordionRow from "@/components/AccordionRow";
import TagChip from "@/components/TagChip";
import { categories } from "@/data/categories";

export default function CategoriesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="categories" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label="What you can list" icon={LayoutGrid} />
        <WordReveal
          as="h2"
          text="One platform, every category of property"
          className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-ivory/60 sm:text-lg">
          From residential homes to industrial land, 50 Bigha organizes every listing by
          category so buyers and tenants find exactly what they&apos;re looking for.
        </p>
        <div className="mt-8">
          <Button href="/properties" variant="outline" cursorLabel="Browse">
            Browse by category
          </Button>
        </div>

        <div className="mt-14">
          {categories.map((category, i) => (
            <AccordionRow
              key={category.number}
              number={category.number}
              title={category.title}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="font-body text-sm leading-relaxed text-ivory/65 sm:text-base">
                    {category.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.tags.map((tag) => (
                      <TagChip key={tag} label={tag} />
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-video overflow-hidden rounded-2xl lg:aspect-square"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </AccordionRow>
          ))}
        </div>
      </div>
    </section>
  );
}
