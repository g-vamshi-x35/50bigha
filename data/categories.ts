import { StrategyCategory } from "@/types";

export const categories: StrategyCategory[] = [
  {
    number: "01",
    title: "Residential",
    description:
      "Houses, apartments, villas, and PG & rooms — verified and ready for families, professionals, and tenants across India.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    tags: ["House", "Apartment", "Villa", "PG & Rooms"],
  },
  {
    number: "02",
    title: "Land",
    description:
      "Plots and farmland with clear titles and verified revenue records, suited for building, cultivation, or long-term holding.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    tags: ["Plot", "Farm Land"],
  },
  {
    number: "03",
    title: "Commercial & Industrial",
    description:
      "Commercial spaces and industrial land parcels positioned near key business, logistics, and manufacturing corridors.",
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1600&auto=format&fit=crop",
    tags: ["Commercial", "Industrial", "Warehousing"],
  },
];
