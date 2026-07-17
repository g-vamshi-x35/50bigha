"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import AccordionRow from "@/components/AccordionRow";
import { faqs } from "@/data/misc";

const topics = Array.from(new Set(faqs.map((f) => f.topic ?? "General")));

export default function FaqPage() {
  const [openKey, setOpenKey] = useState<string>("Verification-0");

  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-4xl px-6">
        <EyebrowBadge label="Help center" icon={HelpCircle} />
        <WordReveal
          as="h1"
          text="Answers what matter most to buyers, sellers, and owners"
          className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl"
        />

        {topics.map((topic) => {
          const topicFaqs = faqs.filter((f) => (f.topic ?? "General") === topic);
          return (
            <div key={topic} className="mt-16 first:mt-14">
              <h2 className="font-body text-xs uppercase tracking-[0.25em] text-gold">{topic}</h2>
              <div className="mt-4">
                {topicFaqs.map((faq, i) => {
                  const key = `${topic}-${i}`;
                  return (
                    <AccordionRow
                      key={faq.question}
                      title={faq.question}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? "" : key)}
                    >
                      <p className="font-body text-sm leading-relaxed text-ivory/60 sm:text-base">
                        {faq.answer}
                      </p>
                    </AccordionRow>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
