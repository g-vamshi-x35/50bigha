import { Project } from "@/types";

// Placeholder imagery from Unsplash — swap for real project photography before launch.
export const projects: Project[] = [
  {
    id: "shreeji-emerald-heights",
    number: "01",
    title: "Emerald Heights",
    builderId: "shreeji-constructions",
    status: "ongoing",
    location: "Telibandha",
    city: "Raipur",
    priceRange: "₹55 Lakh – ₹1.2 Cr",
    description:
      "A gated community of 2 and 3 BHK apartments overlooking Telibandha lake, with a resident clubhouse and landscaped courtyards.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    ],
    unitTypes: [
      { type: "2 BHK", area: "1,150 sqft", price: "₹55 Lakh" },
      { type: "3 BHK", area: "1,550 sqft", price: "₹82 Lakh" },
      { type: "3 BHK Premium", area: "1,900 sqft", price: "₹1.2 Cr" },
    ],
    amenities: ["Clubhouse", "Lake view", "Landscaped courtyard", "24/7 security", "Covered parking"],
  },
  {
    id: "vardhman-the-address",
    number: "02",
    title: "The Address",
    builderId: "vardhman-realty",
    status: "ongoing",
    location: "VIP Road",
    city: "Raipur",
    priceRange: "₹2.4 Cr – ₹4.1 Cr",
    description:
      "Independent villas on VIP Road with private gardens and dedicated staff quarters, targeted at Raipur's premium residential segment.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    ],
    unitTypes: [
      { type: "4 BHK Villa", area: "3,600 sqft", price: "₹2.4 Cr" },
      { type: "5 BHK Villa", area: "4,800 sqft", price: "₹4.1 Cr" },
    ],
    amenities: ["Private garden", "Staff quarters", "Clubhouse", "Gated community", "Power backup"],
  },
  {
    id: "sai-nirman-greenview",
    number: "03",
    title: "Greenview Residency",
    builderId: "sai-nirman-group",
    status: "completed",
    location: "Bhilai",
    city: "Bhilai",
    priceRange: "₹32 Lakh – ₹58 Lakh",
    description:
      "A completed, RERA-approved mid-income housing development near the Bhilai steel plant corridor, fully occupied since 2024.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1600&auto=format&fit=crop",
    ],
    unitTypes: [
      { type: "1 BHK", area: "550 sqft", price: "₹32 Lakh" },
      { type: "2 BHK", area: "850 sqft", price: "₹48 Lakh" },
      { type: "2 BHK Premium", area: "1,000 sqft", price: "₹58 Lakh" },
    ],
    amenities: ["RERA approved", "Children's play area", "Covered parking", "24/7 water"],
  },
  {
    id: "sai-nirman-riverfront",
    number: "04",
    title: "Riverfront Enclave",
    builderId: "sai-nirman-group",
    status: "upcoming",
    location: "Kharora",
    city: "Raipur",
    priceRange: "₹28 Lakh – ₹45 Lakh",
    description:
      "A pre-launch affordable housing project along the Kharora bypass, bookings opening ahead of construction start.",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1600&auto=format&fit=crop",
    ],
    unitTypes: [
      { type: "1 BHK", area: "500 sqft", price: "₹28 Lakh" },
      { type: "2 BHK", area: "780 sqft", price: "₹45 Lakh" },
    ],
    amenities: ["Pre-launch pricing", "RERA pending", "Road access", "Flexible payment plan"],
  },
  {
    id: "horizon-skyline-business-park",
    number: "05",
    title: "Skyline Business Park",
    builderId: "horizon-infra",
    status: "ongoing",
    location: "Naya Raipur",
    city: "Raipur",
    priceRange: "₹85 Lakh – ₹3.2 Cr",
    description:
      "A mixed-use commercial tower near the Naya Raipur corridor, offering retail showrooms and office floors.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    ],
    unitTypes: [
      { type: "Retail Showroom", area: "800 sqft", price: "₹85 Lakh" },
      { type: "Office Floor", area: "2,200 sqft", price: "₹1.9 Cr" },
      { type: "Full Floor", area: "5,000 sqft", price: "₹3.2 Cr" },
    ],
    amenities: ["Central AC", "Dedicated parking", "24/7 power backup", "High-speed elevators"],
  },
  {
    id: "shreeji-sunrise-farms",
    number: "06",
    title: "Sunrise Farm Plots",
    builderId: "shreeji-constructions",
    status: "upcoming",
    location: "Mana",
    city: "Raipur",
    priceRange: "₹18 Lakh – ₹40 Lakh",
    description:
      "Farmland plots near Mana airport, subdivided for cultivation or long-term land banking, with clear titles.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop",
    ],
    unitTypes: [
      { type: "1 Acre Plot", area: "1 acre", price: "₹18 Lakh" },
      { type: "2 Acre Plot", area: "2 acres", price: "₹34 Lakh" },
      { type: "2.5 Acre Plot", area: "2.5 acres", price: "₹40 Lakh" },
    ],
    amenities: ["Clear title", "Road access", "Borewell", "Fenced boundary"],
  },
];
