export type ListingPurpose = "buy" | "rent" | "sell";

export type PropertyCategory =
  | "House"
  | "Apartment"
  | "Villa"
  | "Plot"
  | "Farm Land"
  | "Commercial"
  | "Industrial"
  | "PG & Rooms";

export interface Property {
  id: string;
  number: string;
  title: string;
  category: PropertyCategory;
  purpose: ListingPurpose;
  price: string;
  priceValue: number;
  location: string;
  district: string;
  state: string;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  parking?: boolean;
  facing?: string;
  yieldLabel?: string;
  listedDate: string;
  description: string;
  amenities: string[];
  image: string;
  gallery: string[];
  ownerName: string;
  ownerPhone: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface StrategyCategory {
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  topic?: string;
}

export interface Builder {
  id: string;
  name: string;
  logo: string;
  coverImage: string;
  since: number;
  city: string;
  verified: boolean;
  description: string;
  projectsCount: number;
  phone: string;
  email: string;
}

export interface Engineer {
  id: string;
  name: string;
  photo: string;
  specialization: string;
  experienceYears: number;
  city: string;
  phone: string;
  bio: string;
}

export type ProjectStatus = "upcoming" | "ongoing" | "completed";

export interface UnitType {
  type: string;
  area: string;
  price: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  builderId: string;
  status: ProjectStatus;
  location: string;
  city: string;
  priceRange: string;
  description: string;
  image: string;
  gallery: string[];
  unitTypes: UnitType[];
  amenities: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  cover: string;
  body: string[];
}
