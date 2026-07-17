"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, IndianRupee, TrendingUp, Building2 } from "lucide-react";
import { Property } from "@/types";
import { purposeLabels } from "@/data/properties";

function StackCard({ property, index }: { property: Property; index: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.6]);

  const tags = [
    { icon: Calendar, label: new Date(property.listedDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" }) },
    { icon: IndianRupee, label: property.price },
    { icon: TrendingUp, label: property.yieldLabel ?? "Verified" },
    { icon: Building2, label: property.category },
  ];

  return (
    <div
      ref={wrapperRef}
      className="sticky top-20 flex min-h-[92vh] items-center py-4 sm:top-24"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full overflow-hidden rounded-[2rem] border border-ivory/10 bg-surface shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="relative order-2 aspect-[4/3] lg:order-1 lg:aspect-auto">
            <Image
              src={property.image}
              alt={property.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute left-5 top-5 rounded-full bg-ink/70 px-3 py-1 font-body text-[11px] uppercase tracking-[0.15em] text-gold backdrop-blur">
              {purposeLabels[property.purpose]}
            </div>
          </div>

          <div className="order-1 flex flex-col justify-center p-8 sm:p-12 lg:order-2">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 font-display text-lg text-gold">
                {property.number}
              </span>
              <span className="h-px flex-1 bg-ivory/10" />
            </div>

            <h3 className="mt-6 font-display text-3xl leading-tight text-ivory sm:text-4xl">
              {property.title}
            </h3>
            <p className="mt-3 font-body text-sm text-ivory/55">{property.location}</p>
            <p className="mt-4 font-body text-sm leading-relaxed text-ivory/65">
              {property.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-2">
                  <tag.icon size={14} className="shrink-0 text-gold" strokeWidth={1.75} />
                  <span className="font-body text-xs text-ivory/70">{tag.label}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/properties/${property.id}`}
              data-cursor="View"
              className="group mt-9 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-gold"
            >
              View property
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StickyPropertyStack({ properties }: { properties: Property[] }) {
  return (
    <div className="relative mt-8">
      {properties.map((property, i) => (
        <StackCard key={property.id} property={property} index={i} />
      ))}
    </div>
  );
}
