"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import EyebrowBadge from "@/components/EyebrowBadge";
import WordReveal from "@/components/WordReveal";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { ListingPurpose, PropertyCategory } from "@/types";

const RESIDENTIAL_FIRST: PropertyCategory[] = [
  "House",
  "Apartment",
  "Villa",
  "PG & Rooms",
  "Plot",
  "Farm Land",
  "Commercial",
  "Industrial",
];

const LAND_FIRST: PropertyCategory[] = [
  "Plot",
  "Farm Land",
  "Commercial",
  "Industrial",
  "House",
  "Apartment",
  "Villa",
  "PG & Rooms",
];

const purposeTabs: { label: string; value: ListingPurpose | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
];

interface PropertyListingProps {
  initialPurpose?: ListingPurpose | "all";
  lockPurpose?: boolean;
  categoryOrder?: PropertyCategory[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
}

export default function PropertyListing({
  initialPurpose = "all",
  lockPurpose = false,
  categoryOrder = RESIDENTIAL_FIRST,
  eyebrow = "All listings",
  heading = "Properties across India",
  intro = "Filter by purpose and category to find verified houses, apartments, plots, and land currently listed on 50 Bigha.",
}: PropertyListingProps) {
  const [purpose, setPurpose] = useState<ListingPurpose | "all">(initialPurpose);
  const [category, setCategory] = useState<PropertyCategory | "all">("all");
  const [view, setView] = useState<"grid" | "list">("grid");

  const categoryOptions: (PropertyCategory | "all")[] = ["all", ...categoryOrder];

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchPurpose = purpose === "all" || p.purpose === purpose;
      const matchCategory = category === "all" || p.category === category;
      return matchPurpose && matchCategory;
    });
  }, [purpose, category]);

  return (
    <div className="pb-28 pt-40 sm:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <EyebrowBadge label={eyebrow} />
        <WordReveal
          as="h1"
          text={heading}
          className="mt-6 font-display text-4xl leading-[1.05] text-ivory sm:text-6xl"
        />
        <p className="mt-5 max-w-xl font-body text-base text-ivory/60">{intro}</p>

        <div className="mt-10 flex flex-col gap-4 border-y border-ivory/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          {!lockPurpose && (
            <div className="flex flex-wrap gap-2">
              {purposeTabs.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPurpose(p.value)}
                  className={`rounded-full border px-4 py-2 font-body text-xs uppercase tracking-[0.12em] transition-colors ${
                    purpose === p.value
                      ? "border-gold bg-gold text-ink"
                      : "border-ivory/15 text-ivory/60 hover:border-gold/50 hover:text-ivory"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as PropertyCategory | "all")}
              className="rounded-full border border-ivory/15 bg-transparent px-4 py-2 font-body text-xs uppercase tracking-[0.12em] text-ivory/70 focus:outline-none [&>option]:bg-ink"
            >
              {categoryOptions.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All categories" : c}
                </option>
              ))}
            </select>
            <div className="flex items-center gap-1 rounded-full border border-ivory/15 p-1">
              <button
                onClick={() => setView("grid")}
                aria-label="Grid view"
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  view === "grid" ? "bg-gold text-ink" : "text-ivory/50"
                }`}
              >
                <LayoutGrid size={14} />
              </button>
              <button
                onClick={() => setView("list")}
                aria-label="List view"
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                  view === "list" ? "bg-gold text-ink" : "text-ivory/50"
                }`}
              >
                <List size={14} />
              </button>
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center font-body text-sm text-ivory/50">
            No properties match these filters yet.
          </p>
        ) : (
          <div
            className={`mt-10 grid gap-6 ${
              view === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-3xl"
            }`}
          >
            {filtered.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { RESIDENTIAL_FIRST, LAND_FIRST };
