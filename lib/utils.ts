import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const discoverLinks = [
  { label: "Collections", href: "/properties" },
  { label: "Land & Estates", href: "/buy" },
  { label: "New Developments", href: "/projects" },
  { label: "Builders", href: "/builders" },
  { label: "Property Services", href: "/engineers" },
  { label: "Journal", href: "/blog" },
];

// The main, always-visible pills in the navbar — a trimmed subset of discoverLinks.
export const primaryNavLinks = discoverLinks.slice(0, 4);

export const utilityLinks = [
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Sign in", href: "/login" },
];

export const allNavLinks = [...discoverLinks, ...utilityLinks];
