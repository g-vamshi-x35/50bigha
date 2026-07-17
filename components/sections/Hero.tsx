"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WordReveal from "@/components/WordReveal";
import Button from "@/components/Button";
import { partnerLogos } from "@/data/misc";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-40 sm:pb-20">
      {/* Placeholder hero photography — swap for real 50 Bigha property photography before launch */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?q=80&w=2400&auto=format&fit=crop"
          alt="Modern luxury home exterior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-10% via-ink/75 via-45% to-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,15,25,0.7)_100%)]" />
        <div className="grain" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <WordReveal
          as="h1"
          mode="onMount"
          startDelay={2.05}
          stagger={0.05}
          text="Find your dream property, anywhere in India"
          className="max-w-3xl font-display text-[9vw] font-medium leading-[1.05] tracking-tight text-ivory drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-6xl sm:leading-[1.05] lg:text-7xl"
        />

        <WordReveal
          as="p"
          mode="onMount"
          startDelay={2.6}
          stagger={0.03}
          text="Verified land, homes, and commercial spaces across India — buy, sell, rent, or invest, all on one trusted platform."
          className="mt-6 max-w-xl font-body text-base text-ivory/75 sm:text-lg"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 3.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/buy" variant="primary" cursorLabel="Explore">
            Explore properties
          </Button>
          <Button href="/sell" variant="outline" cursorLabel="Talk">
            List your property
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="mt-20 border-t border-ivory/10 pt-6"
        >
          <p className="font-body text-[11px] uppercase tracking-[0.25em] text-ivory/40">
            Trusted by 250+ verified owners &amp; investors
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-3 opacity-60 grayscale">
            {partnerLogos.map((name) => (
              <span key={name} className="font-display text-sm italic text-ivory/70 sm:text-base">
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
