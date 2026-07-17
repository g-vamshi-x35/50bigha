"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WordReveal from "@/components/WordReveal";

const blocks = [
  {
    title: "The best locations for the best returns",
    body: "Every neighborhood we list in is assessed for infrastructure, connectivity, and long-term growth — from established stretches like Civil Lines to emerging pockets near Mana's industrial corridor.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Verified quality, honestly represented",
    body: "Owner identity, ownership documents, and physical condition are checked before any listing goes live — so what you see on 50 Bigha is what you find on the visit.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function LocationsCraft() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          {blocks.map((block) => (
            <div key={block.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-8 aspect-[4/3] overflow-hidden rounded-[2rem]"
              >
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
              <WordReveal
                as="h3"
                text={block.title}
                className="font-display text-3xl leading-tight text-ivory sm:text-4xl"
              />
              <p className="mt-4 font-body text-sm leading-relaxed text-ivory/60 sm:text-base">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
