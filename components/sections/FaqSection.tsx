"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import AccordionRow from "@/components/AccordionRow";
import Button from "@/components/Button";
import { faqs } from "@/data/misc";

const preview = faqs.slice(0, 5);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <EyebrowBadge label="Questions" icon={HelpCircle} />
        <WordReveal
          as="h2"
          text="Answers to what matters most to buyers and owners"
          className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl"
        />

        <div className="mt-14">
          {preview.map((faq, i) => (
            <AccordionRow
              key={faq.question}
              title={faq.question}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            >
              <p className="font-body text-sm leading-relaxed text-ivory/60 sm:text-base">
                {faq.answer}
              </p>
            </AccordionRow>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/faq" variant="outline" cursorLabel="View all">
            View all FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}
