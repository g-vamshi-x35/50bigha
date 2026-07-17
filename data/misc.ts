import { Stat, TeamMember, Testimonial, FaqItem } from "@/types";

export const stats: Stat[] = [
  { label: "Properties listed", value: 100, suffix: "+" },
  { label: "Verified owners", value: 60, suffix: "+" },
  { label: "Cities served", value: 1, prefix: "" },
  { label: "Trusted investors", value: 250, suffix: "+" },
];

export const team: TeamMember[] = [
  {
    name: "Aditya Rathore",
    role: "Founder, 50 Bigha",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Neha Deshmukh",
    role: "Head of Verification",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Rohit Kashyap",
    role: "Lead, Owner Relations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Simran Kaur",
    role: "Customer Success",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Manoj Agrawal",
    role: "Bought a villa in Civil Lines",
    quote:
      "Professional service from start to finish. Every document was verified before I even scheduled a visit — the process felt safer than any agent I'd used before.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Kavita Joshi",
    role: "Listed her apartment in Telibandha",
    quote:
      "I listed my flat for free and had three verified buyers within two weeks. 50 Bigha's team handled the paperwork so I didn't have to chase anyone.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Deepak Sinha",
    role: "Rented a PG near GTB Road",
    quote:
      "Every listing had real photos and an honest description. What I saw on the site is exactly what I got when I moved in.",
    avatar:
      "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?q=80&w=400&auto=format&fit=crop",
  },
];

export const faqs: FaqItem[] = [
  {
    topic: "Verification",
    question: "How do you verify a property before listing it?",
    answer:
      "Our team checks the owner's identity, ownership documents, and physical location before a listing goes live. Every property is site-visited and photographed by us or a verified partner.",
  },
  {
    topic: "Verification",
    question: "What happens if a listing turns out to be fraudulent?",
    answer:
      "Users can report a listing directly from the property page. Our admin team investigates and removes any unverified or fraudulent listing immediately.",
  },
  {
    topic: "Verification",
    question: "Are builders and projects verified too?",
    answer:
      "Yes. Builder profiles are checked against company registration and past project delivery before they're marked \"verified\" — you'll see the badge on their profile and listings.",
  },
  {
    topic: "Buying",
    question: "Which cities does 50 Bigha operate in?",
    answer:
      "We're launching in Raipur, Chhattisgarh, across residential, land, commercial, and industrial categories, with more Indian cities following as our verification network grows.",
  },
  {
    topic: "Buying",
    question: "Can I contact the owner directly before visiting?",
    answer:
      "Yes — every property page includes an enquiry form. Once submitted, our team shares your enquiry with the owner and can help arrange a site visit.",
  },
  {
    topic: "Buying",
    question: "Do you help with land documents like title deeds and encumbrance certificates?",
    answer:
      "We verify these documents before a land listing goes live, and can guide buyers on what to independently check before final payment — see our blog for a full checklist.",
  },
  {
    topic: "Selling",
    question: "Is listing my property free?",
    answer:
      "Yes. Standard listings are free for owners. Premium and featured placements are optional paid upgrades for faster visibility.",
  },
  {
    topic: "Selling",
    question: "How long does approval take after I submit a listing?",
    answer:
      "Most listings are reviewed and verified within 2-3 business days. You'll be notified as soon as it's live, or if we need additional documents.",
  },
  {
    topic: "Selling",
    question: "Can I edit or remove my listing after it's live?",
    answer:
      "Yes, from your seller dashboard you can update price, photos, or availability at any time, or mark a property as sold or rented to take it off the platform.",
  },
  {
    topic: "Accounts",
    question: "Can I buy, sell, and rent from the same account?",
    answer:
      "Yes — every account can act as a buyer, seller, or owner. You can list a property for rent or sale and browse other listings from the same dashboard.",
  },
  {
    topic: "Accounts",
    question: "How do I get listed as a builder or engineer on the platform?",
    answer:
      "Reach out through our Contact page with your company or professional details — our team verifies credentials before adding a public profile.",
  },
];

export const partnerLogos = [
  "Chhattisgarh Realty Council",
  "Raipur Builders Association",
  "CG Land Registry Partners",
  "NAR India",
  "Smart City Raipur",
];
