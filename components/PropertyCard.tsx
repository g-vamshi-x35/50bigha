"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BedDouble, MapPin } from "lucide-react";
import { Property } from "@/types";
import { purposeLabels } from "@/data/properties";

export default function PropertyCard({ property, index = 0 }: { property: Property; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/properties/${property.id}`}
        data-cursor="View"
        className="group block overflow-hidden rounded-[1.5rem] border border-ivory/10 bg-surface transition-colors duration-300 hover:border-gold/40"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            sizes="(min-width: 1024px) 30vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-body text-[10px] uppercase tracking-[0.15em] text-gold backdrop-blur">
            {purposeLabels[property.purpose]}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-1.5 font-body text-xs text-ivory/45">
            <MapPin size={12} className="text-gold" />
            {property.location}
          </div>
          <h3 className="mt-2 font-display text-xl text-ivory">{property.title}</h3>
          <div className="mt-4 flex items-center justify-between border-t border-ivory/10 pt-4">
            <span className="font-display text-lg text-gold">{property.price}</span>
            {property.bedrooms ? (
              <span className="flex items-center gap-1.5 font-body text-xs text-ivory/50">
                <BedDouble size={13} /> {property.bedrooms} BHK
              </span>
            ) : (
              <span className="font-body text-xs text-ivory/50">{property.area}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
